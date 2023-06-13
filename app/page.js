import Image from 'next/image'
import heroBanner from '../public/background/bg_1.png'
import homeDecor from '../public/background/bg_2.png'
import newsletterBG from '../public/background/bg_3.png'
import ig1 from '../public/items/ig-1.png'
import ig2 from '../public/items/ig-2.png'
import ig3 from '../public/items/ig-3.png'
import candy from '../public/items/candy.png'
import drop from '../public/items/drop.png'
import wave from '../public/items/wave.png'
import sun from '../public/items/sun.png'
import aboutMina from '../public/items/about-mina.png'
import sustain from '../public/items/sustainability.png'

export default function Home() {
  return (
      <>
        <div style={{
          backgroundImage:`url(${heroBanner.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>Handmade ceramics</h1>
              <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Painted clay ceramics made with love.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button>
          </div>
        </div>

        <div className='flex flex-col items-center py-10 px-0 lg:px-5 w-full'>
          <div className='my-10 text-center'>
            <h2 className='text-4xl lg:text-5xl font-medium'>Our bestsellers</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-between mb-10'>
            <div className='text-center'>
              <Image alt='candy flowerpot' src={candy} />
              <p className='text-2xl pt-4 pb-2'>&apos;Candy&apos; Flowerpot</p>
              <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;59.90</span> &#36;49.90</p>
            </div>
            <div className='text-center'>
              <Image alt='drop vase' src={drop}/>
              <p className='text-2xl pt-4 pb-2'>&apos;Drop&apos; Vase</p>
              <p className='pb-3 text-xl'><span className='text-[#828282] line-through'>&#36;49.90</span> &#36;40.90</p>
            </div>
            <div className='text-center'>
              <Image alt='wave vase' src={wave} />
              <p className='text-2xl pt-4 pb-2'>&apos;Wave&apos; Vase</p>
              <p className='pb-3 text-xl uppercase text-[#828282]'>Sold out</p>
            </div>
            <div  className='text-center'>
              <Image alt='sun vase' src={sun} />
              <p className='text-2xl pt-4 pb-2'>&apos;Sun&apos; Vase</p>
              <p className='pb-3 text-xl'>&#36;69.90</p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundImage:`url(${homeDecor.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content'>
              <h1 className='mx-10 px-10 text-5xl md:text-6xl lg:text-8xl font-medium text-center leading-[4.5rem]'>Home decor items</h1>
              <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Find your new favorite pieces.</p>
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Shop now</button>
          </div>
        </div>

        <div className='flex flex-col items-center py-10 px-5 w-full mt-12'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-between mt-6 mb-10'>
            <div className='text-start'>
              <Image alt='about mina' src={aboutMina} />
              <p className='text-3xl font-medium pt-8 pb-2 leading-10'>About Mina</p>
              <p className='pb-3 text-xl text-[#828282] leading-10'>Mina is a brand born out of a passion for ceramics.</p>
              <div className='mb-1 mt-2'>
                <button type='button' className='text-white bg-[#4d205a] px-10 py-4 rounded-lg'>Learn more</button>
              </div>
            </div>
            <div  className='text-start mt-16 md:mt-0'>
              <Image alt='sustainability' src={sustain} />
              <p className='text-3xl font-medium pt-8 pb-2 leading-10'>Sustainability</p>
              <p className='pb-3 text-xl text-[#828282] leading-10'>Mina is an eco-friendly brand that cares about sustainability.</p>
              <div className='mb-1 mt-2'>
                <button type='button' className='text-white bg-[#4d205a] px-10 py-4 rounded-lg'>Learn more</button>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          backgroundImage:`url(${newsletterBG.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content items-center justify-center'>
              <h1 className='mx-10 px-10 text-4xl md:text-5xl lg:text-7xl font-medium text-center leading-10 md:leading-[4.5rem]'>Sign-up for our newsletter</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Find your new favorite pieces.</p> */}
                <input type='text' placeholder='Your email address' className='banner-input px-5 py-3 my-10 text-black' />
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Submit</button>
          </div>
        </div>

        <div className='flex flex-col items-center py-10 px-5 w-full'>
          <div className='my-10 text-center'>
            <h2 className='text-4xl lg:text-5xl font-medium'>Follow us on Instagram</h2>
          </div>
          <div className='flex gap-3 justify-between mb-10'>
            <div>
              <Image alt='ig1' src={ig1} />
            </div>
            <div>
              <Image alt='ig2' src={ig2}/>
            </div>
            <div>
              <Image alt='ig3' src={ig3} />
            </div>
          </div>
          <div className='mb-10'>
            <button type='button' className='text-white bg-[#4d205a] px-10 py-4 rounded-lg'>&#64;mina_studio</button>
          </div>
        </div>
      </>
  )
}
