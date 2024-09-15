import React from 'react'
import img from '@/assets/testimonial-1.jpg'
import Image from 'next/image'
import { Star } from 'lucide-react'

const TestimonialCard = () => {
    return (

        <div className='transform -translate-x-[40%]'>
            <div className='flex rounded-md shadow-md border'>
                <div className='pb-6'>
                    <Image src={img} alt='car' width={397} height={400} />
                </div>
                <div className='flex flex-col gap-4 p-4 justify-between'>
                    <div>
                        <h2>
                            <span className='font-bold text-6xl'>5.0</span>stars</h2>
                        <div className='flex items-center gap-1 mt-2 mb-6'>
                            <Star className='size-4 text-orange-500 fill-orange-500' />
                            <Star className='size-4 text-orange-500 fill-orange-500' />
                            <Star className='size-4 text-orange-500 fill-orange-500' />
                            <Star className='size-4 text-orange-500 fill-orange-500' />
                            <Star className='size-4 text-orange-500 fill-orange-500' />
                        </div>
                    </div>
                    <p>“I feel very secure when using caretall&apos;s services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                    <div className="flex flex-col mt-4">
                        <p className="font-bold text-lg">John Doe</p>
                        <p className="text-sm text-gray-600">Riyadh, Saudi Arabia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard