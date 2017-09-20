// assigned module.exports to modular
var modularFn = require ('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

// using the module in the command line arguments
modularFn(dir, filterStr, function (err, list) {
    if (err)
        return console.erro('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})
