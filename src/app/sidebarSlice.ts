import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SidebarState {
  toggled: boolean;
}

const initialState: SidebarState = {
  toggled: false,
};

/* eslint-disable no-param-reassign */
export const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.toggled = !state.toggled;
    },
    toggleSidebarValue: (state, action: PayloadAction<boolean>) => {
      state.toggled = action.payload;
    },
  },
});
/* eslint-enable no-param-reassign */
export const { toggleSidebar, toggleSidebarValue } = SidebarSlice.actions;
export const selectSidebar = (state: RootState) => state.sidebar;
export default SidebarSlice.reducer;
