import React, { useId } from 'react';
import { InputContext, type InputType } from '../InputContext';
import { Container } from './styles';

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	helperText?: string;
	inputClassName?: string;
	$type: InputType;
	$yearModality?: boolean;
}

const Root: React.FunctionComponent<RootProps> = ({
	helperText,
	$type,
	$yearModality,
	className,
	inputClassName,
	children,
}) => {
	const inputId = useId();
	const hasFunctionLabel = $type === 'radio' || inputClassName === 'aditions';
	
	return (
		<InputContext.Provider
			value={{ inputId, $type, helperText, inputClassName }}
		>
			<Container
				className={`${inputClassName} ${className}`}
				$type={$type}
				as={hasFunctionLabel ? 'label' : undefined}
				htmlFor={hasFunctionLabel? inputId : undefined}
				$yearModality={$yearModality}
			>
				{children}
			</Container>
		</InputContext.Provider>
	);
};

export default Root;
