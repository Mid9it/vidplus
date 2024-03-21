"use client"
import React from 'react'
import Link from 'next/link'

const Note = () => {
  return (
    <div>
        <div>
        <header className=' text-yellow-500 font-bold underline mb-4'>NOTE:--- SOME LINKS WON'T WORK WITH AD-BLOCKERS</header>
          <header className=' text-yellow-500 font-bold underline mb-1'>IF MOVIE LINK IS NOT WORKING?</header>
          <p className=' w-full text-sm mb-3 text-white'>If you cant find what you are looking for, you can message us through our telegram  <Link href={"https://t.me/Vidnaija"} className=' text-blue-500 underline cursor-pointer'>__@VIDNAIJA__</Link>let us get it for you</p>
          <header className=' text-yellow-500 font-bold underline mb-1'>COMMUNITY FORUM COMING SOON (VIDFORUM)</header>
          <div className=' w-full text-sm'><header className=" font-bold text-yellow-500 underline mb-3">Why join our forum?</header>
<p className='mb-1 text-white'>🤝 Community Support: Get quick help and expert advice from fellow users who may have faced similar download challenges.</p>

<p className='mb-1 text-white'>🌐 Exclusive Content: Access special downloads, tips, and tricks shared by our community members.</p>

<p className='mb-1 text-white'>💬 Engage and Share: Share your experiences, suggestions, and connect with like-minded individuals who share your interests.</p>
<p className='mb-1 text-white'>👥 Be Part of Something Big: Contribute to the growth of our community and help shape the future of <span className=' font-bold text-red-500 underline'>VIDNAIJA</span>.</p>

<header className=" font-bold text-yellow-500 underline  mb-3">How to join:</header>

<p className='mb-1 text-white '>Click on "Sign Up" to create your account.</p>
<p className='mb-1 text-white'>Click on "COMMUNITY-FORUM" .</p>
<p className='mb-1 text-white'>Join a Forum.</p>
<p className='mb-1 font-bold text-yellow-500'>Introduce yourself in the Forum and start exploring the discussions.</p>
<p className='mb-1 font-bold text-yellow-500'>Joining is easy, and the benefits are endless. Don't miss out on the opportunity to be a part of our growing community!</p>

</div>
        </div>
    </div>
  )
}

export default Note


