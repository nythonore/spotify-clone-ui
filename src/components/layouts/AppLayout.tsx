import { NavBar, SideBar } from '@/components/elements';
import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

export const AppLayout = () => {
	const [showMobileSidebar, setShowMobileSidebar] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setShowMobileSidebar(false);
	}, [location.pathname]);

	return (
		<>
			<div className='flex'>
				{showMobileSidebar && (
					<SideBar toggleSideBar={() => setShowMobileSidebar(false)} />
				)}

				{!showMobileSidebar && (
					<>
						<div className='hidden lg:block'>
							<SideBar toggleSideBar={() => setShowMobileSidebar(false)} />
						</div>

						<div className='min-h-screen w-full bg-gray lg:ml-64'>
							<NavBar toggleSideBar={() => setShowMobileSidebar(true)} />

							<main className='overflow-hidden'>
								<Outlet />
							</main>
						</div>
					</>
				)}
			</div>

			<ScrollRestoration />
		</>
	);
};
