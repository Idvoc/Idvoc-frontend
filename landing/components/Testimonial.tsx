"use client"
import React, { useId } from 'react'
import { Icon } from '@iconify/react'

const Testimonial = () => {
    return (
        <div className='bg-inherit flex flex-col items-center gap-5 justify-center w-fit mx-auto'>
            <img src='/witness.png' alt='witness' />
            <div>
                <span className='text-[23px] leading-[27.6px] font-bold text-[#80D0E3]'>Peace Ishimwe</span>
                <span className='text-[18px] leading-[27.6px] font-bold text-textBlack/[75%]'> / Travel Enthusiast</span>
            </div>
            <div className='flex items-center justify-center gap-2'>
                {[1, 2, 3, 4, 5].map(() => {
                    return (
                        <Icon icon="fluent-emoji-flat:star" key={useId()} />
                    )
                })}
            </div>
            <p className='max-w-[590px] text-center text-textBlack/[85%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC.</p>
        </div>
    )
}

export default Testimonial