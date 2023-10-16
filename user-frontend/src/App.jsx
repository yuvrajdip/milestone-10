import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:5001/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])

  return (
    <>
      <h1>Users frontend</h1>
      <h2>Users length : {users.length}</h2>
    </>
  )
}

export default App
