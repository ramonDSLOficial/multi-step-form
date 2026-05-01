import React, { forwardRef } from 'react';
import { useInputContext } from '../InputContext';

import { Input } from './styles';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const InputField: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ className, id, ...props }, ref) => {
		const { $type, inputId, inputClassName } = useInputContext();

		return (
			<Input
				{...props}
				type={$type}
				id={`${id ? id : inputId}`}
				className={`${inputClassName} ${className}`}
				ref={ref}
			/>
		);
	}
);

export default InputField;
