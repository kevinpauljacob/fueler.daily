// Content Controller

// Dependencies
import { NextFunction, Request, Response } from 'express';
import FuelerScraper from '../utils/fulerScraper';

export const fetchBlogContent = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const scraper = new FuelerScraper();
		const blogs = await scraper.blog();
		return res
			.status(200)
			.json({ data: { blogs }, message: 'content/blog-content-fetched' });
	} catch (error) {
		next(error);
	}
};

export const fetchDiscoverContent = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const scraper = new FuelerScraper();
	} catch (error) {
		next(error);
	}
};
