import React, { useId } from 'react';
import { InputContext, type InputType } from '../InputContext';
import { Container } from './styles';
import { useFormContext } from 'react-hook-form';
import type { FormProps } from '../../../schemas/schemas';

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	helperText?: string;
	inputClassName?: string;
	$type: InputType;
	$yearModality?: boolean;
	inputName?: keyof FormProps;
	inputValue?: string | boolean;
}

const Root: React.FunctionComponent<RootProps> = ({
	helperText,
	$type,
	$yearModality,
	className,
	inputClassName,
	inputName,
	inputValue,
	children,
}) => {
	const { setValue } = useFormContext<FormProps>();
	const inputId = useId();
	const hasFunctionLabel = $type === 'radio' || inputClassName === 'aditions';

	const selectPlanByKeyBoard = (
		e: React.KeyboardEvent<
			React.LabelHTMLAttributes<HTMLLabelElement> | HTMLDivElement
		>
	) => {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		if (inputName && inputValue) setValue(inputName, inputValue);
	};

	const labelProps = hasFunctionLabel
		? {
				as: 'label',
				htmlFor: inputId,
				onKeyDown: selectPlanByKeyBoard,
		  }
		: {};

	return (
		<InputContext.Provider
			value={{ inputId, $type, helperText, inputClassName }}
		>
			<Container
				className={`${inputClassName} ${className}`}
				$type={$type}
				$yearModality={$yearModality}
				{...labelProps}
			>
				{children}
			</Container>
		</InputContext.Provider>
	);
};

export default Root;
