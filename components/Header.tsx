import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaList } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { HiUserCircle, HiOutlineFolder } from 'react-icons/hi2';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { socialLinks, resumeLink, LogoImage} from '../constants/constants';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  const [navMenu, setNavMenu] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      icon: <HiOutlineHome />,
      url: '#home',
    },
    {
      name: 'About',
      icon: <HiUserCircle />,
      url: '#about',
    },
    {
      name: 'Skills',
      icon: <FaList />,
      url: '#skills',
    },
    {
      name: 'Projects',
      icon: <HiOutlineFolder />,
      url: '#projects',
    },
    {
      name: 'Contact',
      icon: <BsFillPersonLinesFill />,
      url: '#contact',
    },
  ];

  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
      className="bg-black/100 sticky top-0 z-20 w-full min-h-[21px] py-0 md:py-1 px-1 text-base border-b border-gray-300/20"
    >
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto my-0  flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="home"
          className="py-1 md:p-0 hover:opacity-70 custom-transition"
          onClick={() => window.location.replace('/')}
        >
          <Image
            src={`/assets/${LogoImage}`}
            alt="Portfolio Logo"
            width={100}
            height={100}
            className="w-30  h-30 bg-cover w-30 h-30"
            priority={true}
          />
        </Link>

        {/* Navigation Group */}
        <ul className="hidden md:flex flex-row items-center gap-6 tracking-wider font-semibold">
          {/* Navigation Links */}
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                href={navLink.url}
                className="hover:text-primary custom-transition hover:bg-yellow-500 hover:rounded px-3 py-2 hover:text-white"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
          {/* Resume Link */}
          <li>
            <Link
              href={resumeLink}
              className="py-2 px-4 rounded-full btn-secondary-style text-yellow-500 w-12 h-12 border border-yellow-500 hover:text-black hover:bg-yellow-500"
            >
              Resume
            </Link>
          </li>
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li key={socialLink.name}>
              <Link
                href={socialLink.url}
                className="text-4xl text-yellow-500 hover:text-primary custom-transition hover:text-white"
              >
                {socialLink.icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={ `{ hamburger hamburger--spin pt-2 z-30 md:hidden ${navMenu && 'is-active'}`}
          onClick={() => setNavMenu(!navMenu)}
        >
         <span className="hamburger-box text-yellow-500">
    <span className={`hamburger-inner ${'bg-yellow-500'}`}></span>
  </span>
        </button>

        {/* Mobile Menu */}
        <div className={` fixed md:hidden ${navMenu ? 'inset-0' : ''}`}>
          {/* Overlay */}
          <div
            className={`${navMenu ? 'w-full h-screen bg-black/70 backdrop-blur-sm custom-transition' : ''}`}
            onClick={() => setNavMenu(!navMenu)}
          />
          {/* Menu */}
          <MobileMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navLinks={navLinks}
          />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
