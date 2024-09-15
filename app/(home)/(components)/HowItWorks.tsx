import { CalendarDays, Car, MapPin } from 'lucide-react'
import React from 'react'
import TitleDesign from './TitleDesign'

const HowItWorks = () => {
  
  return (
    <section className='px-3 lg:px-[100px] mt-[100px] mb-12'>
      <TitleDesign title='how it works' />
      <h1 className='font-bold text-2xl text-center'>Rent with following 3 working steps</h1>
      <div className='flex lg:flex-row items-center justify-center gap-16 text-center flex-col mt-6'>
        <div className='flex-col flex items-center justify-center gap-2 w-[230px]'>
          <div className='p-4 bg-[#ECF5FF] rounded-md text-primaryColor'>
            <MapPin className='size-[112px]' />
          </div>
          <h2 className='font-bold text-lg'>Choose location</h2>
          <p>Choose your and find
            your best car</p>
        </div>
        <div className='flex-col flex items-center justify-center gap-2 w-[230px]'>
          <div className='p-4 bg-[#ECF5FF] rounded-md text-primaryColor'>
            <CalendarDays className='size-[112px]' />
          </div>
          <h2 className='font-bold text-lg'>Pick-up date</h2>
          <p>Select your pick up date and
            time to book your car</p>
        </div>
        <div className='flex-col flex items-center justify-center gap-2 w-[230px]'>
          <div className='p-4 bg-[#ECF5FF] rounded-md text-primaryColor'>
            <Car className='size-[112px]' />
          </div>
          <h2 className='font-bold text-lg'>Book your car</h2>
          <p>Book your car and we will deliver
            it directly to you</p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks