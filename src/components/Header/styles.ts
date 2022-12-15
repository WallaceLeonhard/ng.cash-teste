import styled from "styled-components";

export const Container = styled.header`
  background: #000000;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 200px;
    height: 100px;
  }
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logout-container {
    display: flex;
    align-items: center;
    margin-right: 50px;
  }
    span {
      color: #ffffff;
      margin-right: 25px;
    }

    button {
    font-size: 0.9rem;
    color: #000;
    background: #ffffff;
    font-weight: 600;
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


