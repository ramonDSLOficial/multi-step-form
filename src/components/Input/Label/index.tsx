import React, { type LabelHTMLAttributes } from 'react';
import { LabelElement } from './styles';
import { useInputContext } from '../InputContext';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
	label: string;
}

const Label: React.FunctionComponent<LabelProps> = ({ label, className, htmlFor, ...props }) => {
	const { inputId, $type, inputClassName } = useInputContext();
	return (
		<LabelElement $type={$type} htmlFor={htmlFor ? htmlFor : inputId} className={`${inputClassName} ${className}`} {...props}>
			{label}
		</LabelElement>
	);
};

export default Label;
