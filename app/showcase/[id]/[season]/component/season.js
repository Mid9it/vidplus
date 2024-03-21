"use client"
import React, { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link"
import { useRouter } from 'next-nprogress-bar';

const Season = ({season,seano,seasonno,  setload, id}) => {
    const router = useRouter()
    const [co, setco] = useState(false)
    const result = Array.from({ length: seano }, (_, i) => i + 1);
    const Episode = ({array}) =>{
    
        const data = array?.map((e, i)=>{
            return(
                <Link href={{pathname:"/download",query:{uri:e.link}}} onClick={()=>window.open("//greewepi.net/4/6809571")} key={i}  className=' mr-5 px-4 bg-red-500 font-bold mb-10 text-white py-[1px] sm:py-1  text-xs sm:text-base rounded-sm flex flex-col items-center'>Episode <p>{e.no}</p></Link>
            )
        })
        return data
    }
    
    const Seasons = () =>{
        const data = result.map((e,i)=>{
            return(
                <div  key={i}   className=' py-2 w-full   px-10 border-[#020B19] bg-[#243651] border-2 ' onClick={()=>{
                    if(e != seasonno)
                    {
                    setload(true)
                    router.push(`/showcase/${id}/${e}`)
                    }
                }}>
                         Season {e}   
                </div>
            )
        })
        return data
    }
    
useEffect(()=>{

},[])
  return (
    <div  className=' mt-5 flex f w-full'>

        <div className=' flex flex-col w-full'>
            <div className=' outline-none mb-3 w-fit relative  border-[#020B19] rounded-md flex items-center bg-[#243651] cursor-pointer text-white' onClick={()=>setco(!co)}>
            <h1 className=' font-bold px-7 py-2  text-lg'>Seasons</h1>
            <FaAngleDown className=' mx-2' />
            {co &&<div className=' absolute  top-12 h-60 scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin overflow-scroll'><Seasons /></div>}
            </div>
            <div className='flex items-center mb-5'><p className=' mr-2'>👆</p><p className=' text-white font-bold'>Choose Season</p></div>
            <div><h1 className=' text-white font-bold mb-5 text-xl underline'>Season {seasonno}</h1></div>
            <div className=' flex w-full flex-wrap'>
            <Episode array={season?.episode}/>
            </div>
        </div>
    </div>
  )
}

export default Season