import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {cat,product} from '../Utils/Data'
import {motion} from 'framer-motion'
import Rowcontainer from './Rowcontainer';

const Menucontainer = () => {
          const [filter,setfilter]=useState("chicken")
      
  return (
    <div className='flex flex-col justify-center items-center'>
           <p className='text-lg lg:text-2xl font-semibold capitalize relative before:absolute before:bg-gradient-to-l from-orange-400 to-orange-600 before:w-24  before:h-1.5  before:rounded-full before:-bottom-2 mr-auto'>Our hot deshes</p>
           <div className=' w-full mt-6 flex justify-start items-center overflow-x-scroll scrollbar-none md:justify-center gap-8  pb-6 md:overflow-x-scroll md:scrollbar-none'>
          {
          cat.map((items,index)=>(
          <motion.div whileTap={{scale:0.75}} key={index} className={`group ${filter===items.name?'bg-menucolor':'bg-card'} w-20 h-24 drop-shadow-xl rounded-lg cursor-pointer flex flex-col justify-center items-center gap-3 hover:bg-menucolor`}onClick={()=>setfilter(items.name)}>
          <div className={`w-8 h-8 rounded-full ${filter===items.name? 'bg-card':'bg-menucolor'} group-hover:bg-card flex justify-center items-center shadow-lg mx-10`} >
          <FastfoodIcon className={`${filter===items.name? 'text-gray-400':'text-card'} group-hover:text-gray-400`}/>
          </div>
          <p className={`text-sm ${filter===items.name?'text-white':'text-gray-800'} group-hover:text-white`} >{items.name}</p>
                    </motion.div>
                    ))
                   }
          <div>
          </div >

          </div>
          <Rowcontainer flag={false} data={product.filter((item)=>item.category===filter)}/>
    </div>
  )
}

export default Menucontainer
