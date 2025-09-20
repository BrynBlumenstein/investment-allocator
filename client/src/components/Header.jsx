const Header = () => {
	return (
		<header className="sticky top-0 border-b-1 bg-white px-4 py-3">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold md:text-lg">
					Investment Allocator
				</h1>
				<div className="flex items-center justify-end gap-2">
					<button className="bg-primary cursor-pointer rounded-full px-4 py-2 text-xs transition duration-200 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 active:bg-lime-200 md:px-5 md:py-3 md:text-sm">
						Sign Up
					</button>
					<button className="cursor-pointer rounded-full border-1 px-4 py-2 text-xs transition duration-200 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 active:bg-gray-200 md:px-5 md:py-3 md:text-sm">
						Sign In
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
