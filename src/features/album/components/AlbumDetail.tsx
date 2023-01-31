import { HeaderCard } from '@/components/elements';
import { getDetailAlbum } from '@/features/album';
import { AlbumTrack } from '@/features/album/components/AlbumTrack';
import { useAppDispatch, useAppSelector } from '@/lib';
import { getYearFromDate } from '@/utils';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AlbumDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { status, album } = useAppSelector(state => state.getDetailAlbum);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getDetailAlbum({ id: id ?? '' }));
	}, [dispatch, id]);

	return status !== 'succeeded' || !album ? null : (
		<div className='container py-8'>
			<HeaderCard
				data={{
					category: 'album',
					name: album.name,
					description: '',
					subDescription: `${album.artists[0].name} - ${getYearFromDate(
						'2023-01-01'
					)} - ${album.tracks.total} songs`,
					image: album.images[0].url,
				}}
			/>

			<div className='mt-8'>
				<AlbumTrack tracks={album.tracks.items} />
			</div>
		</div>
	);
};
