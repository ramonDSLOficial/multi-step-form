import React, { type FormHTMLAttributes } from 'react';

// import { FormProvider } from 'react-hook-form';
import { Container } from './styles';
// vai virar o formprivder
// mudar para form atributes
const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Form;
