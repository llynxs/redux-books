import React from "react";
import BookPage from './BookPage';

// допилить переход по автору!!!

class ListPage extends React.Component {
	render() {
		const {books} = this.props;

		return (
			<ul className="book-list">
				{books.map(
					(book, key) =>
						<BookPage key={key} i={key} book={book} code={book.code} {...this.props} />
				)}
			</ul>
		)
	}
}

export default ListPage;