import React from 'react';

import { Container } from './styles';
import StepSummary from './StepSummary';
import useChangeFormStep from '../../hook/useChangeFormStep';

const Slidebar: React.FC = () => {
  const { currentStep } = useChangeFormStep()

  return (
    <Container role='list'>
        <StepSummary 
          stage={1}
          name='your info'
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
          id={currentStep > 3 ? 'current' : undefined}
        />
    </Container>
  );
}

export default Slidebar;