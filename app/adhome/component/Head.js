import React from 'react'
import { Formik } from 'formik'


const Movies = () => {
  return (
    <main>
        <header className=' flex justify-center'><h1 className=' font-bold text-white text-4xl'>SINGLE MOVIES</h1></header>
        <div>
            <h1 className=' font-bold text-white text-xl'>FIND MOVIES: </h1>
            <Formik>
                {(props)=>{
                    return(
                        <div className=' flex flex-col items-center'>
                            <input type='text' className='mt-2 w-[30%] h-12 rounded-lg bg-transparent border-[1px] border-opacity-30 border-gray-200 px-3' placeholder='Search For Movies'/>
                            <input type='sumbit' className=' bg-red-500 text-white text-center py-2 rounded-md font-bold mt-10' value={"SUMBIT"}/>
                        </div>
                    )
                }}
            </Formik>
        </div>
        <ul className=' mt-5 font-bold text-red-500 flex justify-between items-center mb-5'>
            <li className=' mb-3'>HOLLYWOOD</li>
            <li>BOLLYWOOD</li>
        </ul>
    </main>
  )
}

export default Movies