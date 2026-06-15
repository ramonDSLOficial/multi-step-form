import { Container, RestartForm } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { PATHS } from '../../routes/paths';

const Sucess: React.FC = () => {
	return (
		<Container>
			<img src="/images/icon-thank-you.svg" alt=''/>

			<Title>Thank you!</Title>
			
			<Paragraph>
				Thanks for confirming your subscription! We hope you have fun using
				our platform. If you ever need support, please feel free to email us
				at support@loremgaming.com.
			</Paragraph>

			<RestartForm to={PATHS.home} aria-label='Restart the subscription form'>Back to Home</RestartForm>
		</Container>
	);
};

export default Sucess;