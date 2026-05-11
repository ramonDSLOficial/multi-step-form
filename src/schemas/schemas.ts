import z from 'zod';

export const stepSchemas = {
	first: z.object({
		name: z
			.string()
			.trim()
			.min(3, 'must be three letters!')
			.regex(/^[a-zçà-ý\s`´]+$/i, 'only letters!'),
		email: z.email({ error: () => ({ message: 'must be a valid email.' }) }),
		phone: z
			.string()
			.transform((val) => val.replace(/\D/g, ''))
			.pipe(
				z
					.string()
					.min(10, 'must be a valid phone!')
					.max(11, 'must be a valid phone!')
			),
	}),
	second: z.object({
		modality: z.boolean(),
		plan: z.enum(['arcade', 'advanced', 'pro']),
	}),
	third: z.object({
		onlineService: z.boolean(),
		extraStorage: z.boolean(),
		customProfile: z.boolean(),
	}),
};

export const formSchema = z.object({
	...stepSchemas.third.shape,
	...stepSchemas.second.shape,
	...stepSchemas.first.shape,
});

export type FormProps = z.infer<typeof formSchema>;
