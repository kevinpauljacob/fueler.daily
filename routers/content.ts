// Content Routers

// Dependencies
import express from 'express';
import { fetchBlogContent, fetchDiscoverContent } from '../controllers/content';

const Router = express.Router();

Router.get('/blog', fetchBlogContent);

Router.get('/discover', fetchDiscoverContent);

export default Router;
