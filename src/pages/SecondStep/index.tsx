import { Container, FormContanier } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas';
import useModality from '../../hook/useModality';
import { bussinesPlan } from '../../store/store';
import { useId, useRef } from 'react';

const SecondStep: React.FC = () => {
	const { control } = useFormContext<FormProps>();
	const { modality, priceSufix } = useModality();

	const titleRef = useRef<HTMLHeadingElement>(null);
	const titleId = useId()
	const paragraphId = useId()

	return (
		<Container>
			<Title ref={titleRef} id={titleId} tabIndex={-1}>
				Select your plan
			</Title>
			<Paragraph id={paragraphId}>You have the option of monthly or yearly billing.</Paragraph>

			<FormContanier>
				<section aria-labelledby={titleId} aria-describedby={paragraphId} role="group">
					{Object.keys(bussinesPlan.plan).map((planType) => {
						const typedPlanType =
							planType as keyof typeof bussinesPlan.plan;

						const priceId = `plan-${typedPlanType}-price`;
						const discountId = `plan-${typedPlanType}-priceDiscount`;
						const isYearly = modality === 'yearly';
						const ariaDescribedbyId = isYearly
							? `${priceId} ${discountId}`
							: priceId;

						return (
							<Controller
								key={typedPlanType}
								name="plan"
								control={control}
								render={({ field }) => {
									const isSelected = field.value === typedPlanType;

									return (
										<Input.Root
											$type="radio"
											inputName={field.name}
											inputValue={typedPlanType}
											inputClassName="plan"
											$yearModality={isYearly}
											className={
												isSelected ? 'selected' : undefined
											}
										>
											<Input.Icon
												source={`/images/icon-${typedPlanType}.svg`}
												aria-hidden="true"
											/>

											<div>
												<Input.Label label={typedPlanType} />
												<Input.Description id={priceId}>
													$
													{
														bussinesPlan.plan[
															typedPlanType
														][modality]
													}
													/{priceSufix}
												</Input.Description>
												<Input.Description
													className={`advantage ${
														isYearly
															? 'hidden'
															: undefined
													}`}
													aria-hidden={
														!isYearly ? true : undefined
													}
													id={discountId}
												>
													2 months free
												</Input.Description>
												<Input.InputElement
													{...field}
													value={typedPlanType}
													checked={isSelected}
													onChange={() =>
														field.onChange(typedPlanType)
													}
													aria-describedby={
														ariaDescribedbyId
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

				<section aria-label="Billing Period">
					<Controller
						name="modality"
						control={control}
						render={({ field }) => {
							const isYearly = !!field.value;

							return (
								<Input.Root $type="checkbox" inputClassName="toggle">
									<Input.Label
										label="monthly"
										aria-hidden="true"
										className={
											!isYearly ? 'selected' : undefined
										}
									/>

									<Input.InputElement
										{...field}
										value={undefined}
										checked={isYearly}
										onChange={(e) =>
											field.onChange(e.target.checked)
										}
										role="switch"
										aria-checked={isYearly}
										aria-label="Billing yearly"
									/>

									<Input.Label
										label="yearly"
										aria-hidden="true"
										className={isYearly ? 'selected' : undefined}
									/>
								</Input.Root>
							);
						}}
					/>
				</section>
			</FormContanier>
		</Container>
	);
};

export default SecondStep;
