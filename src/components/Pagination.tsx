export const Pagination = () => {
	return (
		<nav className="flex justify-center items-center">
			<button className="w-3xs outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg   rounded-sm">
				Retroceder
			</button>
			<span className="text-center mx-5">paginas</span>
			<button className="w-3xs outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg  rounded-sm">
				Siguiente
			</button>
		</nav>
	);
};
