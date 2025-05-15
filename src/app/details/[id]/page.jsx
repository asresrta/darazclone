"use client"
import React, { useEffect, useState } from 'react';
import "@/app/globals.css";

function page({params}) {
    let [product,setProduct]=useState([])
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
    },[])
    
  return (
    <>
    <div className='container mx-auto my-4'>
    <h2 className='text-3xl font-bold'>Details</h2>
    </div>
    <div className='container mx-auto shadow-2xl my-4'>
         
        <div className='flex gap-[40px]'>
        
        <div className='py-3'>
            <img className='w-[300px] h-[400px] p-3' src={product.image}/>
        </div>
        <div className='w-[500px] my-3 py-3'>
            <h3 className='py-4 font-bold text-2xl'>{product.title}</h3>
            <p>{product.description}</p>
          <p className="text-[rgb(248,86,6)] font-bold py-5 text-3xl">Rs. {product.price}</p>
          <button className="btn m-2 px-5 py-2 text-[14px]  text-white bg-[#2ABBE8]">Buy Now</button>
            
          <button className="btn px-5 py-2 text-[14px]  text-white bg-[rgb(248,86,6)]">Add to Cart</button>

        </div>
        <div className='bg-[#FAFAFA] w-100'>
            <div className='p-4'>
            <h5>Delivery Options </h5>
            <div>
                <h4>Standard Delivery</h4>
                <p>Guaranteed by 18 May</p>
                <h4>Cash on Delivery Available</h4>
            </div>
            <div>
                <h5>Return & Warranty </h5>
                <h4>14 Days Free Returns</h4>
                <h4>Warranty not available</h4>
            </div>

            </div>

        </div>
        </div>
    </div>
     
      
    </>
  )
}

export default page
