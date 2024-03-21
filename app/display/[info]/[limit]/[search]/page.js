"use client"
import React, { useEffect, useState } from 'react'
import Top from './component/top'
import Body from './component/body'
import { BiSolidGrid } from "react-icons/bi";
import Loading from '@/app/loading';
import Note from '@/app/showcase/[id]/[season]/note';
import Pager from '@/app/pager';
import { useRouter } from 'next-nprogress-bar';





const Display = ({params}) => {
  const router = useRouter()
  const [loads, setload] = useState(true)
    const infosmall = params.info
    const info = infosmall.toUpperCase()
    const limi = parseInt(params.limit) 
    const search = params.search
    const lim = limi * 20
    const sta = lim - 20 
    const [Data, setData] = useState()
    const [len, setlen] = useState()
    const [page , setpage] = useState(1)
    const [array, setArray] = useState()
    const [type, settype] = useState('hollywood')

   
    const number = lim/20
    const div = 20
    const Get =async()=>{
      const data = await fetch(`https://vidnaija-backend.fly.dev/listMovies/${info}?start=${sta}&limit=${lim}`)
      try{
        const data_ = await data.json()
        if(!data_)
        {
          setlen(0)
          setArray([])
          setData([])
          return setload(false)
        }
        setData(data_.info)
        const no = data_.length/div
        const round = Math.ceil(no)
        setpage(round)
        setlen(data_.length)
        setload(false)
        var myArray = [];
       for (var i = 1; i <= round; i++) {
       myArray.push(i);
       }
       setArray(myArray)
      }catch(e){
        console.log(e)
      }
    }
    const Searchbar = async() =>{
      const inform = search
      setload(true)
      const data = await fetch(`https://vidnaija-backend.fly.dev/Search/${inform}?cate=${info}&type=${type}&start=${sta}&limit=${lim}`,{
        method: 'GET',
      })
      
      const data_ = await data.json()
      setData(data_.info)
      const no = data_.length/div
      const round = Math.ceil(no)
      setpage(round)
      setlen(data_.length)
      setload(false)
      var myArray = [];
     for (var i = 1; i <= round; i++) {
     myArray.push(i);
     }
     setArray(myArray)
    }

    useEffect(()=>{
      if(search == 1)
      {
      Get()
      }
      else{
        Searchbar()
      }
    },[])

    const Right = () =>{
      if (number < page)
      {
        setload(true)
        router.push(`/display/${infosmall}/${limi + 1}/${search}`)
        
      }
    }
    const Left = () =>{
      if (number > 1)
      {
        setload(true)
        router.push(`/display/${infosmall}/${limi - 1}/${search}`)
        
      }
    }
    const Move =(e)=>{
    setload(true)
    router.push(`/display/${infosmall}/${e}/${search}`)
   
    }


  return (
    <>
    {loads?<Loading/>:<div>
        <Top info={info} infosmall={infosmall}  settype={settype}/>
        <div className='min-h-[180vh] flex flex-col items-center  relative mb-20'>

          <div className=' w-[80%] 2xl:w-[60%] overflow-hidden pt-20 relative z-30 mb-20'>
            <div className=' h-[1px] bg-[#A5AFBE] bg-opacity-40'></div>
          <div className=' w-full  flex flex-col lg:flex-row items-center justify-between'>
            <div className=' py-1'>
            <p className=''>Found <span className=' text-blue-500 mx-1'>{len} movies </span>in total</p>
            </div>
            <section className=' flex flex-col lg:flex-row items-center'>
              <p className=' pr-4 hidden lg:block'>Sort by:</p>
              <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
              <p className=' my-5 lg:my-0'><select className=' bg-[#03091A] border-none outline-none w-52 pr-3'>
                <option>Release date Descending</option>
                </select></p>
                <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
                <BiSolidGrid  className=' text-yellow-500'/>
            </section>
          </div>
          <div className=' h-[1px] overflow-x-hidden w-full bg-[#A5AFBE] bg-opacity-40'></div>
          {Data.length < 1 ?<div className=' h-60 flex justify-center items-center'>

            <p className=' text-white font-bold text-2xl'>NO MOVIE FOUND</p>
          </div>: <Body Datas={Data} info={info}/>}
          <div className=' h-[1px] bg-[#A5AFBE] bg-opacity-40'></div>
          <Pager number={number} Move={Move} div={div} array={array} page={page} type={"Movies"} Right={Right} Left={Left}/>
          <div className=' h-[1px] overflow-x-hidden w-full bg-[#A5AFBE] bg-opacity-40'></div>
        </div>

        <div className=' w-[90%] lg:w-[60%]'>
          <Note/>
        </div>
        </div>
    </div>}</>
  )
}

export default Display