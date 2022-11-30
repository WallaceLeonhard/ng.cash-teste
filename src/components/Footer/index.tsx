import React from "react"
import { FooterContainer } from "./styles"

interface IFooterProps {
  isLoginPage: boolean
}

const Footer: React.FC<IFooterProps> = ({ isLoginPage }) => {
  return (
    <>
      <FooterContainer>
        {isLoginPage ? (
          <a href="/cadastro">Cadastre-se</a>
        ) : null}

        <span>Todos os direitos reservados a <strong>NG.Cash</strong></span>
      </FooterContainer>
    </>

  )
}

export default Footer;
