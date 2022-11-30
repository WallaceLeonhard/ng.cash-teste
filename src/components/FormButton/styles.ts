import styled from "styled-components";

export const Button = styled.button`
  background: #000000;
  width: 100%;
  padding: 12px 20px;
  border-radius: 3px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    padding: 18px 26px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    padding: 14px 22px;
  }
`;
