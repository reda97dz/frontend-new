import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MemberIssue } from 'types';
import { RootState } from './store';
/* eslint-disable no-param-reassign */

export const fetchMembers = createAsyncThunk<MemberIssue[]>(
  'members/fetchAll',
  async (_, thunkAPI) => {
    const response = await fetch('api/members');
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue({
        message: 'Failed',
      });
    }
    const data: MemberIssue[] = await response.json();
    return data;
  }
);

interface MembersState {
  entities: MemberIssue[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  loading: 'idle',
} as MembersState;

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMembers.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchMembers.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchMembers.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
/* eslint-enable no-param-reassign */

export const selectMemberStatus = (state: RootState) => state.members.loading;
export const selectMembers = (state: RootState) => state.members.entities;
export default membersSlice.reducer;
