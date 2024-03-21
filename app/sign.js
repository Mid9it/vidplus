import React from 'react'
import Login from './login'
import { IoMdCloseCircle } from "react-icons/io";
import Signup from './signup';

const Sign = ({login, signup}) => {
  return (
    <div className=' fixed w-[100vw] h-[100vh] z-40 top-0 bg-black bg-opacity-40 flex transition-all duration-500 ease-in-out  justify-center items-center'>
      <div className=' w-full sm:w-[440px] h-[100vh]  flex items-center justify-center bg-white relative z-50'>
        <div className=' absolute top-4 right-5'  onClick={()=>{signup(false)}}><IoMdCloseCircle className=' text-3xl text-black cursor-pointer shadow-md rounded-full hover'/></div>
        {login&&<Login signup={signup}/>}
        {login||<Signup/>}
      </div>
    </div>
  )
}

export default Sign