import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MemberIssue } from 'types';
import { RootState } from './store';
/* eslint-disable no-param-reassign */

export const fetchMemberById = createAsyncThunk<MemberIssue, number>(
  'members/fetchById',
  async (memberId: number, thunkAPI) => {
    const response = await fetch(`api/members/${memberId}`);
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue({
        message: 'Failed',
      });
    }
    const data: MemberIssue = await response.json();
    return data;
  }
);

interface MemberState {
  entity: MemberIssue;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entity: {},
  loading: 'idle',
} as MemberState;

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    resetMember: (state) => {
      state.entity = initialState.entity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMemberById.fulfilled, (state, { payload }) => {
      state.entity = payload;
      state.loading = 'succeeded';
    });
  },
});
/* eslint-enable no-param-reassign */

export const selectSingleMemberStatus = (state: RootState) => state.member.loading;
export const selectMember = (state: RootState) => state.member.entity;
export const { resetMember } = memberSlice.actions;
export default memberSlice.reducer;
