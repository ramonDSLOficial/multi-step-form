import React from 'react';

import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';

const ThirdStep: React.FC = () => {
	return (
		<Container>
			<Title>Pick add-ons</Title>
			<Paragraph>Add-ons help enhance your gaming experience.</Paragraph>

			<section>
				<Input.Root $type="checkbox" inputClassName="aditions" className='selected'>
					<Input.InputElement checked />

					<div>
						<Input.Label label="Online service" />
						<Input.Description className="addDesc">Access to multiplayer games</Input.Description>
					</div>

					<Input.Description className="price">+$1/mo</Input.Description>
				</Input.Root>

				<Input.Root $type="checkbox" inputClassName="aditions">
					<Input.InputElement />

					<div>
						<Input.Label label="Larger storage" />
						<Input.Description className="addDesc">Extra 1TB of cloud save</Input.Description>
					</div>

					<Input.Description className="price">+$2/mo</Input.Description>
				</Input.Root>

				<Input.Root $type="checkbox" inputClassName="aditions">
					<Input.InputElement />

					<div>
						<Input.Label label="Customizable Profile" />
						<Input.Description className="addDesc">Custom theme on your profile</Input.Description>
					</div>

					<Input.Description className="price">+$2/mo</Input.Description>
				</Input.Root>
			</section>
		</Container>
	);
};

export default ThirdStep;

/*
<!-- Step 3 start -->

  Pick add-ons
  Add-ons help enhance your gaming experience.

  Online servicey
  Access to multiplayer games
  +$1/mo

  Larger storage
  Extra 1TB of cloud save
  +$2/mo

  Customizable Profile
  Custom theme on your profile
  +$2/mo

  Go Back
  Next Step

  <!-- Step 3 end -->

*/
