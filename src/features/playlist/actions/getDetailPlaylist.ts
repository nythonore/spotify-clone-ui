import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState } from '@/types';
import { PlaylistSingle } from '../types';

interface GetDetailPlaylistProps {
	id: string;
}

interface GetDetailPlaylistState extends ReduxState {
	playlist: PlaylistSingle | null;
}

const initialState: GetDetailPlaylistState = {
	playlist: null,
	status: 'idle',
	error: null,
};

export const getDetailPlaylist = createAsyncThunk<
	PlaylistSingle,
	GetDetailPlaylistProps
>('playlist/getDetailPlaylist', async ({ id }) => {
	try {
		const { data } = await http.get(`v1/playlists/${id}`);

		return data;
	} catch (error) {
		return error;
	}
});

const getDetailPlaylistSlice = createSlice({
	name: 'getDetailPlaylistSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getDetailPlaylist.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getDetailPlaylist.fulfilled,
			(state, action: PayloadAction<PlaylistSingle>) => {
				state.status = 'succeeded';
				state.playlist = action.payload;
			}
		);
		builder.addCase(
			getDetailPlaylist.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getDetailPlaylistSlice.reducer;
