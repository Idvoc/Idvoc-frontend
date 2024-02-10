"use client"
import React, { useCallback, useRef, useId } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon } from "@iconify/react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const sliderRef = useRef<any | null>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <section className="relative my-10 px-[7rem]">
            <div className="flex justify-between flex-col items-center px-[5rem] mx-[2rem] pb-[3rem]">
                <div className="text-[23px] leading-[27.6px] text-[#80D0E3] font-bold uppercase text-center">Testimonials</div>
                <div className="font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2 text-center">Trust our clients
                </div>
            </div>
            <section className="flex items-center ">
                <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                    <button className="mx-1 flex h-[64px] bg-white w-[64px] items-center border border-textBlack/[10%] justify-center rounded-full  transition-all">
                        <Icon icon="cil:arrow-left" color="#191825" fontSize={24} />
                    </button>
                </div>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    ref={sliderRef}
                    className="!bg-none"
                >
                    {[1, 2, 3, 4, 5, 6, 7].map(() => {
                        return (
                            <SwiperSlide className="pb-[4rem] flex items-center justify-center w-full" key={useId()}>
                                <Testimonial />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="next-arrow cursor-pointer" onClick={handleNext}>
                    <button className="mx-1 flex h-[64px] w-[64px] shadow-2xl items-center justify-center rounded-full bg-primary transition-all">
                        <Icon icon="cil:arrow-right" color="#fff" fontSize={24} />
                    </button>
                </div>
            </section>
        </section>
    );
};

export default Testimonials;