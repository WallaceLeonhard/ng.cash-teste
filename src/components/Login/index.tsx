import { useState } from "react";
import logoNg from '../../../public/assets/nglogo.png';
import {
  Container,
  FormContainer,
  Title,
  SpanText,
  LoginButton,
  LogoContainer,
  Footer
} from "./styles"

import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <img src={logoNg} alt="logo-ng" />
        </LogoContainer>
        <Title>Login</Title>

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

        <LoginButton
          onClick={
            () => navigate('/pagina-principal')}
        >
          Entrar
        </LoginButton>

        <a href="/cadastro">Cadastre-se</a>

        <Footer>
          <span>Todos os direitos reservados a <strong>NG.Cash</strong></span>
        </Footer>
      </FormContainer>
    </Container>
  )
}

export default LoginForm
