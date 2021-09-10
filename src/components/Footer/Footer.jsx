import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => (
  <footer className='py-10 px-20 space-y-10 text-left sm:space-y-0 sm:flex sm:justify-between sm:mx-36 sm:items-baseline sm:space-x-10 sm:px-0 sm:py-14'>
    <div className='space-y-6 sm:space-y-8 '>
      <h1 className='text-252B42 font-bold text-2xl'>Get In Touch</h1>
      <p className='text-gray-600'>the quick fox jumps over the lazy dog</p>
      <ul className='flex space-x-4 text-24A6F0'>
        <FaFacebook size='1.5rem' className='cursor-pointer' />
        <IoLogoTwitter size='1.5rem' className='cursor-pointer' />
        <AiOutlineInstagram size='1.5rem' className='cursor-pointer' />
      </ul>
    </div>

    <div className='space-y-6 sm:space-y-8'>
      <h1 className='text-252B42 font-bold text-2xl'>Company info</h1>
      <ul className='space-y-4 text-gray-600'>
        <li className='cursor-pointer'>About Us</li>
        <li className='cursor-pointer'>Carrier</li>
        <li className='cursor-pointer'>We are hiring</li>
        <li className='cursor-pointer'>Blog</li>
      </ul>
    </div>

    <div className='space-y-6 sm:space-y-8'>
      <h1 className='text-252B42 font-bold text-2xl'>Features</h1>
      <ul className='space-y-4 text-gray-600'>
        <li className='cursor-pointer'>Business Marketing</li>
        <li className='cursor-pointer'> User Analytic</li>
        <li className='cursor-pointer'>Live Chat</li>
        <li className='cursor-pointer'>Unlimited Support</li>
      </ul>
    </div>

    <div className='space-y-6 sm:space-y-8'>
      <h1 className='text-252B42 font-bold text-2xl'>Resources</h1>
      <ul className='space-y-4 text-gray-600'>
        <li className='cursor-pointer'>IOS & Android</li>
        <li className='cursor-pointer'>Watch a Demo</li>
        <li className='cursor-pointer'>Customers</li>
        <li className='cursor-pointer'>API</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
