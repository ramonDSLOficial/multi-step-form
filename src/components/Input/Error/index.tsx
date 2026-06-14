import { type HTMLAttributes } from 'react';
import { useInputContext } from '../InputContext';

import { ErrorElement } from './styles';

const Error: React.FC<HTMLAttributes<HTMLSpanElement>> = ({ className }) => {
	const { $type, helperText, inputClassName } = useInputContext();

	return (
		<ErrorElement $type={$type} className={`${inputClassName} ${className}`}>
			{helperText}
		</ErrorElement>
	);
};

export default Error;
