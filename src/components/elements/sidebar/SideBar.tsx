import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

interface SideBarProps {
	toggleSideBar: () => void;
}

export const SideBar = ({ toggleSideBar }: SideBarProps) => {
	const menus = [
		{
			icon: <i className='bi bi-house-door-fill text-2xl'></i>,
			label: 'Home',
			path: '/',
		},
		{
			icon: <i className='bi bi-search text-2xl'></i>,
			label: 'Search',
			path: '/search',
		},
		{
			icon: <i className='bi bi-bookshelf text-2xl'></i>,
			label: 'Your library',
			path: '/library',
		},
	];

	return (
		<aside className='fixed left-0 top-0 z-10 min-h-screen w-full bg-dark lg:w-64'>
			<div className='flex items-center justify-between p-6'>
				<Link to='/'>
					<img
						alt='spotify'
						src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
						className='w-32'
					/>
				</Link>

				<div>
					<button className='btn text-white lg:hidden' onClick={toggleSideBar}>
						<i className='bi bi-x-lg text-2xl'></i>
					</button>
				</div>
			</div>

			<ul className='space-y-2 py-2 px-6'>
				{menus.map((menu, key) => (
					<li key={key}>
						<NavLink
							to={menu.path}
							className={({ isActive }) =>
								clsx(
									'hover-primary flex items-center gap-4 font-medium hover:text-white',
									isActive ? 'text-white' : 'text-light'
								)
							}
						>
							{menu.icon}
							<span className='text-sm capitalize'>{menu.label}</span>
						</NavLink>
					</li>
				))}
			</ul>

			<ul className='space-y-2 p-6'>
				<li>
					<Link
						to='#'
						className='hover-primary text-sm font-medium capitalize text-light hover:text-white'
					>
						Create playlist
					</Link>
				</li>

				<li>
					<Link
						to='#'
						className='hover-primary text-sm font-medium capitalize text-light hover:text-white'
					>
						Liked songs
					</Link>
				</li>
			</ul>
		</aside>
	);
};
