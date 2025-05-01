import pacman from '../assets/pacman.svg';
export const SpinnerLoading = () => {
	return (
		<>
			<h1 className="text-3xl text-center">CARGANDOOO xd</h1>
			<figure className="flex justify-center ">
				<img src={`${pacman}`} alt="" />
			</figure>
		</>
	);
};
