import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./style"
import imgClose from "../../assets/close.svg"
import inCome from "../../assets/income.svg"
import outCome from "../../assets/outcome.svg"
import { useTransactions } from "../../hooks/useTransactions"



export function NewTransactionModal(){
  
    const [type, setType]  = useState('deposit')
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')

    const {createTransaction,isNewTransactionModalOpen,handleCloseNewTransactionModal} = useTransactions()

    async function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault()
      const data = {
        title,
        amount,
        category,
        type        
      } 
      
     await createTransaction(data)
      setTitle('')
      setAmount(0)
      setCategory('')
      setType('deposit')
      handleCloseNewTransactionModal()
      
    }
    
    return (

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button type="button" className="react-modal-close" onClick={handleCloseNewTransactionModal}>
          <img src={imgClose} alt="Fechar"/>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>         

          <input 
            placeholder="Titulo" 
            value={title}
            onChange={event=> setTitle(event.target.value)}
          />

          <input   
          type="number"           
            placeholder="Valor"
            value={amount}
            onChange={event=>setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={()=>{setType('deposit')}}
              isActive = {type==='deposit'}
              activeColor="green"
            >
              <img src={inCome} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={()=>{setType('withdraw')}}
              isActive = {type==='withdraw'}
              activeColor="red"
            >
              <img src={outCome} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={event=>setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
        
      </Modal>
    )
}