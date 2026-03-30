import React, { type HTMLAttributes } from 'react';
import { useInputContext } from '../InputContext';

import { ErrorElement } from './styles';

const Error: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ className }) => {
	const { $type, error, inputClassName } = useInputContext();

	return (
		<ErrorElement $type={$type} className={`${inputClassName} ${className}`}>
			{error}
		</ErrorElement>
	);
};

export default Error;
