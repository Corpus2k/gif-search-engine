import TextRotate from './TextRotate';

export const Header = () => {
	const mensajes = ['GIF.', 'Momentos.', 'En todo.'];
	return (
		<header className="flex justify-center items-center ">
			<h1 className="flex justify-center items-center text-5xl">
				Los mejores
				<span className="bg-[var(--primary-color)] text-white p-2 m-4 rounded-lg font-extrabold ">
					<TextRotate texts={mensajes} rotationInterval={3000} />
				</span>
			</h1>
		</header>
	);
};
