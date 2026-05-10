import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas.ts';

const FirstStep: React.FC = () => {
	const {
		control,
		register,
	} = useFormContext<FormProps>();
	const { errors } = useFormState<FormProps>()

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
					render={({ field }) => {
						return (
							<Input.Root $type="text" helperText={errors.name?.message}>
								<Input.Label label="name" />
								<Input.InputElement
									{...field}
									placeholder="e.g. Stephen King"
								/>
								<Input.Error />
							</Input.Root>
						);
					}}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field }) => {
						return (
							<Input.Root $type="text" helperText={errors.email?.message}>
								<Input.Label label="Email Address" />
								<Input.InputElement {...field} placeholder="e.g. stephenking@lorem.com" />
								<Input.Error />
							</Input.Root>
						);
					}}
				/>

				<Input.Root $type="text" helperText={errors.phone?.message}>
					<Input.Label label="Phone Number" />
					<Input.InputElement {...register('phone')} placeholder="e.g. +1 234 567 890" />
					<Input.Error />
				</Input.Root>
			</section>
		</Container>
	);
};

export default FirstStep;
