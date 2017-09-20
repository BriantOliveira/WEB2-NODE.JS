var http = require('http')
var bl = require('bi')

http.get(process.argv[2], function(response) {
  response.pipe(bl(function (err, list) {
      if(err)
          return console.error(err)
          list = list.toString()
          console.log(list.length)
          console.log(list)
  }))
})
