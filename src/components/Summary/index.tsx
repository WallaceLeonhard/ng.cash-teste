import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext, useEffect, useState } from "react";
// import { getBalance } from "../../services/api";
import { AuthContext } from "../../contexts/Auth";
import { Api, getBalance } from "../../services/api";

import formatCurrency from "../../utils/formatCurrency";

interface IBalanceData {
  User?: string,
  Balance?: string
}


export function Summary() {

  const [userBalance, setUserBalance] = useState<IBalanceData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get('/find-balance'
    ).then(res => {
      setUserBalance(res.data)
      setLoading(false);
    })
  }, [])

  if (loading) {
    return <div className="loading">Carregando dados...</div>
  }


  // useEffect(() => {
  //   (async () => {
  //     const response = await getBalance();
  //     setUserBalance(response.data);
  //     setLoading(false);
  //     console.log(response.status)
  //   })
  // }, [])

  // console.log(userBalance)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>+R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="total-container">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(Number(userBalance.Balance))}</strong>
      </div>
    </Container>
  )
}
