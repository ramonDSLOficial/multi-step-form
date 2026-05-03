import React, { type FormHTMLAttributes } from 'react';

import { Container } from './styles';
import FormFooter from '../FormFooter';
import { Outlet } from 'react-router-dom';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormProps } from '../../schemas/schemas';

const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	const methods = useForm<FormProps>({
		mode: 'onChange',
		criteriaMode: 'all',
		reValidateMode: 'onBlur',
		shouldUnregister: false,
		resolver: zodResolver(formSchema),
	});

	const submitForm: SubmitHandler<FormProps> = data => console.log('data', data);
	 
	return (
		<FormProvider {...methods}>
			<Container onSubmit={methods.handleSubmit(submitForm)}>
				<Outlet />

				<FormFooter />
			</Container>
		</FormProvider>
	);
};

export default Form;
