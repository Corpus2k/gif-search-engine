import { Dispatch, SetStateAction } from 'react';
import { FormGif } from './FormGif';

type AddCategoryProps = {
	setCategory: Dispatch<SetStateAction<string>>;
};

export const AddCategory = ({ setCategory }: AddCategoryProps) => {
	return (
		<div>
			<h1>Busca los mejores gif de este 2025😎</h1>
			<FormGif setCategory={setCategory}/>
		</div>
	);
};
