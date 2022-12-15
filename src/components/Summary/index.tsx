import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext, useEffect, useState } from "react";
import { getBalance } from "../../services/api";

import formatCurrency from "../../utils/formatCurrency";
import { AuthContext } from "../../contexts/Auth";




export function Summary() {
  const { fetchUserData, userData, loading } = useContext(AuthContext)


  if (loading) {
    return (<p>Carregando...</p>)
  }

  useEffect(fetchUserData, [])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$0,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$0,00</strong>
      </div>
      <div className="total-container">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(Number(userData?.Balance))}</strong>
      </div>
    </Container>
  )
}
