import React, { useId } from 'react';
import { InputContext, type InputType } from '../InputContext';
import { Container } from './styles';

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	helperText?: string;
	$type: InputType;
	inputClassName?: string;
}

const Root: React.FunctionComponent<RootProps> = ({
	helperText,
	$type,
	className,
	inputClassName,
	children,
}) => {
	const inputId = useId();
	const isRadio = $type === 'radio';
	return (
		<InputContext.Provider
			value={{ inputId, $type, helperText, inputClassName }}
		>
			<Container
				className={`${inputClassName} ${className}`}
				$type={$type}
				as={isRadio ? 'label' : ''}
				htmlFor={inputId}
			>
				{children}
			</Container>
		</InputContext.Provider>
	);
};

export default Root;
