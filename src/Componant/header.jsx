
import logo from '../img/logo.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {show} from '../Action/Action'
import Cartcontainer from './Cartcontainer';
import { Link } from 'react-router-dom';
const Header=()=>{
  const [shownav,setshownav]=useState(true)
  const dispatch =useDispatch()
  const {cart} =useSelector((state)=>state.set)
console.log('cart',cart)
          return(
          <div className="fixed z-40 bg-orange-50 w-full ">
           <div className=" px-8 md:px-16 py-2 flex justify-between">
          <div className='flex items-center gap-2'>
          <img src={logo} alt="imu"className='w-8'/>
          <p className='font-bold'>City</p>
          </div>
        <div className='flex items-center gap-7'>
        <ul className='hidden md:flex ml-auto space-x-5 font-semibold'>
                   <Link to='/' className='hover:before:absolute before:bg-orange-600 before:w-12 before:h-[3px] before:bottom-3 before:rounded-xl cursor-pointer'>Home</Link>
                   <Link to={'/menu'} className='hover:before:absolute before:bg-orange-600 before:w-12 before:h-[3px] before:bottom-3 before:rounded-xl cursor-pointer'>Menu</Link>
                   <Link to='/' className='hover:before:absolute before:bg-orange-600 before:w-12 before:h-[3px] before:bottom-3 before:rounded-xl cursor-pointer'>About</Link>
                   <Link to='/' className='hover:before:absolute before:bg-orange-600 before:w-14 before:h-[3px] before:bottom-3 before:rounded-xl cursor-pointer'>Contact</Link>
                   
          </ul>
          <div className='relative flex items-center gap-5 cursor-pointer'>
                    <div onClick={()=>dispatch(show(true))}>
                    <ShoppingBasketIcon/>
                    {
                      cart.length>=1 &&<div className='absolute -top-3 left-3 bg-cartred w-5 h-5 rounded-full items-center'>
                      <p className='text-sm text-center text-white '>{cart.length}</p>
            </div>
                    }
                    </div>
                    <div className='cursor-pointer md:hidden'>
                      {shownav?<MenuIcon onClick={()=>setshownav(false)}/>:<CloseIcon onClick={()=>setshownav(true)}/>}
                    </div>
          </div>
          <ul className={`absolute top-12  bg bg-white rounded-md shadow-lg flex flex-col px-5 items-center  md:hidden ${shownav ?'-right-96':'right-5'}`}>
                   <Link to='/' className='cursor-pointer'onClick={()=>setshownav(true)}>Home</Link>
                   <Link to={'/menu'} className='cursor-pointer'onClick={()=>setshownav(true)}>Menu</Link>
                   <Link to='/' className='cursor-pointer'onClick={()=>setshownav(true)}>About</Link>
                   <Link to='/' className='cursor-pointer'onClick={()=>setshownav(true)}>Contact</Link>
          </ul>
        </div>
          </div>         
                  <Cartcontainer/>   
          </div>
          )
}
export default Header