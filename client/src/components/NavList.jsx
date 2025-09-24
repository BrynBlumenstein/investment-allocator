import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import { useLocation, useParams } from 'react-router';
import { kebabToTitle } from '../utils/kebab-to-title';

const NavList = ({ onItemClick }) => {
	const location = useLocation();
	const { allocation } = useParams();
	const [current, setCurrent] = useState('');

	useEffect(() => {
		const path = location.pathname;

		if (
			path.endsWith('/allocation-tool') ||
			path.endsWith('/allocation-tool/')
		) {
			setCurrent('Allocation Tool');
		} else if (
			path.endsWith('/allocations') ||
			path.endsWith('/allocations/')
		) {
			setCurrent('Allocations');
		} else if (
			path.endsWith('/income-to-investment-tool') ||
			path.endsWith('/income-to-investment-tool/')
		) {
			setCurrent('Income-to-Investment Tool');
		} else {
			setCurrent(kebabToTitle(allocation));
		}
	}, [allocation, location]);

	return (
		<nav>
			<ul className="mt-1">
				<NavItem
					label="Allocation Tool"
					path="/allocation-tool"
					onClick={onItemClick}
					current={current}
				/>
				<NavItem
					label="Allocations"
					path="/allocations"
					onClick={onItemClick}
					current={current}
				/>
				<ul>
					<NavItem
						label="Allocation 1"
						path="/allocations/allocation-1"
						onClick={onItemClick}
						current={current}
						indented
					/>
				</ul>
				<ul>
					<NavItem
						label="Allocation 2"
						path="/allocations/allocation-2"
						onClick={onItemClick}
						current={current}
						indented
					/>
				</ul>
				<NavItem
					label="Income-to-Investment Tool"
					path="/income-to-investment-tool"
					onClick={onItemClick}
					current={current}
				/>
			</ul>
		</nav>
	);
};

export default NavList;
