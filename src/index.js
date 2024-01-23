require('dotenv').config()
const { config } = require('dotenv')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("<h1>Hola mundo</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>Acerca de...</h1>")
})
app.get('/env', (req, res) => {
    const t1 = "<h1>HOST: "+process.env.MYSQL_HOST+"</h1>"
    const t2 = "<h1>HOST: "+process.env.MYSQL_USER+"</h1>"
    const t3 = "<h1>HOST: "+process.env.MYSQL_PASS+"</h1>"
    res.send(t1+t2+t3)
})
console.log(process.env.MYSQL_HOST)

app.listen(PORT)
console.log("Server on port",PORT)
