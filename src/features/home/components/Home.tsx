import { AlbumContainer } from '@/features/album';
import { CategoryContainer } from '@/features/category';
import { PlaylistContainer } from '@/features/playlist';

export const Home = () => {
	return (
		<div className='container space-y-8 py-8'>
			<CategoryContainer />
			<AlbumContainer />
			<PlaylistContainer />
		</div>
	);
};
