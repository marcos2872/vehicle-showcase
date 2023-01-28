import express, { Request, Response } from 'express'
import cors from 'cors'
import config from './config'
import multer from 'multer'
import path from 'path'
import fs from 'fs';

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
const PORT = 5190

app.post('/images', multer(config).array('images'), (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const dir = path.join(__dirname, '..', `public/${id}`)
  
    const imgs = fs.readdirSync(dir)
  
    const arrayImages = imgs.reduce((acc: string[], curr: string) => (
      [...acc, `http://localhost:${PORT}/images/${id}/${curr}` ]
      ), []);
      
    res.status(200).json(arrayImages)
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error')
  }
})

app.delete('/images', (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const dir = path.join(__dirname, '..', `public/${id}`)
    if (!fs.existsSync(dir)) {
      res.status(404).send('Not Found')
    }

    fs.rmdirSync(dir, {recursive: true })

    res.status(200).send('Deleted')
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error')
  }

})

app.use('/images', express.static('public'))

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`))