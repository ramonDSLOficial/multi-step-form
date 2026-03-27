import React from 'react';

import { Container, FormContanier } from './styles';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { Input } from '../../components/Input';

const SecondStep: React.FC = () => {
	return (
		<Container>
      <Title>Select your plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>

      <FormContanier>
        <section>
          
        </section>

        <section>
          <Input.Root $type='checkbox' inputClassName='toggle'>
            <Input.Label label='monthly' />

            <Input.InputElement />
            
            <Input.Label label='yearly' />
          </Input.Root>
        </section>
      </FormContanier>
		</Container>
	);
};

export default SecondStep;
/*
<!-- Step 2 start -->

  Select your plan
  You have the option of monthly or yearly billing.

  Arcade
  $9/mo

  Advanced
  $12/mo

  Pro
  $15/mo

  Monthly
  Yearly

  Go Back
  Next Step

  <!-- Step 2 end -->

*/
