//import area
const express = require('express');
require('dotenv').config()

const app = express();

app.get('/students/:std1', (req, res) => {
    console.log(req.params.std1)

    const std1 = req.params.std1
    res.json({
        std1
        //std1:std1
    })

})

// console.log(process.env)

//fun with port
let PORT = process.env.PORT || 4000;//OR oprtator 

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})