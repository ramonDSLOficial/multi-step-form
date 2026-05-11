import React from 'react';

import { Container } from './styles';

export type ButtonVariants = 'prev' | 'send' | 'next';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: ButtonVariants,
  label: string,
  handleClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({ label, type='button', variant, handleClick}) => {
  return (
    <Container
      data-variant={variant}
      type={type}
      onClick={handleClick}
      >
      {label}
    </Container>
  );
}

export default Button;