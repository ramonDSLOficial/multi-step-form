import {
	ChangePlanbtn,
	Clause,
	Container,
	PlanDetails,
	Price,
	Term,
} from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { PATHS } from '../../routes/paths';
import useModality from '../../hook/useModality';
import { useFormContext } from 'react-hook-form';
import type { FormProps } from '../../schemas/schemas';
import { bussinesPlan } from '../../store/store';
import { useId, useRef } from 'react';

const FourthStep: React.FC = () => {
	const { watch } = useFormContext<FormProps>();
	const fields = watch(['plan', 'onlineService', 'extraStorage', 'customProfile']);
	const { modality, priceSufix } = useModality();

	const contractValues: number[] = [
		bussinesPlan.plan[fields[0]][modality],
		fields[1] ? bussinesPlan.onlineService[modality] : 0,
		fields[2] ? bussinesPlan.extraStorage[modality] : 0,
		fields[3] ? bussinesPlan.customProfile[modality] : 0,
	];
	const contractTotalValue = contractValues.reduce((prev, acc) => acc + prev)

	const titleRef = useRef<HTMLHeadingElement>(null);
	const titleId = useId()
	const paragraphId = useId()

	return (
		<Container>
			<Title id={titleId} ref={titleRef}>Finishing up</Title>
			<Paragraph id={paragraphId}>
				Double-check everything looks OK before confirming.
			</Paragraph>

			<PlanDetails aria-labelledby={titleId} aria-describedby={paragraphId} role="group">
				<section>
					<Clause className="plan">
						<div>
							<Term>
								{fields[0]} &#40;{modality}&#41;
							</Term>
							<ChangePlanbtn aria-label={`Change plan`} to={PATHS.steps.second}>
								Change
							</ChangePlanbtn>
						</div>

						<Price>
							${bussinesPlan.plan[fields[0]][modality]}/{priceSufix}
						</Price>
					</Clause>

					{fields[1] && (
						<Clause>
							<Term>Online service</Term>
							<Price>
								+${bussinesPlan.onlineService[modality]}/{priceSufix}
							</Price>
						</Clause>
					)}

					{fields[2] && (
						<Clause>
							<Term>Larger storage</Term>
							<Price>
								+${bussinesPlan.extraStorage[modality]}/{priceSufix}
							</Price>
						</Clause>
					)}

					{fields[3] && (
						<Clause>
							<Term>Customizable Profile</Term>
							<Price>
								+${bussinesPlan.customProfile[modality]}/{priceSufix}
							</Price>
						</Clause>
					)}
				</section>

				<Clause role='status' className="total">
					<Term aria-live='polite'>Total &#40;per {modality === 'yearly' ? 'year' : 'month'}&#41;</Term>
					<Price aria-live='polite'>+${contractTotalValue}/{priceSufix}</Price>
				</Clause>
			</PlanDetails>
		</Container>
	);
};

export default FourthStep;
