import express from 'express';
import morgan from 'morgan';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(morgan('combined'));

const port = config.get<string>('port');

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});
