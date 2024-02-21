import React from 'react';
import { devName, socialLinks } from '../constants/constants';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="px-4"
    >
      <div className="relative max-w-7xl mx-auto py-10 border-t border-slate-300/20 flex items-center justify-center text-lg text-center">
       
       <p className="flex items-center justify-center">
               Designed & build by ❤️{devName}  &copy; {year} . All rights reserved.
          </p>

        {/* Socials */}
        <ul className="flex items-end ml-11 gap-6 mb-6 sm:mb-0 text-yellow-500 ">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li
              key={socialLink.name}
              className="flex"
            >
              <Link
                href={socialLink.url}
                className="custom-social-btn text-4xl hover:text-white  "
              >
                {socialLink.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
