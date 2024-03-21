"use client"
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'


const Commentss = ({url, disable, setDispay,setDisable , setload, Check, reply, setreply}) => {
    const [shows,setshow] = useState(false)
    const Schema = yup.object({
      chat:yup.string().label('Chat').max(200).required(),

    })
    

  return (
    <section className=" w-full" id={'chat'}>
    {reply?.re||<div className=' flex flex-col items-start mb-5'>
      <h1 className=' text-white font-bold mb-1'>REPLY</h1>
      <div className='  px-5 py-3 bg-[#0f2236]'>{reply?.mgs}</div></div>}
    <Formik className=' w-full'
    validationSchema={Schema}
    initialValues={{chat:""}}
    onSubmit={async(form,{resetForm})=>{
      if(form.chat == "" && form.titles == "")
      {
        return
      }
      const logg= await localStorage.getItem('data')
      const logged = await JSON.parse(logg)
      if(!logged)
      {
        setshow(true)
         return
      }

      if(disable)
      {
        return}
      setDispay(true)
      let value = true
      if(form.titles == "")
      {
        value = false
      }
      const obj ={
            id_user:logged._id,
            title:value
      }
     
      const total = {...form,...obj,...reply}
      
        const data = await fetch(url,{
          method: "PUT",
          headers: { 'Content-Type': 'application/json', 'auth-token':logged.token },
          body:JSON.stringify({comment:total})
        })
        try{
          const info = await data.json()
          if (!info.auth)
          {
            setshow(true)
            setDisable(false)
            setDispay(false)
            return 
          }
          Check(info.no)
          resetForm()
          setTimeout(() => {
            setreply({mgs:"",id:"", re:true})
            setDisable(false)
            setDispay(false)
            
          }, 2000);
      
        }
        catch(e)
        {
          console.log(e)
          resetForm()
          setDisable(false)
          setDispay(false) 
          setload(false)

        }
    }}
    >
      {(probs)=>{
        return(
          <form>
          <div className=' w-full'>
       <div className=' flex w-full items-center justify-between'>
       
        <h1 className=' text-white font-bold text-xl mb-5'>Comment</h1>
       </div>
       <div className=' mb-1 h-5'>{shows &&<p className=' text-red-500 font-bold '>PLEASE LOGIN</p>}</div>
      <div>
    <div className='border-[1px] relative border-gray-600 mb-20'>
          <textarea rows={7}  value={probs.values.chat} onChange={probs.handleChange('chat')}  className=' h-40 text-white w-full bg-transparent p-3 outline-none'/>
          
        
        </div>
        <div className=' flex justify-center lg:justify-start'><input type='submit' className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold sm:cursor-pointer' onClick={probs.handleSubmit} value="SUBMIT" /></div>

      </div></div></form>)}}
    </Formik>
  </section>
  )
}

export default Commentss