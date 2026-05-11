import React, { type FormHTMLAttributes } from 'react';

import { Container } from './styles';
import FormFooter from '../FormFooter';
import { Outlet } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormProps } from '../../schemas/schemas';

const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	const methods = useForm<FormProps>({
		mode: 'onBlur',
		criteriaMode: 'all',
		reValidateMode: 'onChange',
		shouldUnregister: false,
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			modality: false,
			plan: 'arcade',
			onlineService: false,
			extraStorage: false,
			customProfile: false,
		},
	});
	return (
		<FormProvider {...methods}>
			<Container>
				<Outlet />

				<FormFooter />
			</Container>
		</FormProvider>
	);
};

export default Form;
