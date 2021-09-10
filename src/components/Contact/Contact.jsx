import React from 'react';

const Contact = () => (
  <div className='bg-252B42'>
    <div className='px-9 py-12  text-white text-center space-y-6 sm:space-y-0 sm:px-0 sm:py-20 sm:mx-36 sm:text-left sm:flex sm:items-center  sm:justify-between '>
      <h1 className='sm:hidden font-extrabold text-2xl'>
        Subscribe For Latest Newsletter
      </h1>
      <div className='hidden sm:block sm:space-y-4 sm:w-1/2'>
        <h1 className='font-extrabold text-6xl'>Get In Touch</h1>
        <p className='text-xl text-justify w-4/5'>
          The gradual accumulation of information about atomic and small-scale
          behaviour during the first quarter of the 20th
        </p>
      </div>
      <div className='flex h-14 sm:h-16 sm:items-center justify-center'>
        <input
          type='text '
          placeholder='Your Email'
          className='text-md w-2/3 px-6 rounded-l-md sm:h-full sm:w-auto outline-none text-252B42 '
        />
        <button
          type='button'
          className='px-4  bg-24A6F0 rounded-r-md border border-gray-300 sm:h-full flex items-center'>
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Contact;
