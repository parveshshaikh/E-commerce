import React from 'react'
import Delivery from '../img/delivery.png'
import herobg from '../img/heroBg.png'
import { herosData } from '../Utils/Data'
import {motion} from 'framer-motion'
import {Menu,Menucontainer} from './index'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='' >
          <div className='flex bg-orange-100 items-center w-fit px-4 mt-2 py-1 rounded-full font-semibold text-orange-500 gap-2'>
          <p>Bike Delivery</p>
          <div className='w-8 h-8 bg-white rounded-full drop-shadow-xl'>
          <img src={Delivery} alt='imu' className='w-full'/>
          </div>
          </div>
          <p className='text-[2.7rem] font-bold tracking-wide lg:text-[4.5rem]'>The Fastest Delivery in <span className='text-[3rem] text-orange-600 lg:text-[5rem]'>Your City</span></p>
          <p className='flex justify-center text-center text-base md:text-left md:w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable</p>
          <motion.button whileTap={{scale:0.75}} className='bg-gradient-to-br from-orange-400 to-orange-500 hover:shadow-xl w-full py-1 px-2 font-semibold rounded-lg md:w-auto mt-4'>Order Now</motion.button>
      </div>
      <div className='py-2 relative '>
          <img src={herobg} alt='bg' className='ml-auto w-full h-[300px] lg:w-[400px] lg:h-[500px] '/>
          <div className='w-full h-full absolute top-0 right-0  flex justify-center items-center mt-5 lg:px-32 py-4 gap-4 space-y-4 lg:space-y-0 flex-wrap'>
         
          {
            herosData.map((items,index)=>{
                return(
          <div className=' bg-cardoverlay backdrop-blur-sm w-[120px] lg:w-[150px]  rounded-3xl drop-shadow-lg ' key={index}>
          <div className='flex flex-col justify-center items-center space-y-1 font-semibold py-4'>
          <img src={items.image} alt='imu' className='-mt-10 w-20 lg:-mt-20 lg:w-36'/><p className='text-base lg:text-xl'>{items.name}</p>
          <p className='text-[12px] lg:text-sm'>{items.desc}</p>
          <p className='text-sm'><span className='text-red px-2'>$</span>{items.price}</p>
          </div>
          </div>
                              )
                    })
          }
         
          </div>
      </div>
       
    </div>
    
    <Menu/>
    <Menucontainer/>
    </>
  )
}

export default Home
