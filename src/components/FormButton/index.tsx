import React from "react";
import { Button } from './styles';

interface IButtonProps {
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  text: string
}

const FormButton: React.FC<IButtonProps> = ({ type, onClick, text }) => {
  return (
    <Button
      type={type}
      onClick={onClick}>
      {text}
    </Button>
  );
}


export default FormButton;
