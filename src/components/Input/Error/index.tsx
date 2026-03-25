import React, { type HTMLAttributes } from 'react';
import { useInputContext } from '../InputContext';

import { ErrorElement } from './styles';

interface ErrorProps extends HTMLAttributes<HTMLParagraphElement> {}

const Error: React.FC<ErrorProps> = ({ className }) => {
	const { $type, error, inputClassName } = useInputContext();

	return (
		<ErrorElement $type={$type} className={`${inputClassName} ${className}`}>
			{error}
		</ErrorElement>
	);
};

export default Error;
