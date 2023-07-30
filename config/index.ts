/**
 * Application Configuration
 */

// Dependencies

const isProduction = process.env.NODE_ENV === 'production';

// Configuration Container
const configuration = {
	PORT: parseInt(process.env.PORT! ?? '5000', 10),
	isProduction,
};

export default configuration;
