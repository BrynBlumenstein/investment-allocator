import { Link } from 'react-router';

const UnauthorizedPage = () => {
	return (
		<>
			<div>UnauthorizedPage</div>
			<Link
				to="/"
				className="cursor-pointer rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 md:text-lg"
			>
				Investment Allocator
			</Link>
		</>
	);
};

export default UnauthorizedPage;
