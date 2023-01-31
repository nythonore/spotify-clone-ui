import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Playlist } from '../types';

interface GetFeaturedPlaylists {
	message: string;
	playlists: Spotify<Playlist>;
}

interface GetFeaturedPlaylistsProps {
	params: {
		limit: number;
	};
}

interface GetFeaturedPlaylistsState extends ReduxState {
	playlists: GetFeaturedPlaylists | null;
}

const initialState: GetFeaturedPlaylistsState = {
	playlists: null,
	status: 'idle',
	error: null,
};

export const getFeaturedPlaylists = createAsyncThunk<
	GetFeaturedPlaylists,
	GetFeaturedPlaylistsProps
>('playlist/getFeaturedPlaylists', async ({ params }) => {
	try {
		const { data } = await http.get('v1/browse/featured-playlists', { params });

		return data;
	} catch (error) {
		return error;
	}
});

const getFeaturedPlaylistsSlice = createSlice({
	name: 'getFeaturedPlaylistsSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getFeaturedPlaylists.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getFeaturedPlaylists.fulfilled,
			(state, action: PayloadAction<GetFeaturedPlaylists>) => {
				state.status = 'succeeded';
				state.playlists = action.payload;
			}
		);
		builder.addCase(
			getFeaturedPlaylists.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getFeaturedPlaylistsSlice.reducer;
