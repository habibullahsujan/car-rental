import Image from 'next/image'
import React from 'react'
import TitleDesign from './TitleDesign'
import img from '@/assets/whyChooseUsImg.svg'
import indicate from '@/assets/indicate.svg'
import { CalendarClock, CircleDollarSign, CircleUser, MessageCircle } from 'lucide-react'
const WhyChooseUs = () => {
    return (
        <section className='mt-8 lg:mt-[100px]'>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='w-full lg:w-2/3 relative overflow-hidden py-10'>
                    <div className='relative z-20'>
                    <div className='relative w-full h-[70vh] overflow-hidden rounded-lg'>
                        <div className="absolute lg:-top-[10px] lg:-left-[200px] ">
                            <Image src={img} alt="banner" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    </div>
                    <div className='h-[500px] z-0  w-full top-1/2 right-1/2 absolute lg:-top-11 lg:-left-[200px]'>
                    <Image src={indicate} alt='car'  fill />
                    </div>
                </div>
                <div className='w-full lg:w-1/3 lg:mr-16 mx-6'>
                    <TitleDesign title='Why choose us' />
                    <h1 className='text-xl font-bold my-4 text-gray-700'>
                        We offer the best experience with our rental deals
                    </h1>
                    <div className='flex flex-col items-start justify-center gap-6'>
                        <div className='flex items-center gap-3 justify-center'>
                            <div className='p-2 rounded-md bg-[#ECF5FF]'>
                                <CircleDollarSign className='size-8 text-primaryColor' />
                            </div>
                            <div>
                                <h2 className='font-bold'>Best price guaranteed</h2>
                                <p className='text-gray-500 text-sm'>Find a lower price? We’ll refund you 100%
                                    of the difference.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <div className='p-2 rounded-md bg-[#ECF5FF]'>
                                <CircleUser className='size-8 text-primaryColor' />
                            </div>
                            <div>
                                <h2 className='font-bold'>Experience driver</h2>
                                <p className='text-gray-500 text-sm'>Don’t have driver? Don’t worry, we have many
                                    experienced driver for you.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <div className='p-2 rounded-md bg-[#ECF5FF]'>
                                <CalendarClock className='size-8 text-primaryColor' />
                            </div>
                            <div>
                                <h2 className='font-bold'>24 hour car delivery</h2>
                                <p className='text-gray-500 text-sm'>Book your car anytime and we will deliver it
                                    directly to you.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <div className='p-2 rounded-md bg-[#ECF5FF]'>
                                <MessageCircle className='size-8 text-primaryColor' />
                            </div>
                            <div>
                                <h2 className='font-bold'>24/7 technical support</h2>
                                <p className='text-gray-500 text-sm'>Have a question? Contact Rentcars support
                                    any time when you have problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs