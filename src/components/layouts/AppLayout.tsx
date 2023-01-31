import { NavBar, SideBar } from '@/components/elements';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const AppLayout = () => {
	return (
		<>
			<div className='flex'>
				<div className='hidden lg:block'>
					<SideBar />
				</div>

				<div className='min-h-screen w-full overflow-auto bg-gray lg:ml-64'>
					<NavBar />

					<main className='overflow-hidden'>
						<Outlet />
					</main>
				</div>
			</div>

			<ScrollRestoration />
		</>
	);
};
