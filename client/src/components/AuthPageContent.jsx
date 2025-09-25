import { Link } from 'react-router';
import AuthForm from './AuthForm';

const AuthPage = ({ type = 'sign-up' }) => {
	return (
		<main className="flex h-screen items-center justify-center bg-white md:bg-neutral-50">
			<section className="w-sm md:border md:border-neutral-300 rounded-lg bg-white p-8 text-center md:shadow-md">
				<Link
					to="/"
					className="cursor-pointer rounded-md p-1 text-lg font-semibold transition-[background-color] duration-200 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
				>
					Investment Allocator
				</Link>
				{type === 'sign-up' ? (
					<>
						<h1 className="mt-6 text-3xl font-medium">Sign Up</h1>
						<p className="mt-1 mb-6">
							Already have an account?&nbsp;
							<Link
								to="/sign-in"
								className="cursor-pointer rounded-md underline transition-[background-color] duration-200 hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-lime-300"
							>
								Sign in
							</Link>
						</p>
						<AuthForm type={type} />
					</>
				) : (
					<>
						<h1 className="mt-6 text-3xl font-medium">Sign In</h1>
						<p className="mt-1 mb-6">
							Need an account?&nbsp;
							<Link
								to="/sign-up"
								className="cursor-pointer rounded-md underline transition-[background-color] duration-200 hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-lime-300"
							>
								Sign up
							</Link>
						</p>
						<AuthForm type={type} />
					</>
				)}
			</section>
		</main>
	);
};

export default AuthPage;
