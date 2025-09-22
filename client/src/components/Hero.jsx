import LinkButton from './LinkButton';

const Hero = () => {
	return (
		<section className="mt-14 flex w-full flex-col items-center gap-2 text-center md:mt-16 md:gap-4">
			<h1 className="w-full max-w-sm  md:max-w-md text-5xl font-bold md:text-6xl">
				From Paycheck to Portfolio
			</h1>
			<p className="w-full max-w-xs text-base md:max-w-sm md:text-lg">
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
