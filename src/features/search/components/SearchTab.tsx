import { useCustomSearchParams } from '@/hooks';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const SearchTab = () => {
	const { query, type: selected } = useCustomSearchParams();

	const types = ['', 'artists', 'albums', 'playlists'];

	return (
		<div className='py-3'>
			<div className='container'>
				<div className='flex flex-nowrap gap-3 overflow-auto'>
					{types.map((type, key) => (
						<Link
							key={key}
							to={`/search/${query}/${type}`}
							className={clsx(
								'hover-primary cursor-pointer rounded-full py-1.5 px-3.5 text-sm font-normal capitalize',
								selected === type
									? 'bg-white text-dark'
									: 'bg-[#232323] text-light'
							)}
						>
							{type === '' ? 'all' : type}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
