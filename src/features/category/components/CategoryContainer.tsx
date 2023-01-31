import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib';
import { useGreetings } from '@/hooks';
import { getCategories } from '@/features/category';
import { CategoryCard } from './CategoryCard';

export const CategoryContainer = () => {
	const greetings = useGreetings();

	const { status, categories } = useAppSelector(state => state.getCategories);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories({ params: { limit: 6 } }));
	}, [dispatch]);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<h2 className='text-xl font-semibold text-white lg:text-3xl'>
					{greetings}
				</h2>
			</div>

			{status === 'succeeded' && (
				<div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-3'>
					{categories?.categories.items.map((category, key) => (
						<CategoryCard key={key} data={category} />
					))}
				</div>
			)}
		</div>
	);
};
