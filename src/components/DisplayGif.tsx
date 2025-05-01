import { ApiError } from '@/hooks/useApi';
import { URLAPIResponse } from '@/types/TypeGifs';
import { ImageGif } from './ImageGif';
import { DisplayError } from './DisplayError';
import { SpinnerLoading } from './SpinnerLoading';

type DisplayGifProps = {
	data: URLAPIResponse | null;
	loading: boolean;
	error: ApiError;
};

export const DisplayGif = ({ data, error, loading }: DisplayGifProps) => {
	return (
		<>
			{error.error && <DisplayError error={error} />}
			{loading && <SpinnerLoading />}
			<main className="my-6">
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{data &&
						data.data.map((gif) => {
							return (
								<ImageGif
									key={gif.id}
									title={gif.title}
									image={gif.images.downsized_medium}
								/>
							);
						})}
				</ul>
			</main>
		</>
	);
};
