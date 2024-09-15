import React from 'react'
import TitleDesign from './TitleDesign'
import playStore from '@/assets/playstore.svg'
import appleStore from '@/assets/appstore.svg'
import Image from 'next/image'
import mobile from '@/assets/mobile.svg'

const AppDownloadSection = () => {
    return (
        <section className='gap-20 flex lg:flex-row items-center justify-between lg:ml-[90px] flex-col-reverse'>
            <div className='flex flex-col items-start w-full lg:w-1/2'>
                <TitleDesign title='Download' />
                <h1 className='font-bold text-5xl text-wrap my-2'>Download Rentcars App for <span className='text-primaryColor'>FREE</span></h1>
                <p className='my-6'>For faster, easier booking and exclusive deals.</p>
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
            <div className='w-full lg:w-1/2'>
                <Image src={mobile} alt="logo" width={450} height={500} />
            </div>
        </section>
    )
}

export default AppDownloadSection