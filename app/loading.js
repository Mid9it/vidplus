import React from 'react'


const Loading = () => {
  return (
    <div className=' w-[100vw] h-[100vh] flex justify-center items-center fixed z-50 bg-[#03091A] '>
        <img src='/logos.png' className=' w-12 sm:w-24  mb-20 absolute top-40'/>
        <div>
        <div className=' w-20 h-20 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
        <div className=' w-12 h-12 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
        </div>
        </div></div>
  )
}

export default Loading