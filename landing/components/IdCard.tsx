import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const IdCard = () => {
  return (
    <main className='bg-white shadow-2xl p-[1.5rem] rounded-3xl w-[475px] flex flex-col gap-6'>
      <header className='flex justify-between items-start gap-10'>
        <div className='text-[23px] leading-[27.6px] text-textBlack font-semibold w-6/12'>Munyaneza Peace Ishimwe</div>
        <div className='text-[23px] leading-[27.6px] text-[#80D0E3] w-6/12'>5days</div>
      </header>
      <span className='text-[18px] leading-[28.8px] text-textBlack/[75%] font-[400]'>Kigali, Remera</span>
      <div className=''>
        <img
          src={"/idCardSample.png"}
          alt='id-card'
        />
      </div>
      <footer className='flex items-center gap-2'>
        <span className='text-[23px] leading-[27.6px] text-[#80D0E3] font-bold'>4.8</span>
        <Icon icon="mingcute:star-fill" color='#80D0E3' fontSize={24} />
      </footer>
    </main>
  )
}

export default IdCard