import LinkButton from './LinkButton';

const Header = () => {
	return (
		<header className="sticky top-0 flex items-center justify-between bg-white px-4 py-3 shadow-sm">
			<div className="font-semibold md:text-xl">Investment Allocator</div>
			<div className="flex items-center justify-end gap-2">
				<LinkButton path={'/sign-up'} text="Sign up" variant="filled" />
				<LinkButton
					path={'/sign-in'}
					text="Sign in"
					variant="outlined"
				/>
			</div>
		</header>
	);
};

export default Header;
