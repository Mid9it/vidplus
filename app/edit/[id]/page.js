"use client"
import Loading from '@/app/loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Series from './type/series'
import Movie from './type/movie'

const page = ({params}) => {
    const id = params.id
    const router = useRouter()
    const start = 0
    const limit = 5
    const [series, setseries] = useState(false)
    const [obj, setobj] = useState({})
    const [load, setload] = useState(true)
   
    const Gets =async () =>{
        const tok = localStorage.getItem('data')
        if(!tok){
          return router.push("/")
        }
        const token = JSON.parse(tok)
        const data = await fetch(`https://vidnaija-backend.fly.dev/getMovie/${id}?start=${start}&limit=${limit}`,{
            method:"GET",
            headers:{
                'auth-token':token.token}
        })
        const info = await data.json()
        if(info?.auth == false)
        {
            return router.push('/')
        }
        setseries(info.series)
        setobj(info)
        setload(false)
       
    }

    useEffect(()=>{
        Gets()
    },[])
  return (
    <>
    {load?<Loading/>:<main className=' pt-40'>
        <div>
            {
                series?<Series obj={obj} id={id} setload={setload} Gets={Gets}/>:<Movie obj={obj} id={id} setload={setload} Gets={Gets}/>
            }
        </div>
    </main>}</>
  )
}

export default page