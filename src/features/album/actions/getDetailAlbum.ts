import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState } from '@/types';
import { AlbumSingle } from '../types';

interface GetDetailAlbumProps {
	id: string;
}

interface GetDetailAlbumState extends ReduxState {
	album: AlbumSingle | null;
}

const initialState: GetDetailAlbumState = {
	album: null,
	status: 'idle',
	error: null,
};

export const getDetailAlbum = createAsyncThunk<
	AlbumSingle,
	GetDetailAlbumProps
>('album/getDetailAlbum', async ({ id }) => {
	try {
		const { data } = await http.get(`v1/albums/${id}`);

		return data;
	} catch (error) {
		return error;
	}
});

const getDetailAlbumSlice = createSlice({
	name: 'getDetailAlbumSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getDetailAlbum.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getDetailAlbum.fulfilled,
			(state, action: PayloadAction<AlbumSingle>) => {
				state.status = 'succeeded';
				state.album = action.payload;
			}
		);
		builder.addCase(
			getDetailAlbum.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getDetailAlbumSlice.reducer;
