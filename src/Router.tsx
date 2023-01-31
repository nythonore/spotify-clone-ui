import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layouts';
import { Home } from '@/features/home';
import { Search } from '@/features/search';
import { PlaylistDetail } from '@/features/playlist';
import { ArtistDetail } from '@/features/artist';
import { AlbumDetail } from '@/features/album';

const Router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'artist',
				children: [{ path: ':id', element: <ArtistDetail /> }],
			},
			{
				path: 'album',
				children: [{ path: ':id', element: <AlbumDetail /> }],
			},
			{
				path: 'playlist',
				children: [{ path: ':id', element: <PlaylistDetail /> }],
			},
			{
				path: 'search',
				children: [
					{ index: true, element: <Search /> },
					{
						path: ':query',
						children: [
							{ index: true, element: <Search /> },
							{ path: ':type', element: <Search /> },
						],
					},
				],
			},
		],
	},

	{ path: '*', element: <Navigate to='/' /> },
]);

export default Router;
