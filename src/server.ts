import express from 'express';
import './database';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use('/api/v1', router);

server.listen(3000, () => console.log('Server is running'));