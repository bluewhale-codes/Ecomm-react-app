import React from 'react'

const ProductForm = () => {
  return(

     <>
     
     <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
    <h2 className="text-lg font-semibold mb-4 text-center">Add Product</h2>

    <form  id="product_form"   className="space-y-3">

      <div>
        <label className="block mb-1">Product Name</label>
        <input type="text" name="name" required className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea name="description" required rows="2" className="w-full border rounded px-2 py-1 text-sm"></textarea>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1">Price</label>
          <input type="number" name="Price" required className="w-full border rounded px-2 py-1 text-sm" />
        </div>

        <div>
          <label className="block mb-1">Discounted Price</label>
          <input type="number" name="dPrice" className="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1">Rating</label>
          <input type="number" step="0.1" name="rating" className="w-full border rounded px-2 py-1 text-sm" />
        </div>

        <div>
          <label className="block mb-1">Stock</label>
          <input type="number" name="Stock" required className="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      <div>
        <label className="block mb-1">Category</label>
        <input type="text" name="catagory" required className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Number of Reviews</label>
        <input type="number" name="numOfReviews" className="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1">Product Images</label>
        <input type="file" name="images" id="images" multiple required className="w-full text-sm" />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="isDiscount" id="isDiscount" className="h-4 w-4"/>
        <label for="isDiscount">Discount?</label>
      </div>

      <div>
        <label className="block mb-1">Discount %</label>
        <input type="number" name="dpercentage" max="99" className="w-full border rounded px-2 py-1 text-sm" />
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
