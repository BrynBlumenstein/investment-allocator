import { Link } from "react-router";

const ErrorPageContent = ({ heading }) => {
	return (
		<main className="flex h-screen items-center justify-center bg-white">
			<section className="text-center">
				<h1 className="mb-4 text-3xl font-medium">{heading}</h1>
				<Link
					to="/"
					className="cursor-pointer rounded-md p-1 text-lg font-semibold transition-[background-color] hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-lime-300"
				>
					Return to Investment Allocator
				</Link>
			</section>
		</main>
	);
};

export default ErrorPageContent;
