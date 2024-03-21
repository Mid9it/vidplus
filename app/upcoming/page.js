"use client"
import { Formik } from 'formik'
import React, { useState } from 'react'
import Loading from '../loading'
import * as yup from 'yup'

const page = () => {
    const [load, setload] = useState(false)
    const Schema = yup.object({
        title:yup.string().label('Title').max(150).required(),
        src:yup.string().label('Src').required(),
        image:yup.string().label('image').required()

  
      })
  return (
    <main className=' min-h-[100vh] flex justify-center items-center'>
        {load ?<Loading/>:
        <div>
            <Formik
            initialValues={{title:"",src:"",image:""}}
            validationSchema={Schema}
            onSubmit={async(form,{resetForm})=>{
                const tok = localStorage.getItem('data')
                if(!tok){
                  return router.push("/")
                }
                const token = JSON.parse(tok).token
                setload(true)
                const url ="https://vidnaija-backend.fly.dev/upcomingPush"
                const data = await fetch(url,{
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' ,'auth-token':token },
                    body:JSON.stringify(form)
                  })
                  const re = await data.json()
                if(re.mgs)
                {
                   resetForm()
                    setload(false)

                }
            }}
            >{(props)=>{
                    return(
                        <div className='flex flex-col items-center'>
                            <h1 className=' text-white font-bold text-2xl mb-5'>UPCOMING</h1>
                            <div className=' text-red-500 text-sm'>{props.touched.title && props.errors.title}</div>
                            <input type='text' value={props.values.title} placeholder='TITLE' className='w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' onChange={props.handleChange("title")}/>
                            <div className=' text-red-500 text-sm'>{props.touched.src && props.errors.src}</div>
                            <input type='text' value={props.values.src} placeholder='SRC' className='w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' onChange={props.handleChange("src")}/>
                            <div className=' text-red-500 text-sm'>{props.touched.image && props.errors.image}</div>
                            <input type='text' value={props.values.image} placeholder='IMAGE' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25 mb-5' onChange={props.handleChange("image")}/>
                            <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                        </div>
                    )
                }}
            </Formik>
        </div>}
    </main>
  )
}

export default page