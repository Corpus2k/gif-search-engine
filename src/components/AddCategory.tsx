import { Dispatch, SetStateAction } from 'react';
import { FormGif } from './FormGif';

type AddCategoryProps = {
	setCategory: Dispatch<SetStateAction<string>>;
};

export const AddCategory = ({ setCategory }: AddCategoryProps) => {
	return (
		<>
			<FormGif setCategory={setCategory} />
		</>
	);
};
