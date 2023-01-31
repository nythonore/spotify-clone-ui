import { Link } from 'react-router-dom';

interface TrackCardPros {
	prefix: 'playlist' | 'album';
	data: {
		id: string;
		name: string;
		description: string;
		image: string;
	};
}

export const TrackCard = ({ prefix, data }: TrackCardPros) => {
	return (
		<Link
			to={`/${prefix}/${data.id}`}
			className='hover-primary group min-w-[50%] flex-1 cursor-pointer rounded-lg bg-[#171717] py-2 shadow-lg hover:bg-[#302F2F] hover:bg-opacity-70 md:min-w-[30%] lg:p-4 xl:min-w-0'
		>
			<div>
				<img
					alt={data.name}
					src={data.image}
					className='h-40 w-full rounded-md object-cover'
				/>

				<div className='group-hover:hover-primary relative hidden group-hover:block group-hover:delay-150 group-hover:duration-300'>
					<div className='absolute bottom-1 right-2 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-dark'>
						<i className='bi bi-play-fill text-4xl'></i>
					</div>
				</div>
			</div>

			<div className='mt-4'>
				<h2 className='text-[15px] font-semibold text-white line-clamp-1'>
					{data.name}
				</h2>
				<p className='mt-2 text-sm font-light text-light line-clamp-2'>
					{data.description}
				</p>
			</div>
		</Link>
	);
};
