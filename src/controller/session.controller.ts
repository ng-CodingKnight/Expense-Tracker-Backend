import config from 'config';
import { Request, Response } from 'express';
import { createAccessToken, createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { sign } from '../utils/jwt.utils';

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