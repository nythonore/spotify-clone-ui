import config from '@/config';
import axios, { AxiosResponse } from 'axios';

export const http = axios.create({
	baseURL: config.SPOTIFY_API,
	headers: {
		'Content-Type': 'application/json',
	},
});

http.interceptors.request.use(config => {
	const token = window.localStorage.getItem('token');

	if (token) {
		config.headers!.Authorization = `Bearer ${token}`;
	}

	return config;
});

http.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: any) => {
		const originalConfig = error.config;

		if (error.response.status === 401) {
			try {
				const { data } = await http.post(
					`${config.SPOTIFY_ACCOUNT_API}/token`,
					{
						grant_type: 'client_credentials',
					},
					{
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							Authorization: `Basic ${btoa(
								`${config.SPOTIFY_CLIENT_ID}:${config.SPOTIFY_CLIENT_SECRET}`
							)}`,
						},
					}
				);

				window.localStorage.setItem('token', data.access_token);
				originalConfig.headers.Authorization = `Bearer ${data.access_token}`;

				return http(originalConfig);
			} catch (error) {
				return error;
			}
		}

		return error.response.data;
	}
);
