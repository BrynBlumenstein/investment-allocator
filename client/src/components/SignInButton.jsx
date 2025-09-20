import { Link } from 'react-router';

const SignInButton = () => {
	return (
		<Link
			to="/sign-in"
			className="cursor-pointer rounded-full border-1 border-neutral-300 bg-white px-4 py-2 text-xs shadow-sm transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:bg-neutral-100 md:px-5 md:py-3 md:text-sm"
		>
			Sign in
		</Link>
	);
};

export default SignInButton;
