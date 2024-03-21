"use client"
import { Formik } from 'formik'
import React, { useState } from 'react'
import Loading from '@/app/loading'
import * as yup from 'yup'
import { useRouter } from 'next-nprogress-bar'

const page = ({params}) => {
    const token = params.token
    const router = useRouter()
    const [load, setload] = useState(false)
    const [show, setshow] = useState(false)
    const [mgs, setmgs] = useState("")
    const [pass, setpass] = useState(true)
    const Schema = yup.object({
        npassword:yup.string().min(1).max(15).required().label('New Password'),
        copassword:yup.string().oneOf([yup.ref('npassword'),null],'Password must match').required().label('New Password Comfirmation')

  
      })
  return (
    <main className=' h-[100vh] w-full flex justify-center items-center fixed z-50 bg-[#03091A]'>
        {load ?<Loading/>:
        <div>
            <Formik
            initialValues={{npassword:"",copassword:""}}
            validationSchema={Schema}
            onSubmit={async(form,{resetForm})=>{
                setload(true)
                if(!token){
                    return 
                }
                const dat = {
                    token: token
                }
                const info = {...form, ...dat}
                const url ="https://vidnaija-backend.fly.dev/passchange"
                const data = await fetch(url,{
                    method: "POST",
                    headers: { 'Content-Type': 'application/json'},
                    body:JSON.stringify(info)
                  })
                  const re = await data.json()
                if(re.auth)
                {
                    setmgs(re.mgs)
                    setshow(re.auth)
                    setpass(false)
                    setload(false)
                    resetForm()

                }
            }}
            >{(props)=>{
                    return(
                        <form className='flex flex-col items-center'>
                            <h1 className=' text-white font-bold text-2xl mb-5'>CHANGE PASSWORD</h1>
                            {show&&
                            <div className=' flex flex-col items-center'>
                                <p className=' text-white font-bold mb-2'>CLICK 👇 TO GO HOME</p>
                            <h1 className=' bg-blue-500 px-4 py-2 font-bold text-white mb-3 cursor-pointer' onClick={()=>router.push("/")}>{mgs}</h1></div>}
                            {pass&&<>
                            <div className=' flex flex-col sm:flex-row justify-between items-center '><p className='sm:whitespace-nowrap mr-5'>NEW PASSWORD: </p><div className='w-full'><input type='password' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.npassword} onChange={props.handleChange("npassword")}/></div></div>
                <div className=' text-red-500 text-sm mb-10'>{props.touched.npassword &&props.errors.npassword}</div>
                <div className=' flex flex-col sm:flex-row  justify-between items-center '><p className='sm:whitespace-nowrap mr-5'>COMFIRM PASSWORD: </p><div className='w-full'><input type='password' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.copassword} onChange={props.handleChange("copassword")}/></div></div>
                <div className=' text-red-500 text-sm mb-10'>{props.touched.copassword &&props.errors.copassword}</div>
                            <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                            </>}
                        </form>
                    )
                }}
            </Formik>
        </div>}
    </main>
  )
}

export default page