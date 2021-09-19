import { Router } from 'express';
import { createUserHandler } from '../controller/user.controller';
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionHandler } from '../controller/session.controller';
import validateRequest from '../middleware/validateRequest';
import requireUser from '../middleware/requireUser';
import { createUserSchema, userSessionSchema } from '../schemas/user.schema';



export default function (router: Router) {
    //Registration User
    router.post('/signup', validateRequest(createUserSchema), createUserHandler);

    //Login
    router.post('/login', validateRequest(userSessionSchema), createUserSessionHandler);

    //Get user's session
    router.get('/getsessions', requireUser, getUserSessionHandler);

    //Logout
    router.delete('/logout', requireUser, invalidateUserSessionHandler)
}