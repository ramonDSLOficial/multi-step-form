import { Outlet } from 'react-router-dom';
import { Container, Main } from './styles/appStyles';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
	return (
		<Container>
			<Main>
				<Sidebar />

				<Outlet />
			</Main>

			<Footer />
		</Container>
	);
};

export default App;
