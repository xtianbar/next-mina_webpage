import Image from 'next/image'
import React from 'react'
import collectionsBanner from '../../public/background/collections.png'
import bubble from '../../public/items/bubble.png'
import balance from '../../public/items/balance.png'
import wave from '../../public/items/wave.png'
import bulb from '../../public/items/bulb.png'

const page = () => {
  return (
    <div>
      <div style={{
          backgroundImage:`url(${collectionsBanner.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>New collections</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Painted clay ceramics made with love.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button> */}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 items-center py-20 px-10 gap-8 justify-between mb-10'>
          <div className='text-center flex flex-col items-center'>
            <Image alt='candy flowerpot' src={bubble} />
            <p className='text-2xl pt-4 pb-2'>&apos;Bubble&apos; Flowerpot</p>
            <p className='pb-3 text-xl uppercase text-[#828282]'>Sold out</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <Image alt='candy flowerpot' src={balance} />
            <p className='text-2xl pt-4 pb-2'>&apos;Balance&apos; Vase</p>
            <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;79.90</span> &#36;69.90</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <Image alt='wave vase' src={wave} />
            <p className='text-2xl pt-4 pb-2'>&apos;Wave&apos; Vase</p>
            <p className='pb-3 text-xl uppercase text-[#828282]'>Sold out</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <Image alt='candy flowerpot' src={bulb} />
            <p className='text-2xl pt-4 pb-2'>&apos;Bulb&apos; Vase</p>
            <p className='pb-3 text-xl'>&#36;39.90</p>
          </div>
        </div>
    </div>
  )
}

export default page