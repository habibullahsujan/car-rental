'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { MobileSidebar } from './MobileSidebar'
import { SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {

  return (
    <section className='flex items-center justify-between h-20  px-3 lg:px-[100px]'>
      <Link href={'/'} className='font-bold text-primaryColor uppercase flex items-center justify-center gap-1'><Image src={logo} alt="logo" width={24} height={27} />rentcars</Link>
      <nav className='lg:flex items-center gap-4 hidden'>
        <ul className='flex items-center gap-4 text-[#484848]'>
          <Link href={'/'}><li>Become a renter</li></Link>
          <Link href={'/'}><li>Rental deals</li></Link>
          <Link href={'/'}><li>How it works</li></Link>
          <Link href={'/'}><li>Why choose us</li></Link>
        </ul>
      </nav>
      <div className='lg:flex items-center gap-4 hidden'>
        <Link href={'/login'} className=''>Login</Link>
        <Link href={'/register'} className='bg-primaryColor text-white px-4 py-2 rounded-md'>Register</Link>
      </div>
      <div className='bg-white lg:hidden'>
        <MobileSidebar>
          <SheetTrigger asChild>
            <Button className=' bg-primaryColor'>
              <HamburgerMenuIcon className='size-5 text-white' />
            </Button>
          </SheetTrigger>
        </MobileSidebar>
      </div>

    </section>
  )
}

export default Navbar