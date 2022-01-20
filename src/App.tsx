import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import React from "react"
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');

export function App() {
  
  

  return (
    <TransactionsProvider>
      <Header/>
      <Dashboard />
      <NewTransactionModal/>
      
      <GlobalStyle /> 

    </TransactionsProvider>
  );
}

