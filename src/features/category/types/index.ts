export interface Category {
	id: string;
	name: string;
	href: string;
	icons: {
		height: string | null;
		url: string;
		width: string | null;
	}[];
}
