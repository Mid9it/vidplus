"use client"
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next-nprogress-bar'

const page = () => {
    const [show, setshow] = useState(false)
    const [result, setresult] = useState()
    const [load, setload] = useState(false)
    const router = useRouter()
    const Schema = yup.object({
        email:yup.string().email().required().label('Email').max(30).min(6),
        password:yup.string().min(1).max(15).required().label('Password')
    })
  return (
    <main className=' h-[100vh] flex justify-center items-center fixed z-50  w-full bg-[#03091A]'>
        <div className=' flex flex-col items-center justify-center py-5 sm:py-0 h-full sm:h-[70%] w-full  sm:w-[500px] bg-white'>
            <div className='mb-5 flex flex-col items-center'>
            <header className=' text-black mb-2 font-bold text-3xl'>ADMIN</header>
            {show && <p className='text-red-500 text-center font-semibold'>{result}</p>}
            </div>

            <div className=' w-full px-8'>
                <Formik
                validationSchema={Schema}
                initialValues={{email:"", password:""}}
                onSubmit={async(form)=>{
                       setload(true)
                       try{ const data = await fetch('https://vidnaija-backend.fly.dev/loginInAd',{
                            method:'POST',
                            headers:{'Content-Type': 'application/json'},
                            body:JSON.stringify(form)
                        })
                        const info =  await data.json()
                        if(!info.auth)
                        {
                            setresult(info.message)
                            setshow(true)
                            setload(false)
                        }
                        else{
                            setresult()
                            setshow(false)
                            const datas = {
                                token:info.token,
                                _id:info?.data._id
                            }
                            const inf = JSON.stringify(datas)
                            localStorage.setItem("data",inf)
                            return router.push(`/adhome`)
                            
                            
                        }
    
                    }
                        catch(e)
                        {   
                            setload(false)
                            console.log(e)
                        }

                }}
                >
                    {
                        (prop)=>{
                                return(
                                    <div>
                                        <div className=' mb-5 text-black'>
                                            <label htmlFor='email' className=' text-black font-bold text-base'>EMAIL:</label>
                                            <input id="email" type='email' className=' font-semibold px-4 w-full h-12 mt-2 border-[1px] border-gray-200' value={prop.values.email} onChange={prop.handleChange('email')}/>
                                            <div className=' text-red-500 text-sm'>{prop.touched.email &&prop.errors.email}</div>
                                        </div>
                                        <div className=' mb-5'>
                                            <label htmlFor='password' className=' text-black font-bold text-base'>PASSWORD:</label>
                                            <input id="password" type='password' className=' text-black font-semibold placeholder:text-black px-4 w-full h-12 mt-2 border-[1px] border-gray-200' placeholder='*****'  value={prop.values.password} onChange={prop.handleChange('password')}/>
                                            <div className=' text-red-500 text-sm' >{prop.touched.password &&prop.errors.password}</div>
                                        </div>
                                        <div className=' flex justify-between items-center mb-5'>
                                            <div>
                                                <input type='checkbox' id='remember' className=' mr-2'/>
                                                <label htmlFor='remember' className=' text-black font-bold'>Remember me</label>
                                            </div>
                                            <div>
                                                <p className=' font-bold'>Forget password ?</p>
                                            </div>
                                        </div>
                                        <div>
                                            {load?        <div className=' flex justify-center'>
                                                                     <div className=' w-10 h-10 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
                                                                     <div className=' w-5 h-5 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
                                                                     </div>
                                                                     </div>:<input type='submit' className='bg-red-500 w-full py-4 font-bold text-white text-lg cursor-pointer' value={"LOGIN"} onClick={prop.handleSubmit}/>}
                                        </div>
                                    </div>
                                )
                        }
                    }
                </Formik>
            </div>
        </div>
    </main>
  )
}

export default page