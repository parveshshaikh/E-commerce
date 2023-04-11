import React, { useEffect, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import I1 from '../img/i1.png'
import {motion} from 'framer-motion'
import {show,add_items,remove_items,remove_qty} from '../Action/Action'
import { useDispatch, useSelector } from 'react-redux';
import emptycart from '../img/emptyCart.svg'
const Cartcontainer = () => {
  const[price,setprice]=useState()
  const {show_cart,cart}=useSelector((state)=>state.set)
  const dispatch=useDispatch()

  const Total=()=>{
    let price=0;
    cart.map((item)=>{
      return price=item.price*item.qty+price
    })
     setprice(price)
  }
  useEffect(()=>{
      Total()
    })
  return (
    <div className={`h-screen w-[330px] right-0 top-0 drop-shadow-lg  bg-white fixed z-50 ${show_cart?'block':'hidden'}`}>
    <div className='text-3xl my-2 p-1' onClick={()=>dispatch(show(false))}><KeyboardBackspaceIcon/></div>
    {
      cart.length>=1?
      <div className='w-full h-full bg-cartbg rounded-t-3xl flex flex-col py-10 '>
      <div className='flex flex-col h-[250px] overflow-y-scroll scrollbar-none'>
        {/* cart item section */}
     {
      cart.map((items,index)=>{
        return(
          <div key={index} className='w-full bg-cartItem flex items-center justify-between px-4 '>
          <div className=' py-1 flex gap-2 items-center' ><img src={items.image} alt='imu'className='w-14  ' />
          <div className='font-semibold text-gray-50'>
           <p>{items.name}</p>
           <div className='flex '>
           <p>${items.price}</p>
           <div className='flex space-x-1 ml-20 text-base'> <motion.p whileTap={{scale:0.75}} onClick={()=>dispatch(remove_qty(items))}><RemoveIcon/></motion.p>
             <span>{items.qty}</span>
             <motion.p whileTap={{scale:0.75}} onClick={()=>dispatch(add_items(items))}><AddIcon/></motion.p>
           </div>
           </div>
           
          </div>
          </div>
          <motion.div whileTap={{scale:0.75}} className='text-orange-400' onClick={()=>dispatch(remove_items(items.id))}><DeleteIcon/></motion.div>
         
       </div>
        )
      })
     }
      </div>
      {/* Total */}
      <div className='flex flex-col bg-cartTotal  rounded-t-2xl px-8 py-2'>
        <div className=' flex justify-between items-center py-4 '>
          <p className='text-gray-400 text-base'>Sub Total</p>
          <p className='text-gray-400 text-base'>$ {price}</p>
        </div>
        <div className=' flex justify-between items-center py-4 '>
          <p className='text-gray-400 text-base'>Delivery</p>
          <p className='text-gray-400 text-base'>$ 2.5</p>
        </div>
        <div className=' border-b border-gray-600 my-2'></div>
        <div className=' flex justify-between items-center py-4 '>
          <p className='text-gray-200 text-base'> Total</p>
          <p className='text-gray-200 text-base'>$ {price+2.5}</p>
        </div>
         {/* Button Section*/}
    <div>
      <button className='bg-gradient-to-t from-orange-400 to-orange-600 text-slate-100 w-full rounded-full py-2 my-4'>Check out</button>
    </div>
      </div>
   
      </div>:<div className='flex  flex-col justify-center items-center'>
        <img src={emptycart} alt='emptycart' className='mt-24'/>
        <p className='font-semibold mt-5'>Add Some Items In Cart</p>
      </div>
    }
      
    </div>
    
  )
}

export default Cartcontainer
