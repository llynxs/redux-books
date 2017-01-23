import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
	render() {
		return (
			<div className="book-app">
				<header className="header">
					<div className="header-logo">
						<Link to="/" className="header-logo__logo">BookList</Link>
					</div>
				</header>
				<div className="content">
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		)
	}
}

export default Main;