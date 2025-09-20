import { Link } from 'react-router';

const SignUpButton = () => {
	return (
		<Link
			to="/sign-up"
			className="cursor-pointer rounded-full border-1 border-neutral-300 bg-lime-300 px-4 py-2 text-xs shadow-sm transition-colors duration-200 hover:border-neutral-200 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:bg-lime-200 md:px-5 md:py-3 md:text-sm"
		>
			Sign up
		</Link>
	);
};

export default SignUpButton;
