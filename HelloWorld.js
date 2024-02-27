console.log("Hello, World!")

const fs = require('fs')
fs.readFile('./welcome.txt', 'utf8', (err, data) => {
    console.log(data)
})
