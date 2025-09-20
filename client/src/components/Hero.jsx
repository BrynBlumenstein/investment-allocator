import { Link } from 'react-router';

const Hero = () => {
	return (
		<div className="mt-14 flex w-full flex-col items-center gap-2 text-center md:mt-16 md:gap-4">
			<h1 className="text-3xl font-bold md:text-5xl">
				From Paycheck to Portfolio
			</h1>
			<p className="w-xs text-xs md:w-sm md:text-lg">
				Turn your income into investments with simple, automated
				allocation tools.
			</p>
			<div className="flex items-center justify-end gap-2">
				<Link
					to="/sign-up"
					className="cursor-pointer rounded-full border-1 border-neutral-300 bg-lime-300 px-4 py-2 text-xs shadow-sm transition-colors duration-200 hover:border-neutral-200 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 active:bg-lime-200 md:px-5 md:py-3 md:text-sm"
				>
					Get started for free
				</Link>
			</div>
		</div>
	);
};

export default Hero;
