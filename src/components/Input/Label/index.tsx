import React, { type LabelHTMLAttributes } from 'react';
import { LabelElement } from './styles';
import { useInputContext } from '../InputContext';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
	label: string;
}

const Label: React.FunctionComponent<LabelProps> = ({ label, className }) => {
	const { id, $type, inputClassName } = useInputContext();
	return (
		<LabelElement $type={$type} htmlFor={id} className={`${inputClassName} ${className}`}>
			{label}
		</LabelElement>
	);
};

export default Label;
