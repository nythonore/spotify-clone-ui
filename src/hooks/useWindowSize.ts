import { useEffect, useState } from 'react';

interface WindowSize {
	width: number;
	height: number;
}

export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		window.addEventListener('resize', handleOnResize);
		return () => window.removeEventListener('resize', handleOnResize);
	}, []);

	const handleOnResize = () =>
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

	return windowSize;
};
