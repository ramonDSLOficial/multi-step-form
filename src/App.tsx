import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, Main } from './styles/appStyles';
import Footer from './components/Footer';
import Slidebar from './components/Slidebar';
import Form from './components/Form';
import FormFooter from './components/FormFooter';

const App: React.FC = () => {
	/* 
	MAIN E FOOTER COM 100% NO MOBAL E O FORM LIMITADO, NO DESK LIMITA O MAIN E O FORM ACOMPANHA
	 */
	return (
		<Container>
			<Main>
				<Slidebar />
				
				<Form>
					<Outlet />

					<FormFooter />
				</Form>
			</Main>
			
			<Footer />
		</Container>
	);
};

export default App;

/*
5 etapas / 5 pages

campo para os bot~es
slidebar
*/
