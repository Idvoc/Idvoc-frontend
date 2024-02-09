import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <main className='flex justify-between px-[10rem] py-[1.5rem] items-center'>
            <div className='flex gap-4 items-center'>
                <Image
                    src={"/IdvocLogo.svg"}
                    width={27}
                    height={44}
                    alt='Idvoc logo'
                />
                <span className='text-[24px] font-semibold text-textBlack'>Idvoc</span>
            </div>
            <ul className='flex gap-20'>
                <li><Link href="/" className='text-[14px] leading-[16.8px] text-textBlack font-bold' >Home</Link></li>
                <li><Link href="/" className='text-[14px] leading-[16.8px] text-textBlack/[50%]' >Discover</Link></li>
                <li><Link href="/" className='text-[14px] leading-[16.8px] text-textBlack/[50%]' >Announce lost</Link></li>
                <li><Link href="/" className='text-[14px] leading-[16.8px] text-textBlack/[50%]' >Contact</Link></li>
            </ul>
            <div className='flex gap-6'>
                <button className='text-[14px] font-bold leading-[16.8px] text-textBlack'>Log In</button>
                <button className='text-[14px] font-semibold leading-[16.8px] text-textLight bg-primary py-[1rem] px-[2rem]  rounded-full'>Sign Up</button>
            </div>
        </main>
    )
}

export default Header