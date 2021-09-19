import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    host: "localhost",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshAccessTokenTtl: "15m",
    privateKey: process.env.PRIVATE_KEY,
    dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.ynlbe.mongodb.net/${process.env.DB_PROJECT}?retryWrites=true&w=majority`,
    basePath: '/api/v1'

}
