"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import * as yup from "yup";
import { useRouter } from "next/navigation";
const Search = () => {
    const router = useRouter();
    const [load, setload] = useState(false)
    const [result, setresult] = useState([])
    const [show, setshow] = useState(false)


    const handleChange =async (e) => {

        try {
            await yup.string().trim().required().validate(e);
          } catch (validationError) {
            if (e.trim() === "") {
                setresult([]);
                setshow(false)
                return;
              }
              setshow(false)
            return;
          }

          if (e.trim() === "") {
            setresult([]);
            setshow(false)
            return;
          }

        setshow(true)
        setload(true)
        const data = await fetch(`https://vidnaija-backend.fly.dev/homesearch/${e}`,{
            method: 'GET',
    })

          const answer = await data.json()
          if(answer?.auth)
          {

            if(answer.data.length > 0)
            {
            setresult(answer.data)
            setload(false)
            }
            else{
            setresult([{title:'Movie Not Found', _id:'0'}])
            setload(false) 
            }
          }
          else{
          console.log(answer)
          }
    };
  
    const handleroute =(e)=>{
        if(e == '0')
        {
            return
        }
        else{
            router.push(`https://vidnaija.com.ng/showcase/${e}/1`)
        }
    }
  
    return (
      <main className="bg-[url('/slider-bg2.jpg')] relative z-30  w-[100vw] overflow text-[#A5AFBE] flex justify-center bg-cover bg-no-repeat ">
        <div className="w-full">
          <div className="flex justify-end flex-col w-full items-center pt-32 relative z-40">
            <div className="w-[90%] sm:w-3/4 2xl:w-1/2 mb-4 flex items-center relative">
              <input
                type="text"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search for Movie or TV Show"
                className="px-4 font-medium w-full h-14 border-y-4 outline-none border-[#020B19] bg-[#243651] text-white"
              />
              <div
                className="flex justify-center relative z-30 items-center h-14 border-y-4 border-r-4 border-[#020B19] bg-[#243651] text-white px-3 text-2xl "
                
              >
                <IoSearch />
              </div>
              {show &&<div className=" absolute top-14 z-30 w-full h-[165px]  bg-[#020B19]">
                
                {load?
                    <div className=' w-full h-full  flex justify-center items-center'>
                    <div className=' w-7 h-7 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
                    <div className=' w-3 h-3 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
                    </div>
                    </div>
                    :
                    <div className="w-full">
                {result.map((e,i)=>{
                    return(
                        <div key={i} className=" py-1 border-b-[1px]  px-2 overflow-hidden  border-[#243651]" onClick={()=>handleroute(e._id)}>
                            <div className=" text-white cursor-pointer hover:text-yellow-500 whitespace-nowrap">{e.title}</div>
                        </div>
                    )
                })}
              </div>}
              </div>}
            </div>
          </div>
        </div>
        
      </main>
    );
  };
  
  export default Search;