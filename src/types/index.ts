export interface Spotify<Entry> {
	items: Entry[];
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
}

export interface ReduxState {
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: unknown | null;
}
