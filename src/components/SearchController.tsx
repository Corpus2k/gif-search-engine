import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { DisplayGif } from './DisplayGif';
import { useApi } from '../hooks/useApi';
import { URLAPIResponse } from '../types/TypeGifs';
import { Header } from './Header';
export const SearchController = () => {
	const [category, setCategory] = useState<string>('');

	const API_KEY = `A8me2q3tJLWKvKAMRoZWxWwKAMIyS5Rj`;
	const LIMIT = 10;
	const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}q=${category}&limit=${LIMIT}`;

	const { data, error, loading } = useApi<URLAPIResponse>(URL_API);

	return (
		<>
			<Header />
			<AddCategory setCategory={setCategory} />
			<DisplayGif />
		</>
	);
};
