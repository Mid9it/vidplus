"use client"
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import NextTopLoader from 'nextjs-toploader';

const Child = ({ children, dosis }) => {
  return (
    <html lang="en" className=' scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin overflow-x-hidden w-[100vw] select-none'>
    <head><meta name="monetag" content="7aeece893954aa98d10a7f34691f1d31"/>
    </head>
    <body className={dosis.className}>
    <link rel="icon" href="/logo.png" sizes="any" />

      <Navbar/>
      <NextTopLoader 
       color="#fffd00"
       initialPosition={0.08}
       crawlSpeed={200}
       height={3}
       crawl={true}
       showSpinner={false}
       easing="ease"
       speed={200}
       shadow="0 0 10px #fffd00,0 0 5px #fffd00"
       className=" z-50"
      />
      {children}
      <ProgressBar
        height="3px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Footer date={"2024"}/>
      </body>
  </html>
  )
}

export default Child