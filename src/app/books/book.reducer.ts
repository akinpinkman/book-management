import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookFailure,
  AddBookSuccess,
} from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {
    return state;
  }),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  ),
  on(AddBookFailure, (state, { error }) => {
    console.log(error);
    return state;
  })
);
