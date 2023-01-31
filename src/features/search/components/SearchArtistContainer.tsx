import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib';
import { ArtistCard, getSearchArtist } from '@/features/artist';

interface SearchArtistContainerProps {
	q: string;
}

export const SearchArtistContainer = ({ q }: SearchArtistContainerProps) => {
	const { status, artists } = useAppSelector(state => state.getSearchArtist);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSearchArtist({ params: { q } }));
	}, [dispatch, q]);

	const artistList = useMemo(() => artists?.artists.items || [], [artists]);

	return status !== 'succeeded' || artistList.length === 0 ? null : (
		<div>
			<h2 className='text-xl font-semibold text-white lg:text-2xl'>Artists</h2>

			<div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5'>
				{artistList.map((artist, key) => (
					<ArtistCard
						key={key}
						data={{
							id: artist.id,
							name: artist.name,
							description: 'Artist',
							image: artist.images[0]
								? artist.images[0].url
								: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
						}}
					/>
				))}
			</div>
		</div>
	);
};
