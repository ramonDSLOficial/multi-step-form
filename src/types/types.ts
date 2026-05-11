export type ButtonVariants = 'prev' | 'send' | 'next';

export type FormDirection = Omit<ButtonVariants, 'send'> 
