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

const FourthStep: React.FC = () => {
	return (
		<Container>
			<Title>Finishing up</Title>
			<Paragraph>
				Double-check everything looks OK before confirming.
			</Paragraph>

			<PlanDetails>
				<section>
					<Clause className="plan">
						<div>
							<Term>Arcade &#40;monthly&#41;</Term>
							<ChangePlanbtn to={PATHS.steps.second}>
								Change
							</ChangePlanbtn>
						</div>

						<Price>$9/mo</Price>
					</Clause>

					<Clause>
						<Term>Online service</Term>
						<Price>+$1/mo</Price>
					</Clause>

					<Clause>
						<Term>Larger storage</Term>
						<Price>+$2/mo</Price>
					</Clause>
				</section>

				<Clause>
					<Term>Total &#40;per month&#41;</Term>
					<Price className="total">+$12/mo</Price>
				</Clause>
			</PlanDetails>
		</Container>
	);
};

export default FourthStep;