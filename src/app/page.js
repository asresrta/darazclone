"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { img } from "./Banner";
import { useEffect, useState } from "react";
import "./globals.css";
import Link from "next/link";



export default function Home() {
let [product,setProduct]=useState([])
useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then(response => response.json())
  .then(data => setProduct(data));
},[])


  return (
  <>
  <section className="top">
    <div className="container mx-auto flex gap-5 py-4 justify-between">
      <div className="cat w-[350px] h-[320px] border text-[#F85606] rounded-3xl p-3 shadow-2xl  ">
        <h2 className="font-bold text-2xl text-[#F85606] py-3">Category</h2>
        <ul className="">
          <li><Link href="/categories/electronics" >Electronics</Link></li>
          <div className="line"></div>
          <li><Link href="/categories/jewelery" >Jewelery</Link></li>
          <div className="line"></div>
          <li><Link href="/categories/men's clothing" >Men's Clothing</Link></li>
          <div className="line"></div>
          <li><Link href="/categories/women's clothing" >Women's Clothing</Link></li>
          <div className="line"></div>
          <li><Link href="/categories/furniture" >Furniture</Link><br/>
          <p className="text-[#F85606] text-[15px]">[Not in stock]</p></li>
          
        </ul>
        </div>
      
      <div className="slider w-[900px] h-[320px] ">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        {img.map((a)=>(
          <SwiperSlide key={a.id}><img src={a.img}/></SwiperSlide>
        ))}
      </Swiper>
      </div>
</div>
    <div className="video h-[150px]">
      <img src="https://img.lazcdn.com/us/domino/44c6afea-b356-4ed4-8086-d6cd7f47435f_NP-1920-500.gif_2200x2200q80.gif"/>
    </div>

  </section>

  <section className="latestproducts py-3">
    <div className="container mx-auto">
     
        <h2 className="font-bold text-3xl p-4 rounded ">Latest Products</h2>
     
      <div className="bg-[#F5F5F5] my-3 rounded shadow-2xl con">
       <div className="flex flex-wrap justify-between gap-x-1  gap-y-5 py-5 px-3 ">
        {product.slice(0,10).map((a)=>(
          <div className="w-[19%] rounded bg-white " key={a.id}>
            <img src={a.image} className="w-[200px] h-[180px]" />
            <div className="px-2 h-[40px] overflow-hidden py-3">
          <h5 className="name"><Link href={`/details/${a.id}`}>{a.title}</Link></h5>
           </div>
          <p className="text-[rgb(248,86,6)] ms-2 font-bold">Rs. {a.price}</p>
          <button className="btn m-2 p-2 text-[12px] rounded text-white bg-[rgb(248,86,6)]">Add to Cart</button>

          </div>
          
        ))}
         </div> 
        </div>
      </div>
   
  </section>

  <section className="allproducts py-3">
    <div className="container mx-auto">
     
        <h2 className="font-bold text-3xl p-4 rounded">All Products</h2>
     
      <div className="bg-[#F5F5F5] my-3 rounded">
       <div className="flex flex-wrap justify-between gap-x-1  gap-y-5 py-5 px-3 ">
        {product.map((a)=>(
          <div className="w-[19%] rounded bg-white" key={a.id}>
            <img src={a.image} className="w-[200px] h-[180px]" />
            <div className="px-2 h-[40px] overflow-hidden py-3">
          <h5 className="name">{a.title}</h5>
           </div>
          <p className="text-[rgb(248,86,6)] ms-2 font-bold">Rs. {a.price}</p>
          <button className="btn m-2 p-2 text-[12px] rounded text-white bg-[rgb(248,86,6)]">Add to Cart</button>

          </div>
          
        ))}
         </div> 
        </div>
      </div>
   
  </section>

  
  
  </>
  );
}
