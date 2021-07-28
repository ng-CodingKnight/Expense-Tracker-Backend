import mongoose from 'mongoose';
import { boolean } from 'yup/lib/locale';
import { UserDocument } from './user.model';

export interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        valid: { type: boolean, default: true },
        userAgent: { type: String }
    },
    { timestamps: true }
);

const Session = mongoose.model<SessionDocument>('Session', SessionSchema);

export default Session;
