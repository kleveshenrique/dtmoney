import LogoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface modal {
    onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}: modal) {    

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="Dt Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>            
            
        </Container>
    )

}