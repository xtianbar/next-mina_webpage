'use client'

import { Dropdown } from "flowbite-react";
import Link from 'next/link'
import './globals.css'
import { Bars3Icon, ChevronRightIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  solid,
  regular,
  brands,
  icon
} from "@fortawesome/fontawesome-svg-core/import.macro"
import { useState } from 'react';

export const metadata = {
  title: 'Mina Webpage',
  description: 'Mina Webpage clone by xtianbar',

}

export default function RootLayout({ children }) {

  const [navbar, setNavbar] = useState(false);
  return (
    <html lang="en">
      <body>
        <header className='w-full z-50 px-10 py-5 border-[0.1rem] border--black border-b shadow-sm'>
          <nav className=''>

            <div className='flex items-center justify-between'>
              
              <div className='flex justify-center items-center gap-10'>
                <div className='flex lg:hidden'>
                <button
                  className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className='h-6 w-6' />
                  ) : (
                    <Bars3Icon className='h-6 w-6' />
                  )}
                </button>
                </div>
                <Link className='flex items-center gap-1 font-bold text-2xl' href={'/'}>
                  <div className='flex items-center text-2xl font-extrabold gap-1'>
                    <span className='logo'>MINA</span>
                  </div>
                </Link>
              </div>
              <div className='flex gap-10'>
                <ul className='hidden lg:flex flex-row gap-10'>
                  <li className='group relative cursor-pointer'>
                    <a className='flex gap-4 items-center hover:underline-offset-[6px] hover:underline'>Shop <svg className="chevron item-content__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-71b59201=""><path d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z" fill="currentColor" data-v-71b59201=""></path></svg></a>
                    
                    <div className="invisible absolute z-50 w-[11rem] flex flex-col shadow bg-white py-1 px-2 rounded-lg border-[0.1rem] border-white group-hover:visible">
                      <a href='/products' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        All Products
                      </a>
                      <a href='collections' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        New Collections
                      </a>
                    </div>

                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/sustainability'>Sustainability</a>
                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/about'>About</a>
                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/contact'>Contact</a>
                  </li>
                </ul>

                <div className=''>
                  <ul className='flex flex-row gap-5'>
                    <li>
                      <a href='#' className='flex gap-1'><ShoppingBagIcon className="h-6 w-6" /><span className='hover:underline-offset-[6px] hover:underline'>Cart (0)</span></a>
                    </li>
                    
                  </ul>
                </div>

              </div>
              
            </div>
            
            {/* mobile */}
            <div
              className={`flex justify-end lg:hidden ${
                navbar ? 'py-12 px-5 block' : 'hidden'
              }`}
            >
              <ul className='flex flex-col items-end gap-10'>
                  <li className='group relative cursor-pointer'>
                  
                  <Dropdown inline label="Shop">
                    <Dropdown.Item className="w-[15rem] bg-transparent">
                      <a href='/products' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        All Products
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item className="w-[15rem] bg-transparent">
                      <a href='collections' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        New Collections
                      </a>
                    </Dropdown.Item>
                  </Dropdown>
                    
                    {/* <button type='button' id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='flex gap-4 items-center hover:underline-offset-[6px] hover:underline'>
                      Shop 
                      <svg className="chevron item-content__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-71b59201=""><path d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z" fill="currentColor" data-v-71b59201=""></path>
                      </svg>
                    </button> */}
                    
                    {/* <div className="invisible absolute z-50 w-[11rem] flex flex-col shadow bg-white py-1 px-2 rounded-lg border-[0.1rem] border-white group-hover:visible">
                      <a href='/products' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        All Products
                      </a>
                      <a href='collections' className="block py-2 px-3 hover:underline-offset-[6px] hover:underline">
                        New Collections
                      </a>
                    </div> */}

                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/sustainability'>Sustainability</a>
                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/about'>About</a>
                  </li>
                  <li>
                    <a className='hover:underline-offset-[6px] hover:underline' href='/contact'>Contact</a>
                  </li>
                </ul>

            </div>

          </nav>
        </header>
        <main>
        {children}
        </main>
        <footer className='bg-[#f1f1f1] overflow-hidden'>
          
          <div className='flex flex-col md:flex-row pl-20 md:pl-0 md:items-center justify-between'>

            <div className='flex flex-col items-start py-20 md:px-10 gap-8 font-semibold text-2xl'>
              <Link className='text-[2rem]' href={'/'}>
                <div className='flex items-center gap-1'>
                  <span className='logo'>MINA</span>
                </div>
              </Link>
              <div className='footer-socmed flex gap-10'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </div>
            </div>

            <div className='flex flex-col items-start underline pr-0 pb-20 md:pb-0 md:pr-36 gap-2 font-normal text-lg'>
              <div className='cursor-pointer'>Contact</div>
              <div className='cursor-pointer'>Returns</div>
              <div className='cursor-pointer'>Payments & Delivery</div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  )
}
