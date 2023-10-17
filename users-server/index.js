const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5001 ;

//* middleware
app.use(cors())
app.use(express.json())

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

//* create a post api on the server side
app.post('/users', (req,res)=>{
  console.log('post api hitting')
  console.log(req.body)

  const newUser = req.body 
  newUser.id = users.length +1 
  users.push( newUser)
  
  res.send( newUser )
})

app.listen(port, ()=> {
  console.log(`Server is running on ${port}`)
})