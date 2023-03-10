import fs from 'fs';
import multer from 'multer'
import path from 'path'

let fileNmae = ''

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, _file, cb) => {
      const data = req.body.body;
      console.log(data);
      
      const { brand, model, year, mileage, price } = JSON.parse(data);
      const dirName = brand + model + year + mileage + price;
      
      const dir = path
        .join(__dirname, '..', `public/${dirName.replace(' ', '')}`);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fileNmae = dir;
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
