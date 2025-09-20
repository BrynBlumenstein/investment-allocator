import { Link } from "react-router";

const SignInPage = () => {
	return (
		<>
			<div>SignInPage</div>
			<Link
				to="/"
				className="cursor-pointer rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 md:text-lg"
			>
				Investment Allocator
			</Link>
		</>
	);
};

export default SignInPage;
