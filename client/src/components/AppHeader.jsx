import LinkButton from './LinkButton';

const AppHeader = () => {
	return (
		<header className="flex md:border-b border-neutral-300 items-center justify-between bg-white px-4 py-3">
			<div className="font-semibold md:text-xl">Investment Allocator</div>
			<div className="flex items-center justify-end gap-2 md:gap-4">
				<p className="hidden md:block md:text-base">username</p>
				<LinkButton path={'/'} text="Sign out" variant="filled" />
			</div>
		</header>
	);
};

export default AppHeader;
