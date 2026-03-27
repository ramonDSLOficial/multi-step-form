import React, { type HTMLAttributes } from 'react';

import { Container, Name, Stage } from './styles';

interface StepSummaryProps extends HTMLAttributes<HTMLDivElement> {
    stage: number,
    name: string
}

const StepSummary: React.FC<StepSummaryProps> = ({ stage, name }) => {
  return (
    <Container>
        <Stage>{stage}</Stage>

        <div>
            <p>step {stage}</p>
            <Name>{name}</Name>
        </div>
    </Container>
  );
}

export default StepSummary;