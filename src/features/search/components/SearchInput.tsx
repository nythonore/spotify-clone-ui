import { useCustomSearchParams } from '@/hooks';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { query, type } = useCustomSearchParams();

	const inputRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	useEffect(() => {
		setSearchQuery(query || '');
	}, [query]);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchInput = e.target.value;
		const searchPath =
			searchInput && type ? `${searchInput}/${type}` : searchInput;

		navigate(`/search/${searchPath || ''}`);
	};

	return (
		<div className='flex items-center rounded-full bg-white'>
			<div className='px-3 py-2'>
				<i className='bi bi-search text-xl' />
			</div>

			<input
				ref={inputRef}
				type='text'
				value={searchQuery}
				className='form-control text-15px w-full rounded-full border-none p-0 py-2 font-light lg:w-72'
				onChange={handleOnChange}
			/>
		</div>
	);
};
