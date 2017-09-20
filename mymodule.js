//request fs and path
var fs = require('fs')
var path = require('path')

module.export = function (dir, filterStr, callback) {
//assigning the command line arguments to the directory, extension and the callback
    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err)
        // created a new array with all elements that pass the test provided by the function
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}