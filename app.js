import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import https from 'https'
import { corsConfig } from './config/cors'
import './utils/db'
import serverIp from './config/serviceIp'
import router from './route'
const privateKey  = fs.readFileSync(path.join(__dirname, './certificate/private.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './certificate/file.crt'), 'utf8')
const credentials = { key: privateKey, cert: certificate}
const app = express()
const { methods } = corsConfig
app.use(cors({methods}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

const httpsServer = https.createServer(credentials, app)

const server = httpsServer.listen(serverIp.server.PORT, serverIp.server.IP, () => {
  let host = server.address().address
  let port = server.address().port
  console.log('server listening at http://%s:%s', host, port)
})
