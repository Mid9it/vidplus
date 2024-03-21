import React, { useEffect, useState } from 'react'

const Type = ({no}) => {
    const [color, setcolors] = useState()
    const [text, settext] = useState()
    const Get = () =>{
        if(no < 10)
        {
            setcolors("yellow")
            settext("EXPLORER")
          
        }
        else if(no < 30 && no > 9)
        {
            setcolors("purple")
            settext("KNIGHT")
           
        }
        else if(no < 80 && no > 29)
        {
            setcolors("blue")
            settext("LEGEND")
        }
        else if(no < 150 && no > 79)
        {
            setcolors("green")
            settext("IMMORTAL")
        }
        else if(no < 300 && no > 149)
        {
            setcolors("cyan")
            settext("ANGEL")
        }
        else if(no < 500 && no > 299)
        {
            setcolors("orange")
            settext("KNIGHT ANGEL")
        }
        else
        {
            setcolors("red")
            settext("DRAGON")
        }
    }
    useEffect(()=>{
        Get()
    },[])
  return (
    <div><div className=' px-4 py-2 font-bold text-black' style={{backgroundColor:color}}>{text}</div></div>
  )
}

export default Type