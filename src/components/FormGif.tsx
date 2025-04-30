import { Dispatch, SetStateAction } from 'react';
import { useGifForm } from '../hooks/useGifForm';

type FormGifProps = {
	setCategory: Dispatch<SetStateAction<string>>;
};

export const FormGif = ({ setCategory }: FormGifProps) => {
	const { _handleOnChange, _handleOnSubmit, error, value } = useGifForm(setCategory);

	return (
		<form onSubmit={_handleOnSubmit}>
			<input
				type="text"
				placeholder="Busca aquí..."
				onChange={_handleOnChange}
				value={value}
			/>
			<button type="submit">Buscar</button>
			{error && <p>No puede dejar el campo vacio ⚠</p>}
		</form>
	);
};
