import React from 'react';
import { skillCardData } from '../constants/constants';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className=" section-container mb-14 "
    >
      {/* Content Container */}
      <div className="mt-5 mx-auto mt w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
        >
          <h2 className="mb-3 section-title text-3xl  text-center ">My <span className='text-yellow-500'>Technical</span> Skills</h2>
        </motion.div>

        {/* Skills Container */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="w-full max-w-full flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8"
        >
      {skillCardData.map((skillCard) => (

<SkillCard
key={skillCard.id}
  skillCard={skillCard}
/>    
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
