import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}${extname(file.originalname)}`);
    },
  }),
};
