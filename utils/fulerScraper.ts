// Fuler Scraper

// Dependencies
import util from 'util';
import request from 'request';
import cheerio from 'cheerio';

class FuelerScraper {
	readonly fueler = request.defaults({ jar: true });
	readonly fuelerGet = util.promisify(this.fueler.get);

	blog(): Promise<BlogPost[]> {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await this.fuelerGet({
					url: 'https://fueler.io/blog',
				});
				const $ = cheerio.load(response.body);
				const blogs: BlogPost[] = [];
				$('a').each((aI, aEle) => {
					if (aEle.attribs.href.includes('https://fueler.io/blog/')) {
						const blog = {} as BlogPost;
						blog.link = aEle.attribs.href;
						aEle.children.forEach((child) => {
							const content = $(child);
							if (content.hasClass('card')) {
								if (
									content
										.children()
										.first()
										.hasClass('card-body')
								) {
									const body = content.children().first();
									const children = body.children();
									blog.img =
										children
											.find('.blog-thumbnail img')
											.attr('src') ?? '';
									blog.topic = $(children.get(1)).text();
									blog.title = $(children.get(2)).text();
									const [pub, read] = $(children.get(3))
										.text()
										.split('-');
									blog.published = pub.trim();
									blog.readTime = read.trim();
									blogs.push(blog);
								}
							}
						});
					}
				});
				resolve(blogs);
			} catch (error) {
				// console.log(error);
				reject('content/blog-content-unavailable');
			}
		});
	}

	discover() {}
}

export default FuelerScraper;
