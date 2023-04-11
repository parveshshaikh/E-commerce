import React, { useEffect, useRef } from 'react'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {motion} from 'framer-motion'
import { add_items } from '../Action/Action';
import { useDispatch } from 'react-redux';
const Rowcontainer = ({flag,data,scrollvalue}) => {
  const dispatch=useDispatch()
  const rowcontainer=useRef()
  useEffect(()=>{
rowcontainer.current.scrollLeft+=scrollvalue
  },[scrollvalue])
  const add=(e)=>{
    dispatch(add_items(e))

  }
  return (
    <div ref={rowcontainer} className={`flex items-center gap-3 scroll-smooth ${flag?'overflow-x-scroll scrollbar-none':'overflow-hidden flex-wrap justify-center'}`}>
     {
      data.map((items,index)=>(
        <div key={index} className='w-[300px] min-w-[225px] shadow-md backdrop-blur-lg h-auto my-12 bg-gray-50 hover:shadow-lg flex flex-col justify-center '>
        <div className='flex justify-between items-center'>
        <motion.img whileHover={{scale:1.2}} src={items.image} alt='imu' className='h-24  -mt-8 drop-shadow-2xl' />
          <motion.div whileTap={{scale:0.75}} className='bg-cartred rounded-full h-7 w-7 flex items-center justify-center cursor-pointer box-border hover:shadow-md'onClick={()=>add(items)}>
                    <ShoppingBasketIcon className='text-white p-[2px]'/>
          </motion.div>
        </div>
        <div className='flex flex-col justify-end items-end '>
          <p className='font-semibold'>{items.name}</p>
          <p className='text-gray-500'>45 calories</p>
          <div className='text-sm mb-2 font-semibold'><span className='text-red px-1'>$</span>{items.price}</div>

        </div>
      </div>
      ))
     }
    </div>
  )
}

export default Rowcontainer
