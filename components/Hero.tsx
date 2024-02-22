import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { devName, roles,profileImage } from '../constants/constants';


type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [...roles],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative section-container h-[calc(75vh)] md:pt-64 flex flex-col items-center justify-center text-center"
    >
      <div className='bg-overlay-style bg-grid' />

      {/* Background Animation */}
      <BackgroundCircles />

      {/* Center Image Container */}
      <motion.div
        initial={{
          opacity: 0,

        }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: 1,
        }}
        transition={{ delay: 2.9, duration: 0.5 }}
        className="-mt-[64px] p-[4px] w-40 h-40 shrink-0 rounded-full bg-gradient-to-t from-tertiary via-primary to-secondary bg-yellow-500"
        
      >
        {/* Center Image */}
        <div className="flex flex-col justify-center w-full h-full rounded-full overflow-hidden bg-black">
         <Image
            src={`/assets/${profileImage}`}
            alt="Portfolio Logo"
            width={200} 
            height={200} 
            className="mx-auto object-cover object-center" // use "mx-auto" to center logo
            priority={true}
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{
          y: '50%',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
        className="z-10 mt-10 md:mt-12"
      >
        {/* Intro */}
        <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest custom-text-shadow">
          Hi, my name is
        </h2>
        {/* Name */}
        <h1 className="pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold tracking-wider md:tracking-widest">
          <span className="custom-gradient-text">{devName}</span>
        </h1>
        {/* Typing Text */}
        <h2 className="h-10 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest custom-text-shadow text-primary">
         
          I am 
          <span className="text-yellow-500">{text}</span>
  
          <Cursor cursorColor="yellow" />
        </h2>
      </motion.div>
    </section>
  );
};

export default Hero;
