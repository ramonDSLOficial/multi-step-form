import React, { type LabelHTMLAttributes } from 'react';
import { LabelElement } from './styles';
import { useInputContext } from '../InputContext';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
	label: string;
}

const Label: React.FunctionComponent<LabelProps> = ({ label, className, ...props }) => {
	const { inputId, $type, inputClassName } = useInputContext();
	return (
		<LabelElement $type={$type} htmlFor={inputId} className={`${inputClassName} ${className}`} {...props}>
			{label}
		</LabelElement>
	);
};

export default Label;
