import React from 'react'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

const Pager = ({number,Move,array,page,type,Right,Left, div}) => {
  return (
    <div className=' w-full py-2 sm:py-0  flex flex-col sm:flex-row items-center sm:justify-between'>
    <div className=' py-3 sm:py-1'>
    <p className=''>{type} per page <span className=' text-blue-500 mx-1'>{div} {type.toLowerCase()} </span>in total</p>
    </div>
    <section className=' flex items-center'>
      <p className=' pr-4'>Page {number} of <span className=' text-blue-500'>{page}</span>:</p>
      <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
      <div className=' flex items-center'>
      {number > 1 && <FaCaretLeft className=' mr-3 text-blue-500 cursor-pointer'  onClick={Left}/>}
      <div className='flex items-center'>
  {array.map((e, i, a) => (
    <div key={i}>
      {i < 3 ? (
        <p
          className='mr-3 cursor-pointer'
          style={e === number ? { color: "blue" } : { color: "" }}
          onClick={() => {
            if (e !== number) {
              Move(e);
            }
          }}
        >
          {e}
        </p>
      ) : i === a.length - 1 ? (
        <p
          className='mr-3 cursor-pointer'
          style={e === number ? { color: "blue" } : { color: "" }}
          onClick={() => {
            if (e !== number) {
              Move(e);
            }
          }}
        >... {e}
        </p>
      ) : (
        <p className=''></p>
      )}
    </div>
  ))}
</div>


      {number < page&&<FaCaretRight  className=' text-blue-500 cursor-pointer' onClick={Right}/>}
      </div>
    </section>
  </div>
  )
}

export default Pager