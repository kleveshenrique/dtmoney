import { Container } from "./styles";
import InIcon from '../../assets/income.svg'
import OutIcon from '../../assets/outcome.svg'
import totalIcom from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const {transactions} = useTransactions()
    
   const summary = transactions.reduce((acc,transaction) => {
        if (transaction.type==='deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },
    {
        deposits:0,
        withdraws:0,
        total:0,
    })
    

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={InIcon} alt="Entradas" />
                </header>
                <strong>                     
                    { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}                                
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutIcon} alt="Saídas" />
                </header>
                <strong>
                { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}
                </strong>
            </div>
            <div className={summary.total>=0 ? "highlight-background" : "red-background"}>
                <header>
                    <p>Total</p>
                    <img src={totalIcom} alt="Saldo" />
                </header>
                <strong>
                { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}