import React, { type HTMLAttributes } from 'react';

import { Container } from './styles';


const Paragraph: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Paragraph;
