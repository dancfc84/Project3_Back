// ? Logging functionality will live in here.

// function buildObjectLog(obj) {
//   if (!Object.keys(obj).length) return 'None'
//   return JSON.stringify(obj, null, 4)
// }


// export default function logger(req, res, next) {
//   console.log(`
// Incoming request ${req.method} for url ${req.url} from ${new Date};
// Request Headers: ${buildObjectLog(req.headers)}
// Request Body: ${buildObjectLog(req.body)}
// Request Query: ${buildObjectLog(req.query)}`
//   )
//   next()
// }