import React, { useEffect,useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {motion} from 'framer-motion'
import Rowcontainer from './Rowcontainer';
import {product} from '../Utils/Data'
const Menu = () => {
 const [scrollvalue,setscrollvalue]=useState()
 useEffect(()=>{

 },[scrollvalue])
  return (
    <div className='w-full mt-24 lg:mt-5 '>
      <div className='w-full flex justify-between my-5 '>
          <p className='text-lg lg:text-2xl font-semibold capitalize relative before:absolute before:bg-gradient-to-l from-orange-400 to-orange-600 before:w-40 before:h-1.5  before:rounded-full before:-bottom-2'>Our Fresh & healthy fruits</p>
          <div  className='hidden md:flex gap-3'>
          <motion.div whileTap={{scale:0.75}}><KeyboardArrowLeftIcon className='bg-orange-400 rounded-md hover:bg-orange-500 text-white shadow-lg cursor-pointer' onClick={()=>  setscrollvalue(-1200)}/></motion.div>
          <motion.div whileTap={{scale:0.75}}><KeyboardArrowRightIcon className='bg-orange-400 rounded-md hover:bg-orange-500 text-white shadow-lg cursor-pointer' onClick={()=>setscrollvalue(1200)}/></motion.div>
          </div>
      </div>
      <Rowcontainer scrollvalue={scrollvalue} flag={true} data={product.filter((i)=>i.category==='fruit')}/>
    </div>
  )
}

export default Menu
