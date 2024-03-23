import React, { useEffect, useState, useRef } from 'react'
import { FaReply } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Imagesprofile from '../component/frontpage/images';
import TimeAgo from "timeago-react";
import Stars from '../stars'


const Chatbox = ({info, setload, Result, setreply}) => {
const check = localStorage.getItem("data")
const result = JSON.parse(check)
const id = result?._id
const [shd,setshd] = useState(false)
const [srd,setsrd] = useState(false)

const DELETE =async()=>{
  setload(true)
  setshd(false)
  if(!result){
    return router.push("/")
  }
  try{
    const results = await fetch(`https://vidnaija-backend.fly.dev/deleteComment/${info._id}?ids=${id}`,{
    method:'DELETE',
    headers:{'auth-token':result.token }
  })
  const data = await results.json()
  if(data.message)
  {
    Result()
  }
  else{
    setload(false)
  }
}
catch(e){
  console.log(e)
}

}
  const handleClickOutside = (event) => {
    // Check if the click is outside the element
    if (containerRef.current && !containerRef.current.contains(event.target) && event.target.tagName !== 'DIV') {
      setsrd(false);
      setshd(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once when component mounts

  const containerRef = useRef(null);

const DELETECOMMENT =async(ei)=>{
  setload(true)
  setsrd(false)
  if(!result){
    return router.push("/")
  }
  
  try{
    const results = await fetch(`https://vidnaija-backend.fly.dev/deleteoneComment/${ei}?ids=${id}`,{
    method:'DELETE',
    headers:{'auth-token':result.token }
  })
  const data = await results.json()

  if(data.message)
  {
    Result()
  }
  else{
    setload(false)
  }
}
catch(e){
  console.log(e)
}

}

const   Reply=()=>{
  const element = document.getElementById('chat');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setreply({
    mgs:info.chat,
    id:info._id,
    re:false
  })
}

  return (
    <div className=' mb-3 w-full flex flex-col items-end '  ref={containerRef}>
<div className='   relative  shadow-md w-[100%] p-1 bg-[#09152A]'>
            <div className=' h-full'>
                <section className=' flex w-full flex-col bg-[#0f2236] border-[1px] border-gray-800 p-2 h-full' >
                    <div className=' flex justify-between h-full w-full items-start mr-5'>
                    <div className=' w-10 flex items-center' onClick={()=>{setshd(false)}}><Imagesprofile src={info.profile_image} /> <h4 className=' ml-5 text-yellow-500 text-xs font-bold mb-1 whitespace-nowrap'>{info?.name}</h4></div>
                    {info?.id_user == id &&<div className=' relative group sm:cursor-pointer' >{shd &&<div className=' absolute z-20 px-3 py-1 rounded-md bg-white text-black top-3 sm:cursor-pointer left-0' onClick={DELETE}>DELETE</div>}<BsThreeDotsVertical  onClick={()=>{setshd(!shd)}}/></div>}
                    </div>
                    <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                    <div className=' flex justify-between w-full' onClick={()=>{setshd(false)}}>
                      <div className='  pt-2 w-14 flex flex-col justify-evenly  border-r-[1px] border-r-gray-200 border-opacity-20 pr-2'>
                        <div className='flex justify-between'>
                        <div className=' flex justify-center'><Stars no={info.rank}/></div>
                        <div className='  flex justify-center'><Stars no={info.rank}/></div>
                        </div>
                   
                      </div>
                      <div className=' w-[1px] h-full bg-opacity-20 bg-gray-200 mr-5'></div>
                    <div className=' w-full flex justify-start'>
                <div className=' pt-2 pr-5 w-full'>
                <div className=' text-white text-sm lg:text-base  min-h-[40px] break-all flex justify-start'><div className=' '/>{info.chat}</div>
               
                </div>
                </div>
                </div>
                <div onClick={()=>{setshd(false)}}> 
                 <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                 <div className=' flex  justify-between items-center mt-2'>
               <section className=' text-sm  items-center flex'>
                {info.reply.length < 1&&<p className=' mr-5 text-lg sm:cursor-pointer hover:text-yellow-500'  onClick={Reply}><FaReply /></p>} 
          
                </section>
                <div className=' flex items-center'><p>Posted: </p><TimeAgo datetime={info.data} className=' ml-2'/></div>
                </div>
                </div>
                </section>
    

            </div>
        </div>
        {
          info.reply.length > 0&&<div className='w-[80%] mt-3'>
            {
              info.reply.map((e)=>{
              
                return(<div className='   relative  shadow-md w-[100%] p-1 bg-[#09152A]' key={e._id}>
                <div className=' h-full'>
                    <section className=' flex w-full flex-col bg-[#0f2236] border-[1px] border-gray-800 p-2 h-full'>
                        <div className=' flex justify-between h-full w-full items-start mr-5'>
                        <div className=' w-10 flex items-center' onClick={()=>{setsrd(false)}}><Imagesprofile src={e.profile_image} /> <h4 className=' ml-5 text-yellow-500 text-xs font-bold mb-1 whitespace-nowrap'>{e?.name}</h4></div>
                        {info?.id_user == id &&<div className=' relative group sm:cursor-pointer' >{srd &&<div className=' absolute z-20 px-3 py-1 rounded-md bg-white text-black top-3 sm:cursor-pointer left-0' onClick={()=>DELETECOMMENT(e._id)}>DELETE</div>}<BsThreeDotsVertical  onClick={()=>{setsrd(!srd)}}/></div>}
                        </div>
                        <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                        <div className=' flex justify-between w-full' onClick={()=>{setsrd(false)}}>
                          <div className='  pt-3 w-14 flex flex-col justify-evenly border-r-[1px] border-r-gray-200  border-opacity-20 pr-2'>
                            <div className='flex justify-between'>
                            <div className=' flex justify-center'><Stars no={e.rank}/></div>
                            <div className='  flex justify-center'><Stars no={e.rank}/></div>
                            </div>
               
                          </div>
                          <div className=' w-[1px] h-full bg-opacity-20 bg-gray-200 mr-5'></div>
                        <div className=' w-full flex justify-start' >
                    <div className=' py-2 pr-5 w-full'>
                    <div className=' text-white text-sm lg:text-base  min-h-[40px] break-all flex justify-start'><div className=' '/>{e.chat}</div>
                   
                    </div>
                    </div>
                    </div>
                    <div onClick={()=>{setsrd(false)}}>  
                     <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                     <div className=' flex  justify-between items-center mt-2'>
                
                    <div className=' flex items-center'><p>Posted: </p><TimeAgo datetime={e.data} className=' ml-2'/></div>
                    </div>
                    </div>
                    </section>
        
    
                </div>
            </div>)
              })
            }
          </div>
        }
    </div>
  )
}

export default Chatbox