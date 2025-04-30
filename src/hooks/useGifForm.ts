import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useState,
} from 'react';

export const useGifForm = (setCategory: Dispatch<SetStateAction<string>>) => {
	const [value, setValue] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const _handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const valueInput = e.target.value;
		setValue(valueInput);

		if (valueInput.trim() !== '' && error) setError(false);
	};

	const _handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (value.trim() === '') {
			setError(true);
			return;
		}

		setError(false);
		setCategory(value);
		_handleResetInput();
	};

	const _handleResetInput = () => {
		setValue('');
	};
	return {
		value,
		error,
		_handleOnChange,
		_handleOnSubmit,
	};
};
