"use client"
import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const KeyFeatures = () => {
    const { ref, inView } = useInView();

    return (
        <main className='flex justify-between items-center mt-[3rem]' ref={ref}>
            <section className='w-5/12 pl-[7rem]'>
                <motion.section
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[23px] leading-[27.6px] text-[#80D0E3] font-bold uppercase">Key Features</span>
                    <div className="font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2">We offer best services</div>
                    <div className='text-[18px] text-textBlack/[50%] leading-[28.8px]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                        from 45 BC.
                    </div>
                </motion.section>
                <section className='mt-[2rem]'>
                    <motion.button
                        className='w-full p-[1.3rem] flex items-center gap-4 rounded-xl'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='w-[64px] h-[64px] flex items-center justify-center bg-[#FF5722] rounded-2xl'>
                            <Icon icon="mdi:location" fontSize={32} color='white' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='text-[23px] leading-[27.6px] text-textBlack font-semibold'>We offer best services</span>
                            <span className='text-[18px] text-textBlack/[50%] leading-[28.8px]'>Lorem Ipsum is not simply random text</span>
                        </div>
                    </motion.button>
                    <motion.button
                        className='w-full p-[1.3rem] flex items-center gap-4 border border-textBlack/[10%] rounded-xl'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='w-[64px] h-[64px] flex items-center justify-center bg-[#FACD49] rounded-2xl'>
                            <Icon icon="solar:calendar-bold" fontSize={32} color='white' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='text-[23px] leading-[27.6px] text-textBlack font-semibold'>Announce your ids</span>
                            <span className='text-[18px] text-textBlack/[50%] leading-[28.8px]'>It has roots in a piece of classical</span>
                        </div>
                    </motion.button>
                    <motion.button
                        className='w-full p-[1.3rem] flex items-center gap-4 rounded-xl'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='w-[64px] h-[64px] flex items-center justify-center bg-secondary rounded-2xl'>
                            <Icon icon="solar:ticket-bold" fontSize={32} color='white' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='text-[23px] leading-[27.6px] text-textBlack font-semibold'>Find your lost id</span>
                            <span className='text-[18px] text-textBlack/[50%] leading-[28.8px]'>Lorem Ipsum is not simply random text</span>
                        </div>
                    </motion.button>
                </section>
            </section>
            <section className='w-6/12'>
                <img src='/keyfeatures.png' alt='travelpoint' className='max-h-screen' />
            </section>
        </main>
    );
};

export default KeyFeatures;