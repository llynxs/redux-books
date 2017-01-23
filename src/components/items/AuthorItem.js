import React from 'react';
import {Link} from 'react-router';

class AuthorItem extends React.Component {

	render() {
		const {pageId} = this.props.params;
		const i = this.props.authors.findIndex((author) => author.code === pageId);
		const author = this.props.authors[i];
		
		const bookListItem = author.books.map(
			(book, key) => {
				return (
					<li key={key} className="author-books-list__item">
						<div className="author-books-list__item__cover">
							<Link to={'/book/' + book.code}>
								<img src={book.cover} alt="cover"/>
							</Link>
						</div>
						<span className="author-books-list__item__title">
							<Link to={'/book/' + book.code}>{book.title}</Link>
						</span>
					</li>
				)
			}
		)

		return (
			<div className="author">
				<div className="author-wrapper">
					<div className="author-name">
						<div className="author-name">
							<h2>{author.name}</h2>
							<span>{author.date}</span>
						</div>
					</div>
					<div className="author-image">
						<img src={author.photo} alt="author image" />
					</div>
					<div className="author-info">
						<div className="author-small__description">
							<span className="author-small__description__text">
								{author.smallDescription}
							</span>
						</div>
						<div className="author-description">
							<span>{author.description}</span>
						</div>
					</div>
				</div>
				<div className="author-books">
					<div className="author-books__heading"> 
						<h3 className="author-books__heading__heading">Books</h3>
					</div>
					<ul className="author-books-list">
						{bookListItem}
					</ul>
				</div>
			</div>
		)
	}
}

export default AuthorItem;