
//todo : Video 1 : Create mongodb atlas account for simple CRUD server

//todo  ***** For making server :
//todo        npm init -y
//todo        npm i express cors mongodb
//todo        
//todo ****** Inside package.json file
//todo        inside "scripts" write
//todo        "start" : "node index.js"



//todo ****** Mandatory codes to run server on port 5000 on index.js file :

//todo        const express = require('express');
//todo        const cors = require('cors');
//todo        const app = express();
//todo        const port = process.env.PORT || 5000 ;


//todo        using middlewares
//todo        app.use(cors())
//todo        app.use(express.json())

//todo        UserName
//todo        Password

//todo        app.get('/',(req,res)=>{
//todo          res.send('SIMPLE CRUD IS RUNNING')
//todo        })

//todo        app.listen(port, ()=>{
//todo          console.log('SIMPLE CRUD IS RUNNING ON PORT : ', port )
//todo        })



//todo ****** On MongoDB after copying username , password
//todo        Select Connect 
//todo        Select Cloud Environment 
//todo        Add My Current IP Address
//todo        Select Finish and Close




//todo ***** on Network Access tab
//todo       Select Allow access from anywhere ( Not preferred for Deployment )



//todo ***** on Database Access tab
//todo       Sometimes Add New Database User if you forget user and password



//todo **** Database
//todo      Select Connect > Driver 
//todo      Driver> NodeJS || Version >5.5
//todo      View full Code Sample
//todo      copy paste this sample code 

//todo      const { MongoClient, ServerApiVersion } = require('mongodb');
//todo      const uri = "mongodb+srv://dipbhowmik2018:<password>@cluster0.otgz8q2.mongodb.net/?retryWrites=true&w=majority";

//todo      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//todo      const client = new MongoClient(uri, {
//todo        serverApi: {
//todo          version: ServerApiVersion.v1,
//todo          strict: true,
//todo          deprecationErrors: true,
//todo        }
//todo      });

//todo      async function run() {
//todo        try {
//todo          // Connect the client to the server	(optional starting in v4.7)
//todo          await client.connect();
//todo          // Send a ping to confirm a successful connection
//todo          await client.db("admin").command({ ping: 1 });
//todo          console.log("Pinged your deployment. You successfully connected to MongoDB!");
//todo        } finally {
//todo          // Ensures that the client will close when you finish/error
//todo          await client.close(); //**** Make sure this line is commented */
//todo        }
//todo      }
//todo      run().catch(console.dir);
