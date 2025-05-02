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
		<nav className="flex justify-center items-center flex-col sm:flex-row my-6 flex-wrap">
			<button
				onClick={_handlePagePrev}
				disabled={countPage === 1}
				className={`w-min outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg rounded-sm ${
					countPage === 1 ? 'disabled:cursor-not-allowed' : ''
				}`}
			>
				Anterior
			</button>
			<div className="p-3">
				<span className="text-center ">
					Pagína {countPage} de {totalPage}
				</span>
			</div>
			<button
				onClick={_handlePageNext}
				disabled={countPage === totalPage}
				className={`w-min outline outline-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 text-lg  rounded-sm ${
					countPage === totalPage ? 'disabled:cursor-not-allowed' : ''
				}`}
			>
				Siguiente
			</button>
		</nav>
	);
};
