const config = {
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	SPOTIFY_ACCOUNT_API:
		process.env.REACT_APP_SPOTIFY_ACOUNT_API ??
		'https://accounts.spotify.com/api',
	SPOTIFY_API: process.env.REACT_APP_SPOTIFY_API ?? 'https://api.spotify.com',
	SPOTIFY_CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
};

export default config;
