"use client";
import React from "react";
import Image from "next/image";
import roomsData from "../../data/page";
import { motion } from "framer-motion";
import { use } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/actions/cartActions";


export default function DetailsPage(props) {
  const reviews = [
    { label: "Quality", value: 95, color: "bg-blue-500" },
    { label: "True to Size", value: 85, color: "bg-yellow-500" },
    { label: "Color", value: 90, color: "bg-red-500" },
    { label: "Fit", value: 95, color: "bg-green-500" },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart Items:", cartItems.length);
    

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product); 

    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // فك الـ params باستخدام use()
  const params = use(props.params);
  const { srcProd } = params;

  const findProdData = (srcProd) => {
    for (const key in roomsData) {
      const room = roomsData[key].find((r) => r.src === srcProd);
      if (room) {
        return room;
      }
    }
    return null;
  };

  const prod = findProdData(srcProd);

  if (!prod) {
    return <div className="p-10">Product not found</div>;
  }

  return (
<div className="">
<div className="bg-gray-200 lg:flex justify-around items-center">
      <div className="mb-10 p-5">
        <Image src={`/img/${srcProd}.png`} alt="img" width={400} height={400} className="sm:w-full"/>
        <h1 className="text-2xl mt-4 font-bold mb-2">{prod.price}</h1>
        <p>{prod.description}</p>
        <div className="flex justify-between items-center mt-8 ">
        <button className="px-5 py-3 bg-black text-white hover:bg-foreground hover:opacity-70 transition-all duration-200"
         onClick={() => handleAddToCart(prod)}
        >
          ADD TO CART
        </button>
        <FaRegHeart className="hover:text-foreground text-2xl sm:text-4xl md:text-3xl lg:text-4xl " />
        </div>
      </div>

      <div className="py-5 border-b  bg-slate-200 text-center">
        <h1 className="text-2xl font-bold mb-10">Customer Reviews (100+)</h1>
        <div className="flex gap-10 mb-3  justify-center">
          <div  className="">
          
            <p className="mb-10 ">Overall Fit:</p>
         
          </div>
          <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
        </div>

        <div className="flex flex-wrap">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 px-2 flex flex-col gap-4"
            >
              <div className="mb-4 px-10">
                <div className="flex justify-between ">
                  <p className="mb-2">{review.label}</p>
                  <p className="mb-2">{review.value}%</p>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded ">
                  <motion.div
                    className={`h-2 rounded ${review.color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${review.value}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
   <div className="p-10">
   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5  h-12 w-12 object-cover" />
   <div className="flex gap-5">
   <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  
   <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
   </div>
   <hr className="mt-5 mb-5"></hr>

   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5 h-12 w-12 object-cover" />
   <div className="flex gap-5">
   <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.</p>
  
   <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
   </div>
   <hr className="mt-5 mb-5"></hr>

   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5  h-12 w-12 object-cover" />
   <div className="flex gap-5 ">
   <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
   <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
   </div>
   <hr className="mt-5"></hr>
   </div>
</div>
  );
}
