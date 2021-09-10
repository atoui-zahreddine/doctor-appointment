import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Doctor from '../../assets/img/doctor.png';

const Testimonials = () => (
  <div className=' my-36  mx-10 sm:mx-36'>
    <div className='text-center space-y-6 sm:w-1/2 sm:mx-auto'>
      <h1 className='font-extrabold text-3xl text-252B42 capitalize sm:text-5xl'>
        What Clients Say
      </h1>
      <p className='text-gray-500 font-light sm:text-xl'>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
    <div className='my-16 space-y-6 sm:flex sm:space-x-6 sm:space-y-0 sm:items-center sm:justify-around'>
      <div className='p-9  space-y-4 rounded-lg border border-gray-300 '>
        <div className='flex space-x-2'>
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiOutlineStar className='text-yellow-400' size='1.5rem' />
        </div>
        <div>
          <p className='text-gray-600 font-medium'>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div>
          <img src={Doctor} alt='doctor' width='50px' height='50px' />
        </div>
      </div>
      <div className='p-9  space-y-4 rounded-lg border border-gray-300 '>
        <div className='flex space-x-2'>
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiOutlineStar className='text-yellow-400' size='1.5rem' />
        </div>
        <div>
          <p className='text-gray-600 font-medium'>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div>
          <img src={Doctor} alt='doctor' width='50px' height='50px' />
        </div>
      </div>
      <div className='p-9  space-y-4 rounded-lg border border-gray-300 '>
        <div className='flex space-x-2'>
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiFillStar className='text-yellow-400' size='1.5rem' />
          <AiOutlineStar className='text-yellow-400' size='1.5rem' />
        </div>
        <div>
          <p className='text-gray-600 font-medium'>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div>
          <img src={Doctor} alt='doctor' width='50px' height='50px' />
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
