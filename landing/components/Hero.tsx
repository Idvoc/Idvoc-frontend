"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <motion.main
      className="px-[7rem] mt-[3rem] flex justify-between"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.section className="w-[38%] flex flex-col gap-10">
        <motion.div
          className="flex gap-3 items-center bg-white w-fit px-[1.5rem] py-[.75rem] rounded-full shadow-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[#80D0E3] text-[17px]">Announce your loss!</span>
          <Icon icon="grommet-icons:announce" fontSize={24} color="#80D0E3" />
        </motion.div>
        <motion.div
          className="text-[40px] text-textBlack font-bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "Lost your national{" "}
          <span className="border-2 px-[1rem] rounded-[50%]">
            <span>ID?</span>
          </span>{" "}
          <span className="text-[#55DEFF]">Let's find it together.</span> Your key to unlocking endless possibilities
          awaits."
        </motion.div>
        <motion.div
          className="text-textBlack/[50%] text-[18px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          "Dive into a sea of options. Your satisfaction, our mission. We're here to make you happy with endless
          options."
        </motion.div>
        <motion.section
          className="flex gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="text-[14px] shadow-2xl font-bold leading-[16.8px] text-textLight bg-[#80D0E3] py-[1rem] px-[2rem]  rounded-full ">
            Get Started
          </button>
          <button className="text-[14px] font-bold leading-[16.8px] text-textBlack border border-[#80D0E3] py-[1rem] px-[2rem]  rounded-full flex items-center gap-2">
            <Icon icon="lets-icons:video-fill" color="#80D0E3" fontSize={20} />
            <span>Watch Demo</span>
          </button>
        </motion.section>
      </motion.section>
      <motion.section
        className="w-[62%]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Image
          src={"/landingProto.svg"}
          width={0}
          height={0}
          alt="landingProto"
          style={{ width: "100%", height: "auto" }}
        />
        <motion.section>
          <button className="w-[64px] h-[64px] rounded-full shadow-2xl mx-[5rem] my-[3rem] bg-[#80D0E3] flex items-center justify-center">
            <Icon icon="carbon:phone-filled" fontSize={32} color="white" />
          </button>
          <button className="w-[64px] mx-auto h-[64px] rounded-full shadow-2xl bg-[#FF5722] flex items-center justify-center">
            <Image src={"/add-user.svg"} width={32} height={32} alt="add account" />
          </button>
        </motion.section>
      </motion.section>
    </motion.main>
  );
};

export default Hero;