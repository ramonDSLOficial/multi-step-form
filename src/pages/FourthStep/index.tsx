import React from 'react';

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
			<Title>finishing up</Title>
			<Paragraph>
				Double-check everything looks OK before confirming.
			</Paragraph>

			<PlanDetails>
				<section>
					<Clause className="plan">
						<div>
							<Term>Arcade (monthly)</Term>
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
					<Term>Total (per month)</Term>
					<Price className="total">+$12/mo</Price>
				</Clause>
			</PlanDetails>
		</Container>
	);
};

export default FourthStep;

/*
<!-- Step 4 start -->

  finishing up
  Double-check everything looks OK before confirming.

  <!-- Dynamically add subscription and add-on selections here -->

  Total (per month/year)

  Go Back
  Confirm

  <!-- Step 4 end -->

*/
