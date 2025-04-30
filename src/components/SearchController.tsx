import { useState } from 'react';
import { AddCategory } from './AddCategory';

export const SearchController = () => {
	const [category, setCategory] = useState<string>('');

	console.log(category);
	return (
		<>
			<AddCategory setCategory={setCategory} />
		</>
	);
};
