import { HeaderCard } from '@/components/elements';
import { getDetailPlaylist } from '@/features/playlist/actions';
import { PlaylistTrack } from '@/features/playlist/components/PlaylistTrack';
import { useAppDispatch, useAppSelector } from '@/lib';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const PlaylistDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { status, playlist } = useAppSelector(state => state.getDetailPlaylist);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getDetailPlaylist({ id: id ?? '' }));
	}, [dispatch, id]);

	return status !== 'succeeded' || !playlist ? null : (
		<div className='container py-8'>
			<HeaderCard
				data={{
					category: 'playlist',
					name: playlist.name,
					description: playlist.description,
					subDescription: `${playlist.owner.display_name} - ${playlist.followers.total} followers - ${playlist.tracks.total} songs`,
					image: playlist.images[0].url,
				}}
			/>

			<div className='mt-8'>
				<PlaylistTrack tracks={playlist.tracks.items} />
			</div>
		</div>
	);
};
