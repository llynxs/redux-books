import React from 'react';
import {Link} from 'react-router';

class BookItem extends React.Component {

	render() {
		const {pageId} = this.props.params;
		const {authors, books} = this.props;
		const bookIndex = books.findIndex((book) => book.code === pageId);
		const theBook = books[bookIndex];

		return (
			<div className="book-item">
				<div className="book-item__wrapper">
					<div className="book-item__heading">
						<div className="book-item__heading__title">
							<span to={'/book/' + theBook.code}>{theBook.title}</span>
						</div>
						<div className="book-item__heading__year">
							<p>({theBook.date})</p>
						</div>
					</div>
					<div className="book-item__content">
						<div className="book-item__content__info">
							<div className="book-item__content__author">
								{
									authors.map((author, key) => {
										for (var i = 0; i < author.articles.length; i++) {
											if (author.articles[i] === theBook.code) {
												return (
													<span key={key} className="bookitem__content__author__author">
														<Link to={'/author/'+ author.code}>
															{author.name}
														</Link>
													</span>
												)
											}
										}
									})
								}
							</div>
							<div className="book-item__content__description">
								<p className="book-description__text">{theBook.description}</p>
							</div>
						</div>
						<div className="book-item__content__cover">
							<img src={theBook.cover} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BookItem;