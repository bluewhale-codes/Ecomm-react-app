import React from 'react'
import { Banner } from './Banner'
import Product from '../Product/Product'
import { PayBanner } from './PayBanner'
import { Footer } from './Footer'
import ProfileCard from './ProfileCard'
export const Home = () => {
  return (<>
    <div className='m-4'>
       <Banner/>
    </div>
     {/*  product page */}
    <div className='flex flex-row  mt-2 mx-8'>
       
    </div>
    <div className='mt-2 mx-8'>
       
    </div>
       <PayBanner username="Vishal Shakya"
  walletAddress="0xAbC1234567890defABC1234567890DEFabc12345"
  profileImage="https://via.placeholder.com/150"/>
        <Footer/>
  </>
    
  )
}
