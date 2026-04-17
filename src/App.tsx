import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, Main } from './styles/appStyles';
import Footer from './components/Footer';
import Slidebar from './components/Slidebar';
import Form from './components/Form';
import FormFooter from './components/FormFooter';

const App: React.FC = () => {
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