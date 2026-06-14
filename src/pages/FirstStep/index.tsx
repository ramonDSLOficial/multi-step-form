import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';

import { Controller, useFormContext, useFormState } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas.ts';
import { phoneMask } from '../../utils/masks/phone.ts';
import { useEffect, useRef } from 'react';

const FirstStep: React.FC = () => {
	const { control } = useFormContext<FormProps>();
	const { errors } = useFormState<FormProps>();

	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	return (
		<Container>
			<Title ref={titleRef} id="peronal-info-title" tabIndex={-1}>
				Personal info
			</Title>
			<Paragraph>
				Please provide your name, email address, and phone number.
			</Paragraph>

			<section aria-labelledby="peronal-info-title">
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input.Root
								$type="text"
								helperText={errors.name?.message}
							>
								<Input.Label label="Name" />
								<Input.InputElement
									{...field}
									className={
										fieldState.invalid ? 'invalid' : undefined
									}
									placeholder="e.g. Stephen King"
									autoComplete="name"
									aria-invalid={fieldState.invalid || undefined}
									aria-describedby={
										fieldState.invalid
											? `${field.name}-error`
											: undefined
									}
								/>
								<Input.Error
									role="alert"
									aria-live="assertive"
									aria-atomic="true"
									id={`${field.name}-error`}
								/>
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
								$type="email"
								helperText={errors.email?.message}
							>
								<Input.Label label="Email Address" />
								<Input.InputElement
									{...field}
									className={
										fieldState.invalid ? 'invalid' : undefined
									}
									placeholder="e.g. stephenking@lorem.com"
									inputMode="email"
									autoComplete="email"
									aria-invalid={fieldState.invalid || undefined}
									aria-describedby={
										fieldState.invalid
											? `${field.name}-error`
											: undefined
									}
								/>
								<Input.Error
									role="alert"
									aria-live="assertive"
									aria-atomic="true"
									id={`${field.name}-error`}
								/>
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
								$type="tel"
								helperText={errors.phone?.message}
							>
								<Input.Label label="Phone Number" />
								<Input.InputElement
									{...field}
									className={
										fieldState.invalid ? 'invalid' : undefined
									}
									value={phoneMask(field.value || '')}
									placeholder="e.g. (99) 99999-9999"
									inputMode="numeric"
									aria-invalid={fieldState.invalid || undefined}
									aria-describedby={
										fieldState.invalid
											? `${field.name}-error`
											: undefined
									}
								/>
								<Input.Error
									role="alert"
									aria-live="assertive"
									aria-atomic="true"
									id={`${field.name}-error`}
								/>
							</Input.Root>
						);
					}}
				/>
			</section>
		</Container>
	);
};

export default FirstStep;
