"use client"
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const Signup = () => {
  const [show, setshow] = useState(false)
  const [result, setresult] = useState()
  const [load, setload] = useState(false)
  const [color, setcolor] = useState(true)
  const Schema=yup.object({
    email:yup.string().email().required().label('Email'),
    user_name:yup.string().min(1).max(15).required().label('UserName'),
    password:yup.string().min(1).max(15).required().label('Password'),
    comfirmpassword:yup.string().oneOf([yup.ref('password'),null],'Password must match').required().label('Password Comfirmation')
  })
  return (
    <main className=' h-[100%] w-full'>
    <div className=' flex flex-col items-center justify-center h-[100%]  w-full'>
        <div className='mb-5 flex flex-col items-center'>
        <header className=' text-black mb-2 font-bold text-3xl'>SIGN UP</header>
        {show && <p className=' font-semibold text-center rounded-lg px-3 py-3' style={color?{color:"red",backgroundColor:"white"}:{color:"white", backgroundColor:"blue"}}>{result}</p>}
        </div>

        <div className=' w-full px-8'>
            <Formik
            validationSchema={Schema}
            initialValues={{email:"", password:"", comfirmpassword:"",user_name:""}}
            onSubmit={async(form,{resetForm})=>{
                   setload(true)
                   try{ const data = await fetch('https://vidnaija-backend.fly.dev/userData',{
                        method:'POST',
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(form)
                    })
                    const info =  await data.json()

                      if(info.create)
                      {
                        setcolor(false)
                        setresult(info.message)
                        setshow(true)
                        setload(false)
                        resetForm()
          
                      }
                      else
                      {
                        setcolor(true)
                        setresult(info.message)
                        setshow(true)
                        setload(false)
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
                                        <label htmlFor='name' className=' text-black font-bold text-base'>USERNAME:</label>
                                        <input id="name" type='text' className=' font-semibold px-4 w-full h-12 mt-2 border-[1px] border-gray-200' value={prop.values.user_name} onChange={prop.handleChange('user_name')}/>
                                        <div className=' text-red-500 text-sm'>{prop.touched.user_name && prop.errors.user_name}</div>
                                    </div>
                                    <div className=' mb-5 text-black'>
                                        <label htmlFor='email' className=' text-black font-bold text-base'>EMAIL:</label>
                                        <input id="email" type='email' className=' font-semibold px-4 w-full h-12 mt-2 border-[1px] border-gray-200' value={prop.values.email} onChange={prop.handleChange('email')}/>
                                        <div className=' text-red-500 text-sm'>{prop.touched.email && prop.errors.email}</div>
                                    </div>
                                    <div className=' mb-5'>
                                        <label htmlFor='password' className=' text-black font-bold text-base'>PASSWORD:</label>
                                        <input id="password" type='password' className=' text-black font-semibold placeholder:text-black px-4 w-full h-12 mt-2 border-[1px] border-gray-200' placeholder='*****'  value={prop.values.password} onChange={prop.handleChange('password')}/>
                                        <div className=' text-red-500 text-sm'>{prop.touched.password &&prop.errors.password}</div>
                                    </div>
                                    <div className=' mb-8'>
                                        <label htmlFor='cpassword' className=' text-black font-bold text-base'>COMFIRM PASSWORD:</label>
                                        <input id="cpassword" type='password' className=' text-black font-semibold placeholder:text-black px-4 w-full h-12 mt-2 border-[1px] border-gray-200' placeholder='*****'  value={prop.values.comfirmpassword} onChange={prop.handleChange('comfirmpassword')}/>
                                        <div className=' text-red-500 text-sm'>{prop.touched.comfirmpassword &&prop.errors.comfirmpassword}</div>
                                    </div>
                                    <div>
                                        {load?        <div className=' flex justify-center'>
                                                                 <div className=' w-10 h-10 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
                                                                 <div className=' w-5 h-5 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
                                                                 </div>
                                                                 </div>:<input type='submit' className='bg-red-500 w-full py-4 font-bold text-white text-lg cursor-pointer' value={"SIGN UP"} onClick={prop.handleSubmit}/>}
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

export default Signup