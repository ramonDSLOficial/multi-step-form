import { ZodObject } from 'zod';
import React from 'react';

import { Container } from './styles';
import { useFormContext, type SubmitHandler } from 'react-hook-form';
import useChangeFormStep from '../../hook/useChangeFormStep';
import Button from '../Button';
import { stepSchemas, type FormProps } from '../../schemas/schemas';
import type { FormDirection } from '../../types/types';
import { PATHS } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';

const FormFooter: React.FC<React.HTMLAttributes<HTMLHtmlElement>> = () => {
	const { currentStep, changeStep, lastFormStepIndex } = useChangeFormStep();
	const { handleSubmit, trigger } = useFormContext<FormProps>();
	const navigate = useNavigate();

	const schemaByStep: Record<number, ZodObject> = Object.fromEntries(
		Object.values(stepSchemas).map((schema, i) => [i, schema])
	);

	const getButtonVariant = (e: React.MouseEvent): FormDirection => {
		const target = e.currentTarget as HTMLButtonElement;
		const formDirection = target.dataset?.variant ?? '';

		return formDirection;
	};

	const goPrev = (e: React.MouseEvent) => {
		const formDirection = getButtonVariant(e);
		changeStep(formDirection);
	};

	const goNext = async (e: React.MouseEvent) => {
		const formDirection = getButtonVariant(e);

		const fieldToValidade = schemaByStep[currentStep]
			? (Object.keys(schemaByStep[currentStep].shape) as (keyof FormProps)[])
			: [];

		const isValid = await trigger(fieldToValidade);

		if (!isValid) return;
		changeStep(formDirection);
	};

	const submitForm: SubmitHandler<FormProps> = (data) => {
		console.log('data', data);

		return navigate(PATHS.steps.success);
	};

	return (
		currentStep <= lastFormStepIndex && (
			<Container role='group' aria-label='Form buttons field'>
				{currentStep > 0 && currentStep <= lastFormStepIndex && (
					<Button
						label="Go Back"
						variant="prev"
						handleClick={goPrev}
						title="Back Step"
					/>
				)}
				{currentStep < lastFormStepIndex ? (
					<Button
						label="Next Step"
						variant="next"
						handleClick={goNext}
						title="Next Step"
					/>
				) : currentStep === lastFormStepIndex ? (
					<Button
						label="Confirm"
						type="submit"
						variant="send"
						handleClick={handleSubmit(submitForm)}
					/>
				) : null}
			</Container>
		)
	);
};

export default FormFooter;
