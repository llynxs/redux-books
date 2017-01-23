import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//root reducers
import AllReducers from './reducers/index';

import addAuthor from './data/authors';
import addBook from './data/books';

const defaultState = {
	addAuthor,
	addBook
};

const store = createStore(AllReducers, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;