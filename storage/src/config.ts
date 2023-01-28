import fs from 'fs';
import multer from 'multer'
import path from 'path'

let fileNmae = ''

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, _file, cb) => {
      const { id } = req.body
      const dir = path.join(__dirname, '..', `public/${id}`)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      fileNmae = dir
      cb(null, path.resolve(dir));
    },
    filename: (_req, file, cb) => {
      cb(null, file.originalname);
    },
}),
};

export default {
  dest: path.resolve(fileNmae),
  storage: storageTypes['local'],
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
  fileFilter: (_req: any, file: any, cb: any) => {
    const allowedMines = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
    ];
    if (allowedMines.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
