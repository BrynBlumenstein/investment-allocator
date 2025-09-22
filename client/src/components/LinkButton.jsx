import { Link } from 'react-router';

const LinkButton = ({ path, text, variant = 'filled' }) => {
	const baseClasses =
		'cursor-pointer rounded-full border-1 border-neutral-300 px-4 py-2 text-xs shadow-md transition-[background-color,border-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 md:px-5 md:py-3 md:text-sm';

	const variantClasses =
		variant === 'filled'
			? 'bg-lime-300 hover:border-neutral-200 hover:bg-lime-200  active:bg-lime-200'
			: variant === 'outlined'
				? 'bg-white hover:border-neutral-400 hover:bg-neutral-100  active:bg-neutral-100'
				: '';

	return (
		<Link to={path} className={`${baseClasses} ${variantClasses}`}>
			{text}
		</Link>
	);
};

export default LinkButton;
