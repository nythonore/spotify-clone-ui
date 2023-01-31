import { TrackCard } from '@/components/elements';
import { getNewReleasesAlbum } from '@/features/album';
import { useAppDispatch, useAppSelector } from '@/lib';
import { getYearFromDate } from '@/utils';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AlbumContainer = () => {
	const { status, albums } = useAppSelector(state => state.getNewReleasesAlbum);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getNewReleasesAlbum({ params: { limit: 5 } }));
	}, [dispatch]);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<Link
					to='#'
					className='hover-primary text-lg font-semibold text-white hover:underline lg:text-xl'
				>
					More of what you like
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
					{albums?.albums.items.map((album, key) => (
						<TrackCard
							key={key}
							prefix='album'
							data={{
								id: album.id,
								name: album.name,
								description: `${getYearFromDate(album.release_date)} - ${
									album.artists[0].name
								}`,
								image: album.images[0].url,
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
};
