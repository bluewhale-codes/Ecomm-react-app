import React from 'react'

export const MyOders = () => {
  return (
        <div className="w-full max-w-3xl mx-auto mb-6 border-2 border-gray-300 rounded-xl hover:cursor-pointer overflow-hidden">
      {/* Header */}
      <div className="flex justify-between px-6 py-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Order Id . <span className="text-blue-700 font-medium">Pending</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Placed On <b>: 1-23-2003</b> | Arrive in : <b>1-2-2005</b>
          </p>
        </div>
        <div className="text-right">
          <h3 className="text-lg font-semibold text-gray-800">SubTotal</h3>
          <p className="text-sm text-gray-500">eth 56</p>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 w-1/2">Product</th>
            <th className="py-3 px-4">Seller</th>
            <th className="py-3 px-4">Price per Unit</th>
            <th className="py-3 px-4">Product</th>
            <th className="py-3 px-4">QTY</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((_, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
              <td className="py-2 px-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1694703718/products/fg7an0qltxqjywnfvlys.jpg"
                    alt="product"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm font-medium">Trimmer</p>
                </div>
              </td>
              <td className="py-2 px-4">
                <p className="text-sm text-gray-700">0xfhfh344kcsda7h2klkly9867</p>
              </td>
              <td className="py-2 px-4">
                <p className="text-sm text-gray-700">0.009Eth</p>
              </td>
              <td className="py-2 px-4">
                <p className="text-sm text-gray-700">abv</p>
              </td>
              <td className="py-2 px-4">
                <p className="text-sm text-gray-700">1</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
