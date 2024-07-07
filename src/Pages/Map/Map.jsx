import React, { Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'

function Map() {
  return (
    <Fragment>
        <section className='h-full w-full relative'>
        <div className='absolute w-full flex justify-between items-center'>
        <p className=' flex items-center mt-3 font-bold VideosBgBlured rounded-lg'>
            <IoArrowBack className='ms-2 me-1  cursor-pointer w-[20px]'/>Map
        </p>

        <p className='flex items-center bg-neutral-300 px-3 mt-3 text-sm py-1 font-light VideosBgBlured rounded-lg'>
            All 
            <FaAngleDown className='ms-3 font-light'/>
        </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.812481163062!2d71.67993085!3d29.38629795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c4d0cdc659%3A0xb02df35bb4a88ce6!2sBahawal%20Victoria%20Hospital!5e0!3m2!1sen!2s!4v1719232646197!5m2!1sen!2s" className='h-full w-full'
                    title="Unique Title for the Video"
                    allowFullScreen
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </section>
      
    </Fragment>
  )
}

export default Map
