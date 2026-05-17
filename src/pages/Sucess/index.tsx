import { Container, RestartForm } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { PATHS } from '../../routes/paths';

const Sucess: React.FC = () => {
	return (
		<Container>
			<img aria-hidden='true' src="/images/icon-thank-you.svg" alt='thank you icon'/>

			<Title><RestartForm to={PATHS.home}>Thank you!</RestartForm></Title>
			
			<Paragraph>
				Thanks for confirming your subscription! We hope you have fun using
				our platform. If you ever need support, please feel free to email us
				at support@loremgaming.com.
			</Paragraph>
		</Container>
	);
};

export default Sucess;