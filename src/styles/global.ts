import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   html, body, #root {
     height: 100vh;
   }
   *,button, input {
      border: 0;
      outline: 0;
      font-family: 'Montserrat', sans-serif;
   }
   button {
     cursor: pointer;
   }

   .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
   }

   .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #f5f5f5;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
   }
`;
