import React from 'react';
import ProjectCard from './ProjectCard';
import { projectList } from '../constants/constants';
import { motion } from 'framer-motion';

type Props = {};

const Project = (props: Props) => {
  return (
    <section
      id="projects"
      className="section-container"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="section-title text-5xl text-center">My Latest Creative <span className="text-yellow-500">Projects</span></h2>
        </motion.div>

        {/* Project List Container */}
        <ul className="flex flex-col space-y-12 md:space-y-36 items-center">
          {/* Every odd index, reverse project screenshot and info */}
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
