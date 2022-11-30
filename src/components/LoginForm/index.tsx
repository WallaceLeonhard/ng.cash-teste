import logoNg from '/src/assets/nglogo.png';
import {
  Container,
  FormContainer,
  Title,
  LogoContainer,
} from "./styles"

import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import Footer from "../Footer";
import FormButton from "../FormButton";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';

// export const request = async () => {
//   let response;
//   await useEffect(() => {
//     Api.post('/login', {
//       username: 'Mario',
//       password: 'as2aDssad'
//     }).then(res => response = res.data)
//   }, [])
//   return await response;
// }

// console.log(request().then(res => res));
const LoginForm = () => {
  const { login } = useContext(AuthContext)
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(user, password);
  }

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <img src={logoNg} alt="logo-ng" />
        </LogoContainer>

        <Title>Login</Title>
        <form onSubmit={handleSubmit}>

          <FormInput
            label="Usuário"
            name="username"
            placeholder="Digite seu nome de usuário"
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <FormInput
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}

          />

          <FormButton
            type="submit"
            text={"Entrar"}
          />

        </form>
        <Footer isLoginPage />
      </FormContainer>
    </Container >
  )
}

export default LoginForm
