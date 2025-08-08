import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import { Banner } from './Banner';
const Header = ({ account,connectWallet }) => {
  return (
    <>
         
         <nav className="bg-white shadow sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">

    
    
<div className="flex items-center space-x-2">
  <img src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1695921155/Avatars/download_2_1_v3hmri.png" alt="Blue Whale Logo" className="h-10 w-auto" />
</div>

      <div className="hidden md:flex items-center space-x-6 font-semibold">
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">Home</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">Products</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">Categories</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">About</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">Contact</a>
      </div>

      
      <div className="hidden md:block w-64">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full border px-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4 font-semibold">
        <a href="#" className="text-gray-800 hover:text-blue-600 transition">Cart 🛒</a>
       <button onClick={connectWallet} className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-green-500 hover:to-teal-600 transition duration-300">
          {account ? `Connected: ${account.slice(0,6)}...${account.slice(-4)}` : "Connect Wallet"}
        </button>

        
      </div>
    </div>
  </div>
</nav>
  
    </>
  )

 
}

export default Header
