import { Header } from "../../components/Header"
import NewTransactionsModal from "../../components/NewTransactionsModal"
import { Summary } from "../../components/Summary"
import { TransactionsTable } from "../../components/TransactionsTable"
import { Container } from "./styles"

const MainPage = () => {


  return (
    <>
      <Header />
      <Container>
        <Summary />
        <NewTransactionsModal />
        <TransactionsTable />
      </Container>
    </>

  )
}

export default MainPage
