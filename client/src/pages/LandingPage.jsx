import Hero from '../components/Hero';
import Features from '../components/Features';

const LandingPage = () => {
	return (
		<main className="flex flex-col items-center px-4 gap-14 md:gap-16">
			<Hero />
			<Features />
		</main>
	);
};

export default LandingPage;
