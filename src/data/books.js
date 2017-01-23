const books = [
	{
		code: 'BAcyDyQwcXX',
		title: 'The Adventures of Tom Sawyer',
		id: '9781423492757',
		country: 'United States',
		date: '1876',
		author: 'Mark Twain',
		cover: 'http://vidyasury.com/wp-content/uploads/2013/12/Book-review-tom-sawyer-vidya-sury.jpg',
		smallDescription: 'The Adventures of Tom Sawyer is a great book to read for anyone who loves classic stories.  It is about a naughty boy named Tom doing a lot of mischievous tricks and risky adventures. He has a brother named Sid and a sister named Mary. Aunt Polly, who takes care of Tom, loves him even though he is a firebrand. Huckberry Finn, whose nickname is Huck, is Tom’s best friend as well as the partner in all of his adventures.',
		description: 'The Adventures of Tom Sawyer is a great book to read for anyone who loves classic stories.  It is about a naughty boy named Tom doing a lot of mischievous tricks and risky adventures. He has a brother named Sid and a sister named Mary. Aunt Polly, who takes care of Tom, loves him even though he is a firebrand. Huckberry Finn, whose nickname is Huck, is Tom’s best friend as well as the partner in all of his adventures. One of Tom’s crazy adventures is when he and his friend were in a graveyard trying to revive a dead person with a dead cat at midnight. Before they begin their process they see three men, Muff Potter, Dr. Robinson, and Injun Joe in the same graveyard. They quickly hide behind the bushes because they do not want to be seen by the three men. Instead, they witnessed Injun Joe murder Dr. Robinson for revenge, and then Injun Joe accuses Muff Potter for the crime. So scared, Tom and Huck run to a shed and complete a blood oath that they will never talk about the crime scene to anyone or they will die and rot. Besides going on adventures, Tom also likes to tricks the children to do his white washing (putting new coat of paint on his aunt’s fence) and trade his trinkets for the tickets that can be used to trade in for the Bible to impress the new girl, Becky Thatcher– when a student receives a Bible, it shows others that they had been a good student. I think teenagers today are going to like The Adventures of Tom Sawyer. Even though this book is a classic, there are still some naughty teenagers and they might want to read about how kids were in the 1800s.'
	},
	{
		code: 'BAcJeJrQca9',
		title: 'The Adventures of Huckleberry Finn',
		id: '9780878755271',
		country: 'United States',
		date: '1884',
		author: 'Mark Twain',
		cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/800px-Huckleberry_Finn_book.JPG',
		smallDescription: 'Of all the contenders for the title of The Great American Novel, none has a better claim than The Adventures of Huckleberry Finn. Intended at first as a simple story of a boy\'s adventures in the Mississippi Valley - a sequel to The Adventures of Tom Sawyer - the book grew and matured under Twain\'s hand into a work of immeasurable richness and complexity',
		description: 'Of all the contenders for the title of The Great American Novel, none has a better claim than The Adventures of Huckleberry Finn. Intended at first as a simple story of a boy\'s adventures in the Mississippi Valley - a sequel to The Adventures of Tom Sawyer - the book grew and matured under Twain\'s hand into a work of immeasurable richness and complexity. More than a century after its publication, the critical debate over the symbolic significance of Huck\'s and Jim\'s voyage is still fresh, and it remains a major work that can be enjoyed at many levels: as an incomparable adventure story and as a classic of American humor.',
	},
	{
		code: 'BAF_KY4wcRY',
		title: 'Journey to the Center of the Earth',
		id: '0486440885',
		country: 'France',
		date: '1864',
		author: 'Jules Verne',
		cover: 'https://upload.wikimedia.org/wikipedia/commons/6/67/A_Journey_to_the_Centre_of_the_Earth-1874.jpg',
		smallDescription: 'Jules Verne is probably known to most of you through his famous novel, Around the World in 80 Days. The staggering success of this novel though, meant that his other works are not as well known. Indeed, most of us waited for the film to be introduced to Journey to the Centre of the Earth. In this novel, instead of going around the world, we are now going into it! Though most adventures and action books these days rely on shoot outs and car chases to keep the reader interested, Jules Verne manages to grip us using old fashioned mystery and suspense. It is also clear that he did heaps of research before writing this book. The imagination he put into it along with his knowledge of science makes compelling reading.',
		description: 'Jules Verne is probably known to most of you through his famous novel, Around the World in 80 Days. The staggering success of this novel though, meant that his other works are not as well known. Indeed, most of us waited for the film to be introduced to Journey to the Centre of the Earth. In this novel, instead of going around the world, we are now going into it! Though most adventures and action books these days rely on shoot outs and car chases to keep the reader interested, Jules Verne manages to grip us using old fashioned mystery and suspense. It is also clear that he did heaps of research before writing this book. The imagination he put into it along with his knowledge of science makes compelling reading. The epic adventure begins when enthusiastic geologist Professor Otto Liedenbrock discovers old documents, which he believes are instructions on getting to the center of the earth. Along with his whiz-kid nephew, Axel Liedenbrock he discovers the key to the document, and finds the location of the crater. They pack any and every survival equipment they can find, but will it be enough for the perilous journey ahead? Along with estimable, quiet, Icelandic guide Hans, Otto and Axel embark on a fantastical and dangerous journey down volcanic tubes and volcano craters. The journey is not for the faint-hearted – who knows what creatures lurk down there? Will their supplies last? How will they get back up to the surface? Will they ever get back up to the surface? They must find their way through a maze and an endless sea, as well as many other obstacles before they can find their way to the heart of the earth. This book takes a little while to get going, but when it does, it becomes one you cannot put down. It has advanced vocabulary, many scientific theories and overall may be a little hard to understand or read for children below 12 or 13. I would rate this book 8/10. If your parents are insisting, like mine, that you read classics, this is the place to start!',

	},
	{
		code: 'BAPIPRjQce9',
		title: 'Twenty Thousand Leagues Under the Sea',
		id: '1557508771',
		country: 'France',
		date: '1870',
		author: 'Jules Verne',
		cover: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/20000_title_0a.jpg',
		smallDescription: 'French naturalist Dr. Aronnax embarks on an expedition to hunt down a sea monster, only to discover instead the Nautilus, a remarkable submarine built by the enigmatic Captain Nemo. Together Nemo and Aronnax explore the underwater marvels, undergo a transcendent experience amongst the ruins of Atlantis, and plant a black flag at the South Pole',
		description: 'The expedition departs Brooklyn aboard the United States Navy frigate Abraham Lincoln and travels south around Cape Horn into the Pacific Ocean. The ship finds the monster after a long search and then attacks the beast, which damages the ship\'s rudder. The three protagonists are then hurled into the water and grasp hold of the "hide" of the creature, which they find, to their surprise, to be a submarine very far ahead of its era. They are quickly captured and brought inside the vessel, where they meet its enigmatic creator and commander, Captain Nemo. The rest of the story follows the adventures of the protagonists aboard the creature—the submarine, the Nautilus—which was built in secrecy and now roams the seas free from any land-based government. Captain Nemo\'s motivation is implied to be both a scientific thirst for knowledge and a desire for revenge on (and self-imposed exile from) civilization. Nemo explains that his submarine is electrically powered and can perform advanced marine biology research; he also tells his new passengers that although he appreciates conversing with such an expert as Aronnax, maintaining the secrecy of his existence requires never letting them leave. Aronnax and Conseil are enthralled by the undersea adventures, but Ned Land can only think of escape. They visit many places under the oceans, some real-life places, others completely fictional. The travelers witness the real corals of the Red Sea, the wrecks of the battle of Vigo Bay, the Antarctic ice shelves, the Transatlantic telegraph cable and the fictional submerged land of Atlantis. The travelers also use diving suits to hunt sharks and other marine life with air-guns and have an underwater funeral for a crew member who died when an accident occurred under mysterious—and unknown to the reader—conditions inside the Nautilus.',
	},
]

export default books;