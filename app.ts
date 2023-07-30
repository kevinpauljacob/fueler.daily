/**
 * Application Entry
 */

// Dependencies
import express from 'express';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import configuration from './config';
import appRouter from './routers';
import ApiError from './utils/apiError';
import errorHandler from './middlewares/errorHandler';

require('./utils/fulerScraper');

// Express Application
const app = express();

// Setting Up Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger(configuration.isProduction ? 'combined' : 'dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Health Check Endpoint
app.get('/ping', (req, res) => res.status(200).send('pong'));

// Application Endpoints
app.use(appRouter);

// Not Found Endpoint
app.use((req, res, next) => {
	const notFoundError = new ApiError({
		message: 'app/route-not-found',
		statusCode: 404,
		data: { method: req.method },
	});
	next(notFoundError);
});

// Error Handler
app.use(errorHandler);

// Bootup Application
app.listen(configuration.PORT, () => {
	console.log(`⚙ Server running on http://localhost:${configuration.PORT}`);
});
