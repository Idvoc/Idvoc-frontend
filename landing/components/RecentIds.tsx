"use client"
import React, { useCallback, useRef, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import IdCard from "./IdCard";
import { Icon } from "@iconify/react";

const RecentIds = () => {
  const sliderRef = useRef<any | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Medium screens
      } else {
        setSlidesPerView(1); // Small screens
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [slidesPerView]);

  return (
    <>
      <section className="pt-5 pb-5 lg:pt-[12px] lg:pb-[12px] relative my-10">
        <div className="flex justify-between items-center px-[5rem] mx-[2rem] pb-[5rem] bg-[url('/OBJECTS.svg')] bg-no-repeat bg-right-bottom">
          <section className="">
            <span className="text-[23px] leading-[27.6px] text-[#80D0E3] font-bold uppercase">Top Destination</span>
            <div className="font-semibold text-textBlack text-[44px] leading-[52.8px] mt-2">Recently Announced ids</div>
          </section>
          <div className="flex items-center gap-2">
            <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
              <button className="mx-1 flex h-[64px] w-[64px] items-center border border-textBlack/[10%] justify-center rounded-full  transition-all hover:text-white">
                <Icon icon="cil:arrow-left" color="#191825" fontSize={24} />
              </button>
            </div>
            <div className="next-arrow cursor-pointer" onClick={handleNext}>
              <button className="mx-1 flex h-[64px] w-[64px] shadow-2xl items-center justify-center rounded-full bg-primary transition-all hover:text-white">
                <Icon icon="cil:arrow-right" color="#fff" fontSize={24} />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          ref={sliderRef}
        >
          {[1, 2, 3, 4, 5, 6, 7].map(() => {
            return (
              <SwiperSlide className="pb-[4rem]">
                <IdCard />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  );
};

export default RecentIds;
