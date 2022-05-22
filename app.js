//Express object
const express = require('express')
//Create express app
const app = express()
app.use(express.json())
//App port - localhost:3000
const port = 3000

//Initialize app
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})