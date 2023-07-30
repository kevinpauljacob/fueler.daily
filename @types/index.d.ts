interface BlogPost {
	link: string;
	img: string;
	topic: string;
	title: string;
	published: string;
	readTime: string;
}

interface DiscoverPost {}

interface ApiErrorOptions {
	message: string;
	statusCode: number;
	data?: object;
}
