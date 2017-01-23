import React from 'react';
import {Link} from 'react-router';

class SingleItem extends React.Component {

	render() {
		const {pageId} = this.props.params;
		const i = this.props.books.findIndex((book) => book.code === pageId);
		const theBook = this.props.books[i];
		const author = this.props.authors[i];

		return (
			<div>
				<div>The SingleItem</div>
				<div className="book">
					<div className="book-wrapper">
						<div className="book-cover">
							<img src={theBook.cover} />
						</div>
						<div className="book-info">
							<div className="book-heading">
								<div>
									<Link to={'/book/' + theBook.code}>{theBook.title}</Link>
								</div>
								<div className="book-year">
									<p>{theBook.date}</p>
								</div>
							</div>
							<div className="book-author">
								<Link to={'/author/' + author.code}>{theBook.author}</Link>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default SingleItem;