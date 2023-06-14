import React from 'react'
import contactBanner from '../../public/background/contact.png'

const page = () => {
  return (
    <div>
      <div style={{
          backgroundImage:`url(${contactBanner.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>Contact Us</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Painted clay ceramics made with love.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button> */}
          </div>
        </div>
    </div>
  )
}

export default page