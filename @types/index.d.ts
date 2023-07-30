interface BlogPost {
	link: string;
	img: string;
	topic: string;
	title: string;
	published: string;
	readTime: string;
}

interface DiscoverPost {
	cover: string;
	link: string;
	title: string;
	user: {
		img: string;
		name: string;
	};
}

interface ApiErrorOptions {
	message: string;
	statusCode: number;
	data?: object;
}
