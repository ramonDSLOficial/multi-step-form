import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';

import { Controller, useFormContext, useFormState } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas.ts';
import { phoneMask } from '../../utils/masks/phone.ts';
import { useEffect } from 'react';

const FirstStep: React.FC = () => {
	const { control, setFocus } = useFormContext<FormProps>();
	const { errors } = useFormState<FormProps>();

	useEffect(() => {
		setFocus('name')
	}, [])

	return (
		<Container>
			<Title>Personal info</Title>
			<Paragraph>
				Please provide your name, email address, and phone number.
			</Paragraph>

			<section>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input.Root
								$type="text"
								helperText={errors.name?.message}
							>
								<Input.Label label="name" />
								<Input.InputElement
									{...field}
									className={fieldState.invalid ? 'invalid' : undefined}
									placeholder="e.g. Stephen King"
									aria-invalid={fieldState.invalid}
									aria-describedby={`${field.name}-error`}
								/>
								<Input.Error id={`${field.name}-error`}/>
							</Input.Root>
						);
					}}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input.Root
								$type="text"
								helperText={errors.email?.message}
							>
								<Input.Label label="Email Address" />
								<Input.InputElement
									{...field}
									className={fieldState.invalid ? 'invalid' : undefined}
									placeholder="e.g. stephenking@lorem.com"
									aria-invalid={fieldState.invalid}
									aria-describedby={`${field.name}-error`}
								/>
								<Input.Error id={`${field.name}-error`}/>
							</Input.Root>
						);
					}}
				/>

				<Controller
					name="phone"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input.Root
								$type="text"
								helperText={errors.phone?.message}
							>
								<Input.Label label="Phone Number" />
								<Input.InputElement
									{...field}
									className={fieldState.invalid ? 'invalid' : undefined}
									value={phoneMask(field.value || "")}
									placeholder="e.g. (99) 99999-9999"
									aria-invalid={fieldState.invalid}
									aria-describedby={`${field.name}-error`}
								/>
								<Input.Error id={`${field.name}-error`}/>
							</Input.Root>
						);
					}}
				/>
			</section>
		</Container>
	);
};

export default FirstStep;
