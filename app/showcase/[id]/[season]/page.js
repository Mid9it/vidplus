"use client"
import React, { useEffect, useState } from 'react'
import Top from './component/top'
import Body from './component/body'
import Note from './note'
import Chat from '@/app/chatbox/chat'
import Loading from '@/app/loading'
import { useRouter } from 'next-nprogress-bar'
import Commentss from '@/app/comment'
import Pager from '@/app/pager'

const Showcase = ({params}) => {
  const sea = params?.season
  const router = useRouter()
  const [load, setload] = useState(true)
  const [disable, setDisable] = useState(false)
  const [comment_display, setDispay] = useState(false)
  const [start, setstart] = useState(0)
  const [limit, setlimit] = useState(15)
  const [data, setdata] = useState() 
  const [arrays, setarrays] = useState([])
  const [page , setpage] = useState(1)
  const [number, setnumber] = useState(1)
  const [seano, setseano] = useState()
  const [reply, setreply] = useState({mgs:"",id:"", re:true})
  const div = 15
    const id = params?.id
    const Result = async()=>{
      try{
        const data = await fetch(`https://vidnaija-backend.fly.dev/getMovies/${id}?start=${start}&limit=${limit}&season=${sea}`)
        const info = await data.json()
        if(!info)
        {
          return router.push('/')
        }
        setdata(info)
        setload(false)
        setseano(info.number)
        const no = info.length/div
        const round = Math.ceil(no)
        setpage(round)     
        var myArray = [];
       for (var i = 1; i <= round; i++) {
       myArray.push(i);
       }
        setarrays(myArray)
      
      }
        catch(e)
        { console.log(e)}
    }
    const Right = () =>{
    
      if (number < page)
      {
        setload(true)
        setstart((e)=>e + div)
        setlimit((e)=>e + div)
        setnumber((e)=>e + 1)
      }
    }
    const Left = () =>{
      if (number > 1)
      {
        setload(true)
        setstart((e)=>e - div)
        setlimit((e)=>e - div)
        setnumber((e)=>e - 1)
      }
    }
    const Move =(e)=>{
    setload(true)
    setstart((e * div) - div)
    setlimit(e * div)
    setnumber(e)
    }
   useEffect(()=>{
  Result()
   },[limit])
   const Check =(e)=>{
    const no = e
    const ans = e % div
    const an = no - ans
    const ann = an + div


    if((e % div) != 0 && e > limit)
    {
       setload(true)
        setstart(ann - div)
        setlimit(ann)
        setnumber(ann / div)
    }
    else{
      Result()
    }
  
   }
   
  return (
      <>
    {load?<Loading/>:<>
    {comment_display&&<div className=' fixed w-full h-full flex justify-center items-center p-5 bg-[#020819]  z-50'>
          <div >
  <div className='w-20 h-20  rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
  <div className=' w-12 h-12 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
  </div>
  </div>
          </div>}
    <main className=' overflow-x-hidden z-30 relative flex flex-col items-center '>
      <Top data={data}/>
    <div className='2xl:w-[56%] w-[80%] '>
      <div className=' mb-10 w-full'>
        <Body data={data} seano={seano}  id={id} seasonno={sea}  setload={ setload}/>
        
        </div>
        <section className='mb-10'>
          <div>
            <h1 className=' font-bold text-white mb-5 text-xl'>Comments: </h1>
          </div>
          <div className='border-[1px] border-gray-600'>
          <div className='border-[1px] border-gray-600 m-1'>
          <Chat chat={data.comment} setload={setload} Result={Result} setreply={setreply}/>
          </div></div>
          <Pager  number={number} Move={Move} array={arrays} div={div} page={page} type={"Comments"} Right={Right} Left={Left}/>
        </section>
      <Commentss url={`https://vidnaija-backend.fly.dev/postComment/${id}`} forum={false} setreply={setreply} reply={reply}  comment_display={comment_display} setDispay={setDispay}  setload={setload} Check={Check}  setDisable={ setDisable} disable={disable} Result={Result}/>
        <section  className=' w-full mb-5 mt-40'>
          <div className=' '>
        <Note/>
        </div>
        </section>
    </div>
    </main></>}</>
  )
}

export default Showcase