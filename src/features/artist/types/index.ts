export interface Artist {
	id: string;
	name: string;
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string | null;
		total: number;
	};
	genres: string[];
	href: string;
	images: [
		{
			height: number | null;
			url: string;
			width: number | null;
		}
	];
	popularity: number;
	type: string;
	uri: string;
}
