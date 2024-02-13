"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sponsors = [
    {
        logourl: '/partner1.svg',
        alt: 'tripadvisor',
        width: 211.83,
        height: 32,
    },
    {
        logourl: '/partner2.svg',
        alt: 'expedia',
        width: 113.06,
        height: 32,
    },
    {
        logourl: '/partner3.svg',
        alt: 'booking.com',
        width: 188.6,
        height: 32,
    },
    {
        logourl: '/partner4.svg',
        alt: 'airbnb',
        width: 102.53,
        height: 32,
    },
    {
        logourl: '/partner5.svg',
        alt: 'grabitz',
        width: 173.57,
        height: 32,
    }
];

const Sponsors = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // Trigger animation when half of the component is in view
    });

    const containerRef = useRef(null);

    return (
        <motion.main
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="py-[6rem] ml-[1rem] flex justify-between px-[6rem] bg-[url('/partnerBgTriangles.svg')] bg-no-repeat bg-[0_center]"
        >
            <div ref={containerRef} className="flex justify-between items-center w-full">
                {sponsors.map((sponsor, index) => (
                    <motion.img
                        key={index}
                        src={sponsor.logourl}
                        alt={sponsor.alt}
                        width={sponsor.width}
                        height={sponsor.height}
                        style={{ marginRight: '1rem' }}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                ))}
            </div>
        </motion.main>
    );
};

export default Sponsors;