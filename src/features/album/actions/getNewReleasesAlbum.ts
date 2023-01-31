import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Album } from '../types';

interface GetNewReleasesAlbum {
	albums: Spotify<Album>;
}

interface GetNewReleasesAlbumProps {
	params: {
		limit: number;
	};
}

interface GetNewReleasesAlbumState extends ReduxState {
	albums: GetNewReleasesAlbum | null;
}

const initialState: GetNewReleasesAlbumState = {
	albums: null,
	status: 'idle',
	error: null,
};

export const getNewReleasesAlbum = createAsyncThunk<
	GetNewReleasesAlbum,
	GetNewReleasesAlbumProps
>('album/getNewReleasesAlbum', async ({ params }) => {
	try {
		const { data } = await http.get('v1/browse/new-releases', { params });

		return data;
	} catch (error) {
		return error;
	}
});

const getNewReleasesAlbumSlice = createSlice({
	name: 'getNewReleasesAlbumSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getNewReleasesAlbum.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getNewReleasesAlbum.fulfilled,
			(state, action: PayloadAction<GetNewReleasesAlbum>) => {
				state.status = 'succeeded';
				state.albums = action.payload;
			}
		);
		builder.addCase(
			getNewReleasesAlbum.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getNewReleasesAlbumSlice.reducer;
