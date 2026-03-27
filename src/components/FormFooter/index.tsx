import React, { type HTMLAttributes } from 'react';

import { Container } from './styles';
import useChangeFormStep from '../../hook/useChangeFormStep';
import Button from '../Button';

const FormFooter: React.FC<HTMLAttributes<HTMLHtmlElement>> = () => {
    const {currentStep, changeStep, lastFormStepIndex} = useChangeFormStep()

    return (
        <Container>
            {
                (currentStep > 0 && currentStep <= lastFormStepIndex) &&
                    <Button 
                        label='go back'
                        variant='prev'
                        changeStep={changeStep}
                    /> 
            }
            {
                currentStep < lastFormStepIndex ?
                    <Button 
                        label='next step'
                        variant='next'
                        changeStep={changeStep}
                    /> : 
                currentStep === lastFormStepIndex ?
                    <Button 
                        // mudar esse button submit depois
                        label='confirm'
                        variant='next'
                        changeStep={changeStep}
                        // type='submit'
                    /> :
                    null
            }
        </Container>
    );
}

export default FormFooter;