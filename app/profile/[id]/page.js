"use client"
import Imagesprofile from '@/app/component/frontpage/images'
import Loading from '@/app/loading'
import Top from '@/app/showcase/[id]/[season]/component/top'
import Stars from '@/app/stars'
import React, { useEffect, useState } from 'react'
import Type from './type'
import { Formik } from 'formik'
import { FaCheck } from "react-icons/fa";
import { useRouter } from 'next-nprogress-bar'
import * as yup from 'yup'

const page = ({params}) => {
  const Schema=yup.object({
    user_name:yup.string().min(1).max(15).required().label('UserName'),
  })
  const Pass = yup.object({
    cpassword:yup.string().min(1).max(15).required().label('Current Password'),
    npassword:yup.string().min(1).max(15).required().label('New Password'),
    copassword:yup.string().oneOf([yup.ref('npassword'),null],'Password must match').required().label('New Password Comfirmation')
  })
  const router = useRouter()
    const log = params?.id
    const [load,setload] = useState(true)
    const [selected, setSelected] = useState()
    const [passdis, setpassdis] = useState(false)
    const [text,settext] = useState()
    const [datalist, setdatelist] = useState()
    const [masg, setmasg] = useState("")
    const arrays = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
    const ranking = [1,29,55,80,150,300,500]
const Gets = async()=>{
  const logg= await localStorage.getItem('data')
  const logged = await JSON.parse(logg)
  if(!logged)
  {
    return router.push("/")
  }
  const token = logged.token
        try{
          const data = await fetch(`https://vidnaija-backend.fly.dev/getUser/${log}`,{
            method: 'GET',
            headers:{
              'auth-token':token}
          })
        const result = await data.json()

        if(result.auth)
      {
        setload(false)
        setdatelist(result.data)
        setSelected(result.data.profile_image)

      }}
        catch(e){
          return router.push("/")
        }
    }
useEffect(()=>{
Gets()
},[])
  return (
    <main className=''>
      {
        load?<Loading/>:
        <div className=''>
          <div><Top/></div>
          <div className=' relative z-30 w-full flex justify-center pt-40'>
          <div className=' w-[95%] lg:w-[50%]'>
            <div className='w-full flex  justify-center items-center pb-40'><div className=' w-20 sm:w-32 '><Imagesprofile src={datalist.profile_image}/></div><div className=' flex  flex-col items-center ml-5'><p className=' text-white text-center font-bold text-2xl'>{datalist.user_name}</p><div className=' flex justify-between'><Stars no={datalist.rank}/><Stars no={datalist.rank}/><Stars no={datalist.rank}/><Stars no={datalist.rank}/></div><div className='mt-2'><Type no={datalist.rank}/></div></div></div>
            <div className=' border-gray-200 mb-20  border-[1px] p-5 border-opacity-10'>
              <Formik
              initialValues={{user_name:datalist.user_name}}
              validationSchema={Schema}
              onSubmit={async(form)=>{
                setload(true)
                const total ={
                  profile_image:selected
                }
                const tot = {...total, ...form}
                const tok = localStorage.getItem('data')
                if(!tok){
                  return router.push("/")
                }
                const token = JSON.parse(tok).token
                  const data = await fetch(`https://vidnaija-backend.fly.dev/pushUsers/${params.id}`,{
                    method:'PUT',
                    headers:{'Content-Type': 'application/json','auth-token':token},
                    body:JSON.stringify(tot)
                  })
                  const info = await data.json()
                  if(info.update)
                  {
                    window.location.reload()
                  }
                  else{
                    setmasg(info?.mgs)
                    setload(false)
                    
                  }
              }}  
              >
              
                {(prop)=>{
                return(

                  <form >
                
                <>
                <div><h1 className=' font-bold text-xl mb-8 text-white'>Change User:</h1></div>
                <div className=' text-red-500 mb-2'>{masg}</div>
                <div className=' text-red-500 text-sm'>{prop.touched.user_name && prop.errors.user_name}</div>
                <div className=' flex flex-col sm:flex-row justify-between items-center mb-10'><p>USER_NAME: </p><div className=' w-full'><input type='text' placeholder='Change Username' className=' w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={prop.values.user_name} onChange={prop.handleChange("user_name")}/></div></div>
                <div><h1 className=' font-bold text-xl mb-5 text-white'>Change Avatar:</h1></div>
                <div className=' flex flex-wrap mb-5'>{
                  arrays.map((e,w)=>{
                    return(<div key={w}>
                      <div className=' sm:mr-10  mb-5  relative w-16 rounded-full overflow-hidden group' onClick={()=>setSelected(e)}><Imagesprofile src={e}/>{selected == e &&<div className='absolute top-0 bg-opacity-80 w-full h-full z-40 bg-black cursor-pointer flex justify-center items-center text-yellow-500 text-xl '><FaCheck /></div>}<div className=' absolute top-0 bg-opacity-0 group-hover:bg-opacity-60 w-full h-full z-20 bg-black '></div></div>
                    </div>)
                  })}</div>
                  <div className=' flex justify-center sm:justify-end items-center mb-20'> <div><input type='submit' className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer'  value="SUBMIT" onClick={prop.handleSubmit} /></div></div></></form>)}
                }
              </Formik>
                <Formik
                initialValues={{cpassword:"",npassword:"",copassword:""}}
                validationSchema={Pass}
                onSubmit={async(form)=>{
                  const tok = localStorage.getItem('data')
                  if(!tok){
                    return router.push("/")
                  }
                  const token = JSON.parse(tok).token
                  const data = await fetch(`https://vidnaija-backend.fly.dev/changePass/${params.id}`,{
                    method:'PUT',
                    headers:{'Content-Type': 'application/json','auth-token':token},
                    body:JSON.stringify(form)
                  })
                  const info = await data.json()
                  if(info.update)
                  {
                    window.location.reload()
                  }
                  else{
                    settext(info.mgs)
                    setpassdis(true)
                  }

                }}
                
                >
                  {(prop)=>{
                    return(
                      <main className=' w-full'>
                                        <div><h1 className=' font-bold text-xl mb-5 text-white'>Change Password:</h1></div>
                                        <div className='h-5 flex justify-center mb-5'>{passdis&&<p className=' text-red-500'>{text}</p>} </div>
                <div className=' flex flex-col sm:flex-row w-full justify-between items-center '><p>CURRENT PASSWORD: </p><div className='w-full'><input type='password' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={prop.values.cpassword} onChange={prop.handleChange("cpassword")}/></div></div>
                <div className=' text-red-500 text-sm mb-10'>{prop.touched.cpassword &&prop.errors.cpassword}</div>
                <div className=' flex flex-col sm:flex-row justify-between items-center '><p>NEW PASSWORD: </p><div className='w-full'><input type='password' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={prop.values.npassword} onChange={prop.handleChange("npassword")}/></div></div>
                <div className=' text-red-500 text-sm mb-10'>{prop.touched.npassword &&prop.errors.npassword}</div>
                <div className=' flex flex-col sm:flex-row  justify-between items-center '><p>COMFIRM PASSWORD: </p><div className='w-full'><input type='password' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={prop.values.copassword} onChange={prop.handleChange("copassword")}/></div></div>
                <div className=' text-red-500 text-sm mb-10'>{prop.touched.copassword &&prop.errors.copassword}</div>
                <div className=' flex flex-col sm:flex-row justify-end items-center mb-20'> <div><input type='submit' className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer'  value="SUBMIT" onClick={prop.handleSubmit} /></div></div>
                      </main>
                    )

                  }
                  }
                </Formik>
                
              <section>
              <h1 className=' font-bold text-xl mb-10 text-white'>RATING:</h1>
              <div className=' flex flex-wrap mb-20 justify-between sm:justify-center '>{
                  ranking.map((e,w)=>{
                    return(<div key={w}>
                      <div className=' sm:mr-20  mb-10 cursor-pointer  group '><Type no={e}/></div>
                    </div>)
                  })}</div>
              </section>
            </div>
            </div>
          </div>
        </div>
      }
    </main>
  )
}

export default page