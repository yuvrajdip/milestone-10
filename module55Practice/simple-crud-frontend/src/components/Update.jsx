import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = event=>{
    
    //****** Client Side data Capture */
    event.preventDefault();
    const form = event.target;
    const name = form.name.value 
    const email = form.email.value 
    console.log( name , email )

    const updatedUser = {name , email }


    //******* Client side to server side sending */
    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify( updatedUser )
    })
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        if( data.modifiedCount >0 ){
          alert('User Updated Successfully')
        }
      })
    }

  return (
    <div>
      <h3>Update information of {loadedUser.name}</h3>

      <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name}/>
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email}/>
        <br />
        <input type="submit" value="Update"/>
      </form>
    </div>
  );
};

export default Update;