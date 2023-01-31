import { SearchTab, SearchInput } from '@/features/search';
import { useCustomSearchParams } from '@/hooks';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
	const location = useLocation();
	const { query } = useCustomSearchParams();

	const isSearch = useMemo(
		() => (location.pathname.startsWith('/search') ? true : false),
		[location.pathname]
	);

	return (
		<nav className='sticky top-0 z-10 bg-black/70 backdrop-blur-sm'>
			<div className='container flex items-center justify-between py-2'>
				<div className='flex items-center gap-6'>
					<div className='space-x-6 lg:space-x-8'>
						<button className='btn text-lg text-white disabled:text-light lg:text-xl'>
							<i className='bi bi-chevron-left text-white'></i>
						</button>

						<button className='btn text-lg text-white disabled:text-light lg:text-xl'>
							<i className='bi bi-chevron-right'></i>
						</button>
					</div>

					{isSearch && (query || query === '') && (
						<div className='hidden lg:block'>
							<SearchInput />
						</div>
					)}
				</div>

				<div>
					<button className='btn py-2 px-6 text-light hover:text-white lg:py-2.5 lg:px-8 lg:text-base'>
						Sign up
					</button>

					<button className='btn rounded-full bg-white py-2 px-6 text-dark hover:scale-105 lg:py-2.5 lg:px-8 lg:text-base'>
						Log in
					</button>
				</div>
			</div>

			{isSearch && (
				<div>
					{(query || query === '') && (
						<div className='container pt-2 lg:hidden'>
							<SearchInput />
						</div>
					)}

					{query && <SearchTab />}
				</div>
			)}
		</nav>
	);
};
