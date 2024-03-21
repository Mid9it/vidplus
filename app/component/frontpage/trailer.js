"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Info =({no, trailer})=>{
 
 const info = trailer.filter((e)=>e._id == no)
 const data = info.map((e)=>{
    return(
        <div key={e._id}>
        <div>
                                <iframe 
   className=' w-full lg:w-[400px] xl:w-[600px] h-[440px] 3xl:w-[740px] 3xl:h-[441px]'
  src={e.src} 
  title="YouTube video player" 
 allowFullScreen></iframe>
        </div>
        <div></div>
        </div>
    )
 })
 return data
}
const Control = ({no, setno, trailer}) =>{
    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
          return str.substring(0, maxLength - 3) + '...';
        }
        return str;
      }
    const info = trailer.map((e)=>{

        return(
            <div className=' py-3 w-full sm:cursor-pointer pl-5 hover:bg-[#1F375F]' key={e._id} style={no==e._id?{backgroundColor:"#1F375F"}:{backgroundColor:""}} onClick={()=>setno(e._id)}>
                <div className=' flex items-start'>
                    <LazyLoadComponent><div className=' w-36 rounded-sm h-20 bg-cover mr-2' style={{backgroundImage:`url(${e.image})`}} ></div></LazyLoadComponent>
                    <p className=' font-bold whitespace-normal w-full'>{truncateString(e.title, 90)}</p>
                </div>
            </div>
        )
    })
    return info
}
const Anime =({anime, title})=>{
    const info = anime?.episode.slice(-7).map((e)=>{
        return(
            <div key={e._id} className=' text-center mb-3 sm:cursor-pointer'>
            <Link href={{pathname:"/download",query:{uri:e.link}}}  onClick={()=>window.open("//greewepi.net/4/6809571")}  className=' font-bold underline text-sm lg:text-base xl:text-xl text-red-500  w-full sm:cursor-pointer hover:text-yellow-500' >{title} - Episode {e.no}</Link>
            </div>
        )
    })
    return info
}
const Trailer = ({trailer, lat}) => {
   
    const [no,setno] = useState(trailer[0]?._id)
  return (
    <main className=' w-full py-10 sm:py-20 bg-[#07101F]'>
        <div className=' flex flex-col items-center justify-center' >
        <header className=' font-bold text-2xl text-white mb-5 flex text-start  w-[90%]  3xl:w-[75%]'>UPCOMING MOVIES</header> 
                <div className=' w-[90%] 3xl:w-[80%] flex flex-col lg:flex-row justify-between items-center '>
                    <section className=' flex flex-col lg:flex-row w-full lg:w-[75%]  bg-[#0D172B]'>
                    <Info no={no} trailer={trailer}/>
                    <div className='  w-full overflow-y-scroll scrollbar-thumb-[#141935] py-2 h-[441px] scrollbar-[#03091A] scrollbar-thin'>
                    <Control no={no} setno={setno} trailer={trailer}/>
                    </div>
                    </section>
                    <section className=' w-[100%] border-t-8 border-black lg:border-t-0 lg:border-black lg:w-[20%] h-[441px] overflow-y-scroll p-4 bg-[#0D172B] scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin'>
                        <div className=' '>
                            <header className=' font-bold text-xl mb-2'>LATEST ANIME</header>
                            <div className=' w-full h-[1px] bg-[#A5AFBE] mb-4'> </div>
                            <div className=' flex flex-col items-center'> 
                                <LazyLoadComponent><div style={{backgroundImage:`url(${lat?.image})`}} className=' mb-3 w-40 bg-cover bg-center h-40 rounded-md'></div></LazyLoadComponent>
                                <div className=' w-full flex flex-col items-center '><Anime anime={lat?.seasons[lat.seasons.length - 1]} title={lat?.title}/></div>
                            </div>
                        </div>
                    </section>
                </div> 
        </div>
    </main>
  )
}

export default Trailer