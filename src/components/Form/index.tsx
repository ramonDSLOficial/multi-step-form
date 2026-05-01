import { type FormHTMLAttributes } from 'react';

import { Container } from './styles';
import FormFooter from '../FormFooter';
import { Outlet } from 'react-router-dom';

const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	return (
		<Container>
			<Outlet />
			
			<FormFooter />
		</Container>
	);
};

export default Form;
