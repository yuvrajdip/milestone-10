const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000

// *middleware
app.use(cors())
app.use(express.json())


//****** user , password while creating database
// dipbhowmik2018
// bRx232mWFLjDBnfM


//***** Overview >> connect >> Drivers >> ..

const uri = "mongodb+srv://dipbhowmik2018:bRx232mWFLjDBnfM@module55practice.o4s1khx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();



    //****** Node MongoDB CRUD Operations > Uses Examples > Insert Operation> Insert a document
    const database = client.db("usersDB");
    const usersCollection = database.collection("users");


    //**** Node MongoDB CRUD Operations > Uses Examples > Find Operations> Find Multiple Documents
    // todo: Read
    app.get('/users', async(req, res)=> {
      const cursor = usersCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    //* specific user loading
    app.get('/users/:id', async(req,res)=>{
      const id= req.params.id;
      const query = {_id: new ObjectId(id)}
      const user = await usersCollection.findOne(query)
      res.send(user)
    })

    //**** post api
    //todo : Create
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new user', user)

      //* Node MongoDB CRUD Operations > Uses Examples > Insert Operation> Insert a document
      const result = await usersCollection.insertOne( user );

      res.send(result); //* will implement this line by self
    })


    //* PUT api
    // todo: PUT api
    //* Update a document 
    app.put('/users/:id', async(req,res)=>{
      const id = req.params.id
      const user = req.body
      console.log( id, user )


      //****** Google > MongoDB CRUD Operations > Usage Examples > Update & Replace Operations
      const filter = {_id : new ObjectId(id)}
      const options = { upsert : true }
      const updatedUser = {
        $set : {
          name : user.name , 
          email : user.email 
        }
      }

      const result = await usersCollection.updateOne(filter, updatedUser, options)

      res.send(result)
    })


    //** delete api */
    //todo : Delete
    app.delete('/users/:id', async(req, res)=> {
      const id = req.params.id;
      console.log('please delete from database', id);

      const query = { _id : new ObjectId(id)}
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); //* Always make sure you comment out this line
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Simple CRUD is running')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})