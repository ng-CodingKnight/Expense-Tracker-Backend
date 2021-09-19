import express from 'express';
import config from 'config';
import log from './logger';
import connect from './db/connect';
import userRoutes from './routes/user.routes';
import deserializeUser from './middleware/deserializeUser';


const port = config.get("port") as number;
const host = config.get("host") as string;
const path = config.get("basePath") as string;

const app = express();

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);
app.use(`${path}`, router);

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);

    connect();

    userRoutes(router);
})