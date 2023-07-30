/**
 * Express Error Handler
 */

// Dependencies
import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/apiError';
import configuration from '../config';

const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	!configuration.isProduction && console.log(err);
	const date = new Date().toUTCString();
	if (err instanceof ApiError) {
		return res.status(err.statusCode).json({
			date,
			message: err.message,
			data: err.data,
			success: false,
		});
	}
	return res.status(500).json({
		date,
		message: 'app/internal-server-error',
		data: {
			instruction: `Something went wrong, we're really sorry for the inconvenience.
            Project maintainers have been updated and you can try again in sometime, or if the issue persists, 
            head over to our repo and open up an issue!`,
		},
		success: false,
	});
};

export default errorHandler;
