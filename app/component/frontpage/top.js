import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import Button from './button';
import {motion} from 'framer-motion'
import { useRouter } from 'next-nprogress-bar';


const Top = ({Datas}) => {
    const [no, setno] = useState(1)
    const router = useRouter()
const Info =()=>{ 
   const info = Datas.map((e, index)=>{
    const [image, setimage] = useState(e.image)
  
        return(
           <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1,scale:1,transition:{duration:1}}} key={e._id} style={no ==  index ? {display:"block"}:{display:"none"}}  className=' w-full'> <div  className=' flex justify-center lg:justify-between relative z-20 w-[100%] items-start'>
                <section className=' flex items-center  '>
                  
                    <div>
                    <div className=' flex mb-3'>
                        <p className=' bg-sky-600 text-white font-semibold text-xs px-2 py-1 rounded-sm mr-1'>{e.type.a}</p>
                        <p  className=' bg-yellow-500 text-white font-semibold text-xs px-2 py-1 rounded-sm mr-1'>{e.type.b}</p>
                        <p  className=' bg-orange-600 text-white font-semibold text-xs px-2 py-1 rounded-sm'>{e.type.c}</p>
                    </div>
                    <div className=' w-3/4 mb-5'>
                        <h1 className=' text-5xl lg:text-6xl font-bold text-white'>{e.title}<span className=' text-2xl lg:text-4xl font-normal ml-3 text-[#A5AFBE]'>{e.year}</span></h1>
                    </div>
                    <div className='group text-red-600 hover:text-yellow-500 sm:cursor-pointer'  onClick={() => router.push(e.trailer)}>
                            <section className=' flex items-center'><div className=' text-sm w-12 h-12 border-[1px] group-hover:border-yellow-500 rounded-full flex justify-center items-center border-red-600 mr-3'><FaPlay /></div><p className=' font-semibold'>WATCH TRAILER</p></section>
                    </div>
                    <div className=' mt-5 mb-5 flex flex-wrap items-center'>
                        <div className=' flex items-center'><div className=' text-orange-300 mr-1'><FaStar /></div><div className=' font-semibold text-xl'>{e.rating} <span className=' text-xs font-bold'>/10</span></div></div>
                        <div className=' text-4xl'><LuDot /></div>
                        <div className='  font-medium'>Run Time: {e.runtime}</div>
                        <div className=' text-4xl'><LuDot /></div>
                        <div className=' font-medium '>Rated: {e.rated}</div>
                        <div className=' text-4xl'><LuDot /></div>
                        <div className=' font-medium '>Release: {e.release}</div>
                    </div>
                   <Button name="DOWNLOAD" url={`/showcase/${e._id}/1`}/>
                    </div>
                </section>
                <section className=' lg:flex items-center hidden'>
                    <div><div className=' w-[280px] bg-cover h-[400px] bg-center overflow-hidden' style={{backgroundImage:`url(${image})`}} onError={()=>setimage('/profileimage/mv-it4.jpg')}></div></div></section>
            </div></motion.div> 
        )
    })
    return info
}
const Right =()=>{
    if (no < 2)
    {
        setno((e)=>e + 1)
    }
}
const Left =()=>{
    if (no > 0)
    {
        setno((e)=>e - 1)
    }
}
  return (
    <div className=" bg-[url('/slider-bg2.jpg')] pt-12 pb-10  w-[100vw] overflow-hidden text-[#A5AFBE] flex justify-center  bg-cover bg-no-repeat ">
        <div className=' w-[95%] 2xl:w-9/12 flex items-center justify-between'>
        <div className=' text-5xl mr-20 sm:cursor-pointer hover:text-yellow-500 hidden md:block lg:hidden xl:block' onClick={Left}><FaChevronLeft /></div>
            <Info/>
        <div className=' text-5xl ml-20 sm:cursor-pointer hover:text-yellow-500 hidden md:block lg:hidden xl:block'  onClick={Right}><FaChevronRight/></div>
        </div>
    </div>
  )
}

export default Top

