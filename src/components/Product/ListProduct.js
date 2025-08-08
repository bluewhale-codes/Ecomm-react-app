import React , {useState}from 'react'
import { parseEther, Contract } from "ethers";
export const ListProduct = ({loadProducts,contract}) => {


    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
  setImageFile(file);
  setPreview(URL.createObjectURL(file));
};

const uploadImage = async () => {
  const data = new FormData();
  data.append("file", imageFile);
  data.append("upload_preset", "myBlockChain"); // Set in Cloudinary
  const res = await fetch("https://api.cloudinary.com/v1_1/dycjjaxsk/image/upload", {
    method: "POST",
    body: data,
  });
  const file = await res.json();
  setImage(file.secure_url);
  return file.secure_url;
};


  const listProduct = async () => {
    console.log("inside list Product")
    if (!name || !price) return alert("Please enter name and price");
    try {
      const imageUrl = await uploadImage();
      const tx = await contract.listProduct(name, parseEther(price),imageUrl);
      await tx.wait();
      alert("Product listed!");
      setName("");
      setPrice("");
      
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please choose an image.");
      return;
    }

    const productData = {
      name: productName,
      price: productPrice,
      image: productImage,
    };

    
    console.log("Product listed:", productData);
  };
  return (
     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">List a Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Crypto T-Shirt"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Product Price in ETH */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Product Price (ETH)</label>
          <input
            type="number"
            step="0.0001"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Choose Product Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleFileChange}
            
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <img src={preview} alt="Preview" className="w-full rounded-lg shadow" />
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={listProduct}
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300"
        >
          List Product
        </button>
      </form>
    </div>
    
  )
}
