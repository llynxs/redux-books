import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import store, {history} from './store';

import App from './components/App';
import BookItem from './components/items/BookItem';
import AuthorItem from './components/items/AuthorItem';
import ListPage from './components/ListPage';

import './style.css';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={ListPage} />
				<Route path="/author/:pageId" component={AuthorItem} />
				<Route path="/book/:pageId" component={BookItem} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(
	router,
	document.getElementById('root')
);
