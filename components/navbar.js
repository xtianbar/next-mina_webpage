import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container fixed z-50 px-10 py-5 border-[0.1rem] border--black border-b shadow-sm'>
      <div className='cursor-pointer flex items-center justify-between'>
        <Link className='flex items-center gap-1 font-bold text-2xl' href={'/'}>
          <div className='flex items-center text-2xl font-extrabold gap-1'>
            <span className='logo'>MINA</span>
          </div>
        </Link>
        <div className='hidden lg:block'>
          <ul className='flex flex-row gap-5'>
            <li>
              Shop
            </li>
            <li>
              Sustainability
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar