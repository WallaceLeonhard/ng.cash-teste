import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: #ffff;
    padding: 1.25rem 1.75rem;
    border-radius: 0.25rem;
    color: #000000;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 2rem;
    }

    &.total-container {
      background: green;
      color: #fff;
    }
  }
`;

