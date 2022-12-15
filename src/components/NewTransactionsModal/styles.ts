import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 40%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  font-weight: 500;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
`;

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  width: 100%;
  height: auto;

  h2, input, button {
    border-radius: 5px;
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    width: 80%;
    margin-bottom: 40px;
  }

  input{
    width: 80%;
    border: 1px solid #D7D7D7;
    background-color: #E7E9EE;
    padding: 1rem 2rem;
    margin-bottom: 20px;
  }

  input::placeholder {
    color: #969CB2;
  }

  button {
    width: 80%;
    padding: 1rem 2rem;
    color: #ffffff;
    background-color: #33CC95;
    font-size: 1rem;
    font-weight: 500;
  }

`
