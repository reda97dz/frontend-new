import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface AlertState {
  message: string;
  severity: 'idle' | 'warning' | 'error' | 'success' | 'info';
}

const initialState: AlertState = {
  message: '',
  severity: 'idle',
};

/* eslint-disable no-param-reassign */
export const AlertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertMessage: (state, action: PayloadAction<AlertState>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    clearAlertMessage: (state) => {
      state.message = '';
      state.severity = 'idle';
    },
  },
});
export const { setAlertMessage, clearAlertMessage } = AlertSlice.actions;
export const selectAlert = (state: RootState) => state.alert;
export default AlertSlice.reducer;
