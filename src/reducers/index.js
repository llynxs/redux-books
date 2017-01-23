import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import addBook from './bookReducer';
import addAuthor from './authorReducer';

const AllReducers = combineReducers({
	addBook,
	addAuthor,
	routing: routerReducer
});

export default AllReducers;