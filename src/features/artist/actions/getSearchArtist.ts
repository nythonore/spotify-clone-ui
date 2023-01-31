import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Artist } from '../types';

interface GetSearchArtist {
	artists: Spotify<Artist>;
}

interface GetSearchArtistProps {
	params: {
		q: string;
	};
}

interface GetSearchArtistSTate extends ReduxState {
	artists: GetSearchArtist | null;
}

const initialState: GetSearchArtistSTate = {
	artists: null,
	status: 'idle',
	error: null,
};

export const getSearchArtist = createAsyncThunk<
	GetSearchArtist,
	GetSearchArtistProps
>('artist/getSearchArtist', async ({ params }) => {
	try {
		const { data } = await http.get('v1/search', {
			params: { ...params, type: 'artist' },
		});

		return data;
	} catch (error) {
		return error;
	}
});

const getSearchArtistSlice = createSlice({
	name: 'getSearchArtistSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getSearchArtist.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getSearchArtist.fulfilled,
			(state, action: PayloadAction<GetSearchArtist>) => {
				state.status = 'succeeded';
				state.artists = action.payload;
			}
		);
		builder.addCase(
			getSearchArtist.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getSearchArtistSlice.reducer;
