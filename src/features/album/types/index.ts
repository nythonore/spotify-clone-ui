import { Spotify } from '@/types';

export interface AlbumTrackSingle {
	id: string;
	name: string;
	artists: {
		id: string;
		name: string;
	}[];
	duration_ms: number;
}

export interface Album {
	id: string;
	name: string;
	album_type: string;
	artists: {
		id: string;
		name: string;
		external_urls: {
			spotify: string;
		};
		href: string;
		type: string;
		uri: string;
	}[];
	available_markets: string[];
	external_urls: {
		spotify: string;
	};
	href: string;
	images: {
		height: number | null;
		url: string;
		width: number | null;
	}[];
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

export interface AlbumSingle {
	id: string;
	name: string;
	artists: {
		id: string;
		name: string;
	}[];
	images: {
		height: number | null;
		url: string;
		width: number | null;
	}[];
	tracks: Spotify<AlbumTrackSingle>;
}
