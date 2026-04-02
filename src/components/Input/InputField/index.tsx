import React, { forwardRef } from 'react';
import { useInputContext } from '../InputContext';

import { Input } from './styles';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const InputField: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ name, placeholder, className, id, ...props }, ref) => {
		const { $type, inputId, inputClassName } = useInputContext();

		return (
			<Input
				type={$type}
				name={name}
				id={`${id ? id : inputId}`}
				placeholder={placeholder}
				className={`${inputClassName} ${className}`}
				ref={ref}
				{...props}
			/>
		);
	}
);

export default InputField;
