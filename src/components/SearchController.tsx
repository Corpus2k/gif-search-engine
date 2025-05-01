import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { DisplayGif } from './DisplayGif';
import { useApi } from '../hooks/useApi';
import { URLAPIResponse } from '../types/TypeGifs';
import { Header } from './Header';
import { Pagination } from './Pagination';

export const SearchController = () => {
	const [category, setCategory] = useState<string>('');
	const [countPage, setCountPage] = useState<number>(1);

	const API_KEY = `ZIQOXTdWyJZzuqI65OTDbMVZQt9jqUHM`;
	const LIMIT = 10;

	const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}`;
	const { data, error, loading } = useApi<URLAPIResponse>(
		URL_API,
		LIMIT,
		countPage
	);
	console.log(data);
	const totalPage = data ? Math.ceil(data.pagination.total_count / LIMIT) : 0;
	return (
		<>
			<Header />
			<AddCategory setCategory={setCategory} />
			<DisplayGif data={data} error={error} loading={loading} />
			<Pagination
				setCountPage={setCountPage}
				totalPage={totalPage}
				countPage={countPage}
			/>
		</>
	);
};
