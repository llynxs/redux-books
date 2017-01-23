export function getAuthorName(author, name, photo, id) {
	return {
		type: 'GETTING_AUTHOR',
		author,
		name,
		photo,
		id
	}
}

export function getBookTitle(book, title, id) {
	return {
		type: 'GETTING_BOOK',
		book,
		title,
		id
	}
}