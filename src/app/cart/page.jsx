"use client"
import React, { useContext } from 'react'
import "@/app/globals.css"
import { CartContext } from '../ContextProvider'

function page() {

    const {state,dispatch}=useContext(CartContext)


  return (
    <>
    <div className='container mx-auto'>
        <h2 className='text-2xl font-bold py-2'>Your Cart</h2>
        <div className='flex gap-5 justify-between p-3'>
        <div className=' w-[70%]'>
       {state.cart.map((product)=>(
        <div className='py-3 mb-3 flex gap-3 border' key={product.id}>
          <div className='flex gap-5 border-[#7a7777]'>
            <div><img className='w-[60px] h-[70px] p-2' src= {product.image}/> </div>
            </div>
            <div className='p-2'>
              <div>{product.title}</div>
              <div>Rs. {product.price}</div>
              </div>
              <div className='flex gap-3 p-2'>
                <div><button className='px-1 border'>+</button></div>
                <div></div>
                <div><button className='px-1 border'>-</button></div>
                </div>
            
          </div>
        
       ))}
       </div>
       <div className='border border-[#7a7777] w-[30%] h-[330px] p-3'>
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
