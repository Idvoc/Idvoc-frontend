import Image from 'next/image'
import React from 'react'

interface serviceCardProps {
  icon: string,
  mainText: string,
  subMainText: string
}

const ServiceCard: React.FC<serviceCardProps> = ({ icon, mainText, subMainText }) => {
  return (
    <main className='bg-white flex items-center flex-col py-[4rem] h-full gap-10 rounded-3xl shadow-2xl px-[2rem]'>
      <div className='w-[64px] h-[64px]'>
        <Image src={icon} width={64} height={64} alt='services' />
      </div>
      <div className='text-[28px] leading-[33.6px] text-textBlack text-center font-semibold px-[1rem]'>{mainText}</div>
      <div className='text-[18px] text-center text-textBlack/[50%] leading-[28.8px] '>{subMainText}</div>
    </main>
  )
}

export default ServiceCard