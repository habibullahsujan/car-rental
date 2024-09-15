import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Facebook, Instagram, MapPin, MessageCircle, PhoneCall, Youtube } from 'lucide-react'

import Link from 'next/link'
const Footer = () => {
    return (
        <footer className='bg-[#051C34] text-white'>
            <div className='p-8'>
            <div className='flex flex-col lg:flex-row justify-between py-10 px-5 lg:px-20 ml-[20px]'>
                <div className='flex flex-col items-start gap-y-3'>
                    <div className='flex items-center gap-1 text-white'>
                        <Image src={logo} alt="logo" width={20} height={20} />
                        <span>Rentcars</span>
                    </div>
                    <div className='flex items-center gap-1 text-white'>
                        <MapPin className='size-4' />
                        <p className='text-wrap'>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
                    </div>
                    <div className='flex items-center gap-1 text-white'>
                        <PhoneCall className='size-4' />
                        <p>+1 (908) 234-5678</p>
                    </div>
                    <div className='flex items-center gap-1 text-white'>
                        <MessageCircle className='size-4' />
                        <p>hello@rentcars.com</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-y-3'>
                    <h3 className='font-semibold'>Our Product</h3>
                    <Link href={'/'}>Career</Link>
                    <Link href={'/'}>Car</Link>
                    <Link href={'/'}>Packages</Link>
                    <Link href={'/'}>Features</Link>
                    <Link href={'/'}>Priceline</Link>
                </div>
                <div className='flex flex-col items-start gap-y-3'>
                    <h3 className='font-semibold'>Resources</h3>
                    <Link href={'/'}>Download</Link>
                    <Link href={'/'}>Help Center</Link>
                    <Link href={'/'}>Guide</Link>
                    <Link href={'/'}>Partner Network</Link>
                    <Link href={'/'}>Cruises</Link>
                    <Link href={'/'}>Developer</Link>
                </div>
                <div className='flex flex-col items-start gap-y-3'>
                    <h3 className='font-semibold'>About Rentcars</h3>
                    <Link href={'/'}>Why choose us</Link>
                    <Link href={'/'}>Our Story</Link>
                    <Link href={'/'}>Investor Relations</Link>
                    <Link href={'/'}>Press Center</Link>
                    <Link href={'/'}>Advertise</Link>
                </div>
                <div className='flex flex-col items-start gap-y-3'>
                    <h3 className='font-semibold'>Follow Us</h3>
                    <div className='flex items-center gap-3'>
                        <Facebook className='size-4' />
                        <Instagram className='size-4' />
                        <Youtube className='size-4' />
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-600 w-full h-1'></div>
            <div className='py-8 ml-[20px]'>
                <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer