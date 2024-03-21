"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next-nprogress-bar'
import Top from '@/app/showcase/[id]/[season]/component/top'
import Loading from '@/app/loading'

const page = ({params}) => {
    const id = params.id
    const router = useRouter()
    const [info, setinfo] = useState()
    const [load, setload] = useState(true)
    
const Get = async () =>{
    const logg= await localStorage.getItem('data')
    const logged = await JSON.parse(logg)
    if(!logged)
    {
        router.push('/')
    }
    const data = await fetch(`https://vidnaija-backend.fly.dev/notify/${id}`,{
      method: 'GET',
      headers:{
        'auth-token':logged.token}
    })
    const result = await data.json()
    if(!result.auth)
    {
      router.push('/')
    }
    setinfo(result.mgs.notify.reverse())
    setload(false)
}
useEffect(()=>{
Get()

},[])
  return (
    <div>
      {load?<Loading/>:
      <section className='w-full'>
        <Top/>
        <div className=' flex flex-col items-center mt-40 w-full relative z-30 min-h-[100vh]'>
          <div className='flex justify-center w-[40%] '><h1 className=' text-white font-bold text-3xl'>NOTIFICATION</h1></div>
          <main className=' w-[95%] lg:w-[40%]'>
          <div className=' mt-10 p-2 border-[#383B42] border-2 overflow-y-scroll scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin  h-[1000px] mb-10'>
            {info.map((e,i)=>{
              return(
                <div className=' text-white rounded-md mb-4  pt-2 pb-8 px-2 bg-[#0f2236]' key={i}>{e.message}</div>
              )
            })

            }
          </div>

          </main>
        </div>
      </section>}
    </div>
  )
}

export default page
