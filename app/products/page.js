import React from 'react'
import shopBanner from '../../public/background/shop_bg.png'
import Image from 'next/image'
import balance from '../../public/items/balance.png'
import binocular from '../..//public/items/binocular.png'
import bubble from '../../public/items/bubble.png'
import bulb from '../../public/items/bulb.png'
import candy from '../../public/items/candy.png'
import drop from '../../public/items/drop.png'
import mango from '../../public/items/mango.png'
import sun from '../../public/items/sun.png'
import wave from '../../public/items/wave.png'

const shop = () => {
  return (
    <div>
      <div style={{
          backgroundImage:`url(${shopBanner.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>Shop</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Painted clay ceramics made with love.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button> */}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-5 py-20 px-10 gap-8 justify-between mb-10'>
            
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={balance} />
              <p className='text-2xl pt-4 pb-2'>&apos;Balance&apos; Vase</p>
              <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;79.90</span> &#36;69.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={binocular} />
              <p className='text-2xl pt-4 pb-2'>&apos;Binocular&apos; Vase</p>
              <p className='pb-3 text-xl'>&#36;49.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={bubble} />
              <p className='text-2xl pt-4 pb-2'>&apos;Bubble&apos; Flowerpot</p>
              <p className='pb-3 text-xl uppercase text-[#828282]'>Sold out</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={bulb} />
              <p className='text-2xl pt-4 pb-2'>&apos;Bulb&apos; Vase</p>
              <p className='pb-3 text-xl'>&#36;39.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={candy} />
              <p className='text-2xl pt-4 pb-2'>&apos;Candy&apos; Flowerpot</p>
              <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;59.90</span> &#36;49.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='drop vase' src={drop}/>
              <p className='text-2xl pt-4 pb-2'>&apos;Drop&apos; Vase</p>
              <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;49.90</span> &#36;40.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='candy flowerpot' src={mango} />
              <p className='text-2xl pt-4 pb-2'>&apos;Mango&apos; Vase</p>
              <p className='pb-3 text-xl'>&#36;49.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='sun vase' src={sun} />
              <p className='text-2xl pt-4 pb-2'>&apos;Sun&apos; Vase</p>
              <p className='pb-3 text-xl'>&#36;69.90</p>
            </div>
            <div className='text-center flex flex-col items-center'>
              <Image alt='wave vase' src={wave} />
              <p className='text-2xl pt-4 pb-2'>&apos;Wave&apos; Vase</p>
              <p className='pb-3 text-xl uppercase text-[#828282]'>Sold out</p>
            </div>
          </div>
    </div>
  )
}

export default shop