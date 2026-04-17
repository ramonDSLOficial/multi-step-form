import React from 'react';

import { Container } from './styles';
import StepSummary from './StepSummary';

const Slidebar: React.FC = () => {
  return (
    <Container>
        <StepSummary 
          stage={1}
          name='your info'
          id='current'
        />
        <StepSummary 
          stage={2}
          name='select plan'
        />
        <StepSummary 
          stage={3}
          name='add-ons'
        />
        <StepSummary 
          stage={4}
          name='summary'
        />
    </Container>
  );
}

export default Slidebar;