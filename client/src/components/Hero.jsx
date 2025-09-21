import LinkButton from './LinkButton';

const Hero = () => {
	return (
		<section className="mt-14 flex w-full flex-col items-center gap-2 text-center md:mt-16 md:gap-4">
			<h1 className="w-xs md:w-md text-4xl font-bold md:text-6xl">
				From Paycheck to Portfolio
			</h1>
			<p className="w-2xs text-sm md:w-sm md:text-lg">
				Turn your income into investments with simple, automated
				allocation tools.
			</p>
			<LinkButton
				path="/sign-up"
				text="Get started for free"
				variant="filled"
			/>
		</section>
	);
};

export default Hero;
