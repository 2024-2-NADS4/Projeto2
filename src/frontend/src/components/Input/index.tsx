import React from "react";
import { Label, InputContainer, TheInput } from "./styles";

interface SpecificInputProps {
  id: string;
  labelText: string;
  spaceBetweenTxtInput?: string;
  bgColor?: string;
}
type InputProps = SpecificInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  spaceBetweenTxtInput,
  bgColor,
  labelText,
  id,
  ...rest
}) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <TheInput id={id} {...rest} />
    </InputContainer>
  );
};