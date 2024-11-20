import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const indexRouter = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


indexRouter.use(bodyParser.urlencoded({ extended: true }));

indexRouter.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


export default indexRouter;