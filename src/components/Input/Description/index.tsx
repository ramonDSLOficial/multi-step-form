import React, { type HTMLAttributes } from 'react';

import { Container } from './styles';
import { useInputContext } from '../InputContext';

const Description: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, id }) => {
  const { $type, inputClassName } = useInputContext()
  
  return (
    <Container $type={$type} className={`${inputClassName} ${className}`} id={id}>
        {children}
    </Container>
  );
}

export default Description;