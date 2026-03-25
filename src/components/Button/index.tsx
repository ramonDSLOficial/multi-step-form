import React, { type BaseSyntheticEvent } from 'react';

import { Container } from './styles';

type ButtonVariants = 'prev' | 'send' | 'next';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: ButtonVariants,
  label: string,
  changeStep?: (e: BaseSyntheticEvent) => void
}

const Button: React.FC<ButtonProps> = ({ label, type='button', variant, changeStep}) => {
  return (
    <Container
      data-variant={variant}
      type={type}
      onClick={changeStep}
      >
      {label}
    </Container>
  );
}

export default Button;