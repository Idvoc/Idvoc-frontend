"use client"
import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = [
    {
        number: '500+',
        desc: 'People found their Id'
    },
    {
        number: 100,
        desc: 'New added Ids'
    },
    {
        number: 7,
        desc: 'Pending Ids'
    },
    {
        number: '2K+',
        desc: 'Happy customers'
    }
];

const TravelPoint = () => {
    const { ref, inView } = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <main className='flex justify-between items-center' ref={ref}>
            <section className='w-6/12'>
                <img src='/travelpoint.png' alt='travelpoint' />
            </section>
            <section className='w-5/12 pr-[7rem]'>
                <motion.section
                    className="flex flex-col gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <span className="text-[23px] leading-[27.6px] text-[#80D0E3] font-bold uppercase">Travel point</span>
                    <div className="font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2 2xl:w-[420px]">We helping you find your lost id anywhere you’re!</div>
                    <div className='text-[18px] text-textBlack/[50%] leading-[28.8px] 2xl:w-[420px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </div>
                </motion.section>
                <motion.section
                    className='grid grid-cols-2 grid-rows-2 w-fit pr-12 gap-8 pt-14 relative'
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <div className='absolute bg-[#FACD49] top-0 right-0 h-[64px] shadow-2xl w-[64px] items-center flex justify-center rounded-full'>
                        <Icon icon="lets-icons:ticket-fill" color='white' fontSize={32} />
                    </div>
                    {data.map((data) => (
                        <motion.div
                            key={data.number}
                            className='p-[1rem] border border-textBlack/[10%] rounded-3xl flex flex-col gap-4 w-[210px] items-center justify-center'
                        >
                            <span className='font-bold text-[35px] leading-[42px] text-[#80D0E3]'>{data.number}</span>
                            <span className='text-textBlack font-[400] text-[18px] leading-[28.8px] text-center'>{data.desc}</span>
                        </motion.div>
                    ))}
                </motion.section>
            </section>
        </main>
    );
};

export default TravelPoint;