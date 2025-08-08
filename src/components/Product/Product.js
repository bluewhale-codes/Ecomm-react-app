import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-stars';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = ({product}) => {
  const dispatch = useDispatch();
  const quantity = 1;

  return (
    <div className="w-60 bg-white rounded-lg shadow-md p-4 m-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
      <Link target="_blank" className="relative group block">
        <div className="w-full h-60 bg-gray-100 rounded-md overflow-hidden relative">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <FavoriteIcon className="text-red-500" />
          </div>
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-800">
          <h3>{product.name}</h3>
          <h3>
            ETH 0.001 <span className="line-through text-gray-400 ml-2 text-xs">Price: {Number(product.price)/1e18} ETH</span>
          </h3>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <ReactStars count={5} size={20} color2={'#ffd700'} />
          <span className="ml-1">(4 Review)</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-blue-400 hover:text-white transition-all">
            Buy
          </button>
        <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-lime-400/50 transition duration-300">
        Available
      </span>

        </div>
      </div>
    </div>
  );
};

export default Product;
