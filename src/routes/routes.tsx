import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PATHS } from './paths';
import App from '../App';
import FirstStep from '../pages/FirstStep';
import SecondStep from '../pages/SecondStep';
import ThirdStep from '../pages/ThirdStep';
import FourthStep from '../pages/FourthStep';
import Sucess from '../pages/Sucess';
import Form from '../components/Form';

export const router = createBrowserRouter(
	[
		{
			path: PATHS.home,
			element: <App />,
			children: [
				{
					element: <Form />,
					children: [
						{
							path: PATHS.steps.first,
							element: <FirstStep />,
						},
						{
							path: PATHS.steps.second,
							element: <SecondStep />,
						},
						{
							path: PATHS.steps.third,
							element: <ThirdStep />,
						},
						{
							path: PATHS.steps.fourth,
							element: <FourthStep />,
						},
						{
							path: PATHS.steps.success,
							element: <Sucess />,
						},
					],
				},
				{
					path: '*',
					element: <Navigate to={PATHS.steps.first} />,
				},
			],
		},
	],
	{
		basename: '/multi-step-form',
	}
);
