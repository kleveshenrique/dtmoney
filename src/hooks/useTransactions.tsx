import React from "react"
import {createContext, ReactNode, useContext, useEffect, useState} from "react"
import { api } from "../services/api"

interface Transaction {
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction:(transaction:TransactionInput)=>Promise<void>;
    handleOpenNewTransactionModal:()=>void;
    handleCloseNewTransactionModal:()=>void;
    isNewTransactionModalOpen:boolean;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}:TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])    
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

    useEffect(() => {
        api.get("transactions")          
          .then((response) => {
            setTransactions(response.data.transactions)            
          })
      }, [])

     async function createTransaction(transactionInput:TransactionInput) {
        const response = await api.post('/transactions',{
            ...transactionInput,
            createdAt: new Date(), 
        })
        const {transaction} = response.data;
        setTransactions([
            ...transactions,
            transaction
        ])  
          
      }
    
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }  

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }  

    return (
          <TransactionsContext.Provider value={{transactions, createTransaction, handleOpenNewTransactionModal, handleCloseNewTransactionModal, isNewTransactionModalOpen}}>
              {children}
          </TransactionsContext.Provider>
      )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context
}