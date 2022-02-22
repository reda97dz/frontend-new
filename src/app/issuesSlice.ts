import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IssuesItem } from 'types';
import { RootState } from './store';

export const fetchIssues = createAsyncThunk<IssuesItem[]>(
  'issues/fetchAll',
  async (_, thunkAPI) => {
    const response = await fetch('api/issues');
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch issues',
      });
    }
    const data: IssuesItem[] = await response.json();
    return data;
  }
);

interface IssuesState {
  entities: IssuesItem[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  loading: 'idle',
} as IssuesState;

/* eslint-disable no-param-reassign */
const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchIssues.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchIssues.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
/* eslint-enable no-param-reassign */
export const selectIssuesStatus = (state: RootState) => state.issues.loading;
export const selectIssues = (state: RootState) => state.issues.entities;
export default issuesSlice.reducer;
