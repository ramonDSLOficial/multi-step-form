import { Container, FormContanier } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas';

const SecondStep: React.FC = () => {
	const { control } = useFormContext<FormProps>();

	return (
		<Container>
			<Title>Select your plan</Title>
			<Paragraph>You have the option of monthly or yearly billing.</Paragraph>

			<FormContanier>
				<section>
					{['arcade', 'advanced', 'pro'].map((planType) => {
						return (
							<Input.Root $type="radio" inputClassName="plan">
								<Input.Icon
									source={`/images/icon-${planType}.svg`}
									alt={`${planType} plan icon`}
								/>

								<div>
									<Input.Label label={planType} />
									<Input.Description>$9/mo</Input.Description>
									<Input.Description className="advantage">
										2 months free
									</Input.Description>
									<Input.InputElement />
								</div>
							</Input.Root>
						);
					})}
				</section>

				<section>
					{
						<Controller
							name="modality"
							control={control}
							render={({ field }) => {
								return (
									<Input.Root
										$type="checkbox"
										inputClassName="toggle"
									>
										<Input.Label
											label="monthly"
											className={
												!field.value ? 'selected' : ''
											}
										/>

										<Input.InputElement
											{...field}
											value={undefined}
											checked={field.value}
											onChange={(e) =>
												field.onChange(e.target.checked)
											}
										/>

										<Input.Label
											label="yearly"
											className={field.value ? 'selected' : ''}
										/>
									</Input.Root>
								);
							}}
						/>
					}
				</section>
			</FormContanier>
		</Container>
	);
};

export default SecondStep;
