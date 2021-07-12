import { Router } from 'express';
import multer from 'multer';

import { storage } from './config/multer';

const router = Router();

const multerConfig = multer({ storage });

router.post(
  '/uplad/send',
  multerConfig.single('uploaded_file')
);

export { router };