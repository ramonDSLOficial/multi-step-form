import React from 'react';

import { Container, Main } from './styles/appStyles';
import Footer from './components/Footer';

const App: React.FC = () => {
	/* 
	MAIN E FOOTER COM 100% NO MOBAL E O FORM LIMITADO, NO DESK LIMITA O MAIN E O FORM ACOMPANHA
	 */
	return (
		<Container>
			<Main>
				{/* slidebar */}
				{/* form>step+formfooter */}
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
