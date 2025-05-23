"use client"

import Link from 'next/link';
import React, { use, useContext, useEffect, useState } from 'react';
import "@/app/globals.css"
import { CartContext } from '@/app/ContextProvider';

function page({params}) {
    const { cat } = use(params);
        let [product,setProduct]=useState([])
        const title = decodeURIComponent(cat);
        useEffect(()=>{
          fetch(`https://fakestoreapi.com/products/category/${cat}`)
          .then(response => response.json())
          .then(data => setProduct(data));
      },[cat])

      const {dispatch}=useContext(CartContext)


  return (
    <>
      <section className="allproducts py-3">
    <div className="container mx-auto">
        <h2 className="font-bold text-3xl p-4 rounded capitalize">{title}</h2>
      <div className="bg-[#F5F5F5] my-3 rounded">
       <div className="flex flex-wrap justify-between gap-x-1  gap-y-5 py-5 px-3 ">
        {product.map((a)=>(
          <div className="w-[48%] lg:w-[32%] rounded bg-white " key={a.id}>
            <div className='items-center'>
            <img src={a.image} className="w-[200px] h-[180px] px-3" />
            </div>
            <div className="px-2 h-[40px] overflow-hidden py-3">
          <h5 className="name"><Link href={`/details/${a.id}`}>{a.title}</Link></h5>
           </div>
          <p className="text-[rgb(248,86,6)] ms-2 font-bold">Rs. {a.price}</p>
          <button className="btn m-2 p-2 text-[12px] rounded text-white bg-[rgb(248,86,6)] hover:bg-[#0057B7] hover:scale-[1.1]" onClick={()=>dispatch({type:'add',payload:a})}>Add to Cart</button>
          </div>
                ))}
         </div> 
        </div>
      </div>
   
  </section>

    </>
  )
}

export default page
