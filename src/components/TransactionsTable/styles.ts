import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  table {
    width: 90%;
    border-spacing: 0 0.3rem;
    th {
      color: black;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #000000;
      color: #ffffff;

      &:first-child {
        color: #ffffff;
      }

      &.deposit {
        color: green;
      }
      &.withdraw {
        color: red;
      }
    }
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
  }

  select {
    width: 40%;
    padding: 0.5rem 1.25rem;
    background-color: #f5f5f5f5;
    border: 1px solid #000;
    color: #000;
    font-size: 1rem;
  }
`;

