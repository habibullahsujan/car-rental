import React from 'react'
import TitleDesign from './TitleDesign'
import PopularCarCard from './PopularCarCard'
import { ArrowRight } from 'lucide-react'

const PopularRentalDeals = () => {
  return (
    <section className='my-[100px] '>
        <TitleDesign title='Popular Rental Deals' />
        <h1 className='text-center font-bold text-xl'>Most popular cars rental deals</h1>
        <div className='flex items-center justify-center gap-16 my-8 flex-col lg:flex-row'>
            <PopularCarCard/>
            <PopularCarCard/>
            <PopularCarCard/>
            <PopularCarCard/>
        </div>
       <div className='flex items-center justify-center pt-6'>
       <button className='flex items-center justify-center gap-1 border px-3 py-1 rounded-md border-gray-300 text-[#4E4E4E] font-semibold'>Show all vehicles <ArrowRight className='size-5' /></button>
       </div>
    </section>
  )
}

export default PopularRentalDeals