import React from 'react'
import TitleDesign from './TitleDesign'
import TestimonialCard from './TestimonialCard'


const Testimonials = () => {
    return (
        <section className='bg-[#F7FBFF] mb-20'>
            <div className='pt-[70px]'>
                <TitleDesign title='Testimonials' />
                <h1 className='text-center font-bold text-xl'>What people say about us</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 overflow-x-hidden mt-8'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />

            </div>
        </section>
    )
}

export default Testimonials