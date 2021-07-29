import config from 'config';
import { Request, Response } from 'express';
import { createAccessToken, createSession, updateSession, findSessions } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { sign } from '../utils/jwt.utils';
import { get } from 'lodash';

export async function createUserSessionHandler(req: Request, res: Response) {
    //Validate email and Pasword
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid Username or Password");
    }

    //Create a Session
    const session = await createSession(user._id, req.get("user-agent") || "");

    //Create Access Token
    const accessToken = createAccessToken({
        user,
        session
    });

    //refersh access token
    const refreshToken = sign(session, {
        expiresIn: config.get("refreshAccessTokenTtl")
    })

    return res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(req: Request, res: Response) {
    const sessionId = get(req, "user.session");

    await updateSession({ _id: sessionId }, { valid: false })

    return res.sendStatus(200);

}

export async function getUserSessionHandler(req: Request, res: Response) {
    const userId = get(req, "user._id");

    const sessions = await findSessions({ user: userId, valid: true });

    return res.send(sessions);
}