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
					<Input.Root $type="radio" inputClassName="plan">
						<Input.Icon
							source="/images/icon-arcade.svg"
							alt="arcade plan icon"
						/>

						<div>
							<Input.Label label="arcade" />
							<Input.Description>$9/mo</Input.Description>
							<Input.Description className="advantage">
								2 months free
							</Input.Description>
							<Input.InputElement name="plan" />
						</div>
					</Input.Root>

					<Input.Root $type="radio" inputClassName="plan">
						<Input.Icon
							source="/images/icon-advanced.svg"
							alt="advanced plan icon "
						/>

						<div>
							<Input.Label label="advanced" />
							<Input.Description>$12/mo</Input.Description>
							<Input.Description className="advantage">
								2 months free
							</Input.Description>
							<Input.InputElement name="plan" />
						</div>
					</Input.Root>

					<Input.Root $type="radio" inputClassName="plan">
						<Input.Icon
							source="/images/icon-pro.svg"
							alt="pro plan icon"
						/>

						<div>
							<Input.Label label="pro" />
							<Input.Description>$15/mo</Input.Description>
							<Input.Description className="advantage">
								2 months free
							</Input.Description>
							<Input.InputElement name="plan" />
						</div>
					</Input.Root>
				</section>

				<section>
					{<Controller
						name="modality"
						control={control}
						render={({ field }) => {
							return (
								<Input.Root $type="checkbox" inputClassName="toggle">
									<Input.Label
										label="monthly"
										className={!field.value ? 'selected' : ''}
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
					/>}
				</section>
			</FormContanier>
		</Container>
	);
};

export default SecondStep;
