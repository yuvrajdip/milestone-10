const express = require('express')
const app = express()

const port = process.env.PORT || 5001 ;

const users = [
  {id:1 , name : "Sabina", email : "sabina@gmail.com"},
  {id:2 , name : "Safina", email : "safina@gmail.com"}
]

app.get('/',(req,res)=>{
  res.send('Users tututututut')
})

app.get('/users',(req,res)=>{
  res.send(users)
})

app.listen(port, ()=> {
  console.log(`Server is running on ${port}`)
})