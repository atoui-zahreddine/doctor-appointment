import React from 'react';
import Arrow from '../../assets/img/arrow.png';

const FAQ = () => (
  <div className=' my-36 mx-10 sm:mx-36'>
    <div className='text-center space-y-6 sm:w-1/2 sm:mx-auto'>
      <h1 className='font-extrabold text-3xl text-252B42 capitalize sm:text-5xl'>
        FAQ
      </h1>
      <p className='text-gray-500 font-light sm:text-xl'>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
    <div className='my-16 space-y-6 sm:grid sm:grid-cols-3 sm:items-start sm:space-y-0 sm:gap-8 sm:my-24 sm:justify-items-center'>
      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>

      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>

      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>
      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>
      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>
      <div className='flex items-start space-x-6 p-4'>
        <img src={Arrow} alt='arrow' width='24px' height='24px' />
        <div>
          <p className='font-semibold text-252B42 text-lg'>
            the quick fox jumps over the lazy dog
          </p>
          <p className='text-gray-600 mt-2'>Things on a very small scale ...</p>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
