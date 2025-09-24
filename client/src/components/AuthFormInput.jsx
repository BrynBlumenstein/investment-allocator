const AuthFormInput = ({ id, value, onChange, type = 'text' }) => {
	return (
		<input
			id={id}
			name={id}
			type={type === 'password' ? 'password' : 'text'}
			value={value}
			onChange={onChange}
			autoComplete="off"
			className="mt-1 w-full rounded-md border-1 border-neutral-300 px-3 py-2 transition-[border-color] duration-200 focus:border-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
			required
		/>
	);
};

export default AuthFormInput;
