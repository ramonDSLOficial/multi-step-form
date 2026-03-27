import { createContext, useContext } from 'react';

export type InputType =
	| 'checkbox'
	| 'text'
	| 'password'
	| 'email'
	| 'tel'
	| 'search'
	| 'radio';

interface InputContextData {
	inputId: string;
	error?: string;
	$type: InputType;
	inputClassName?: string;
}

export const InputContext = createContext<InputContextData | null>(null);

export const useInputContext = () => {
	const context = useContext(InputContext);

	if (!context) {
		throw new Error('Input Components must be insede <Input.Root>!');
	}

	return context;
};
