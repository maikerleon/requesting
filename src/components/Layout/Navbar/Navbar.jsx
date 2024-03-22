import React from 'react';
import LinkedinIcon from './../../Icons/LinkedinIcon';
import GithubIcon from './../../Icons/GithubIcon';
import PersonIcon from './../../Icons/PersonIcon';

export default function Navbar() {
  return (
    <div className='w-full border-t-4 border-purple-800 bg-purple-700'>
      <div className='border-b border-gray-300'>
        <div className='flex max-w-6xl mx-auto justify-between items-center'>
          <span className='py-4 px-4 text-2xl font-semibold text-white uppercase'>
            Requesting App
          </span>
          <div class="flex gap-x-5 items-center mr-2 justify-center text-gray-300">
            <a href="https://github.com/maikerleon" target="_blank" rel="noreferrer" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
                <GithubIcon size={30} />
            </a>
            <a href="https://personal-portfolio-alpha-one.vercel.app/" target="_blank" rel="noreferrer" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
                <PersonIcon size={30} />
            </a>
            <a href="https://www.linkedin.com/in/maiker-leon-azuaje/" target="_blank" rel="noreferrer" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
                <LinkedinIcon size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
