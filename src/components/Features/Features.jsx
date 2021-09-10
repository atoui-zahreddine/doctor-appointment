import React from 'react';
import Square from '../../assets/img/square.png';

const Features = () => (
  <div className='my-36 mx-10 sm:mx-36'>
    <div className='text-center space-y-6 sm:mx-auto sm:w-1/2 '>
      <h1 className='font-extrabold text-3xl text-252B42 capitalize  sm:text-5xl'>
        leading medicine
      </h1>
      <p className='text-gray-500 font-light sm:text-xl'>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
    <div className='my-16 space-y-6 sm:space-y-0 sm:flex sm:space-x-6 sm:justify-evenly '>
      <div className='bg-features sm:bg-8EC2F2  space-y-2 rounded-lg sm:w-80  '>
        <div className='flex space-x-6 px-6 py-7 w-full  items-center justify-center '>
          <div className='rounded-50 py-4 bg-white flex items-center justify-center'>
            <img src={Square} alt='square' className='w-1/2 ' />
          </div>
          <h2 className='font-medium text-xl text-252B42 sm:text-white'>
            Emergency Case
          </h2>
        </div>

        <div className='text-left rounded-lg bg-white  border p-6 border-A9D5FC '>
          <p className=' text-gray-600 tracking-wide font-medium'>
            <span className='block'>- The best products start with Figma</span>
            <span className='block'>- Design with real data</span>
            <span className='block'>- Lightning fast prototyping</span>
            <span className='block'>
              - Fastest way to organize - Work at the speed of thought.
            </span>
          </p>
          <a
            href='/'
            className='text-blue-400 text-lg mt-2 inline-block font-medium'>
            Learn More
          </a>
        </div>
      </div>
      <div className='bg-features sm:bg-8EC2F2  space-y-2 rounded-lg sm:w-80  '>
        <div className='flex space-x-6 px-6 py-7 w-full  items-center justify-center '>
          <div className='rounded-50 py-4 bg-white flex items-center justify-center'>
            <img src={Square} alt='square' className='w-1/2 ' />
          </div>
          <h2 className='font-medium text-xl text-252B42 sm:text-white'>
            Cancer Care
          </h2>
        </div>

        <div className='text-left rounded-lg bg-white  border p-6 border-A9D5FC '>
          <p className=' text-gray-600 tracking-wide font-medium'>
            <span className='block'>- The best products start with Figma</span>
            <span className='block'>- Design with real data</span>
            <span className='block'>- Lightning fast prototyping</span>
            <span className='block'>
              - Fastest way to organize - Work at the speed of thought.
            </span>
          </p>
          <a
            href='/'
            className='text-blue-400 text-lg mt-2 inline-block font-medium'>
            Learn More
          </a>
        </div>
      </div>
      <div className='bg-features sm:bg-8EC2F2  space-y-2 rounded-lg sm:w-80  '>
        <div className='flex space-x-6 px-6 py-7 w-full  items-center justify-center   '>
          <div className='rounded-50 py-4 bg-white flex items-center justify-center'>
            <img src={Square} alt='square' className='w-1/2 ' />
          </div>
          <h2 className='font-medium text-xl text-252B42  sm:text-white'>
            Health Queries
          </h2>
        </div>

        <div className='text-left rounded-lg bg-white  border p-6 border-A9D5FC '>
          <p className=' text-gray-600 tracking-wide font-medium'>
            <span className='block'>- The best products start with Figma</span>
            <span className='block'>- Design with real data</span>
            <span className='block'>- Lightning fast prototyping</span>
            <span className='block'>
              - Fastest way to organize - Work at the speed of thought.
            </span>
          </p>
          <a
            href='/'
            className='text-blue-400 text-lg mt-2 inline-block font-medium'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
