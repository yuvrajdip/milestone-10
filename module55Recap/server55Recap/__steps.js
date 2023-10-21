/**
 * ----------------------------------
 *      MONGODB Connection
 * -----------------------------------
 * 
 *  1. create account
 *  2. create an user with password
 *  3. Network access > Add IP Address , Database Access
 *  4. Database > Connect > Driver > Node > View All Code 
 *  5. Change the password of the uri
 * 
 * ---------------------------------------
 *              CREATE ---- POST
 * ---------------------------------------
 *  2. app.post('/users', async(req, res)=>{})
 *  3. Make the function async to use await inside it
 *  5. Make sure you use the express.json() middleware
 *  4. access data from the body : const user = req.body 
 *  6. const result = await userCollection.insertOne(user)
 *  7. res.send(result)
 * 
 * 
 *                CLIENT |
    8. create fetch
    9. add second parameter as an object
    10. provide method : 'POST'
    11. add headers: {'content-type': 'application/json'}
    12. add body : JSON.stringify( user )



  --------------------------------------------------
                  READ | 
  ---------------------------------------------------

   1. create a cursor = userCollection.find()
   2. const result = await cursor.toArray()



   -------------------------------------------------
                DELETE  | 
   -------------------------------------------------
    1. create app.delete('/users/:id', async(req,res) => {})
    2. specify unique Objectid to delete the right user 
    3. const query = {_id : new ObjectId(id)}
    4. const result = await userCollection.deleteOne(query)
    

    Client 
    1. create dynamic url with id 
    2. mention the DELETE method
*/