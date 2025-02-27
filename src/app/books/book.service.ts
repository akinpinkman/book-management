import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  addBook(book: Book): Observable<Book> {
    const err = new Error('Error while adding');
    return of(book);
  }
}
