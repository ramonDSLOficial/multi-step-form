import { Container, FormContanier } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas';
import useModality from '../../hook/useModality';
import { bussinesPlan } from '../../store/store';

const SecondStep: React.FC = () => {
	const { control } = useFormContext<FormProps>();
	const { modality, priceSufix } = useModality();

	return (
		<Container>
			<Title>Select your plan</Title>
			<Paragraph>You have the option of monthly or yearly billing.</Paragraph>

			<FormContanier>
				<section>
					{Object.keys(bussinesPlan.plan).map((planType) => {
						const typedPlanType =
							planType as keyof typeof bussinesPlan.plan;

						return (
							<Controller
								key={typedPlanType}
								name="plan"
								control={control}
								render={({ field }) => {
									return (
										<Input.Root
											$type="radio"
											inputClassName="plan"
											$yearModality={!!modality}
											className={
												field.value === typedPlanType
													? 'selected'
													: ''
											}
										>
											<Input.Icon
												source={`/images/icon-${typedPlanType}.svg`}
												alt={`${typedPlanType} plan icon`}
											/>

											<div>
												<Input.Label label={typedPlanType} />
												<Input.Description>
													$
													{
														bussinesPlan.plan[
															typedPlanType
														][modality]
													}
													/{priceSufix}
												</Input.Description>
												<Input.Description className="advantage">
													2 months free
												</Input.Description>
												<Input.InputElement
													{...field}
													value={typedPlanType}
													checked={
														field.value === typedPlanType
													}
													onChange={() =>
														field.onChange(typedPlanType)
													}
												/>
											</div>
										</Input.Root>
									);
								}}
							/>
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
