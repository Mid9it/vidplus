"use client"
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Imagesprofile = ({src}) => {
const [usr, setusr] = useState('/profileimage/1')
const Get = () =>{
    if(src  == '1')
    {
        setusr('/profileimage/2.png')
    }
    else if (src == '2')
    {
        setusr('/profileimage/3.png')
    }
    else if (src == '3')
    {
        setusr('/profileimage/4.png')
    }
    else if (src == '4')
    {
        setusr('/profileimage/5.png')
    }
    else if (src == '5')
    {
        setusr('/profileimage/6.png')
    }
    else if (src == '6')
    {
        setusr('/profileimage/7.png')
    }
    else if (src == '7')
    {
        setusr('/profileimage/8.png')
    }
    else if (src == '8')
    {
        setusr('/profileimage/9.png')
    }
    else if (src == '9')
    {
        setusr('/profileimage/10.png')
    }
    else if (src == '10')
    {
        setusr('/profileimage/11.png')
    }
    else if (src == '11')
    {
        setusr('/profileimage/12.png')
    }
    else if (src == '12')
    {
        setusr('/profileimage/13.png')
    }
    else if (src == '13')
    {
        setusr('/profileimage/14.png')
    }
    else if (src == '14')
    {
        setusr('/profileimage/15.png')
    }
    else if (src == '15')
    {
        setusr('/profileimage/16.png')
    }
    else if (src == '16')
    {
        setusr('/profileimage/17.png')
    }
    else if (src == '17')
    {
        setusr('/profileimage/18.png')
    }
    else if (src == '18')
    {
        setusr('/profileimage/19.png')
    }
    else if (src == '19')
    {
        setusr('/profileimage/20.png')
    }
    else if (src == '20')
    {
        setusr('/profileimage/21.png')
    }
    else if (src == '21')
    {
        setusr('/profileimage/22.png')
    }
    else if (src == '22')
    {
        setusr('/profileimage/23.png')
    }
    else if (src == '001')
    {
        setusr('/profileimage/001.png')
    }
    else
    {
        setusr('/profileimage/1.png')
    }
}

    useEffect(()=>{
        Get()
    },[])
  return (
    <LazyLoadImage  src={usr} className=' border-black border-[1px] rounded-full'/>
  )
}

export default Imagesprofile