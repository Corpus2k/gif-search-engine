import { ApiError } from '@/hooks/useApi';

type DisplayErrorProps = {
	error: ApiError;
};
export const DisplayError = ({ error }: DisplayErrorProps) => {
	return (
		<>
			<h2>Ups, ocurrio algo inesperado :c</h2>
			<p>
				Error tipo: {error.status} - {error.statusText}
			</p>
		</>
	);
};
