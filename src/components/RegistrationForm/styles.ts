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
  background: #ffffff;
  border-radius: 10px;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      color: red;
      font-size: 14px;
      margin: 10px 0;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    width: 40%;
    form {
      input {
        font-size: 24px;
      }

      input::placeholder {
        font-size: 20px;
      }
      p {
        font-size: 22px;
        margin: 15px 0 25px 0;
      }
    }
  }

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 37%;

    form {
      input {
        font-size: 20px;
      }

      input::placeholder {
        font-size: 18px;
      }
      p {
        font-size: 18px;
        margin: 15px 0 25px 0;
      }
    }
  }

  @media screen and (min-width: 1367px) and (max-width: 1440px) {
    width: 37%;

    form {
      input {
        font-size: 16px;
      }

      input::placeholder {
        font-size: 14px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    width: 30%;
    padding: 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  img {
    width: 80%;
    height: 80%;
  }

  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    margin-top: -40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 20px;

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    font-size: 1.4rem;
  }
`;
