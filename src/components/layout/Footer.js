import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Logo or Brand */}
        <div>
          <h2 className="text-2xl font-bold">BlueWhale</h2>
          <p className="text-sm text-gray-400">Powered by Ethereum Blockchain</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-indigo-400 transition">About</a>
          <a href="#products" className="hover:text-indigo-400 transition">Insurence policy</a>
          <a href="#sell" className="hover:text-indigo-400 transition">Sell</a>
          <a href="#wallet" className="hover:text-indigo-400 transition">Connect Wallet</a>
        </div>

        {/* Social or Credits */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} BlueWhale. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
