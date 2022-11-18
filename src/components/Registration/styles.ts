import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`;

export const FormContainer = styled.div`
  width: 35%;
  height: 90%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff;
  border-radius: 10px;

  input {
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const SpanText = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const RegisterButton = styled.button`
  background: #000000;
  width: 100%;
  padding: 12px 20px;
  border-radius: 3px;
  transition: all 0.3s;
  margin-top: 20px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #474643;
    margin-top: 50px;
  }
`;
