"use client"
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { Formik } from 'formik';
import * as yup from 'yup'
import { useRouter } from 'next-nprogress-bar';

const Top = ({info,infosmall}) => {
  const router = useRouter()
  const schema = yup.object({
    search:yup.string().required()
  })
  const [series, setserie] = useState(true)
  useEffect(()=>{
    if(info != "ASIANSERIES" && info != "ANIME" && info != "TVSHOWS")
    {
      setserie(false)
    }
  },[])
  return (
    <main className=" relative bg-[url('/slider-bg2.jpg')] z-10   w-[100vw] overflow-hidden text-[#A5AFBE] flex justify-center  bg-cover bg-no-repeat ">
        <div className=' absolute z-10 w-full h-full bg-black bg-opacity-40'></div>
    <Formik 
    initialValues={{search:""}}
    validationSchema={schema}
    onSubmit={async(form)=>{
      router.push(`/display/${infosmall}/1/${form.search}`)
    }}>
      {(props)=>{
        return(
          <form className=' w-full'>
        <div className=' flex justify-end flex-col w-full items-center py-32 relative z-40'>
        <div className=' w-[90%] sm:w-3/4 2xl:w-1/2 mb-4 flex items-center'><input type='text' value={props.values.search} onChange={props.handleChange('search')} placeholder='Search for Movie or TV Show' className='px-4 font-medium w-full h-14 border-y-4  outline-none border-[#020B19] bg-[#243651] text-white'/>
          <div className=' flex justify-center relative items-center h-14 border-y-4 border-r-4  border-[#020B19] bg-[#243651] text-white  px-3 text-2xl sm:cursor-pointer hover:text-yellow-500 '>
          <input type='submit' className=' absolute sm:cursor-pointer w-full h-full z-20' onClick={props.handleSubmit} value={" "}/><IoSearch />
          </div>
          </div>
            <header className=' font-bold text-2xl sm:text-4xl text-white mb-5'>MOVIE LISTING - {info.toUpperCase()}</header>
            <div className=' flex items-center'><Link href={"/"}><p className=' mr-3 text-blue-500 sm:cursor-pointer'>HOME</p></Link> <p className='text-xs mr-3'><FaChevronRight/></p><p>{info.toUpperCase()}</p></div>
        </div>
        </form>)}}
        </Formik>
    </main>
  )
}

export default Top