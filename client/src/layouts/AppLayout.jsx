import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import AppHeader from '../components/AppHeader';
import IconButton from '../components/IconButton';
import NavList from '../components/NavList';
import { kebabToTitle } from '../utils/kebab-to-title';

const AppLayout = () => {
	const location = useLocation();
	const { allocation } = useParams();
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="flex h-screen flex-col">
			<AppHeader />
			<div className="flex h-14 items-center gap-4 border-y border-neutral-300 bg-white py-3 pr-4 pl-2 md:hidden">
				<IconButton onClick={toggleOpen} icon="fa-solid fa-bars" />
				<div>{kebabToTitle(location.pathname.split('/')[1])}</div>
				<div className={allocation ? '' : 'hidden'}>/</div>
				<div className={allocation ? '' : 'hidden'}>
					{kebabToTitle(allocation)}
				</div>
			</div>

			<div className="flex h-full overflow-hidden">
				<div
					className={`${open ? '' : 'hidden md:block'} flex w-full justify-between border-neutral-300 bg-white px-4 py-5 md:w-68 md:border-r shadow-md`}
				>
					<NavList onItemClick={handleClose} />
					<div className="md:hidden">
						<IconButton
							onClick={handleClose}
							icon="fa-solid fa-xmark"
						/>
					</div>
				</div>

				<div
					className={`${open ? 'hidden' : ''} grow overflow-y-auto md:block`}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AppLayout;
