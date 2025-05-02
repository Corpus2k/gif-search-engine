import TextRotate from './TextRotate';

export const Header = () => {
	const mensajes = ['GIF', 'MOMENTOS', 'EN TODO'];
	return (
		<header className="flex justify-center items-center ">
			<h1 className="flex justify-center items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
				Los mejores
				<span className="bg-[var(--primary-color)] text-white p-2 m-2 rounded-lg font-extrabold ">
					<TextRotate texts={mensajes} rotationInterval={3000} />
				</span>
			</h1>
		</header>
	);
};
