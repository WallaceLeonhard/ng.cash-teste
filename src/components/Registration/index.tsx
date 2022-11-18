import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoNg from '../../../public/assets/nglogo.png';
import {
  Container,
  FormContainer,
  Title,
  SpanText,
  RegisterButton,
  LogoContainer,
  Footer
} from "./styles"

const Registration = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <img src={logoNg} alt="logo-ng" />
        </LogoContainer>
        <Title>Cadastro</Title>

        <SpanText>Username</SpanText>
        <input
          type="text"
          value={user}
          onChange={() => setUser}
        />

        <SpanText>Password</SpanText>
        <input
          type={"password"}
          value={password}
          onChange={() => setPassword}
        />

        <RegisterButton
          type='submit'
          onClick={() => navigate('/login')}
        >
          Cadastrar
        </RegisterButton>

        <Footer>
          <span>Todos os direitos reservados a <strong>NG.Cash</strong></span>
        </Footer>
      </FormContainer>
    </Container>
  )
}

export default Registration;
