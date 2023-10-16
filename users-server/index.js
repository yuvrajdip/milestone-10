const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;

const users = [
  { id:1 , name : 'Sabana', email : 'Sabana@gmail.com'},
  { id:2 , name : 'Sabina', email : 'Sabina@gmail.com'},
  { id:3 , name : 'Safana', email : 'Safana@gmail.com'},
]

app.get('/', (req,res)=>{
  res.send('Hello World!!!')
})

app.get('/users', (req,res)=>{
  res.send(users);
})

app.listen(port , ()=>{
  console.log(`Server is running on ${port}`)
})