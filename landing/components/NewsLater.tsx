"use client"
import React from 'react'
import { Icon } from '@iconify/react'

const NewsLater = () => {
    return (
        <section className='px-[7rem]'>
            <div className='rounded-[32px] bg-[#9EF9FF] flex flex-col gap-[64px] py-[128px] px-[64px]'>
                <div className='text-[23px] leading-[27.6px] font-bold text-[#80D0E3] text-center'>subscribe to our newsletter</div>
                <div className="font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2 text-center">
                    "Unlock the potential of rediscovery and embark on a journey to reclaim what's yours."
                </div>
                <section className='flex justify-between'>
                    <div className="emailBtn flex items-center gap-2 w-8/12 bg-white rounded-xl px-[1rem] overflow-hidden p-[.5rem]">
                        <Icon icon="ic:round-email" fontSize={24} color='#53525C' />
                        <input type="email" placeholder='Your Email' className='w-full outline-none py-[.75rem] placeholder:text-textBlack/[75%] placeholder:font-semibold' />
                    </div>
                    <button className='text-white bg-primary px-[2rem] rounded-xl'>
                        Subscribe
                    </button>
                </section>
            </div>
        </section>
    )
}

export default NewsLater