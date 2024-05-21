"use client"

import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/assets/img/logo.png'
import { MdMenu } from 'react-icons/md'
const Header = () => {
  const [headerActive, setHeaderActive] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  useEffect(() =>{
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {window.removeEventListener('scroll', handleScroll)}
    
  }, 
  [])
  
  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'}
    duration-300 fixed max-w-[1920px] top-0  w-full bg-primary-200 h-[100px] z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between ">
        <Link href='/'>
          <Image src={img} width={117} height={55} />
        </Link>
        <MobileNav containerStyle={`${headerActive ? 'top-[90px]' : 'top-[124px]'}
        ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
        xl:hidden text-white flex flex-col
         text-center gap-8 fixed bg-primary-200 
          text-base uppercase duration-300 
         font-medium left-0 w-full z-50 `}
         
         />
        
        <Nav containerStyle='flex gap-4 text-white hidden xl:flex' />
        <div className='flex items-center gap-4'>
          <div className='text-white flex items-center gap-4'>
            <button className='border border-accent hover:bg-accent duration-300 p-4 rounded-md'>
            Login

            </button>
            <button className='border border-accent hover:bg-accent hover:rounded-md duration-500 p-3'>
            Register
            </button>
          </div>
          <button onClick={() => setOpenNav(!openNav)}
           className='text-white xl:hidden'>
            <MdMenu className='text-4xl' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header