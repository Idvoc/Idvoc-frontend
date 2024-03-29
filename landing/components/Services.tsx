"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

import ServiceCard from './ServiceCard';

const serviceCardsData = [
    {
        icon: '/destination.svg',
        mainText: 'Connect people from different places',
        subMainText: 'What looked like a small patch of purple grass, above five feet.'
    },
    {
        icon: '/booking.svg',
        mainText: 'Chat',
        subMainText: 'Communicate with someone easily for easily delivery of your id.'
    },
    {
        icon: '/cloudy.svg',
        mainText: 'Privacy and Security',
        subMainText: 'What looked like a small patch of purple grass, above five feet.'
    }
]

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (Swiper: any) => {
        setActiveIndex(Swiper.activeIndex);
    };
    return (
        <main className='flex items-center pl-[7rem] '>
            <section className='w-[30%]'>
                <div className='text-[23px] leading-[27.6px] text-[#80D0E3] font-bold uppercase' >Services</div>
                <div className='font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2'>
                    Our top value categories for you
                </div>
            </section>
            <section className='w-[70%]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    initialSlide={1}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(Swiper) => handleSlideChange(Swiper)}
                    modules={[Navigation, Autoplay]}
                    className="!w-[100%] !py-[50px]"
                >
                    {serviceCardsData.map((serviceCardData, index) => {
                        return (
                            <SwiperSlide key={index} className={`!w-[330px] !h-[450px] !rounded-3xl !overflow-hidden ${index === activeIndex ? 'shadow-2xl' : ''}`}>
                                <ServiceCard icon={serviceCardData.icon} mainText={serviceCardData.mainText} subMainText={serviceCardData.subMainText} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </main>
    )
}

export default Services

