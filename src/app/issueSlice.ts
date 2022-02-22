import moment from 'moment';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import issueService from 'services/issueService';
import { Issue } from 'types';
import { setAlertMessage } from './alertSlice';
import { RootState } from './store';

export const createIssue = createAsyncThunk(
  'issue/createIssue',
  async (issueItem: Issue, thunkAPI) => {
    // eslint-disable-next-line consistent-return
    const response = await issueService.createIssue(issueItem);
    setAlertMessage({ message: 'Error', severity: 'warning' });
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue({
        message: 'failed',
      });
    }
    return thunkAPI.fulfillWithValue({
      message: 'success',
    });
  }
);

interface IssueState {
  memberId: string;
  bookIds: string[];
  step: number;
  issueDate: string;
  returnDate: string;
  memberState: number;
  issueState: 'idle' | 'pending' | 'success' | 'failed';
}

const initialState: IssueState = {
  step: 1,
  memberId: '',
  bookIds: [''],
  issueDate: moment().toDate().toString(),
  returnDate: moment().add(14, 'days').toDate().toString(),
  memberState: 0,
  issueState: 'idle',
};

/* eslint-disable no-param-reassign */
export const IssueSlice = createSlice({
  name: 'issueBook',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setMember: (state, action: PayloadAction<string>) => {
      state.memberId = action.payload;
    },
    setMemberState: (state, action: PayloadAction<number>) => {
      state.memberState = action.payload;
    },
    addBookOption: (state) => {
      state.memberState -= 1;
      state.bookIds.push('');
    },
    setBook: (state, action: PayloadAction<{ book: string; number: number }>) => {
      state.bookIds[action.payload.number] = action.payload.book;
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.memberState += 1;
      state.bookIds.splice(action.payload, 1);
    },
    clearBook: (state, action: PayloadAction<number>) => {
      state.bookIds[action.payload] = '';
    },
    setIssueDate: (state, action: PayloadAction<string>) => {
      state.issueDate = action.payload;
      state.returnDate = '';
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload;
    },
    issueBook: (state) => {
      state.step += 1;
    },
    resetIssue: (state) => {
      state.step = 1;
      state.memberId = '';
      state.bookIds = [''];
      state.memberState = 0;
      state.issueState = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createIssue.pending, (state) => {
      state.issueState = 'pending';
    });
    builder.addCase(createIssue.fulfilled, (state) => {
      state.issueState = 'success';
    });
    builder.addCase(createIssue.rejected, (state) => {
      state.issueState = 'failed';
    });
  },
});

export const {
  nextStep,
  previousStep,
  setStep,
  setMember,
  setMemberState,
  addBookOption,
  setBook,
  removeBook,
  clearBook,
  setIssueDate,
  setReturnDate,
  resetIssue,
  issueBook,
} = IssueSlice.actions;
export const selectIssue = (state: RootState) => state.issue;
export default IssueSlice.reducer;
