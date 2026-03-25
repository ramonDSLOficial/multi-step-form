import React, { type HTMLAttributes } from 'react';

import { Container } from './styles';


const Title: React.FC<HTMLAttributes<HTMLHeadElement>> = ({ children }) => {
  return (
    <Container>
        { children }
    </Container>
  );
}

export default Title;