import { Dispatch, SetStateAction } from 'react';
import { useGifForm } from '../hooks/useGifForm';

type FormGifProps = {
	setCategory: Dispatch<SetStateAction<string>>;
};

export const FormGif = ({ setCategory }: FormGifProps) => {
	const { _handleOnChange, _handleOnSubmit, error, value } =
		useGifForm(setCategory);

	return (
		<form
			onSubmit={_handleOnSubmit}
			className=" flex justify-center items-center"
		>
			<div>
				<input
					className="w-full my-2 p-2 sm:w-md mr-4 outline  focus:outline-[var(--primary-color)] text-lg rounded-sm"
					type="text"
					placeholder="Busca aquí..."
					onChange={_handleOnChange}
					value={value}
				/>
				<button
					type="submit"
					className="w-full my-2 p-2 sm:w-min outline-none rounded-sm bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color-hover)] cursor-pointer"
				>
					Buscar
				</button>
				{error && (
					<p className=" text-red-600 ">
						No puede dejar el campo vacio {'>:v '}⚠
					</p>
				)}
			</div>
		</form>
	);
};
