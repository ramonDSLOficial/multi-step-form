import React from 'react';

import { Container } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

const Sucess: React.FC = () => {
	return (
		<Container>
			<img src="/images/icon-thank-you.svg" alt='thank you icon'/>

			<Title>Thank you!</Title>
			
			<Paragraph>
				Thanks for confirming your subscription! We hope you have fun using
				our platform. If you ever need support, please feel free to email us
				at support@loremgaming.com.
			</Paragraph>
		</Container>
	);
};

export default Sucess;

/*
<!-- Step 5 start -->

  Thank you!

  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.

  <!-- Step 5 end -->
  */
