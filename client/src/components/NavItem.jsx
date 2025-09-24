import { Link } from 'react-router';

const NavItem = ({ label, path, onClick, current, indented = false }) => {
	return (
		<li
			className={`${current === label ? (indented ? 'border-l-3 pl-11 font-semibold' : 'border-l-3 pl-3 font-semibold') : indented ? 'pl-12' : 'pl-4'} mb-4`}
		>
			<Link
				to={path}
				onClick={onClick}
				className="rounded-md p-1 transition-[background-color] duration-200 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
			>
				{label}
			</Link>
		</li>
	);
};

export default NavItem;
