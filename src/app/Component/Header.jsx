"use client"
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { LuMessageSquareText } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CartContext } from '../ContextProvider';



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

        document.querySelector('.categories').onclick=()=>{
          document.querySelector('.categoriesShow').classList.toggle('show')
        }
        
        document.querySelector('.categoriesRemove').onclick=()=>{
          document.querySelector('.categoriesShow').classList.remove('show')
        }

        document.querySelector('.account').onclick=()=>{
          document.querySelector('.accountShow').classList.toggle('show')
          
        }
        document.querySelector('.accountRemove').onclick=()=>{
          document.querySelector('.accountShow').classList.remove('show')
          
        }

      
   },[]) 

  const {state}=useContext(CartContext);
    
      
    
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
        
        <div className="container mx-auto p-1 md:pb-[30px] lg:pb-[30px] md:pt-4 lg:pt-4 lg:flex justify-between nav ">
         <Link href="/">
            <img className='w-[127px] h-[40px] hidden lg:block md:block' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt=""/>
         </Link>
            <div className='flex'>
            <input className='bg-white text-black w-full rounded md:rounded-none lg:rounded-none md:w-[300px] lg:w-[550px] mx-auto px-3 border-rounded h-[45px] outline-0 ' type="text" placeholder='Search in Daraz'/>
            <div className='p-3 h-[45px] icon hidden md:block lg:block'>
                <IoSearchOutline color='#F85606' size={20} />
            </div>
            <div className='ms-5 pt-3 hidden md:flex lg:flex relative'>
              <div className=''><Link href={'/cart/'}> <IoCartOutline size={30} /></Link>
              </div>
              <div className='absolute w-3 h-3 -right-1 top-2 bg-white rounded-full text-[#F85606] flex justify-center items-center text-[10px]'>{state.cart.length}</div>
              </div>

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

    <section className='resp lg:hidden md:hidden h-[60px] w-full fixed bottom-0 left-0 bg-white z-9999 pt-2'>
          <div className='flex justify-between w-[350px] mx-auto'>
            <div>
              <div className='flex flex-col items-center'><Link href='/'><img className='w-[20px]' src='data:image/png;base64,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'/></Link> </div>
              <div><p>Home</p></div>
            </div>
            <div className='categories flex flex-col items-center'>
              <div><FaBars size={20} color='gray' /></div>
              <div><p>Categories</p></div>
            </div>
            <div className='flex flex-col items-center relative'>
              <div className=''><Link href='/cart/'><IoCartOutline size={20} color='gray' /></Link></div>
              <div className='absolute top-0 right-1 bg-[gray] text-white text-[8px] w-3 h-3 rounded full flex justify-center items-center'>{state.cart.length}</div>
              <div><p>Cart </p></div>
            </div>
            <div className='account flex flex-col items-center'>
              <div><CiUser size={20} color='gray' /></div>
              <div><p>Account</p></div>
            </div>
          </div>
        </section>

        <div className='categoriesShow w-[240px] h-full bg-[#EFF0F5]  md:hidden lg:hidden fixed transition-0.9s z-999'>
          <div className='p-3'>
          <div className='flex gap-3'>
            <div className='categoriesRemove'><Link href='/'> <FaArrowLeft /></Link></div>
            <h2>CATEGORIES</h2>
            </div>
          <div>
            <ul className="pt-2">
                      <li className='p-3'><Link href={`/category/electronics`}>Electronics</Link></li>
                      <div className="line"></div>
                      <li className='p-3'><Link href={`/category/jewelery`} >Jewelery</Link></li>
                      <div className="line"></div>
                      <li className='p-3'><Link href={`/category/men's clothing`} >Men's Clothing</Link></li>
                      <div className="line"></div>
                      <li className='p-3'><Link href={`/category/women's clothing`} >Women's Clothing</Link></li>
                      <div className="line"></div>
                      <li className='p-3'><Link href={`/category/furniture`} >Furniture</Link><br/>
                      <p className="text-[#F85606] text-[15px]">[Not in stock]</p></li> 
                    </ul>
                    </div>
          </div>
        </div>

        <div className='accountShow w-[310px] h-full bg-[#EFF0F5]  md:hidden lg:hidden fixed z-999'>
          <div className='p-3'>
            <div className='flex gap-3 pt-3'>
            <div className='accountRemove'><Link href='/'> <FaArrowLeft /></Link></div>
            <h2>MY ACCOUNT</h2>
            </div>
              <div className='flex justify-between pt-3'>
               <div className='text-[12px] p-3'>Hello, Welcome to Daraz!</div>
               <div className='btn'><button className='p-3 bg-[#F85606] text-white text-[12px]'>LOGIN/SIGNUP</button></div>
                </div>
                <div>
                  <ul className="pt-2">
                    <li className='p-3 flex gap-4'><div><IoCartOutline size={24} /></div><div><Link href="">My Orders</Link></div></li>
                      <div className="linee"></div>
                      <li className='p-3 flex gap-4'><div><CiHeart size={24} /></div><div><Link href="">My Wishlist & Followed Stores</Link></div></li>
                      <div className="linee"></div>
                      <li className='p-3 flex gap-4'><div><GrDocumentText size={24}/></div><div><Link href="">Policies</Link></div></li>
                      <div className="linee"></div>
                      <li className='p-3 flex gap-4'><div><LuMessageSquareText size={24}/></div><div><Link href="">Feedback</Link></div></li>
                      <div className="linee"></div>
                      <li className='p-3 flex gap-4'><div><IoIosHelpCircleOutline size={24}/></div><div><Link href="">Help</Link></div></li>


                  </ul>
                </div>



          </div>

        </div>

  
  
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
