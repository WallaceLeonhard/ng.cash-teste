// import logoImg from '../../assets/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { Container, Content } from './styles';
import ngLogoDark from '/src/assets/ngdarklogo.png';
import { AuthContext } from '../../contexts/Auth';
import { getBalance } from '../../services/api';
import { IBalanceData } from '../../interfaces';




export function Header() {
  const { logout, userData, fetchUserData } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  useEffect(fetchUserData, [])


  return (
    <Container>
      {userData ? <Content>
        <img src={ngLogoDark} alt="dt money" />
        <div className="logout-container">
          <span>Bem-vindo, <strong>{userData?.User}!</strong></span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </Content> : null}
    </Container>
  )

}
