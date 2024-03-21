"use client"
import React,{ useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({no}) =>{
    const [colors, setcolors] = useState("yellow")
    const Get = () =>{
        if(no < 10)
        {
            setcolors("yellow")
        }
        else if(no < 30 && no > 9)
        {
            setcolors("purple")
        }
        else if(no < 80 && no > 29)
        {
            setcolors("blue")
        }
        else if(no < 150 && no > 79)
        {
            setcolors("green")
        }
        else if(no < 300 && no > 149)
        {
            setcolors("cyan")
        }
        else if(no < 500 && no > 299)
        {
            setcolors("orange")
        }
        else
        {
            setcolors("red")
        }

    }
    useEffect(()=>{
        Get()
    },[])
    return(<main>
                <FaStar style={{color:colors}}/>    
        </main>
    )
}
export default Stars