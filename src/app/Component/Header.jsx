"use client"
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";




function Header() {
   useEffect(()=>{
window.addEventListener('scroll',()=>{
        if(window.scrollY>40){
            document.querySelector('header').classList.add('psticky')
        }
        else{
            document.querySelector('header').classList.remove('psticky')
        }
    })
    document.querySelectorAll('.btn').forEach(button => {
    button.onclick = () => {
        document.querySelector('.signup').classList.remove('show');
        document.querySelector('.login').classList.add('show');
    };
});
       
        document.querySelectorAll('.btn-s').forEach(button => {
        button.onclick = () => {
        document.querySelector('.login').classList.remove('show');
        document.querySelector('.signup').classList.add('show');
    };
});

    document.querySelector('.log').onclick=()=>{
            document.querySelector('.login').classList.remove('show')
        }
         document.querySelector('.sign').onclick=()=>{
            document.querySelector('.signup').classList.remove('show')
        }
   },[]) 

    
      
    
  return (
    <>
    <header className='text-white'>
        <div className='container mx-auto up'>
            <ul className=' hidden  md:flex lg:flex gap-9 justify-end text-[12px] '>
                <li><a href="">SAVE MORE ON APP</a></li>
                <li><a href="">BECOME A SELLER</a></li>
                <li><a href="">HELP & SUPPORT</a></li>
                <li><a href="">LANGUAGE</a></li>
            </ul>
        </div>
        
        <div className="container mx-auto p-2 md:pb-[30px] lg:pb-[30px] md:pt-4 lg:pt-4 lg:flex justify-between nav ">
         <Link href="/">
            <img className='w-[127px] h-[40px] hidden lg:block md:block' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt=""/>
         </Link>
            <div className='flex'>
            <input className='bg-white text-black w-[420px] rounded md:rounded-none lg:rounded-none md:w-[300px] lg:w-[550px] mx-auto px-3 border-rounded h-[45px] outline-0 ' type="text" placeholder='Search in Daraz'/>
            <div className='p-3 h-[45px] icon hidden md:block lg:block'>
                <IoSearchOutline color='#F85606' size={20} />
            </div>
            <div className='ms-5 pt-3 hidden md:block lg:block'><IoCartOutline size={30} /></div>

            </div>
            
            <div className='gap-[60px] p-3 text-[20px] hidden md:flex lg:flex'>
                <div>
                <button className="btn">LOGIN</button>
                </div>
                <div className='hidden md:block lg:block'>
                <button className="btn-s">SIGN UP</button>
                </div>
            </div>
        </div>
       

    </header>

     <div>
  
  <div className="login w-[450px] h-[430px] bg-white text-black hidden rounded-2xl shadow-2xl">
    <div className='w-[400px] mx-auto'>
    <div className='flex justify-between'>
    <div className='text-2xl text-[#F85606] p-3  font-bold'>Login to Daraz</div>                 
    <div className="log">
        <div className='p-3'>
          <RxCross1 size={25} color='gray' />
          </div>
          </div>
    </div>
    <div className=''>
    <div className="ask p-3 ">
      <div className='pb-5'>
        <input className='border w-full p-2 rounded' type="email" id={1} name="login-email" placeholder="Enter your email"  />
      </div>
      <div className='pb-5'>
        <input className='border w-full p-2 rounded' type="password" id={2} name="login-password" placeholder="Enter your password" />
        <p className='text-end text-gray-500 text-[14px]'>Forgot password?</p>
      </div>  
      <button className=' w-full p-2 text-center bg-[#F85606] text-white rounded' type='submit'>LOGIN</button>
      <h1 className='text-center text-[14px] text-gray-500 p-2'>Don't have a account?<button className="btn-s text-blue-900">Sign up</button></h1>
    </div>
    
    <div className='text-center text-gray-500 pt-5'>
      Or, login with
    </div>
    <div className='flex justify-center gap-5 text-gray-500 pt-3'>
      <div className='flex gap-2'>
        <div><FcGoogle size={23} /></div>
        <div>Google</div>
        </div>
      <div className='flex gap-2'>
        <div><RiFacebookCircleFill size={23} color='blue' /></div>
        <div>Facebook</div>
        </div>  
    </div>
    </div>
    </div>
  </div>
 
  <div>
    
    <div className="signup w-[450px] h-[430px] bg-white text-black hidden rounded-2xl">
    <div className='w-[400px] mx-auto'>
    <div className='flex justify-between'>
      <div className='text-2xl text-[#F85606] p-3 font-bold'>Sign up to Daraz </div>              
        <div className="sign">
            <div className='p-3'>
                <RxCross1 size={25} color='gray'/>
            </div>
        </div>
      </div>
      <div className=''>
      <div className="ask p-3">
        <div className='pb-5'>
          <input className='border w-full p-2 rounded' type="email" id={1} name="signup-email" placeholder="Enter your email" />
        </div>
        <div className='pb-5'>
          <input className='border w-full p-2 rounded' type="password" id={2} name="signup-password" placeholder="Enter your password" />
        </div>
        <button className='w-full p-2 text-center bg-[#F85606] text-white rounded'type='submit'>SIGN UP</button>
        <h1 className='text-center text-[14px] text-gray-500 p-2'>Already have a account?<button className="btn text-blue-800">Login in</button></h1>
      </div>
      
      <div className='text-center text-gray-500 pt-5'>
        Or, sign up with
      </div>
      <div className='flex justify-center gap-5 text-gray-500 pt-3'>
      <div className='flex gap-2'>
        <div><FcGoogle size={23} /></div>
        <div>Google</div>
        </div>
      <div className='flex gap-2'>
        <div><RiFacebookCircleFill size={23} color='blue' /></div>
        <div>Facebook</div>
        </div>  
    </div>
      </div>
      </div>

    </div>
  </div>
</div>

      
    </>
  )
}

export default Header
