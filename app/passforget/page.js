"use client"
import { Formik } from 'formik'
import React, { useState } from 'react'
import Loading from '../loading'
import * as yup from 'yup'
import { useRouter } from 'next-nprogress-bar'

const page = () => {
    const router = useRouter()
    const [load, setload] = useState(false)
    const Schema = yup.object({
        email:yup.string().email().label('Email').max(150).required(),
       
      })
    const [show, setshow] = useState(false)
    const [mgs, setmgs] = useState("")
  return (
    <main className=' fixed w-full z-50 h-[100vh] flex justify-center items-center  bg-[#03091A]'>
        {load ?<Loading/>:
        <div>
            <Formik
            initialValues={{email:""}}
            validationSchema={Schema}
            onSubmit={async(form,{})=>{
                setload(true)
                const url ="https://vidnaija-backend.fly.dev/password"
                const data = await fetch(url,{
                    method: "POST",
                    headers: { 'Content-Type': 'application/json'},
                    body:JSON.stringify(form)
                  })
                  const re = await data.json()
                if(re.auth)
                {   
                    setmgs(re.mgs)
                    setshow(re.auth)
                    setload(false)

                }
            }}
            >{(props)=>{
                    return(
                        <div className='flex flex-col items-center'>
                            <h1 className=' text-white font-bold text-2xl mb-5'>ENTER EMAIL</h1>
                            {show&&<h1 className=' bg-blue-500 px-4 py-2 font-bold text-white mb-3'>{mgs}</h1>}
                            <div className=' text-red-500 text-sm'>{props.touched.email && props.errors.email}</div>
                            <input type='email' value={props.values.email} placeholder='EMAIL' className='w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' onChange={props.handleChange("email")}/>
                            <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                            <div className=' flex justify-center mb-10 font-bold text-white px-2 py-2 bg-blue-500  cursor-pointer' onClick={()=>router.push("/")}><p>GO HOME</p></div>
                        </div>
                    )
                }}
            </Formik>
        </div>}
    </main>
  )
}

export default page