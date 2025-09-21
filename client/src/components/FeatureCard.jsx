const FeatureCard = ({ header, paragraph }) => {
	return (
		<li className="size-52 md:size-60 rounded-md bg-white p-4 shadow-sm">
			<h3 className="mb-2 text-lg font-medium md:text-xl">{header}</h3>
			<p className="text-sm md:text-base">{paragraph}</p>
		</li>
	);
};

export default FeatureCard;
