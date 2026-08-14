import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
      <p>Coded by <a href="https://github.com/RamonDSL">Ramon Henrique</a></p>.
    </Container>
  );
}

export default Footer;