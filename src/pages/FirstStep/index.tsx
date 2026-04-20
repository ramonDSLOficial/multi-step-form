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
				<Input.Root $type="text">
					<Input.Label label="name" />
					<Input.InputElement placeholder="e.g. Stephen King" />
					<Input.Error />
				</Input.Root>

				<Input.Root $type="text">
					<Input.Label label="Email Address" />
					<Input.InputElement placeholder="e.g. stephenking@lorem.com" />
					<Input.Error />
				</Input.Root>

				<Input.Root $type="text">
					<Input.Label label="Phone Number" />
					<Input.InputElement placeholder="e.g. +1 234 567 890" />
					<Input.Error />
				</Input.Root>
			</section>
		</Container>
	);
};

export default FirstStep;
