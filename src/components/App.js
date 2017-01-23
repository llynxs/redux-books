import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actions';

import Main from './Main';

function mapStateToProps(state) {
	return {
		authors: state.addAuthor,
		books: state.addBook
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);

export default App;