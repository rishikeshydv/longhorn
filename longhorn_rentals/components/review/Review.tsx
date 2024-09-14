import Image from 'next/image'
import React from 'react'
import { Star } from 'lucide-react';
interface ReviewProps {
    img:string
    content:string
    name:string
    profession:string
}
export default function Review({img,content,name,profession}: ReviewProps) {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 items-center justify-center'>
        <Image
            src={img}
            width={150}
            height={150}
            alt="Rishi's profile picture"
            style={{borderRadius: '50%'}} // Add a new class
          />
          <div className='flex gap-2'>
          <Star color='#FFD100' fill='#FFD100'/>
          <Star color='#FFD100' fill='#FFD100'/>
          <Star color='#FFD100' fill='#FFD100'/>
          <Star color='#FFD100' fill='#FFD100'/>
          <Star color='#FFD100' fill='#FFD100'/>
          </div>
        </div>
          <p className='text-center text-gray-500 text-md tracking-wide'>{content}</p>
        <div className='flex flex-col'>
            <p className='font-bold text-center text-[#000000] text-xl tracking-wide'>{name}</p>
            <p className='text-center text-md tracking-wide'>{profession}</p>
        </div>


    </div>
  )
}
