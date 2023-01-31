import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Playlist } from '../types';

interface GetSearchPlaylist {
	playlists: Spotify<Playlist>;
}

interface GetSearchPlaylistProps {
	params: {
		q: string;
	};
}

interface GetSearchPlaylistState extends ReduxState {
	playlists: GetSearchPlaylist | null;
}

const initialState: GetSearchPlaylistState = {
	playlists: null,
	status: 'idle',
	error: null,
};

export const getSearchPlaylist = createAsyncThunk<
	GetSearchPlaylist,
	GetSearchPlaylistProps
>('playlist/getSearchPlaylist', async ({ params }) => {
	try {
		const { data } = await http.get('v1/search', {
			params: { ...params, type: 'playlist' },
		});

		return data;
	} catch (error) {
		return error;
	}
});

const getSearchPlaylistSlice = createSlice({
	name: 'getSearchPlaylistSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getSearchPlaylist.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getSearchPlaylist.fulfilled,
			(state, action: PayloadAction<GetSearchPlaylist>) => {
				state.status = 'succeeded';
				state.playlists = action.payload;
			}
		);
		builder.addCase(
			getSearchPlaylist.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getSearchPlaylistSlice.reducer;
