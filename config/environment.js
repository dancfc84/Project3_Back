// ? A file containing our environment variables

const environment = process.env.NODE_ENV


const mongoURL = "mongodb://127.0.0.1:27017/"

export const dbURL = environment === 'test'
  ? `${mongoURL}hackertrees-test`
  : `${mongoURL}hackertrees`


//secret for jwt
export const secret = "growTreesNoChopChopGottaSustain"