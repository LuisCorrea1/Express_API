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

//ROUTES
//HTTP Methods - GET, POST, PUT, DELETE
app.get('/v1/explorers', (req,res) => {
    console.log(`API explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name:"Luis1"}
    const explorer2 = {id:2, name:"Luis2"}
    const explorer3 = {id:3, name:"Luis3"}
    const explorer4 = {id:4, name:"Luis4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    //HTTP CODE STATUS
    res.status(200).json(explorers)
})