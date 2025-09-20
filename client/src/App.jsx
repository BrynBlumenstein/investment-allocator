import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
	{
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: LandingPage
			}
		]
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
