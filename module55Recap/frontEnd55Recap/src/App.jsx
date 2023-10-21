import { useEffect, useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  
  const [info, setInfo] = useState([])
  
  //* Read Data Find multiple user data 
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>{
      setInfo(data)
    })
  },[])
  

  //todo CREATE || WRITE || POST
  function handleAddUser(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name , email};
    console.log(user)

    // * create client side port and insert single user data 
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log('ACK',data)
        if(data.insertedId){
          alert('Users added successfully')
        }
      })
  }

  function handleDelete(_id){
    console.log(_id)

    //* Delete a user from the database using UI click button
    fetch(`http://localhost:5000/users/${_id}`,{
      method: 'DELETE'
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          alert('deleted successfully')

          // * Delete and show remaining Users
          const remaining = info.filter( singleUser=> singleUser._id !== _id )
          setInfo( remaining )
        }
      })
  }


  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <br />
      Information length : {info.length}

      {
        info.map( x=> <p key={x._id}>
          name : {x.name}, email: {x.email} , id : {x._id}
          <Link to={`/update/${x._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={()=>handleDelete(x._id)}>X</button>
        </p>)
      }
    </>
  )
}

export default App
