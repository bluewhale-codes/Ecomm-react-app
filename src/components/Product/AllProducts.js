import React ,{useEffect, useState} from 'react'
import Product from './Product'

export const AllProducts = ({contract}) => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    if(contract){
      loadProducts();
    }
  })
  const loadProducts = async () => {

    try {
      const count = await contract.productCount();
      console.log(count)
      const loaded = [];
      for (let i = 0; i < count; i++) {
        const p = await contract.products(i);
        console.log(p)
        loaded.push(p);
      }
      setProducts(loaded);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
     <div className='m-9'>
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition duration-300">
      List Your Product
     </button>
     </div>

    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 m-9" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}>
      <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p,idx)=>(
            <Product product={p} />
          ))}
          
          
        </div>
      </div>
    </div>
    {/* next */}
     {/* <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full">
        <AllProducts />
      </div>
    </div> */}
    
    </>
    
  )
}
