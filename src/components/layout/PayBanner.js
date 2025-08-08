import React from 'react'

export const PayBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
         
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
         Your Marketplace, Powered by Ethereum 
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Buy anything. Sell anything. No middlemen. Own your trade with the power of blockchain.
        </p>
        <a
          href="#shop"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
         Connect Wallet
        </a>
        <div className="flex items-center justify-center gap-12 mt-5">
          <div className="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Buy" className="w-16 h-16 md:w-20 md:h-20" />
            <p className="mt-2 text-sm">Buy with ETH</p>
          </div>
         
        </div>
      </div>
    </section>

  )
}
