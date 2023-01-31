import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
	data: Category;
}

export const CategoryCard = ({ data }: CategoryCardProps) => {
	return (
		<Link
			to='#'
			className='hover-primary group flex cursor-pointer items-center gap-2 rounded-md bg-[#2B2F33] hover:bg-light/20 lg:gap-5'
		>
			<img
				alt={data.name}
				src={data.icons[0].url}
				className='h-16 w-16 object-cover lg:h-20 lg:w-20 lg:rounded-tl-md lg:rounded-bl-md'
			/>

			<p className='flex-1 p-2 text-sm font-medium capitalize text-white lg:p-4 lg:p-0 lg:text-base'>
				{data.name}
			</p>

			<div className='hidden lg:block'>
				<div className='group-hover:hover-primary hidden px-3 group-hover:block group-hover:delay-150 group-hover:duration-300'>
					<div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-dark'>
						<i className='bi bi-play-fill text-4xl'></i>
					</div>
				</div>
			</div>
		</Link>
	);
};
