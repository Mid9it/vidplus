import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from '@/app/component/frontpage/button';
import { IoChatboxEllipses } from "react-icons/io5";
import { useRouter } from 'next-nprogress-bar';
import { LazyLoadComponent } from 'react-lazy-load-image-component';


const Data=({Datas})=>{
const router = useRouter()
    const info = Datas.map((e)=>{
        const comment = e.comment.length
        
        return(
            <div key={e._id} className=' mb-20 mx-1 2xl:mx-3  2xl:w-[200px] w-[150px] h-[220px] lg:w-[150px] xl:w-[180px] 3xl:w-[260px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px] 3xl:h-[380px]' onClick={()=>router.push(`/showcase/${e._id}/1`)}>
                <LazyLoadComponent>
                <div style={{backgroundImage:`url(${e.image})`}} className=' w-full h-full relative  flex justify-center mb-2 items-center  bg-cover group sm:cursor-pointer'>
                    <div className=' absolute w-full h-full bg-black z-30 opacity-20 group-hover:opacity-70 transition-all duration-500 '></div>
                    <div className=' relative z-40 opacity-0 group-hover:opacity-100 flex flex-col items-center ease-in-out transition-all duration-700'>
                       <div > <Button name="DOWNLOAD" url={`/showcase/${e._id}/1`} /></div>
                        <div className=' flex items-center'><IoChatboxEllipses /> <p className=' ml-1'>{comment}</p></div>
                        </div>
                    <div className=' text-white font-bold absolute left-3 bottom-2 w-3/4'>

                    </div>
                </div>
                </LazyLoadComponent>
                <div>
                <p className=' font-bold text-white text-sm 2xl:w-[200px] w-[150px]  lg:w-[150px] xl:w-[180px] 3xl:w-[260px]  '>{e.title}</p>
                        <div className=' flex items-center'><div className=' text-yellow-400 mr-1'><FaStar /></div><div className=' font-semibold text-white'>{e.rating} <span className=' text-xs font-bold text-[#A5AFBE]'>/10</span></div></div>
                </div>
            </div>
        )
    })
    return info
}

const Body = ({Datas,info}) => {

  return (
    <main>
            <div>
            <header className=' font-bold text-2xl text-white mb-5 flex items-center justify-between'></header>
            <ul className=' font-bold text-sm flex items-center mb-8'>
                <li className=' mr-7 hover:text-yellow-500 sm:cursor-pointer text-yellow-500'>#{info.toUpperCase()}</li>
            </ul>
            <div className=' flex justify-center w-full '>
                <div className='flex  lg:w-full   flex-wrap justify-center lg:justify-between '>
                <Data Datas={Datas}/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Body