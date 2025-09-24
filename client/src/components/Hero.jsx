import LinkButton from './LinkButton';

const Hero = () => {
	return (
		<section className="mt-32 flex h-80 w-full flex-col items-center gap-2 text-center md:gap-4">
			<h1 className="w-full max-w-sm text-5xl font-bold md:max-w-md md:text-6xl">
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
