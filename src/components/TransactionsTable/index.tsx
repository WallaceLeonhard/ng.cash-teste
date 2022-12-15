import { Container, ContainerFilter } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <ContainerFilter>
        <h3>Filtrar por: </h3>
        <select name="" id="">
          <option value="">Todos</option>
          <option value="">Cash-In</option>
          <option value="">Cash-Out</option>
        </select>
      </ContainerFilter>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className='deposit'>+R$12000,00</td>
            <td>Cash-In</td>
            <td>17/08/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$1200,00</td>
            <td>Cash-Out</td>
            <td>12/08/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
