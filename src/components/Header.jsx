'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-w-[90%] xl:max-w-[1200px] mx-auto'>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>

                </ul>
                </div>
                <Link href={'/'}>
                    <h1 className="btn btn-ghost text-3xl font-bold flex gap-0">Blo<span className='text-green-500'>gger</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/login'} className="btn bg-green-500 text-white text-lg font-semibold hover:bg-green-600">Log in</Link>
                <Link href={'/logout'} className="btn text-lg font-semibold btn-warning hover:btn-warning">Log Out</Link>
            </div>
        </div>
    </div>
  )
}

export default Header
