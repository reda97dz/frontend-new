import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import IssueSliceReducer from './issueSlice';
import MembersSliceReducer from './membersSlice';
import MemberSliceReducer from './memberSlice';
import BooksSliceReducer from './booksSlice';
import SidebarSliceReducer from './sidebarSlice';
import AlertSliceReducer from './alertSlice';
import IssuesSliceReducer from './issuesSlice';

const reducer = combineReducers({
  issue: IssueSliceReducer,
  members: MembersSliceReducer,
  member: MemberSliceReducer,
  books: BooksSliceReducer,
  sidebar: SidebarSliceReducer,
  alert: AlertSliceReducer,
  issues: IssuesSliceReducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
