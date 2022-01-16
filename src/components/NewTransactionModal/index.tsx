import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./style"
import imgClose from "../../assets/close.svg"
import inCome from "../../assets/income.svg"
import outCome from "../../assets/outcome.svg"
import { api } from "../../services/api"

interface newTransactionModalProps {
    isOpen: boolean
    onRequestClose:()=>void
}

export function NewTransactionModal({isOpen,onRequestClose}:newTransactionModalProps){
  
    const [type, setType]  = useState('deposit')
    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category,setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault()
      const data = {
        title,
        value,
        category,
        type
      } 
      api.post('/transactions',data)
      
    }
  
    return (

      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button type="button" className="react-modal-close" onClick={onRequestClose}>
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
            value={value}
            onChange={event=>setValue(Number(event.target.value))}
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