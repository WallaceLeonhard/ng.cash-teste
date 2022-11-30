import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className='deposit'>+R$12000,00</td>
            <td>Freelance</td>
            <td>17/08/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$1200,00</td>
            <td>Casa</td>
            <td>12/08/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
