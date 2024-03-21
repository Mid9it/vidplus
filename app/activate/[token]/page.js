"use client"
import Button from '@/app/component/frontpage/button'
import Loading from '@/app/loading'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const token = params.token
    const [load, setload] = useState(true)
    const [msg, setmsg] = useState("")
   
    const First =async()=>{
    
      const url = `https://vidnaija-backend.fly.dev/emailverify/${token}`
      try{
      const data = await fetch(url)
      const info = await data.json()
      setmsg(info.mgs)
      setload(false)
      }
    catch(e){
      console.log(e)
    }}
    
  useEffect(()=>{
First()
  },[])  
  return (
    <div>{load?<Loading/>:<div className=' h-[100vh] fixed z-50 bg-[#03091A] w-full flex  flex-col justify-center items-center'>
     <div className='px-10 py-4 bg-[#111E34] flex flex-col items-center justify-center'>
      <div className=' mb-10 font-bold sm:text-xl text-white '>{msg}</div>
      <Button url={"/"} name={'GO HOME'}/>
      </div>
      </div>}</div>
  )
}

export default page