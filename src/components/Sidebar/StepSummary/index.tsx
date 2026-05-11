import React, { type HTMLAttributes } from 'react';

import { Container, Name, Stage } from './styles';
import useChangeFormStep from '../../../hook/useChangeFormStep';

interface StepSummaryProps extends HTMLAttributes<HTMLDivElement> {
    stage: number,
    name: string
}

const StepSummary: React.FC<StepSummaryProps> = ({ stage, name, id }) => {  
  const { currentStep } = useChangeFormStep()

  return (
    <Container id={id ?? stage-1 === currentStep ? 'current' : ''}>
        <Stage>{stage}</Stage>

        <div>
            <p>step {stage}</p>
            <Name>{name}</Name>
        </div>
    </Container>
  );
}

export default StepSummary;