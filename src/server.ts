import express from 'express';
import './database';

const server = express();

server.listen(3000, () => console.log('Server is running'));