import Link from 'next/link';
import React, { useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";



function Header() {


  return (
    <>
    <header className='text-white'>
        <div className='container mx-auto'>
            <ul className='flex gap-9 justify-end text-[12px] '>
                <li><a href="">SAVE MORE ON APP</a></li>
                <li><a href="">BECOME A SELLER</a></li>
                <li><a href="">HELP & SUPPORT</a></li>
                <li><a href="">LANGUAGE</a></li>
            </ul>
        </div>
        <div className="container mx-auto pb-[30px] pt-4 flex justify-between">
         <Link href="/">
            <img className='w-[127px] h-[40px]' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt=""/>
         </Link>
            <div className='flex '>
            <input className='bg-white text-black w-[550px] px-3 border-rounded h-[45px] outline-0 ' type="text" placeholder='Search in Daraz'/>
            <div className='p-3 h-[45px] icon'>
                <IoSearchOutline color='#F85606' size={20} />
            </div>
            <div className='ms-5 pt-3'><IoCartOutline size={30} /></div>

            </div>
            
            <ul className='flex gap-[60px] p-3 text-[20px]'>
                <li>LOGIN</li>
                <li>SIGN UP</li>
            </ul>
        </div>

    </header>
      
    </>
  )
}

export default Header
