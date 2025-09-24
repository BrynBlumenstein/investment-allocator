import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ onClick, icon }) => {
	return (
		<button
			onClick={onClick}
			className="size-8 cursor-pointer rounded-md transition-[background-color] duration-200 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default IconButton;
