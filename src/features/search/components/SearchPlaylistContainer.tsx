import { useEffect, useMemo } from 'react';
import { TrackCard } from '@/components/elements';
import { useAppDispatch, useAppSelector } from '@/lib';
import { getSearchPlaylist } from '@/features/playlist';

interface SearchAlbumProps {
	q: string;
}

export const SearchPlaylistContainer = ({ q }: SearchAlbumProps) => {
	const { status, playlists } = useAppSelector(
		state => state.getSearchPlaylist
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSearchPlaylist({ params: { q } }));
	}, [dispatch, q]);

	const playlistList = useMemo(
		() => playlists?.playlists.items || [],
		[playlists]
	);

	return status !== 'succeeded' || playlistList.length === 0 ? null : (
		<div>
			<h2 className='text-xl font-semibold text-white lg:text-2xl'>
				Playlists
			</h2>

			<div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5'>
				{playlistList.map((playlist, key) => (
					<TrackCard
						key={key}
						prefix='playlist'
						data={{
							id: playlist.id,
							name: playlist.name,
							description: `By ${playlist.owner.display_name}`,
							image: playlist.images[0].url,
						}}
					/>
				))}
			</div>
		</div>
	);
};
