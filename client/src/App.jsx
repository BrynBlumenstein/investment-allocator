import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import CoreLayout from './layouts/CoreLayout';
import LandingPage from './pages/LandingPage';
import AppLayout from './layouts/AppLayout';
import AllocationToolPage from './pages/AllocationToolPage';
import AllocationsPage from './pages/AllocationsPage';
import AllocationPage from './pages/AllocationPage';
import IncomeToInvestmentToolPage from './pages/IncomeToInvestmentToolPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		Component: CoreLayout,
		children: [
			{
				index: true,
				Component: LandingPage
			},
			{
				Component: AppLayout,
				children: [
					{ path: 'allocation-tool', Component: AllocationToolPage },
					{ path: 'allocations', Component: AllocationsPage },
					{
						path: 'allocations/:allocation',
						Component: AllocationPage
					},
					{
						path: 'income-to-investment-tool',
						Component: IncomeToInvestmentToolPage
					}
				]
			}
		]
	},
	{
		path: 'sign-up',
		Component: SignUpPage
	},
	{
		path: 'sign-in',
		Component: SignInPage
	},
	{
		path: 'unauthorized',
		Component: UnauthorizedPage
	},
	{
		path: '*',
		Component: NotFoundPage
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
