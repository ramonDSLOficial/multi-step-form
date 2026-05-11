export const phoneMask = (phone: string): string => {
	phone = phone.replace(/\D/g, '');

	if (phone.length <= 10) {
		return phone
			.replace(/^(\d{2})(\d)/, '($1) $2')
			.replace(/(\d{4})(\d)/, '$1-$2');
	}

	return phone
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
};
