export const Footer = () => {
	return (
		<footer className="w-full  bg-[var(--primary-color)] rounded-xl text-white  text-2xl  p-18">
			<div className="my-4 flex justify-center flex-col items-center">
				<div className="my-5">
					<p>
						Realizado con fines educativos por{' '}
						<strong title="Carlos corpus">CARLOS CORPUS</strong> ©.
					</p>

					<div className="flex justify-center mx-4 gap-2">
						<a
							href="https://github.com/Corpus2k"
							target="_blank"
							rel=" noopener noreferrer"
							title="GitHub Carlos corpus"
						>
							<img
								style={{ maxWidth: '42px' }}
								src="/github.svg"
								alt=""
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/corpusdev/"
							target="_blank"
							title="Linkedin Carlos corpus"
							rel=" noopener noreferrer"
						>
							<img
								style={{ maxWidth: '42px' }}
								src="/linkedin.svg"
								alt=""
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
