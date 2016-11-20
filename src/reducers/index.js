import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


//any Key provided to combineReducers ends up as a global object accessible by all reducers
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;
