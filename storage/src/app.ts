import express, { Request, Response } from 'express'
import cors from 'cors'
import config from './config'
import multer from 'multer'
import path from 'path'
import fs from 'fs';

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'));
const PORT = 5190

app.post('/images', multer(config).array('images'), (req: Request, res: Response) => {
  const { id } = req.body
  const dir = path.join(__dirname, '..', `public/${id}`)

  const imgs = fs.readdirSync(dir)

  const arrayImages = imgs.reduce((acc: string[], curr: string) => (
    [...acc, `http://localhost:${PORT}/images/${id}/${curr}` ]
    ), []);
    console.log(arrayImages);
    
    
  res.status(200).send('sucess')
})

app.use('/images', express.static('public'));


app.listen(PORT, () => console.log(`Running server on port: ${PORT}`))