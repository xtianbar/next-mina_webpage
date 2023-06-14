"use client"

import { useState } from 'react';
import { Dropdown } from "flowbite-react";
import Link from 'next/link'
import { Bars3Icon, ChevronRightIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  solid,
  regular,
  brands,
  icon
} from "@fortawesome/fontawesome-svg-core/import.macro"
import React from 'react'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  return (
    <div>
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
    </div>
  )
}

export default Navbar