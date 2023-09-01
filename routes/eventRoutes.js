import express from 'express';
import { createEvent, getEvents } from '../controllers/EventController.js';

const eventRouter = express.Router();

eventRouter.get('/', getEvents );
eventRouter.post('/add', createEvent );


export default eventRouter;