import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { title } from 'process';
import {FaEye} from 'react-icons/fa';

type Props = {
  project: {
    title: string;
    image: string;
    description: string;
    tech: string[];
    projectLink: string;
    githubLink: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    // Project Container
    <motion.li
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
      className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]"
    >
      {/* Project Image */}
      <Link
        href={project.projectLink}
        className="lg:max-w-2xl relative flex w-full rounded-xl overflow-hidden group items-center text-center"
      >
        {/* Image */}
        <Image
          src={`/assets/${project.image}`}
          alt={`Project screenshot of ${project.title}`}
          width={2400}
          height={1280}
          className="flex items-center text-center w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
        ></Image>
        {/* Overlay */}
        <p className="absolute z-[1] w-full h-full flex flex-col justify-center items-center text-2xl md:text-3xl font-semibold text-primary opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
          <span className="flex">
            <HiArrowRight className="text-5xl "/>
          </span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-80 transition ease-in-out duration-500" />
      </Link>

      {/* Project Info */}
      <div className="flex flex-col items-center justify-center text-center w-full">
        {/* Project Title */}
        <h4 className="w-fit my-2 group">
          <Link
            href={project.projectLink}
            className="flex flex-wrap text-2xl md:text-3xl font-bold tracking-wide group-hover:text-primary custom-transition hover:underline underline-offset-4"
          >
            {project.title}
            <span className="ml-1 mt-1 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 custom-transition">
              <HiArrowRight />
            </span>
          </Link>
        </h4>
        {/* Project Description */}
        <p className=" text-center  paragraph-text-color">{project.description}</p>
        {/* Project Technologies */}
        <ul className="my-4 flex flex-wrap text-gray-400 gap-3">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="px-3 py-1 border border-gray-400 rounded-lg"
            >
              {techItem}
            </li>
          ))}
        </ul>
        {/* Project Links */}
        <div className="flex gap-4">
          {/* Deployed Link */}
          <Link
            href={project.projectLink}
            className="project-link-btn btn-primary-style"
          >
            <FaEye className="text-5xl hover:text-yellow-500"/> 
          </Link>
          {/* Github Link */}
          <Link
            href={project.githubLink}
            className="project-link-btn btn-secondary-style"
          >
             <FaGithub className="text-4xl hover:text-yellow-500" />
          </Link>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
