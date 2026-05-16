import { useFormContext, useWatch } from 'react-hook-form';
import type { FormProps } from '../schemas/schemas';

type useModalityReturn = {
	modality: 'monthly' | 'yearly';
	priceSufix: 'mo' | 'yr';
};

const useModality = (): useModalityReturn => {
	const { control } = useFormContext<FormProps>();
	const watchedModality = useWatch({ control, name: 'modality' });
	const modality = !watchedModality ? 'monthly' : 'yearly';
	const priceSufix = modality === 'monthly' ? 'mo' : 'yr';

	return { modality, priceSufix };
};

export default useModality;
