import { Container } from "./styles";

interface ButtonProps {
  text: string,
  onClick?: () => void
}

export const Button = ({ text, onClick, ...rest }: ButtonProps) => {
  return (
    <Container onClick={onClick} {...rest}>
      {text}
    </Container>
  );
};