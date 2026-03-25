import React, { type HTMLAttributes } from 'react';

import { Container } from './styles';
import { useInputContext } from '../InputContext';

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  const { $type, inputClassName } = useInputContext()
  
  return (
    <Container $type={$type} className={`${inputClassName} ${className}`}>
        {children}
    </Container>
  );
}

export default Description;