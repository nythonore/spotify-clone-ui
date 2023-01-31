import { Spotify } from '@/types';

export interface Track {
	added_at: string;
	track: {
		id: string;
		name: string;
		duration_ms: number;
		album: {
			id: string;
			name: string;
			images: {
				height: number | null;
				url: string;
				width: number | null;
			}[];
		};
		artists: {
			id: string;
			name: string;
		}[];
	};
}

export interface PlaylistBase {
	id: string;
	name: string;
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	href: string;
	images: {
		height: number | null;
		url: string;
		width: number | null;
	}[];
	owner: {
		id: string;
		display_name: string;
		external_urls: {
			spotify: string;
		};
		href: string;
		type: string;
		uri: string;
	};
	primary_color: string | null;
	public: string | null;
	snapshot_id: string;
	type: string;
	uri: string;
}

export interface Playlist extends PlaylistBase {
	tracks: {
		href: string;
		total: number;
	};
}

export interface PlaylistSingle extends PlaylistBase {
	followers: {
		href: string | null;
		total: number;
	};
	tracks: Spotify<Track>;
}
