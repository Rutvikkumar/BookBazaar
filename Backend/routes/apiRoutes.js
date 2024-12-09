import express from 'express';
import { getBook } from '../controller/fetchdata.js'; // Use .js extension

const router = express.Router();

router.get('/fetch-books', getBook);

export default router; // Use export default for ES6 modules
