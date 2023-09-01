import express from 'express';
import { getMembers , addMember } from '../controllers/TeamController.js';

const teamRouter = express.Router();

teamRouter.get('/', getMembers );
teamRouter.post('/add', addMember );

export default teamRouter;