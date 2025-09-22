import { useState } from 'react';
import AuthFormInput from './AuthFormInput';

const AuthForm = ({ type }) => {
	const [formData, setFormData] = useState({ username: '', password: '' });

	const handleChange = (event) => {
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value
		}));
	};

	const handleSignUp = (event) => {
		event.preventDefault();
	};

	const handleSignIn = (event) => {
		event.preventDefault();
	};

	return (
		<form
			noValidate
			onSubmit={type === 'sign-up' ? handleSignUp : handleSignIn}
		>
			<div className="flex flex-col items-start mb-4">
				<label htmlFor="username" className="font-medium">
					Username
				</label>
				<AuthFormInput
					id="username"
					value={formData.username}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col items-start">
				<label htmlFor="password" className="font-medium">
					Password
				</label>
				<AuthFormInput
					id="password"
					value={formData.password}
					onChange={handleChange}
                    type="password"
				/>
			</div>
			<button
				type="submit"
				className="mt-6 w-full cursor-pointer rounded-md border-1 border-neutral-300 bg-lime-300 px-5 py-3 shadow-sm transition-[background-color,border-color] duration-200 hover:border-neutral-200 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
			>
				{type === 'sign-up' ? 'Sign up' : 'Sign in'}
			</button>
		</form>
	);
};

export default AuthForm;
