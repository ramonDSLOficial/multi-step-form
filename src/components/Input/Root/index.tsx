import React, { useId } from 'react';
import { InputContext, type InputType } from '../InputContext';
import { Container } from './styles';

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	helperText?: string;
	$type: InputType;
	inputClassName?: string;
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
	// * mudar o nome desse isRadio
	const isRadio = $type === 'radio' || inputClassName === 'aditions';
	return (
		<InputContext.Provider
			value={{ inputId, $type, helperText, inputClassName }}
		>
			<Container
				className={`${inputClassName} ${className}`}
				$type={$type}
				as={isRadio ? 'label' : ''}
				htmlFor={inputId}
				$yearModality={$yearModality}
			>
				{children}
			</Container>
		</InputContext.Provider>
	);
};

export default Root;
