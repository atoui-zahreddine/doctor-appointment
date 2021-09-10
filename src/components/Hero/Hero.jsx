import React from 'react';
import { IoIosArrowDown, IoMdArrowForward } from 'react-icons/io';

const Hero = () => (
  <div className='hero relative text-white'>
    <header>
      <div className='sm:px-20 sm:py-10 sm:flex sm:justify-around hidden'>
        <h1 className='text-4xl font-bold '>Physionic</h1>

        <ul className='flex space-x-6 items-center mx-auto'>
          <li className='nav-item'>
            <a href='/' className='w-full h-full uppercase'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='w-full h-full uppercase'>
              Product
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='w-full h-full uppercase'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='w-full h-full uppercase'>
              Contact
            </a>
          </li>
        </ul>
        <button
          type='button'
          className='bg-btn-primary px-10 py-4  rounded-md flex items-center space-x-4 hover:bg-blue-300 hover:text-gray-800 transition'>
          <span>Get Quote Now</span> <IoMdArrowForward />
        </button>
      </div>
    </header>
    <div className='space-y-12 px-9 py-28 text-center sm:px-20 sm:flex sm:items-center sm:justify-between sm:space-y-0'>
      <div className='space-y-6'>
        <div className='space-y-6 sm:w-2/3 sm:text-left'>
          <h1 className=' text-5xl font-bold sm:text-6xl sm:font-extrabold  sm:leading-relaxed '>
            Meet the Best Hospital
          </h1>
          <p className=' text-xl sm:text-3xl'>
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        <div className='space-y-4 flex flex-col justify-center items-center sm:justify-start sm:flex-row sm:space-x-6 sm:space-y-0'>
          <button
            type='button'
            className='bg-btn-primary px-6 py-3 rounded-3xl hover:bg-blue-300 hover:text-gray-800 transition'>
            Get Quote Now
          </button>
          <button
            type='button'
            className='bg-transparent border-2 border-white px-4 py-2 rounded-3xl hover:bg-gray-300 hover:text-gray-800 transition'>
            Learn more
          </button>
        </div>
      </div>

      <form className='bg-white space-y-8 py-10 px-6  rounded-xl text-gray-700'>
        <h1 className='font-extrabold text-xl'>Book Appointment </h1>
        <div className='flex flex-col  text-left space-y-4 capitalize '>
          <label htmlFor='name' className='font-medium items-start'>
            Name
            <span className='font-normal'>*</span>
            <input
              type='text'
              id='name'
              placeholder='Name'
              className='focus:ring-1 ring-gray-600 outline-none rounded-md border-gray-400  border px-6 py-2 w-full mt-4'
            />
          </label>
        </div>
        <div className='flex flex-col  text-left space-y-4 capitalize '>
          <label htmlFor='email' className='font-medium items-start'>
            Email
            <span className='font-normal'>*</span>
            <input
              type='text'
              placeholder='Email'
              id='email'
              className='focus:ring-1 ring-gray-600 outline-none rounded-md border-gray-400 border px-6 py-2 w-full mt-4'
            />
          </label>
        </div>
        <div className='flex flex-col  text-left space-y-4 capitalize '>
          <label htmlFor='department' className='font-medium items-start'>
            Department
            <span className='font-normal'>*</span>
            <div className='relative'>
              <IoIosArrowDown className='absolute bottom-1/2 right-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <select
                id='department'
                className='appearance-none outline-none bg-transparent rounded-md border-gray-400 border px-6 py-2 w-full mt-4'>
                <option value=''>Please Select</option>
                <option value=''>example 1</option>
                <option value=''>example 2</option>
                <option value=''>example 3</option>
              </select>
            </div>
          </label>
        </div>
        <div className='flex flex-col  text-left space-y-4 capitalize '>
          <label htmlFor='time' className='font-medium items-start'>
            time
            <span className='font-normal'>*</span>
            <div className='relative'>
              <IoIosArrowDown className='absolute bottom-1/2 right-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <select
                id='time'
                className='appearance-none outline-none bg-transparent rounded-md border-gray-400 border px-6 py-2 w-full mt-4'>
                <option value=''>4:00 Available</option>
                <option value=''>6:00 Available</option>
                <option value=''>8:00 Available</option>
                <option value=''>10:00 Available</option>
              </select>
            </div>
          </label>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
