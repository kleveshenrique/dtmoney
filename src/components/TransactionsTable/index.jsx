import { Container } from "./styles";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>18/12/2021</td>
                        <td>Sistema</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Desenvolvimento</td>
                    </tr>
                    <tr>
                        <td>19/12/2021</td>
                        <td>mercearia</td>
                        <td className="withdraw">- R$ 500,00</td>
                        <td>Despezas de casa</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}