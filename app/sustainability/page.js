import React from 'react'
import sustainabilityBanner from '../../public/background/bg_3.png'

const page = () => {
  return (
    <div>
      <div style={{
          backgroundImage:`url(${sustainabilityBanner.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>Sustainability</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Painted clay ceramics made with love.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button> */}
          </div>
      </div>

      <div className='p-5 mt-10'>
        <div className='text-center m-10 px-5 md:px-20 lg:px-[15rem]'>
          <h2 className='text-2xl font-medium'>We care about our planet. For this reason, Mina aims to be operating sustainably and ethically at every level.</h2>
        </div>
        <div>
          hehe
        </div>
      </div>
    </div>
  )
}

export default page