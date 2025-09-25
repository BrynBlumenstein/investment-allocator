const AllocationToolPage = () => {
	return (
		<main className="flex h-full flex-col items-center gap-8 px-4 inset-shadow-sm">
			<h1 className="mt-8 text-2xl font-medium">Allocation Tool</h1>
			<div className="flex rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-md">
				<p className="flex-none">
					Enter amount to invest:&emsp;$&nbsp;
				</p>
				<input
					type="number"
					className="min-w-12 flex-auto border-b-2 border-neutral-300 px-2 transition-[border-color] duration-200 focus:border-lime-300 focus:outline-hidden"
				></input>
			</div>
		</main>
	);
};

export default AllocationToolPage;
