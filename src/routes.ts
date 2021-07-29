import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionHandler } from './controller/session.controller';
import validateRequest from './middleware/validateRequest';
import requireUser from './middleware/requireUser';
import { createUserSchema, userSessionSchema } from './schemas/user.schema';

export default function (app: Express) {
    //Registration User
    app.post('/api/signup', validateRequest(createUserSchema), createUserHandler);

    //Login
    app.post('/api/login', validateRequest(userSessionSchema), createUserSessionHandler);

    //Get user's session
    app.get('/api/getSessions', requireUser, getUserSessionHandler);

    //Logout
    app.delete('/api/logout', requireUser, invalidateUserSessionHandler)
}