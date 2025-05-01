import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
	setCountPage: Dispatch<SetStateAction<number>>;
	totalPage: number;
	countPage: number;
};

export const Pagination = ({
	setCountPage,
	totalPage,
	countPage,
}: PaginationProps) => {
	const _handlePagePrev = () => {
		if (countPage > 1) {
			setCountPage(countPage - 1);
			return;
		}
	};

	const _handlePageNext = () => {
		if (countPage < totalPage) {
			setCountPage(countPage + 1);
			return;
		}
	};
	return (
		<nav className="flex justify-center items-center my-6">
			<button
				onClick={_handlePagePrev}
				disabled={countPage === 1}
				className={`w-3xs outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg rounded-sm ${
					countPage === 1 ? 'disabled:cursor-not-allowed' : ''
				}`}
			>
				Anterior
			</button>
			<span className="text-center mx-5">
				Pagína {countPage} de {totalPage}
			</span>
			<button
				onClick={_handlePageNext}
				disabled={countPage === totalPage}
				className={`w-3xs outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg  rounded-sm ${
					countPage === totalPage ? 'disabled:cursor-not-allowed' : ''
				}`}
			>
				Siguiente
			</button>
		</nav>
	);
};
