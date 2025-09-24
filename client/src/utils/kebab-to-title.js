export const kebabToTitle = (str) => {
	if (!str) {
		return '';
	}

	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
		.join(' ');
};
