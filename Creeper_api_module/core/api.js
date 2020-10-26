const { port, username, address, link } = require('../../config/apiConfig.json')
const request = require('request')

request(`${link}`, function (error, response, body) {

  if(response === '200') {
  console.log(`connected to: ${address}${port} \n connected as: ${username}`)
  console.log(body)
  }

  if(response === '404') {
    console.log(`Unable to connect! ${error}`)
  }

})

module.export = api;