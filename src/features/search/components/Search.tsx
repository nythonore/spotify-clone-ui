import { SearchAlbumContainer } from './SearchAlbumContainer';
import { SearchPlaylistContainer } from './SearchPlaylistContainer';
import { useMemo } from 'react';
import { useCustomSearchParams } from '@/hooks';
import { SearchArtistContainer } from '@/features/search/components/SearchArtistContainer';

export const Search = () => {
	const { query, type } = useCustomSearchParams();

	return useMemo(
		() =>
			query ? (
				<div className='container space-y-8 py-8'>
					{['', 'artists'].includes(type ?? '') && (
						<SearchArtistContainer q={query} />
					)}

					{['', 'albums'].includes(type ?? '') && (
						<SearchAlbumContainer q={query} />
					)}

					{['', 'playlists'].includes(type ?? '') && (
						<SearchPlaylistContainer q={query} />
					)}
				</div>
			) : null,
		[query, type]
	);
};
