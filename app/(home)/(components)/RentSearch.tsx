import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin } from 'lucide-react'
import React from 'react'

const RentSearch = () => {
  return (
    <section className='m-4 mb-11 px-3 lg:px-[100px] '>
       <div className='gap-4 flex flex-col lg:flex-row lg:items-center justify-between shadow-lg p-3 rounded items-start bg-white'>
       <div className='flex items-center gap-3'>
            <MapPin className='size-6'/>
            <div className='flex flex-col'>
                <h3>Location</h3>
                <input type="text" placeholder='Search your location' className='w-full'/>
            </div>
        </div>
        <div className='border border-b lg:border-l border-gray-400 w-full lg:w-0 h-0 lg:h-12'></div>
        <div className='flex items-center gap-3'>
            <CalendarDays className='size-6'/>
            <div className='flex flex-col'>
                <h3>Pick up date</h3>
                <input type="date" placeholder='Search your location' className='w-full text-gray-500'/>
            </div>
        </div>
        <div className='border border-b lg:border-l border-gray-400 w-full lg:w-0 h-0 lg:h-12'></div>
        <div className='flex items-center gap-3'>
            <CalendarDays className='size-6'/>
            <div className='flex flex-col'>
                <h3>Return date</h3>
                <input type="date" placeholder='Search your location' className='w-full text-gray-500'/>
            </div>
        </div>
        <Button className='px-6 py-2 rounded-md bg-primaryColor '>Search</Button>
       </div>
    </section>
  )
}

export default RentSearch