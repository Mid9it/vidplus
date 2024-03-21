import React from 'react'
import Chatbox from './chatbox'


const Chat = ({chat, setload, Result, setreply}) => {
    const Displaychat =({setload, Result, setreply})=>{
            const info = chat.map((e)=>{
                return(
                  <div key={e._id}>
                    <Chatbox info={e} setload={setload} Result={Result} setreply={setreply}/>
                    </div>
                )
            })
            return info
    }
     
  return (
    <div className=' w-full min-h-[100px] shadow-inner shadow-black  py-5 px-2'>
        <Displaychat setload={setload} Result={Result} setreply={setreply}/>
    </div>
  )
}

export default Chat