"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <footer className='px-[7rem] flex items-start justify-between text-textBlack/50 mt-[7rem] pb-[5rem]' ref={ref}>
      <motion.div className='flex flex-col gap-6' variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.div className='flex items-center gap-4' variants={itemVariants}>
          <img src='/idvocLogo.svg' alt='logo' />
          <span className='text-textBlack font-semibold text-[23px] leading-[27.6px]'>Idvoc</span>
        </motion.div>
        <motion.div className='max-w-[270px] text-textBlack/50' variants={itemVariants}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC.
        </motion.div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.ul className='flex flex-col gap-6'>
          <motion.li className='text-textBlack font-semibold text-[23px] leading-[27.6px]' variants={itemVariants}>Company</motion.li>
          <motion.li variants={itemVariants}>About</motion.li>
          <motion.li variants={itemVariants}>Career</motion.li>
          <motion.li variants={itemVariants}>Mobile</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.ul className='flex flex-col gap-6'>
          <motion.li className='text-textBlack font-semibold text-[23px] leading-[27.6px]' variants={itemVariants}>Contact</motion.li>
          <motion.li variants={itemVariants}>Why Idvoc?</motion.li>
          <motion.li variants={itemVariants}>Partner with us</motion.li>
          <motion.li variants={itemVariants}>FAQs</motion.li>
          <motion.li variants={itemVariants}>Blog</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.ul className='flex flex-col gap-6'>
          <motion.li className='text-textBlack font-semibold text-[23px] leading-[27.6px]' variants={itemVariants}>Meet us</motion.li>
          <motion.li variants={itemVariants}><a href="tel:+250793092863">+250 0793 092 863</a></motion.li>
          <motion.li variants={itemVariants}><a href="mailto:peaceishimwem@gmail.com">info@idvoc.com</a></motion.li>
          <motion.li variants={itemVariants}>205. R Street, New York</motion.li>
        </motion.ul>
      </motion.div>
    </footer>
  );
};

export default Footer;
