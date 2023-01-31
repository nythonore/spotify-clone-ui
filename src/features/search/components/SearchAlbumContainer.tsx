import { useEffect, useMemo } from 'react';
import { TrackCard } from '@/components/elements';
import { getSearchAlbum } from '@/features/album';
import { useAppDispatch, useAppSelector } from '@/lib';
import { getYearFromDate } from '@/utils';

interface SearchAlbumProps {
	q: string;
}

export const SearchAlbumContainer = ({ q }: SearchAlbumProps) => {
	const { status, albums } = useAppSelector(state => state.getSearchAlbum);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSearchAlbum({ params: { q } }));
	}, [dispatch, q]);

	const albumList = useMemo(() => albums?.albums.items || [], [albums]);

	return status !== 'succeeded' || albumList.length === 0 ? null : (
		<div>
			<h2 className='text-xl font-semibold text-white lg:text-2xl'>Albums</h2>

			<div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5'>
				{albumList.map((album, key) => (
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
		</div>
	);
};
