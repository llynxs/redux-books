import React from "react";
import {Link} from "react-router";

class BookPage extends React.Component {
	render() {
		const {cover, title, date, code, smallDescription} = this.props.book;
		const {authors} = this.props;
		
		return (
			<li className="book-list__item">
				<div className="book-list__item__item">
					<div className="book-cover">
						<Link to={'/book/' + code} className="book-cover__link">
							<img src={cover} role="presentation" alt="book cover"/>
						</Link>
					</div>
					<div className="book-info">
						<div className="book-heading">
							<div className="book-title">
								<Link to={'/book/' + code} className="book-title__link">{title}</Link>
							</div>
						</div>
						<div className="book-author">
							<div className="book-author-author">
								<span className="book-author-author__prefix">by</span>
								{
									authors.map((author, key) => {
										for (var i = 0; i < author.articles.length; i++) {
											if (author.articles[i] === code) {
												return (
													<span key={key} className="book-author-author__name">
														<Link
															to={'/author/'+ author.code}
															className="book-author-author__name__link"
														>
															{author.name}
														</Link>
													</span>
												)
											}
										}
									})
								}
							</div>
							<div className="book-year">
								<span className="book-author__prefix">date -</span>
								<span>{date}</span>
							</div>
						</div>
						<div className="book-description">
							<p className="book-description__text">{smallDescription}</p>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default BookPage;