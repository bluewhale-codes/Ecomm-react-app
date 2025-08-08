import React from "react";
import { Link } from "react-router-dom";
import { MyOders } from "../Product/MyOders";
const ProfileCard = () => {
  return (
     <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}
    >
      <div className="w-full max-w-5xl bg-white bg-opacity-95 p-8 rounded-2xl shadow-xl space-y-10">
        {/* Top Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1697129899/products/aormjggvhjlc4oj4xixs.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            />
            <div>
              <p className="text-2xl font-semibold">Demon124</p>
              <p className="text-gray-600 text-sm font-bold">0x675b642172517575gfy7a758844</p>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Edit Profile
            </a>
          </div>
        </div>

        {/* Options Section */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          <Link to="/orders/me" className="no-underline">
            <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-100 transition serviceBox">
              <img
                src="https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693414776/QXZhdGFycy9wYXJjZWwtYm94ZXMtb25saW5lLWRlbGl2ZXJ5LWludGVybmV0LW9yZGVyaW5nLWNvbmNlcHRfNjg3MDgtMjI0NF95MTY2bXY=/grid_landscape"
                alt="Orders"
                className="w-16 h-16 rounded-full object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Your Product</h3>
                <p className="text-sm text-gray-600">Track, return or buy again</p>
              </div>
            </div>
          </Link>

          <Link to="/password/update" className="no-underline">
            <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-100 transition serviceBox">
              <img
                src="https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693415546/QXZhdGFycy9jeWJlci1zZWN1cml0eS0xOTE1NjI4Xzk2MF83MjBfcGF4bHFw/grid_landscape"
                alt="Security"
                className="w-16 h-16 rounded-full object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Insurence</h3>
                <p className="text-sm text-gray-600">Insure Your Product</p>
              </div>
            </div>
          </Link>

          <Link to="/ShippingInfo" className="no-underline">
            <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-100 transition serviceBox">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                alt="Address"
                className="w-16 h-16 rounded-full object-contain"
              />
              <div>
                <h3 className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition">Connect Wallet</h3>
                <p className="text-sm text-gray-600">Meta mask</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-5">
         <MyOders/>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileCard;
