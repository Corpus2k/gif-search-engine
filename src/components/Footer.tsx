export const Footer = () => {
	return (
		<footer className="w-full  bg-[var(--primary-color)] rounded-xl text-white  text-sm  p-2">
			<div className="my-4 flex justify-center flex-col items-center">
				<div className="my-5">
					<p>
						Realizado con fines educativos por{' '}
						<strong title="Carlos corpus">CARLOS CORPUS</strong> ©.
					</p>

					<div className="flex justify-center m-4 gap-2 ">
						<a
							href="https://github.com/Corpus2k"
							target="_blank"
							rel=" noopener noreferrer"
							title="GitHub Carlos corpus"
						>
							<img
								className="w-12"
								src="/github.svg"
								alt="GitHub Carlos corpus"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/corpusdev/"
							target="_blank"
							title="Linkedin Carlos corpus"
							rel=" noopener noreferrer"
						>
							<img
								className="w-12"
								src="/linkedin.svg"
								alt="Linkedin Carlos corpus"
							/>
						</a>
					</div>
				</div>
				<p>
					GIFs proporcionados por{' '}
					<a
						href="https://developers.giphy.com/"
						target="_blank"
						rel=" noopener noreferrer"
					>
						<strong
							title="GIPHY"
							className="underline decoration-1"
						>
							GIPHY
						</strong>
					</a>{' '}
					, todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
};
