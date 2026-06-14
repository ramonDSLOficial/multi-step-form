import { type HTMLAttributes } from 'react';
import { useInputContext } from '../InputContext';

import { ErrorElement } from './styles';

const Error: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
	className,
	...props
}) => {
	const { $type, helperText, inputClassName } = useInputContext();

	return (
		<ErrorElement
			$type={$type}
			className={`${inputClassName} ${className}`}
			{...props}
		>
			{helperText}
		</ErrorElement>
	);
};

export default Error;
