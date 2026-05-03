import z from 'zod';

export const formSchema = z.object({
	name: z.string().min(3, 'minimo de três letras.'),
	email: z.email({ error: () => ({ message: 'digite um email válido.' }) }),
	phone: z.string(),
	modality: z.boolean(),
    plan: z.enum(['arcade', 'advanced', 'pro']),
	onlineService: z.boolean(),
	extraStorage: z.boolean(),
	customProfile: z.boolean(),
});

export type FormProps = z.infer<typeof formSchema>;
