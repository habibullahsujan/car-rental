import Image from 'next/image'
import React from 'react'
import bannerImg from '@/assets/heroCar.svg'
import playStore from '@/assets/playstore.svg'
import appleStore from '@/assets/appstore.svg'
import bannerText from '@/assets/bannerTextUn.svg'
const HeroBanner = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center justify-center py-10 lg:py-20 gap-x-2 px-6 lg:pl-[100px]'>
            <div className='w-full lg:w-1/2'>
                <h1 className='font-bold text-xl lg:text-5xl'>Find, book and rent a car <span className='text-primaryColor relative'>Easily <Image src={bannerText} alt="banner" width={120} height={100} className='absolute -bottom-2 left-0 z-10' /></span></h1>
                <p className='text-[#272727] my-3'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                <div className='flex items-center gap-3'>
                    <div className='bg-black text-white p-1 rounded-md flex text-xs gap-1'>
                        <Image src={playStore} alt="logo" width={30} height={30} />
                        <div className='flex flex-col'>
                            <p className='text-xs text-gray-300'>Get it on</p>
                            <p className='text-xs font-semibold'>Google Play</p>
                        </div>
                    </div>
                    <div className='bg-black text-white p-1 rounded-md flex text-xs gap-1'>
                        <Image src={appleStore} alt="logo" width={30} height={30} />
                        <div className='flex flex-col'>
                            <p className='text-xs text-gray-300'>Download on the</p>
                            <p className='font-semibold text-xs'>App Store</p>
                        </div>
                    </div>
                </div>
            </div>
           <div className='relative w-full h-[200px] lg:h-[70vh] overflow-hidden rounded-lg'>
           <div className="absolute lg:-top-[100px] lg:-right-[200px] ">
                <Image src={bannerImg} alt="banner" className="w-full h-full object-cover" />
            </div>
           </div>
        </section>
    )
}

export default HeroBanner