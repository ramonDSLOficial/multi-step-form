import React from 'react';

import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';

const FirstStep: React.FC = () => {
	return (
		<Container>
			<Title>Personal info</Title>
			<Paragraph>
				Please provide your name, email address, and phone number.
			</Paragraph>

			<section>
				<Input.Root $type="text" error="exerrado">
					<Input.Label label="name" />
					<Input.InputElement placeholder="e.g. Stephen King" />
					<Input.Error />
				</Input.Root>

				<Input.Root $type="text" error="errado">
					<Input.Label label="Email Address" />
					<Input.InputElement placeholder="e.g. stephenking@lorem.com" />
					<Input.Error />
				</Input.Root>

				<Input.Root $type="text" error="errado">
					<Input.Label label="Phone Number" />
					<Input.InputElement placeholder="e.g. +1 234 567 890" />
					<Input.Error />
				</Input.Root>
			</section>
		</Container>
	);
};

export default FirstStep;

/*
<!-- Step 1 start -->

  Personal info
  Please provide your name, email address, and phone number.

  Name
  e.g. Stephen King

  Email Address
  e.g. stephenking@lorem.com

  Phone Number
  e.g. +1 234 567 890

  Next Step

<!-- Step 1 end -->
*/
