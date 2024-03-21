"use client"
import React, { useState, useEffect } from 'react'
import Series from './component/Series'
import { FaCalendarPlus } from "react-icons/fa";
import { useRouter } from 'next-nprogress-bar';
import Loading from '../loading';
import { Gets } from '../check/Check';

const page = () => {
  const [load, setload] = useState(false)
  const [l,sl]= useState(true)
  const router = useRouter()

  useEffect(()=>{
     Gets(router,sl)
  
  },[])

  return (
    <>
    {l? <Loading/>:<div className=' pt-40 relative'>
      {load&&<nav className=' fixed left-0 z-40 font-bold text-white text-xl rounded-r-lg bg-[#243651]'>
        <ul className=' px-20 py-10  flex flex-col items-center'>
          <li><button className=' bg-blue-500 px-5 py-3 cursor-pointer mb-5 hover:bg-blue-700 text-sm rounded-lg' onClick={()=>router.push('/addmovies')}>ADD MOVIE</button></li>
          <li><button className=' bg-blue-500 px-5 py-3 cursor-pointer mb-5 hover:bg-blue-700 text-sm rounded-lg' onClick={()=>router.push('/addseries')}>ADD SERIES</button></li>
          <li><button className=' bg-blue-500 px-5 py-3 cursor-pointer hover:bg-blue-700 text-sm rounded-lg' onClick={()=>router.push('/upcoming')}>ADD UPCOMING</button></li>
        </ul>
      </nav>}
      <d iv className='  '><FaCalendarPlus className='text-white text-4xl absolute top-40 right-20 z-40 hover:text-yellow-500 cursor-pointer' onClick={()=>setload(!load)}/></d>
      <div className=' min-h-[100vh] flex justify-center'>
        <div className=' w-[87%]'>
        <Series sl={sl}/>
      </div>
      </div>
    </div>}</>
  )
}

export default page