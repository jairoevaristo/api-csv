import multer from 'multer';
import { v4 as uuid } from 'uuid';

export const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename = `${file.originalname}-${uuid()}`;
    cb(null, filename);
  }
});