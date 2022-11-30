import styled from "styled-components";

export const Container = styled.div`
  margin-top: 9.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
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
