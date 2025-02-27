import express from 'express'
import dotenv from 'dotenv'
import db from './db.js'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log('Server is running on port', port)
})