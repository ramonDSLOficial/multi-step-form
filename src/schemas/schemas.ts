import z from 'zod';

export const stepSchemas = {
	first: z.object({
		name: z.string().min(3, 'minimo de três letras.'),
		email: z.email({ error: () => ({ message: 'digite um email válido.' }) }),
		phone: z.string().min(9, 'digite 9'),
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
})

export type FormProps = z.infer<typeof formSchema>;
