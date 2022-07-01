// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.
// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.

import express from "express";
import router from "./views/router.js"
import { connectToDB, disconnectDB } from "./db/helpers.js"
import logger from "./middleware/logger.js"
import mongoSanitize from 'express-mongo-sanitize'
import errorHandler from "./middleware/errorHandler.js"


import morgan from "morgan" //for logging purposes
import fs from 'fs'


const dir = process.cwd() + '/logs/access.log'

const app = express()

async function serverStart() {

  try {

    app.use(express.json())

    app.use(mongoSanitize());

    app.use(morgan('common', { //Using morgan as our logger
      stream: fs.createWriteStream( dir , { flags: 'a' }),
    }));


    app.use(logger)

    app.use('/api', router)

    app.use(errorHandler)

    await connectToDB()

    app.listen(4000, () => console.log('Express up and running?'))

  } catch (e) {

    await disconnectDB()

  }
}

serverStart()

export default app