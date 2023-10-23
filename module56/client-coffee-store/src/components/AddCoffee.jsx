import Swal from "sweetalert2";

const AddCoffee = () => {

  const handleAddCoffee = (event) => {
    event.preventDefault();

    // const name = event.target.name.value ;
    // const quantity = event.target.quantity.value ;
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;

    const newCoffee={ name , quantity, supplier, taste , category, details , photourl };
    console.log(newCoffee)


    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if( data.insertedId){
          Swal.fire(
            'Good job!',
            'Coffee Added successfully!',
            'success'
          )
        }
      })
  }

  return (
    <div className="bg-orange-100 h-screen px-[150px]  ">
      <h2 className="text-center">Add a coffee</h2>

      <form onSubmit={handleAddCoffee} action="">
        
        {/* name and quantity */}
        <div className="md:flex space-x-3">
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Coffee Name</label>
            </div>
            <input type="text" className="bg-white text-black cursor-text w-full" name="name" id="" />
          </div>
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Available Quantity</label>
            </div>
            <input type="text" className="bg-white text-black bordered border- w-full" placeholder="" name="quantity" id="" />
          </div>
        </div>

        {/* supplier and taste row */}
        <div className="md:flex space-x-3">
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Supplier</label>
            </div>
            <input type="text" className="bg-white text-black cursor-text w-full" name="supplier" id="" />
          </div>
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Taste</label>
            </div>
            <input type="text" className="bg-white text-black bordered border- w-full" placeholder="" name="taste" id="" />
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex space-x-3">
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Category</label>
            </div>
            <input type="text" className="bg-white text-black cursor-text w-full" name="category" id="" />
          </div>
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Details</label>
            </div>
            <input type="text" className="bg-white text-black bordered border- w-full" placeholder="" name="details" id="" />
          </div>
        </div>

        {/* Photo URL */}
        <div className="">
          <div className="w-1/2">
            <div>
              <label htmlFor="" className="mr-2">Photo URL</label>
            </div>
            <input type="text" className="bg-white text-black cursor-text w-full" name="photourl" id="" />
          </div>    
        </div>

        
        <input type="submit" className="btn btn-block" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;