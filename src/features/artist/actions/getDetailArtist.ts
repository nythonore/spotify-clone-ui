import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState } from '@/types';
import { Artist } from '../types';

interface GetDetailArtistProps {
	id: string;
}

interface GetDetailArtistPropsState extends ReduxState {
	artist: Artist | null;
}

const initialState: GetDetailArtistPropsState = {
	artist: null,
	status: 'idle',
	error: null,
};

export const getDetailArtist = createAsyncThunk<Artist, GetDetailArtistProps>(
	'artist/getDetailArtist',
	async ({ id }) => {
		try {
			const { data } = await http.get(`v1/artists/${id}`);

			return data;
		} catch (error) {
			return error;
		}
	}
);

const getDetailArtistSlice = createSlice({
	name: 'getDetailArtistSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getDetailArtist.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getDetailArtist.fulfilled,
			(state, action: PayloadAction<Artist>) => {
				state.status = 'succeeded';
				state.artist = action.payload;
			}
		);
		builder.addCase(
			getDetailArtist.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getDetailArtistSlice.reducer;
