import LogoImg from "../../assets/logo.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { Container, Content } from "./styles"

export function Header() {    

    const {handleOpenNewTransactionModal} = useTransactions()
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="Dt Money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>
            </Content>           
            
        </Container>
    )

}