import { useEffect, useState } from 'react';

type ApiError = {
	error: boolean;
	status: number | null;
	statusText: string;
};

export const useApi = <T>(URL_API: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<ApiError>({
		error: false,
		status: null,
		statusText: '',
	});

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setLoading(true);
		const getData = async () => {
			try {
				const res = await fetch(URL_API, { signal });

				if (!res.ok) {
					const dataError: ApiError = {
						error: true,
						status: res.status ?? 500,
						statusText: res.statusText || 'Error en la petición',
					};
					setError(dataError);
					return;
				}

				const data: T = await res.json();
				setError({
					error: false,
					status: res.status,
					statusText: res.statusText || 'petición aceptada',
				});
				setData(data);
			} catch (error) {
				if ((error as DOMException).name === 'AbortError') {
					console.log('petición cancelada');
					return;
				}

				if (
					error &&
					typeof error === 'object' &&
					'status' in error &&
					'statusText' in error
				) {
					const err = error as ApiError;
					setError({
						error: true,
						status: err.status ?? 500,
						statusText: err.statusText || 'Error en la petición',
					});
				} else {
					setError({
						error: true,
						status: 503, // Service Unavailable para errores de conexión o similares
						statusText: 'Error desconocido :(',
					});
				}
			} finally {
				setLoading(false);
			}
		};

		getData();

		return () => {
			controller.abort();
		};
	}, [URL_API]);

	return {
		data,
		loading,
		error,
	};
};
