import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '@/lib';
import { ReduxState, Spotify } from '@/types';
import { Category } from '../types';

interface GetCategories {
	categories: Spotify<Category>;
}

interface GetCategoriesProps {
	params: {
		limit: number;
	};
}

interface GetCategoriesState extends ReduxState {
	categories: GetCategories | null;
}

const initialState: GetCategoriesState = {
	categories: null,
	status: 'idle',
	error: null,
};

export const getCategories = createAsyncThunk<
	GetCategories,
	GetCategoriesProps
>('category/getCategories', async ({ params }) => {
	try {
		const { data } = await http.get('v1/browse/categories', { params });

		return data;
	} catch (error) {
		return error;
	}
});

const getCategoriesSlice = createSlice({
	name: 'getCategoriesSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getCategories.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			getCategories.fulfilled,
			(state, action: PayloadAction<GetCategories>) => {
				state.status = 'succeeded';
				state.categories = action.payload;
			}
		);
		builder.addCase(
			getCategories.rejected,
			(state, action: PayloadAction<unknown>) => {
				state.status = 'failed';
				state.error = action.payload;
			}
		);
	},
});

export default getCategoriesSlice.reducer;
