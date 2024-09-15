import React from 'react'
import audi from '@/assets/audi.svg'
import bmw from '@/assets/bmw.svg'
import mercedes from '@/assets/mercedese.svg'
import nissan from '@/assets/nissan.svg'
import volvo from '@/assets/volvo.svg'
import jaguar from '@/assets/jaguar.svg'
import honda from '@/assets/honda.svg'
import rolls from '@/assets/rolls-royce.svg'
import Image from 'next/image'
import Link from 'next/link'

const CarBrands = () => {
  const carBrands =[
    {title:'Audi',img:audi,href:'/'},
    {title:'BMW',img:bmw,href:'/'},
    {title:'Mercedes',img:mercedes,href:'/'},
    {title:'Nissan',img:nissan,href:'/'},
    {title:'Volvo',img:volvo,href:'/'},
    {title:'Jaguar',img:jaguar,href:'/'},
    {title:'Honda',img:honda,href:'/'},
    {title:'Rolls',img:rolls,href:'/'},
  ]
  return (
    <section className='flex items-center justify-between overflow-hidden mt-[200px] mb-[100px] gap-x-14'>
      {
        carBrands.map(({title, img, href}) => (
          <Link key={title} href={href}>
            <Image
              alt={title}
              src={img}
              width={225}
              height={67}
            />

          </Link>
        ))
      }

    </section>
  )
}

export default CarBrands