import { Outlet } from 'react-router';
import Header from '../components/Header';

const CoreLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default CoreLayout;
