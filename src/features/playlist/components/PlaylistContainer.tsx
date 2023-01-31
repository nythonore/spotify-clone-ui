import { TrackCard } from '@/components/elements';
import { getFeaturedPlaylists } from '@/features/playlist';
import { useAppDispatch, useAppSelector } from '@/lib';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PlaylistContainer = () => {
	const { status, playlists } = useAppSelector(
		state => state.getFeaturedPlaylists
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFeaturedPlaylists({ params: { limit: 5 } }));
	}, [dispatch]);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<Link
					to='#'
					className='hover-primary text-lg font-semibold text-white hover:underline lg:text-xl'
				>
					Music for any moment
				</Link>

				<Link
					to='#'
					className='hover-primary text-xs uppercase text-light hover:underline'
				>
					Show all
				</Link>
			</div>

			{status === 'succeeded' && (
				<div className='mt-4 flex flex-nowrap gap-5 overflow-x-scroll'>
					{playlists?.playlists.items.map((playlist, key) => (
						<TrackCard
							key={key}
							prefix='playlist'
							data={{
								id: playlist.id,
								name: playlist.name,
								description: playlist.description,
								image: playlist.images[0].url,
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
};
