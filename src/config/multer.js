import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'url'; // Importando para corrigir o __dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // Definindo __dirname manualmente

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads')); // Usando __dirname corretamente
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}${extname(file.originalname)}`);
    },
  }),
};
