import { Container } from "./styles";
import InIcon from '../../assets/income.svg'
import OutIcon from '../../assets/outcome.svg'
import totalIcom from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={InIcon} alt="Entradas" />
                </header>
                <strong>R$ 1500,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutIcon} alt="Saídas" />
                </header>
                <strong>R$ - 300,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcom} alt="Saldo" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
        </Container>
    )
}