import { The480_WStill } from '@/types/TypeGifs';

type ImageGifProps = {
	title: string;
	image: The480_WStill;
};
export const ImageGif = ({ title, image }: ImageGifProps) => {
	return (
		<li className="outline-1 outline-[var(--primary-color)] outline-offset-2 p-2 rounded-sm">
			<h2 className="text-xl text-center ">{title || 'SIN TITULO XD'}</h2>
			<figure>
				<img
					src={image.url}
					alt={title || 'SIN TITULO XD'}
					className="w-full max-h-50 object-cover"
				/>
			</figure>
		</li>
	);
};
