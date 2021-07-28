import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler } from './controller/session.controller';
import validateRequest from './middleware/validateRequest';
import { createUserSchema, userSessionSchema } from './schemas/user.schema';

export default function (app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    //Registration User
    app.post('/api/signup', validateRequest(createUserSchema), createUserHandler);

    //Login
    app.post('/api/login', validateRequest(userSessionSchema), createUserSessionHandler);

    //Get user's session

    //Logout
}