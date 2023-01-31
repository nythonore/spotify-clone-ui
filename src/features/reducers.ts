import getCategoriesReducer from './category/actions/getCategories';
import getNewReleasesAlbumReducer from './album/actions/getNewReleasesAlbum';
import getFeaturedPlaylistsReducer from './playlist/actions/getFeaturedPlaylists';

import getDetailArtistReducer from './artist/actions/getDetailArtist';
import getDetailAlbumReducer from './album/actions/getDetailAlbum';
import getDetailPlaylistReducer from './playlist/actions/getDetailPlaylist';

import getSearchArtistReducer from './artist/actions/getSearchArtist';
import getSearchAlbumReducer from './album/actions/getSearchAlbum';
import getSearchPlaylistReducer from './playlist/actions/getSearchPlaylist';

const reducers = {
	getCategories: getCategoriesReducer,
	getNewReleasesAlbum: getNewReleasesAlbumReducer,
	getFeaturedPlaylists: getFeaturedPlaylistsReducer,

	getDetailArtist: getDetailArtistReducer,
	getDetailAlbum: getDetailAlbumReducer,
	getDetailPlaylist: getDetailPlaylistReducer,

	getSearchArtist: getSearchArtistReducer,
	getSearchAlbum: getSearchAlbumReducer,
	getSearchPlaylist: getSearchPlaylistReducer,
};

export default reducers;
