import React from "react";
import { LabelText, Input } from './styles';

interface IProps {
  label: string,
  name: string,
  type: string,
  placeholder: string
  value?: string,
  required?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput: React.FC<IProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  required,
  onChange
}) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </>
  )
}

export default FormInput
