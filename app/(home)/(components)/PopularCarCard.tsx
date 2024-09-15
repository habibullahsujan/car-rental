import { PersonIcon } from '@radix-ui/react-icons'
import { ArrowRight, DoorOpen, GitBranchPlus, Star, SunSnow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import audiCar from '@/assets/audiCar.svg'
import { Button } from '@/components/ui/button'

const PopularCarCard = () => {
    return (
        <div className='p-3 border rounded-md shadow-xl'>
            <div className='mb-6'>
                <Image src={audiCar} alt='car' height={97} width={208} />
            </div>
            <h2 className='font-bold text-lg my-3'>Jaguar XE L P250</h2>
            <div className='flex items-center gap-2'>
                <Star className='size-4 text-orange-500' />
                <div>
                    <span>4.8</span>
                    <span className='text-[#959595]'>(2,436 reviews)</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 text-[#959595] text-sm  '>
                        <PersonIcon className='size-4' />
                        <span >4 Passengers</span>
                    </div>
                    <div className='flex items-center gap-1 text-[#959595] text-sm'>
                        <GitBranchPlus className='size-4' />
                        <span>Auto</span>
                    </div>
                </div>
                <div className='flex items-center justify-between text-[#959595] text-sm'>
                    <div className='flex items-center gap-1'>
                        <SunSnow className='size-4' />
                        <span>Air Conditioning</span>
                    </div>
                    <div className='flex items-center gap-1 text-[#959595] text-sm'>
                        <DoorOpen className='size-4' />
                        <span className=''>4 Doors</span>
                    </div>
                </div>

            </div>
            <div className="border-b border-[#E5E5E5]"></div>
            <div className='flex items-center justify-between gap-2 my-4'>
                <span className='text-[#959595]'>Price</span>
                <div>
                    <span>$ 1,800</span>
                    <span className='text-[#959595]'>/day</span>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Button className='bg-primaryColor text-white w-full flex items-center justify-center gap-1'>Rent now <ArrowRight className='size-5' /></Button>
            </div>
        </div>
    )
}

export default PopularCarCard