import React from 'react'

const TitleDesign = ({ title }: { title: string }) => {
    return (
        <div className='flex items-center justify-center gap-3 mb-2'>
            <p className=' px-2 rounded-md py-0.5 font-semibold uppercase bg-gray-200 text-primaryColor'>{title}</p>
        </div>
    )
}

export default TitleDesign