import LandingPageHeader from '../components/LandingPageHeader';
import Hero from '../components/Hero';
import Features from '../components/Features';

const LandingPage = () => {
	return (
		<>
			<LandingPageHeader />
			<main className="flex flex-col items-center gap-14 px-4 md:gap-16">
				<Hero />
				<Features />
			</main>
		</>
	);
};

export default LandingPage;
