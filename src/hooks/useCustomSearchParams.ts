import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const useCustomSearchParams = () => {
	const { query = '', type = '' } = useParams<{
		query?: string;
		type?: string;
	}>();

	return useMemo(
		() => ({
			query,
			type,
		}),
		[query, type]
	);
};
