import { BrowserRouter, Routes, Route } from 'react-router';
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

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route element={<AppLayout />}>
					<Route
						path="allocation-tool"
						element={<AllocationToolPage />}
					/>
					<Route path="allocations" element={<AllocationsPage />} />
					<Route
						path="allocations/:allocation"
						element={<AllocationPage />}
					/>
					<Route
						path="income-to-investment-tool"
						element={<IncomeToInvestmentToolPage />}
					/>
				</Route>
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="sign-in" element={<SignInPage />} />
				<Route path="unauthorized" element={<UnauthorizedPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
