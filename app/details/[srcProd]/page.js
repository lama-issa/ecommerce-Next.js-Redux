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
<div className="bg-gray-200  md:flex justify-around items-center">
      <div className="mb-10 p-5 ">
        <Image src={`/img/${srcProd}.png`} alt="img" width={400} height={400} className=""/>
        <h1 className="text-2xl mt-4 font-bold mb-2">{prod.price}</h1>
        <p>{prod.description}</p>
        <div className="flex gap-x-60 items-center mt-8">
        <button className=" px-5 py-3 bg-black text-white hover:bg-foreground hover:opacity-70 transition-all duration-200"
         onClick={() => handleAddToCart(prod)}
        >
          ADD TO CART
        </button>
        <FaRegHeart className="hover:text-foreground" style={{fontSize:"24px"}}/>
        </div>
      </div>

      <div className="py-5 border-b p-5 bg-slate-200">
        <h1 className="text-2xl font-bold mb-10">Customer Reviews (100+)</h1>
        <div className="flex gap-10 mb-3">
          <div>
            <p className="mb-2">Overall Fit:</p>
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
              <div className="mb-4">
                <div className="flex justify-between ">
                  <p className="mb-2">{review.label}</p>
                  <p className="mb-2">{review.value}%</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <motion.div
                    className={`h-2 rounded ${review.color} `}
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
   <div className="p-20">
   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5" />
   <div className="flex gap-5 items-center">
   <p>ytre kjhgfds iuytreds jhgfdsyuiopk jhgfdsl</p>
  
   <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
   </div>
   <hr className="mt-5 mb-5"></hr>

   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5" />
   <div className="flex gap-5 items-center">
   <p>ytre kjhgfds iuytreds jhgfdsyuiopk jhgfdsl</p>
  
   <div className="flex">
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "#ffd250" }} />
            <IoStarSharp style={{ color: "gray" }} />
          </div>
   </div>
   <hr className="mt-5 mb-5"></hr>

   <Image src="/img/av.jpg" alt="img" width={70} height={70} className="rounded-full mb-5" />
   <div className="flex gap-5 items-center">
   <p>ytre kjhgfds iuytreds jhgfdsyuiopk jhgfdsl</p>
  
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
