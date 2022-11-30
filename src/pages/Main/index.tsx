import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsTable } from "../../components/TransactionsTable"
import { Container } from "./styles"

const MainPage = () => {


  return (
    <>
      <Header />
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>
    </>

  )
}

export default MainPage
