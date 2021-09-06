import express from 'express';
import cors from 'cors';
import './database';
import { router } from './routes';

const server = express();

server.use(cors()); //allow all origins
server.use(express.json());
server.use('/api/v1', router);

server.listen(3000, () => console.log('Server is running'));