// import logoImg from '../../assets/logo.svg';
import { useContext } from 'react';
import { Container, Content } from './styles';
import ngLogoDark from '/src/assets/ngdarklogo.png';
import { AuthContext } from '../../contexts/Auth';


export function Header() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }


  return (
    <Container>
      <Content>
        <img src={ngLogoDark} alt="dt money" />
        <button type="button">
          Nova Transação
        </button>
        <button onClick={handleLogout}>Logout</button>
      </Content>
    </Container>
  )

}
