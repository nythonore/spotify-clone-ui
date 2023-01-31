import { useMemo } from 'react';

export const useGreetings = (): string => {
	const today = new Date();
	const currentHour = today.getHours();

	return useMemo(() => {
		return currentHour < 12
			? 'Good morning'
			: currentHour < 18
			? 'Good afternoon'
			: 'Good evening';
	}, [currentHour]);
};
