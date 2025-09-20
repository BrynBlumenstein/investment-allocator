import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="sticky top-0 border-b-1 bg-white px-4 py-3">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold md:text-lg">
					Investment Allocator
				</h1>
				<div className="flex items-center justify-end gap-2">
					<Link
						to="/sign-up"
						className="cursor-pointer rounded-full bg-lime-300 px-4 py-2 text-xs transition-[background-color] duration-200 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:bg-lime-200 md:px-5 md:py-3 md:text-sm"
					>
						Sign Up
					</Link>
					<Link
						to="/sign-in"
						className="cursor-pointer rounded-full border-1 px-4 py-2 text-xs transition-[background-color] duration-200 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:bg-neutral-100 md:px-5 md:py-3 md:text-sm"
					>
						Sign In
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
