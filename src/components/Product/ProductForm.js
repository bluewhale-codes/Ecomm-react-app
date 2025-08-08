import React ,{useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { newProduct } from '../../actions/productActions'
const ProductForm = () => {

    const {loading,error,success} = useSelector((state)=>state.registerProduct)
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [price, setPrice] = useState("")
    const [discountPrice,setDiscountPrice] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState("")
    const [reviewsNo, setreviewNo] = useState("")
     const [isChecked, setIsChecked] = useState(false);
    const [dpercentage, setDPercentage] = useState("")
    //const [imagesPreview, setImagesPreview] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
       
        if(success){
            
            alert("Product created");
        }
        
     }, [dispatch,success])

     // starts as unchecked

    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked); // this will be true or false
    };

    const createFormSubmitHandler = (e)=>{
           e.preventDefault();
           const myForm = new FormData();
           myForm.set("name",name);
           myForm.set("Price",price);
           myForm.set("dPrice",discountPrice)
           myForm.set("description",description);
           myForm.set("Stock",stock);
           myForm.set("catagory",category);
           myForm.set("rating",rating);
           myForm.set("numOfReviews",reviewsNo);
           myForm.set("isDiscount",isChecked)
           myForm.set("dpercentage",dpercentage)

           images.forEach((image)=>{
            myForm.append("images",image)
           })

            dispatch(newProduct(myForm));
           
           
     };


    const createProductImageChanage = (e) =>{
        const files = Array.from(e.target.files);

        setImages([]);
        
        files.forEach((file)=>{
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    
                    setImages((old)=>[...old,reader.result])
                }
            }
            reader.readAsDataURL(file);
        })
     }
  return(

     <>
     
     <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
    <h2 className="text-lg font-semibold mb-4 text-center">Add Product</h2>

    <form  id="product_form"  encType='multipart/form-data' onSubmit={createFormSubmitHandler}  className="space-y-3">

      <div>
        <label className="block mb-1">Product Name</label>
        <input onChange={(e)=> setName(e.target.value) }  type="text" name="name" required className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea onChange={(e)=> setDescription(e.target.value) }  name="description" required rows="2" className="w-full border rounded px-2 py-1 text-sm"></textarea>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1">Price</label>
          <input onChange={(e)=> setPrice(e.target.value) }  type="number" name="Price" required className="w-full border rounded px-2 py-1 text-sm" />
        </div>

        <div>
          <label className="block mb-1">Discounted Price</label>
          <input onChange={(e)=> setDiscountPrice(e.target.value) }  type="number" name="dPrice" className="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1">Rating</label>
          <input onChange={(e)=> setRating(e.target.value) }  type="number" step="0.1" name="rating" className="w-full border rounded px-2 py-1 text-sm" />
        </div>

        <div>
          <label className="block mb-1">Stock</label>
          <input onChange={(e)=> setStock(e.target.value) }  type="number" name="Stock" required className="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      <div>
        <label className="block mb-1">Category</label>
        <input onChange={(e)=> setCategory(e.target.value) }  type="text" name="catagory" required className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Number of Reviews</label>
        <input onChange={(e)=> setreviewNo(e.target.value) }  type="number" name="numOfReviews" className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Product Images</label>
         <input multiple type='file'  name='avatar' required className="w-full text-sm" onChange={createProductImageChanage} accept='image/*'/>
       
      </div>

       <div className="flex items-center gap-2">
        <input onChange={handleCheckboxChange} checked={isChecked} type="checkbox" name="isDiscount" id="isDiscount" className="h-4 w-4"/>
        <label for="isDiscount">Discount?</label>
      </div> 

      <div>
        <label className="block mb-1">Discount %</label>
        <input onChange={(e)=> setDPercentage(e.target.value) }  type="number" name="dpercentage" max="99" className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-1.5 rounded text-sm hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  </div>
     </>

  )
  
}

export default ProductForm
