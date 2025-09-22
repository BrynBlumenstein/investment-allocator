import FeatureCard from './FeatureCard';

const Features = () => {
	return (
		<section className="mb-14 md:mb-16">
			<h2 className="mb-6 text-center text-2xl font-medium md:mb-8 md:text-4xl">
				Investing Made Simple
			</h2>
			<ul className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 lg:gap-10">
				<FeatureCard
					header="Allocation Tool"
					paragraph="Enter the amount you want to invest, pick an allocation, and instantly see how your money is distributed across assets."
				/>
				<FeatureCard
					header="Allocations"
					paragraph="Create new allocations or view, edit, and manage your existing ones all in one place."
				/>
				<FeatureCard
					header="Income-to-Investment Tool"
					paragraph="Input your gross income and the percentage you want to invest to quickly calculate your investable amount."
				/>
			</ul>
		</section>
	);
};

export default Features;
