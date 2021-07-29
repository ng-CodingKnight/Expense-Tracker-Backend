import { FilterQuery, LeanDocument, UpdateQuery } from "mongoose";
import Session, { SessionDocument } from "../model/session.model"
import { UserDocument } from "../model/user.model";
import config from 'config';
import { decode, sign } from '../utils/jwt.utils';
import { get } from 'lodash';
import { findUser } from "./user.service";

export async function createSession(userId: string, userAgent: string) {
    try {
        const session = await Session.create({ user: userId, userAgent });

        return session.toJSON();
    } catch (error) {
        throw new Error(error)
    }
}

export function createAccessToken({
    user,
    session
}: {
    user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
    session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
    // Build and return new access token
    const accessToken = sign(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl") }
    )

    return accessToken
}

export async function reIssueAccessToken({
    refreshToken
}: {
    refreshToken: string
}) {
    //decode access token
    const { decoded } = decode(refreshToken);

    if (!decoded || !get(decoded, '_id')) return false

    // get the session
    const session = await Session.findById(get(decoded, "_id"))

    //make sure session is still valid
    if (!session) return false;

    const user = await findUser({ _id: session.user });

    if (!user) return false;

    const accessToken = await createAccessToken({ user, session });

    return accessToken;
}

export async function updateSession(
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
) {
    return Session.updateOne(query, update)
}

export async function findSessions(
    query: FilterQuery<SessionDocument>
) {
    return Session.find(query).lean();
}