import { HeaderCard } from '@/components/elements';
import { getDetailArtist } from '@/features/artist';
import { useAppDispatch, useAppSelector } from '@/lib';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const ArtistDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { status, artist } = useAppSelector(state => state.getDetailArtist);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getDetailArtist({ id: id ?? '' }));
	}, [dispatch, id]);

	const headerCardData = useMemo(() => {
		return {
			category: 'Artist',
			name: artist?.name || '',
			description: '',
			subDescription: `${
				artist?.followers.total.toLocaleString() || 0
			} followers - ${artist?.popularity || 0} popularity`,
			image: artist?.images[0]
				? artist.images[0].url
				: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
		};
	}, [artist]);

	return status !== 'succeeded' || !artist ? null : (
		<div className='container py-8'>
			<HeaderCard data={headerCardData} />
		</div>
	);
};
