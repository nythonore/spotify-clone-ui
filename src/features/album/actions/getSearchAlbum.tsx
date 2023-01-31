import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Album } from '../types';

interface GetSearchAlbum {
	albums: Spotify<Album>;
}

interface GetSearchAlbumProps {
	params: {
		q: string;
	};
}

interface GetSearchAlbumAlbumState extends ReduxState {
	albums: GetSearchAlbum | null;
}

const initialState: GetSearchAlbumAlbumState = {
	albums: null,
	status: 'idle',
	error: null,
};

export const getSearchAlbum = createAsyncThunk<
	GetSearchAlbum,
	GetSearchAlbumProps
>('album/getSearchAlbum', async ({ params }) => {
	try {
		const { data } = await http.get('v1/search', {
			params: { ...params, type: 'album' },
		});

		return data;
	} catch (error) {
		return error;
	}
});

const getSearchAlbumSlice = createSlice({
	name: 'getSearchAlbumSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getSearchAlbum.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getSearchAlbum.fulfilled,
			(state, action: PayloadAction<GetSearchAlbum>) => {
				state.status = 'succeeded';
				state.albums = action.payload;
			}
		);
		builder.addCase(
			getSearchAlbum.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getSearchAlbumSlice.reducer;
