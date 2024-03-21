"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useRouter } from 'next-nprogress-bar'
import Sign from "./sign";
import Imagesprofile from "./component/frontpage/images";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [color, setcolor] = useState(true);
  const  [slide, setslide] = useState(true)
  const pathname = usePathname()
  const [h, sh] = useState("")
  const [c, sc] = useState("")
  const [co, sco] = useState("")
  const [k, sk] = useState("")
  const [a, sa] = useState("")
  const [ad, sad] = useState("")
  const [log, setlog] = useState(true)
  const [src, setsrc] = useState()
  const [signup, setsignup] = useState(false)
  const [login, setlogin] = useState()
  const [notify, setnotify] = useState(false)
  const [id, setid] = useState()
  const [load, setload] = useState(true)
  const router = useRouter()
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const newY = window.scrollY;
    if (newY <= 10) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  const Get =async()=>{
      setload(true)
      const logg= localStorage.getItem('data')
      const logged = await JSON.parse(logg)
      if(!logged)
      {
        setload(false)
        return
      }
      const token = logged.token
      const info = await fetch(`https://vidnaija-backend.fly.dev/getUser/${logged._id}`,{
        method: 'GET',
        headers:{
          'auth-token':token}
      })
      const data = await info.json()
      if(data?.auth)
      {
        setsrc(data.data.profile_image)
        setlog(false)
        setnotify(data.data.notification)
        setid(data.data._id)
        setload(false
          )
     
      }
      else{
        setload(false)
        setlog(true)
      }

  }

  useEffect(() => {
    Get()
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [pathname]);
  const List = () => {
    return (
      <ul className=" font-semibold text-sm h-[300px] overflow-y-scroll scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin " onClick={()=> setslide(true)}>
       <li onClick={()=>router.push('/display/movies/1/1')} > <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 " ><p className=" w-32">ALL</p></div></li>
       <li onClick={()=>router.push('/display/action/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ACTION</p></div></li>
       <li onClick={()=>router.push('/display/adventure/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ADVENTURE</p></div></li>
       <li onClick={()=>router.push('/display/animation/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ANIMATION</p></div></li>
       <li onClick={()=>router.push('/display/comedy/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">COMEDY</p></div></li>
       <li onClick={()=>router.push('/display/crime/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">CRIME</p></div></li>
       <li onClick={()=>router.push('/display/drama/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">DRAMA</p></div></li>
       <li onClick={()=>router.push('/display/family/1/1')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">FAMILY</p></div></li>
       <li onClick={()=>router.push('/display/history/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">HISTORY</p></div></li>
       <li onClick={()=>router.push('/display/horror/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">HORROR</p></div></li>
       <li onClick={()=>router.push('/display/musical/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">MUSICAL</p></div></li>
       <li onClick={()=>router.push('/display/romance/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ROMANCE</p></div></li>
       <li onClick={()=>router.push('/display/scifi/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">SCI-FI</p></div></li>
       <li onClick={()=>router.push('/display/sport/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">SPORT</p></div></li>
       <li onClick={()=>router.push('/display/thriler/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">THRILER</p></div></li>
       <li onClick={()=>router.push('/display/fantasy/1/1')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">FANTASY</p></div></li>
      </ul>
    );
  };
  const Hom =(h)=>{
    if(h == "h")
    {
    sh("#EABC00")
  }
    else{
      sh("")
    }
    if(h == "c")
    {
    sc("#EABC00")}
    else{
      sc("")
    }
    if(h == "k")
    {
    sk("#EABC00")
    setslide(true)
    router.push('/display/asianseries/1/1')
    
  }
    else{
      sk("")
    }
    if(h == "a")
    {
    sa("#EABC00")
    setslide(true)
    router.push('/display/anime/1/1')
    
  }
    else{
      sa("")
    }
    if(h == "ad")
    {
    sad("#EABC00")
    setslide(true)
    router.push('/display/tvshows/1/1')
  
  }
    else{
      sad("")
    }
    if(h == "co")
    {
    sco("#EABC00")
    setslide(true)
    router.push('/latest')
    
   }
    else{
      sco("")
    }
  }
  const Signnow = () =>{
    setlogin(false)
    setsignup(!signup)
    setslide(true)
  }
  const Lognow = () =>{
    setlogin(true)
    setsignup(!signup)
    setslide(true)
  }
  const Logoff = () =>{
    localStorage.clear()
    window.location.reload();
    setslide(true)
  }
  return (
    <>
          {slide || <div className=" lg:hidden  fixed top-0 z-40 min-h-[70vh] w-[100vw]   bg-[#111E34]">
      <div className=" w-full flex flex-col items-center">
        <div className=" flex justify-between w-full items-center px-4 py-4"><div className=" flex items-end mr-10 xl:mr-20">
            <img src="/logos.png" className=" w-12 sm:w-24 cursor-pointer " onClick={()=>{router.push('/')}}/>
          </div>
          <div onClick={()=>setslide(!slide)} className="text-4xl text-white"><IoMenu /></div>
          </div>
        <ul className=" font-bold mt-3">
        <li onClick={()=>{router.push('/')
      setslide(true)}}><div className=" cursor-pointer hover:text-yellow-500 flex items-center  text-sm mb-6 justify-center" style={{color:h}} onClick={()=>Hom('h')}>HOME</div></li>
            <li > <div className=" group cursor-pointer hover:text-yellow-500 flex items-center relative text-sm mb-6  justify-center " style={{color:c}} onClick={()=>Hom('c')}>
              <p>CATEGORY</p>
              <div className=" text-[0.6rem]">
                <FaChevronDown />
                <div className=" absolute z-30 -left-3/4 top-16 bg-white text-black hidden  group-hover:block py-5  rounded-sm">
                  <List />
                </div>
              </div>
            </div></li>
            <li className=" cursor-pointer  hover:text-yellow-500 flex text-sm mb-6  items-center  justify-center" style={{color:k}} onClick={()=>Hom('k')}>ASIAN-SERIES</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center text-sm mb-6 justify-center" style={{color:a}} onClick={()=>Hom('a')}>ANIMES</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center text-sm mb-6 justify-center" style={{color:ad}} onClick={()=>Hom('ad')}>TV-SHOWS</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  text-sm mb-6 justify-center" style={{color:co}} onClick={()=>Hom('co')}>LATEST</li>
        </ul>
        <section className=" flex justify-center w-full ">
        {load || <div className=" flex items-center flex-col mb-6">
              <ul className="flex font-bold text-sm ">
                {(log)&&<li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center " onClick={Lognow}>LOGIN</li>}
              </ul>
            <div className="  w-full flex items-center flex-col">
              {(log)&&<button className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold mb-6' onClick={Signnow}>SIGN UP</button>}
              {log||<div className=" w-14 cursor-pointer mb-6" onClick={()=>{router.push(`/profile/${id}`)
            setslide(true)}}><Imagesprofile src={src}/></div>}
              {log||<div className="relative mb-6 z-20"  onClick={()=>{router.push(`/notification/${id}`)
            setslide(true)}}><IoIosNotifications  className=" text-4xl  cursor-pointer"/>{notify&&<div className=" h-3 w-3 bg-red-600 absolute bottom-1 right-1 rounded-full"></div>}</div>}
              {(log)||<button className=' mb-4 bg-red-600 text-white px-9 py-2 whitespace-nowrap rounded-3xl font-semibold' onClick={Logoff}>LOG OFF</button>}
            </div>
          </div>}
        </section>
        {(log && signup)&&<Sign login={login} signup={setsignup}/>}
      </div>
          </div>}
    <header
      className="w-full fixed z-40 top-0 flex items-center justify-center transition-all ease-in-out duration-300 text-[#A5AFBE]"
      style={
        color
          ? { backgroundColor: "", height: "100px" }
          : { backgroundColor: "#111E34", height: "80px" }
      }
    >
      
      <div className=" flex  justify-between w-11/12 relative z-40">
        <section className=" flex w-full  items-center ">
          <div className=" flex items-end mr-10 xl:mr-20">
            <img src="/logos.png" className=" w-12 sm:w-24 cursor-pointer" onClick={()=>{router.push('/')}}/>
          </div>
          <ul className=" lg:flex font-bold text-sm w-full xl:w-11/12 2xl:w-8/12 justify-between hidden">
            <li onClick={()=>router.push('/')}><div className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:h}} onClick={()=>Hom('h')}>HOME</div></li>
            <li > <div className=" group cursor-pointer hover:text-yellow-500 flex items-center relative h-20 justify-center " style={{color:c}} onClick={()=>Hom('c')}>
              <p>CATEGORY</p>
              <div className=" text-[0.6rem]">
                <FaChevronDown />
                <div className=" absolute left-0 top-16 bg-white text-black hidden  group-hover:block py-5  rounded-sm">
                  <List />
                </div>
              </div>
            </div></li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:k}} onClick={()=>Hom('k')}>ASIAN-SERIES</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:a}} onClick={()=>Hom('a')}>ANIMES</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:ad}} onClick={()=>Hom('ad')}>TV-SHOWS</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:co}} onClick={()=>Hom('co')}>LATEST</li>
          </ul>
        </section>
        <section className=" 2xl:w-full w-[40%] xl:w-[50%] lg:flex justify-end hidden ">
        {load || <div className=" flex items-center">
              <ul className="flex font-bold text-sm ">
                {(log)&&<li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center ml-8" onClick={Lognow}>LOGIN</li>}
              </ul>
            <div className="  ml-8 flex items-center">
              {(log)&&<button className=' bg-red-600 text-white px-9 py-2 ml-2 xl:ml-5 rounded-3xl font-semibold' onClick={Signnow}>SIGN UP</button>}
              {log||<div className=" w-14 cursor-pointer" onClick={()=>router.push(`/profile/${id}`)}><Imagesprofile src={src}/></div>}
              {log||<div className="relative mr-3 ml-4 xl:ml-10"  onClick={()=>router.push(`/notification/${id}`)}><IoIosNotifications  className=" text-4xl  cursor-pointer"/>{notify&&<div className=" h-3 w-3 bg-red-600 absolute bottom-1 right-1 rounded-full"></div>}</div>}
              {(log)||<button className=' bg-red-600 text-white px-9 py-2 ml-2 xl:ml-5 whitespace-nowrap rounded-3xl font-semibold' onClick={Logoff}>LOG OFF</button>}
            </div>
          </div>}
        </section>
        <section className=" lg:hidden  text-4xl text-white">
          <div onClick={()=>setslide(!slide)}><IoMenu /></div>

        </section>
      </div>
      {(log && signup)&&<Sign login={login}  signup={setsignup}/>}
    </header></>
  );
};

export default Navbar;
