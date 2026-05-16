import { useFormContext, useWatch } from "react-hook-form";
import type { FormProps } from "../schemas/schemas";

type useModalityReturn = 'monthly' | 'yearly'

const useModality = (): useModalityReturn => {
	const { control } = useFormContext<FormProps>();
	const modality = useWatch({ control, name: 'modality' });

	return !modality ? 'monthly' : 'yearly';
};

export default useModality;
