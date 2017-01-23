const authors = [
	{
		name: 'Mark Twain',
		id: 1,
		code: 'marktwaincode',
		date: 'November 30, 1835 – April 21, 1910',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
		smallDescription: 'Better known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher and lecturer. Among his novels are The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn (1885), the latter often called "The Great American Novel"',
		description: 'Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), better known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher and lecturer. Among his novels are The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn (1885),[2] the latter often called "The Great American Novel". Twain was raised in Hannibal, Missouri, which later provided the setting for Tom Sawyer and Huckleberry Finn. After an apprenticeship with a printer, Twain worked as a typesetter and contributed articles to the newspaper of his older brother, Orion Clemens. He later became a riverboat pilot on the Mississippi River before heading west to join Orion in Nevada. He referred humorously to his lack of success at mining, turning to journalism for the Virginia City Territorial Enterprise.[3] In 1865, his humorous story "The Celebrated Jumping Frog of Calaveras County" was published, based on a story he heard at Angels Hotel in Angels Camp, California, where he had spent some time as a miner. The short story brought international attention, and was even translated into classic Greek.[4] His wit and satire, in prose and in speech, earned praise from critics and peers, and he was a friend to presidents, artists, industrialists, and European royalty. Though Twain earned a great deal of money from his writings and lectures, he invested in ventures that lost a great deal of money, notably the Paige Compositor, a mechanical typesetter, which failed because of its complexity and imprecision. In the wake of these financial setbacks, he filed for protection from his creditors via bankruptcy, and with the help of Henry Huttleston Rogers eventually overcame his financial troubles. Twain chose to pay all his pre-bankruptcy creditors in full, though he had no legal responsibility to do so. Twain was born shortly after a visit by Halley\'s Comet, and he predicted that he would "go out with it", too. He died the day after the comet returned. He was lauded as the "greatest American humorist of his age", and William Faulkner called Twain "the father of American literature".',
		books: [
			{
				code: 'BAcyDyQwcXX',
				title: 'The Adventures of Tom Sawyer',
				id: '9781423492757',
				country: 'United States',
				date: '1876',
				author: 'Mark Twain',
				cover: 'http://vidyasury.com/wp-content/uploads/2013/12/Book-review-tom-sawyer-vidya-sury.jpg'
			},
			{
				code: 'BAcJeJrQca9',
				title: 'The Adventures of Huckleberry Finn',
				id: '9780878755271',
				country: 'United States',
				date: '1884',
				author: 'Mark Twain',
				cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/800px-Huckleberry_Finn_book.JPG'
			}
		],
		articles: ['BAcyDyQwcXX', 'BAcJeJrQca9']
	},
	{
		name: 'Jules Verne',
		id: 2,
		code: 'julesvernecode',
		date: '8 February 1828 – 24 March 1905',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg/800px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg',
		smallDescription: 'French novelist, poet, and playwright best known for his adventure novels and his profound influence on the literary genre of science fiction.',
		description: 'Verne was born to bourgeois parents in the seaport of Nantes, where he was trained to follow in his father\'s footsteps as a lawyer, but quit the profession early in life to write for magazines and the stage. His collaboration with the publisher Pierre-Jules Hetzel led to the creation of the Voyages extraordinaires, a widely popular series of scrupulously researched adventure novels including Journey to the Center of the Earth (1864), Twenty Thousand Leagues Under the Sea (1870), and Around the World in Eighty Days (1873). Verne is generally considered a major literary author in France and most of Europe, where he has had a wide influence on the literary avant-garde and on surrealism. His reputation is markedly different in Anglophone regions, where he has often been labeled a writer of genre fiction or children\'s books, largely because of the highly abridged and altered translations in which his novels are often reprinted. Verne has been the second most-translated author in the world since 1979, ranking between Agatha Christie and William Shakespeare. He has sometimes been called the "Father of Science Fiction", a title that has also been given to H. G. Wells and Hugo Gernsback.',
		books: [
			{
				code: 'BAF_KY4wcRY',
				title: 'Journey to the Center of the Earth',
				id: '0486440885',
				country: 'France',
				date: '1864',
				author: 'Jules Verne',
				cover: 'https://upload.wikimedia.org/wikipedia/commons/6/67/A_Journey_to_the_Centre_of_the_Earth-1874.jpg'
			},
			{
				code: 'BAPIPRjQce9',
				title: 'Twenty Thousand Leagues Under the Sea',
				id: '1557508771',
				country: 'France',
				date: '1870',
				author: 'Jules Verne',
				cover: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/20000_title_0a.jpg'
			}
		],
		articles: ['BAF_KY4wcRY', 'BAPIPRjQce9']	
	},
]

export default authors;
