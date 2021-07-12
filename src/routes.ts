import { Router } from 'express';
import multer from 'multer';

import { ProductCreateController } from './controller/ProductCreateController';
import { ProductFindAllController } from './controller/ProductFindAllController';

const router = Router();

const productCreateController = new ProductCreateController();
const productFindAllController = new ProductFindAllController();

const multerConfig = multer();

router.get(
  '/upload/',
  productFindAllController.handle
);

router.post(
  '/upload/send',
  multerConfig.single('uploaded_file'),
  productCreateController.handle
);

export { router };