"use client"
import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import {useRouter} from "next-nprogress-bar"


const Series = ({sl}) => {
  const router = useRouter()
  const [result, setresult] = useState([])
  const [load, setload] = useState(false)
  const [a, seta]= useState(false)
  const [id, setid] = useState()
  const Getresult =async(e)=>{
    if(e == "")
    {
      setresult([])
    return
    }
    setload(true)
    const tok = localStorage.getItem('data')
    if(!tok){
      return router.push("/adminbaby")
    }
    const token = JSON.parse(tok).token

    const data = await fetch(`https://vidnaija-backend.fly.dev/Searchmovie/${e}`,{
      method: 'GET',
      headers:{
        'auth-token':token}
    })
    const answer = await data.json()
    if(answer?.auth)
    {
    setload(false)
    setresult(answer.data)
    }
    else{
      router.push("/adminbaby")
    }
     
   

   

  }
  const Delete = async(ei)=>{
    
    sl(true)
    const tok = localStorage.getItem('data')
    if(!tok){
      return router.push("/")
    }
    const token = JSON.parse(tok).token
  
    const delet = await fetch(`https://vidnaija-backend.fly.dev/deletemovie/${ei}`,{
      method:'DELETE',
      headers:{
        'auth-token':token}
    })
    const data = await delet.json()
    if(data?.auth == false)
    {
      router.push('/')
    }
    if(data.delete)
    {
      window.location.reload()
    }
  }



  return (
    <main>

    <header className=' flex justify-center'><h1 className=' font-bold text-white lg:text-4xl hidden lg:block'>SEARCH SERIES/MOVIES</h1></header>
    <div>
        <h1 className=' font-bold text-white lg:text-xl mb-5'>FIND MOVIES: </h1>
   
                    <div className=' flex flex-col items-center'>
                        <input type='text' className='mt-2 w-[90%] lg:w-[30%] h-12 rounded-lg bg-transparent border-[1px] border-opacity-30 border-gray-200 px-3' placeholder='Search For Movies' onChange={(e)=>Getresult(e.target.value)} />
                    </div>

    </div>
    <ul className=' mt-10 font-bold text-red-500  justify-between mb-5 pr-5 hidden lg:flex'>
            <li>ANIME</li>
            <li>HOLLYWOOD TV SERIES</li>
            <li>ASIAN SERIES</li>
            <li>HOLLYWOOD</li>
            <li>BOLLYWOOD</li>
    </ul>
    <div>
    {a&&<div  className=' h-[100vh] w-[100vw] fixed z-30 justify-center flex   '><div className=' w-52 flex h-40 flex-col items-center justify-center bg-red-500 text-white font-bold '>
                    <div className='mb-5'>ARE YOU SURE?</div>
                    <div className=' flex justify-between w-full px-2'><div onClick={()=>Delete(id)} className=' cursor-pointer'>YES</div><div onClick={()=>seta(false)}  className=' cursor-pointer'>NO</div></div>
                  </div></div>}
      <div className=' h-full mt-20'>{load&&<div className=' w-full h-full flex justify-center items-center'>
        <div className=' w-20 h-20 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
        <div className=' w-12 h-12 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
        </div>
        </div>}</div>
            {
              result.map((e)=>{
             
                return(
                  <div className=' flex items-center justify-between pr-5 py-3 border-opacity-30 pl-1 mb-5 border-[1px] border-gray-200 p'><div className=' font-bold text-white'>{e.title}</div><div className=' flex justify-center items-center'><MdMovieEdit className=" text-blue-500 text-2xl cursor-pointer"  onClick={()=>router.push(`/edit/${e._id}`)}/><MdDeleteForever className=' cursor-pointer ml-20 text-2xl text-red-600' onClick={()=>{seta(true)
                  setid(e._id)}}/></div>  </div>
                )
              })
            }
    </div>
</main>
  )
}

export default Series

