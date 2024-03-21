"use client"
import { useEffect, useState } from "react";
import Second from "./component/frontpage/second";
import Top from "./component/frontpage/top";
import Trailer from "./component/frontpage/trailer";
import Animes from "./component/frontpage/animes";
import Loading from "./loading";
import Search from "./search";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';





export default function Home() {
  const [datas,setdatas] = useState()
  const [second, setSecond] = useState()
 const [third, setThird] = useState()
 const [fourth, setFourth] = useState()
 const [anime, setanime]  = useState()
 const [load, setload] = useState(false)
 const [trail, settrail] = useState([])
 const [lat, setlat] = useState([])
  const First =async()=>{
    const url = "https://vidnaija-backend.fly.dev/getcate"
    try{
    const games = await fetch(url)
    const Data = await games.json()
    if(Data)
    {
    setload(true)
    const info  = Data?.top
    const secondinfo  = Data?.hollywood
    const thirdinfo  = Data?.bollywood
    const fourthinfo  = Data?.tvshows
    const ani = Data?.datak
    const trailer = Data?.trailer
    const latest = Data?.late
    
    setlat(latest)
    setdatas(info)
    setSecond(secondinfo)
    setThird(thirdinfo)
    setFourth(fourthinfo)
    setanime(ani)
    settrail(trailer)
  }}


    catch(e){
            console.log(e)
    }
  }
  useEffect(()=>{
    window.scroll(0, 0)
    First()
  },[])
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
     { load  ?<section className=" flex flex-col items-center">
      <Search/>
      <Top Datas={datas}/>
      <div className=" w-[88%] overflow-hidden pt-16">
      <Second header={"HOLLYWOOD RELEASE"} Datas={second} />
      <Second header={"BOLLYWOOD RELEASE"} Datas={third}/>
      <Second header={"TVSHOWS RELEASE"} Datas={fourth}/>
      </div>
      <Trailer trailer={trail} lat={lat}/>
      <div className=" w-[90%] 2xl:w-[88%] overflow-hidden pt-16"><Animes header={"ASIAN-SERIES RELEASE"} Datas={anime} /></div>
     </section>:<Loading/>}
    </main>
  )
}

