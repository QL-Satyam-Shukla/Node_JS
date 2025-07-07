
const responses = require('../config/responses')
module.exports = (response, status, messageCode, data, httpCode = 200) => {
  response.status(httpCode).json({
    status,
    status_code: messageCode,
    message: responses[messageCode],
    data
  })
}