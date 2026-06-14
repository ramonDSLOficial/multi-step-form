import React, { forwardRef } from 'react';

import { Container } from './styles';

interface TitleProps {
	children: React.ReactNode;
	id?: string;
	tabIndex?: number;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
	({ children, id, tabIndex }, ref) => {
		return (
			<Container id={id} ref={ref} tabIndex={tabIndex}>
				{children}
			</Container>
		);
	}
);

export default Title;
