// Fuler Scraper

// Dependencies
import util from 'util';
import request from 'request';
import cheerio from 'cheerio';
const NodeCache = require('node-cache');

const cache = new NodeCache();

class FuelerScraper {
	readonly fueler = request.defaults({ jar: true });
	readonly fuelerGet = util.promisify(this.fueler.get);

	blog(): Promise<BlogPost[]> {
		return new Promise(async (resolve, reject) => {
			try {
				const cachedBlogs = cache.get('fueler-blogs');
				if (cachedBlogs) {
					resolve(cachedBlogs);
					return;
				}
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
				const SIX_HRS_IN_SECONDS = 6 * 60 * 60;
				cache.set('fueler-blogs', blogs, SIX_HRS_IN_SECONDS);
				resolve(blogs);
			} catch (error) {
				// console.log(error);
				reject('content/blog-content-unavailable');
			}
		});
	}

	discover(): Promise<DiscoverPost[]> {
		return new Promise(async (resolve, reject) => {
			try {
				const cachedDiscover = cache.get('fueler-discover');
				if (cachedDiscover) {
					resolve(cachedDiscover);
					return;
				}
				const response = await this.fuelerGet({
					url: 'https://fueler.io/discover',
				});
				const $ = cheerio.load(response.body);
				const discoverContent: DiscoverPost[] = [];
				$('.card-body').each((cI, cEle) => {
					const discover = {} as DiscoverPost;
					const a = $(cEle.children);
					discover.link = $(cEle).find('a').attr('href') ?? '';
					let cover = '';
					Object.entries(
						$(cEle).find('div figure').css() ?? {}
					).forEach(([key, val]) => {
						if (key.indexOf('background-image') > -1) {
							cover = val
								.match(/\((.*?)\)/)![1]
								.replace(/('|")/g, '');
						}
					});

					discover.cover = cover;
					discover.title = $(a.get(1)).find('h4').text();
					const userDetails = $(a.get(1))
						.find('.user-details')
						.children();
					const [img, name] = [
						$(userDetails.get(0)).find('img').attr('src') ?? '',
						$(userDetails.get(1)).text().trim(),
					];
					discover.user = {
						img,
						name,
					};
					discoverContent.push(discover);
				});
				const ONE_HRS_IN_SECONDS = 1 * 60 * 60;
				cache.set(
					'fueler-discover',
					discoverContent,
					ONE_HRS_IN_SECONDS
				);
				resolve(discoverContent);
			} catch (error) {
				console.log(error);
				reject('content/discover-content-unavailable');
			}
		});
	}
}

export default FuelerScraper;
