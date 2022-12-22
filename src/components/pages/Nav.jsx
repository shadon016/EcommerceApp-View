import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
const Nav = () => {
    return (
        <div className='flex justify-around items-center h-20 shadow-sm'>
            <div className='bg-black'>
                <h3 className='text-white'>UNDER<span className='bg-orange-500 text-black'>world</span></h3>
            </div>
            <ul className='flex'>
                <input type='text' className='border-black' />
                <li className='mx-5'><BsPersonCircle /></li>
                <li className='mx-5'><AiFillShopping /></li>
            </ul>
            <div>
                <li className='list-none'><GiMoon /></li>
            </div>
        </div>
    )
}

export default Nav