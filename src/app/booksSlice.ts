import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book } from 'types';
import { RootState } from './store';

export const fetchBookById = createAsyncThunk<Book, number>(
  'books/fetchById',
  async (bookId: number, thunkAPI) => {
    const response = await fetch(`api/books/${bookId}`);
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch book information.',
      });
    }
    const data: Book = await response.json();
    return data;
  }
);

export const fetchBooks = createAsyncThunk<Book[]>('books/fetchAll', async (_, thunkAPI) => {
  const response = await fetch('api/books');
  if (response.status !== 200) {
    return thunkAPI.rejectWithValue({
      message: 'Failed to fetch books',
    });
  }
  const data: Book[] = await response.json();
  return data;
});

interface BooksState {
  entities: Book[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  loading: 'idle',
} as BooksState;

/* eslint-disable no-param-reassign */
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const selectBookStatus = (state: RootState) => state.books.loading;
export const selectBooks = (state: RootState) => state.books.entities;
export default booksSlice.reducer;
