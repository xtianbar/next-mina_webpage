import heroBanner from '../public/background/bg_1.png'
import homeDecor from '../public/background/bg_2.png'
import newsletterBG from '../public/background/bg_3.png'

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

        <div style={{
          backgroundImage:`url(${newsletterBG.src})`,
          width: '100%',
          height: '100%',

        }} className='banner-container overflow-hidden mx-4'>
          <div className='banner-content items-center justify-center'>
              <h1 className='mx-10 px-10 text-4xl md:text-5xl lg:text-7xl font-medium text-center leading-10 md:leading-[4.5rem]'>Sign-up for our newsletter</h1>
              {/* <p className='leading-[4.5rem] mb-5 font-medium text-lg'>Find your new favorite pieces.</p> */}
                <input type='text' placeholder='Your email address' className='banner-input px-5 py-3 my-10' />
              <button type='button' className='bg-white text-[#4d205a] px-10 py-4 rounded-lg'>Submit</button>
          </div>
        </div>

        <div className='flex flex-col items-center py-10 px-5'>
          <div className='my-10'>
            <h2 className='text-5xl font-medium'>Follow us on Instagram</h2>
          </div>
          <div className='mb-10'>
            container
          </div>
          <div className='mb-10'>
            <button type='button' className='text-white bg-[#4d205a] px-10 py-4 rounded-lg'>@mina_studio</button>
          </div>
        </div>
      </>
  )
}
