import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:5001/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])

  const handleAddUser=(e)=>{
    e.preventDefault();
    const form = e.target
    const name = form.name.value 
    const email = form.email.value 
    const user = {name , email };
    console.log(user);

    //* think it as get api
    fetch('http://localhost:5001/users',{
          method:'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user)
        }  
      )
    .then( res=> res.json())
    .then( data=> {
      console.log(data)
      const newUsers = [...users, data];
      setUsers( newUsers)
    })
  }

  return (
    <>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <input type="submit" value="submit" />
      </form>
      <p>Users frontend</p>
      <p>Users length : {users.length}</p>
      {
        users.map( user => <p key={user.id}>{`${user.id}. ${user.email}`}</p>)
      }
    </>
  )
}

export default App
