import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bioParagraphs, devImage } from '../constants/constants';

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="section-container mb-14 mt-5"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1000px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="section-title-container"
        >
          <h2 className=" text-5xl text-center mt-20"><span className="text-yellow-500">About</span> Me</h2>
        </motion.div>

        <div className=" mt-1 w-full flex flex-col md:flex-row items-center md:items-start gap-12">
             <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="w-full flex flex-col paragraph-text-color gap-4"
          >
            {bioParagraphs.map((paragraph) => (
              
              <p key={paragraph.id}>{paragraph.text}</p>
              
            ))}
          </motion.div>
          
            {/* Image container */}
            <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="float-left mx-auto md:mx-0 order-first md:order-last"
          >

          <Image
             src={`/assets/${devImage}`}
              alt="Portfolio portrait"
              width={450}
              height={350}
              className=" float-top w-[450px] h-[400px] md:min-w-[400px] md:h-[420px] lg:h-[484px] lg:min-w-[450px] rounded-full object-cover"
              priority={true} />
            
             </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
