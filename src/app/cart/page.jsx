"use client"
import React, { useContext, useState } from 'react'
import "@/app/globals.css"
import { CartContext } from '../ContextProvider'
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";


function page() {

    let [count,setCount]=useState(1)

    const {state,dispatch}=useContext(CartContext)


  return (
    <>
    <div className='container mx-auto'>
        <h2 className='text-2xl font-bold p-2'>Your Cart</h2>
        <div className='md:flex lg:flex gap-5 justify-between p-3'>
        <div className='md:w-[70%] lg:[70%]'>
       {state.cart.map((product)=>(
        <div className='py-3 mb-3 flex gap-3 border border-[#7a7777]' key={product.id}>
          <div className='flex gap-5 '>
            <div><img className='w-[60px] h-[70px] p-2' src= {product.image}/> </div>
          </div>
            <div className='p-2 w-[50%]'>
              <div>{product.title}</div>
            </div>
            <div className='p-2 w-[15%]'>
              <div className='text-[#F85606] font-bold'>Rs. {product.price}</div>
              <div className='flex gap-5 pt-2'>
                <div><CiHeart size={20} color='gray'/></div>
                <div className='' onClick={()=>dispatch({type:'remove',payload:product})}><RiDeleteBin6Line size={20} color='gray'/></div>
              </div>
            </div>
              <div className='flex gap-3 p-2'>
                <div className='w-5 h-5 border flex items-center justify-center'><button onClick={(a)=>setCount(count+1)}>+</button></div>
                <div>{count}</div>
                <div><button className='w-5 h-5 border flex items-center justify-center'>-</button></div>
                </div>
            
          </div>
        
       ))}
       </div>
       <div className='md:border lg:border border-[#7a7777] w-[80%] mx-auto md:w-[30%] lg:w-[30%] h-[330px] p-3'>
       <div className='' >
        <div className='text-2xl '>Order Summary</div>
        <div className='flex justify-between py-2'>
        <div className='text-[#7a7777]'>Total Items:</div> 
        <div>{state.cart.length}</div>
        </div>
        <div className='flex justify-between pb-2'>
        <div className='text-[#7a7777]'>Subtotal:</div>
        <div>Rs.</div>
        </div>
        <div className='flex justify-between pb-2'>
        <div className='text-[#7a7777]'>Shipping Price:</div>
        <div>Rs.</div>
        </div>
        <div className='flex justify-center gap-2 pt-4 pb-3'>
          <div><input className='border px-2 py-1' type="text" placeholder='Enter Voucher Code'/></div>
          <div><button className='py-1 px-4 bg-blue-700 text-white'>APPLY</button></div>
        </div>
        <div className='flex justify-between py-3'>
          <div>Total</div>
          <div>Rs.</div>
        </div>
        <div className=''>
          <div className='text-white bg-[#F85606] px-3 py-2 flex justify-center items-center'>PROCEED TO CHECKOUT({state.cart.length})</div>
        </div>
       </div>
       </div>
       </div>
    </div>
      
    </>
  )
}

export default page
