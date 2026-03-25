import React, { forwardRef } from 'react';
import { useInputContext } from '../InputContext';

import { Input } from './styles';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const InputField: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ name, placeholder, className, ...props }, ref) => {
		const { $type, id, inputClassName } = useInputContext();

		return (
			<Input
				type={$type}
				name={name}
				id={id}
				placeholder={placeholder}
				className={`${inputClassName} ${className}`}
				ref={ref}
				{...props}
			/>
		);
	}
);

export default InputField;
