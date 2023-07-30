// App Router Hub

// Dependencies
import express from 'express';
import contentRouter from './content';

const Router = express.Router();

Router.use('/api/content', contentRouter);

export default Router;
