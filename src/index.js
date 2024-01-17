const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>Hola mundo</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>Acerca de...</h1>")
})

app.listen(3000)
console.log("Server on port",3000)
