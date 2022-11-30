import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;

  a {
    width: 120px;
    font-weight: 500;
    text-decoration: none;
    color: #000000;
    margin: 50px auto 0px auto;
    text-transform: uppercase;
    transition: all 0.5s;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #474643;
    margin: 25px auto 0px auto;
  }

  @media screen and (min-width: 1601px) and (max-width: 1920px) {
    margin-bottom: 0;

    span {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    margin-bottom: 0;

    span {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    span {
      font-size: 14px;
    }
  }
`;
