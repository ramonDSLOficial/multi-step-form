import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';
import useModality from '../../hook/useModality';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas';
import { bussinesPlan } from '../../store/store';

const ThirdStep: React.FC = () => {
	const { control } = useFormContext<FormProps>();
	const { modality, priceSufix } = useModality();

	return (
		<Container>
			<Title>Pick add-ons</Title>
			<Paragraph>Add-ons help enhance your gaming experience.</Paragraph>

			<section>
				<Controller
					name="onlineService"
					control={control}
					render={({ field }) => {
						return (
							<Input.Root
								$type="checkbox"
								inputClassName="aditions"
								className={field.value ? 'selected' : undefined}
							>
								<Input.InputElement
									{...field}
									value={undefined}
									checked={field.value}
									onChange={(e) =>
										field.onChange(e.target.checked)
									}
									aria-describedby={`${field.name}-price`}
								/>

								<div>
									<Input.Label label="Online service" />
									<Input.Description className="additionDesc">
										Access to multiplayer games
									</Input.Description>
								</div>

								<Input.Description className="price" id={`${field.name}-price`}>
									+${bussinesPlan.onlineService[modality]}/
									{priceSufix}
								</Input.Description>
							</Input.Root>
						);
					}}
				/>

				<Controller
					name="extraStorage"
					control={control}
					render={({ field }) => {
						return (
							<Input.Root
								$type="checkbox"
								inputClassName="aditions"
								className={field.value ? 'selected' : undefined}
							>
								<Input.InputElement
									{...field}
									value={undefined}
									checked={field.value}
									onChange={(e) =>
										field.onChange(e.target.checked)
									}
									aria-describedby={`${field.name}-price`}
								/>

								<div>
									<Input.Label label="Larger storage" />
									<Input.Description className="additionDesc">
										Extra 1TB of cloud save
									</Input.Description>
								</div>

								<Input.Description className="price" id={`${field.name}-price`}>
									+${bussinesPlan.extraStorage[modality]}/
									{priceSufix}
								</Input.Description>
							</Input.Root>
						);
					}}
				/>

				<Controller
					name="customProfile"
					control={control}
					render={({ field }) => {
						return (
							<Input.Root
								$type="checkbox"
								inputClassName="aditions"
								className={field.value ? 'selected' : undefined}
							>
								<Input.InputElement
									{...field}
									value={undefined}
									checked={field.value}
									onChange={(e) =>
										field.onChange(e.target.checked)
									}
									aria-describedby={`${field.name}-price`}
								/>

								<div>
									<Input.Label label="Customizable Profile" />
									<Input.Description className="additionDesc">
										Custom theme on your profile
									</Input.Description>
								</div>

								<Input.Description className="price" id={`${field.name}-price`}>
									+${bussinesPlan.customProfile[modality]}/
									{priceSufix}
								</Input.Description>
							</Input.Root>
						);
					}}
				/>
			</section>
		</Container>
	);
};

export default ThirdStep;
