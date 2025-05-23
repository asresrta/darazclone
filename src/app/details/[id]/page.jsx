"use client";
import React, { use, useContext, useEffect, useState } from "react";
import "@/app/globals.css";
import { TbTruckDelivery } from "react-icons/tb";
import { PiMoneyWavyBold } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { FiShieldOff } from "react-icons/fi";
import { CartContext } from "@/app/ContextProvider";




function page({ params }) {
  const { id } = use(params);
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

    const {dispatch}=useContext(CartContext)

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold">Details</h2>
      </div>
      <div className="container mx-auto shadow-2xl my-4">
        <div className=" md:flex-2/4 lg:flex gap-[40px]">
          <div className="py-3">
            <img className="w-[300px] h-[400px] p-3" src={product.image} />
          </div>
          <div className=" lg:w-[500px] my-3 p-2">
            <h3 className="py-4 font-bold text-2xl">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-[rgb(248,86,6)] font-bold py-5 px-2 text-3xl">
              Rs. {product.price}
            </p>
            <button className="btn m-2 px-5 py-2 text-[14px]  text-white bg-[#2ABBE8]">
              Buy Now
            </button>

            <button className="btn px-5 py-2 text-[14px]  text-white bg-[rgb(248,86,6)]" onClick={()=>dispatch({type:'add',payload:product})}>
              Add to Cart
            </button>
          </div>
          <div className="bg-[#FAFAFA] w-100">
            <div className="p-4">
              <h5 className="text-[rgb(107, 104, 104)] text-[13px] font-bold">
                Delivery Options
              </h5>

              <div className="flex gap-3">
                <div className="pt-2">
                  <TbTruckDelivery size={30} />
                </div>

                <div>
                  <h4 className="pt-2 flex gap-4"> Standard Delivery</h4>
                  <p className="text-[hsl(0,4%,65%)] text-[12px]">Guaranteed in 7 days</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="pt-2">
                      <PiMoneyWavyBold size={30} color='' />
                </div>
                <div>
                    <h4 className="py-2">Cash on Delivery Available</h4>
                </div>
              </div>
              
            </div>
            <div className="p-4">
              <h5 className=" text-[13px] font-bold py-2">
                Return & Warranty
              </h5>
              <div className="flex gap-3">
                <div className="pt-2">
                      <GiReturnArrow size={30} />

                </div>
                <div>
                    <h4 className="py-2">14 Days Free Returns</h4>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="pt-2">
                      <FiShieldOff size={30} />
                </div>
                <div>
                    <h4 className="py-2">Warranty not available</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
