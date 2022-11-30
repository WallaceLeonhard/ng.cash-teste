import styled from "styled-components";

export const LabelText = styled.label`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1367px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid black;
  margin-bottom: 15px;
  font-size: 16px;
  padding-bottom: 5px;

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 20px;

    &::placeholder {
      font-size: 18px;
    }

    p {
      font-size: 18px;
      margin: 10px 0 20px 0;
    }
  }

  @media screen and (min-width: 1367px) and (max-width: 1440px) {
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
`;
