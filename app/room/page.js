"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import roomsData from "../data/page"
import Link from "next/link";

export default function Room() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("tab1"); // حفظ التاب النشط



  const filteredRooms = roomsData[activeTab].filter(room =>
    room.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-200 " id="room">
      {/* Title Section */}
      <motion.div
        className="text-center pt-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-3">Choose a room</h1>
        <div className="border-b-4 border-foreground mt-2 block mb-10"></div>
      </motion.div>

      {/* Search Section */}
      <motion.form
  className="flex items-center w-full sm:w-auto  justify-center "  
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  onSubmit={(e) => e.preventDefault()}
>
  <label htmlFor="simple-search" className="sr-only ">Search</label>
 <div className="flex px-5 ">
 <div className="relative ">
    <input
      type="text"
      id="simple-search"
      className="bg-gray-50 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 md:w-[350px]"  // عرض مرن
      placeholder="Search  description..."
      required
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  <button
    type="submit"
    className="p-2.5 ms-2 text-sm font-medium text-white bg-foreground rounded-lg"
  >
    <IoSearch className="w-4 h-4" />
  </button>
 </div>
</motion.form>


      {/* Tabs Section */}
      <div className="tabs mt-5">
        <div className="flex">
          <ul className="flex flex-wrap">
            <li className="">
              <a
                href="#"
                className={`inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium ${
                  activeTab === "tab1" ? "tab-active  underline underline-offset-4 decoration-foreground" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("tab1");
                }}
              >
                Sofa
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium ${
                  activeTab === "tab2" ? "tab-active underline underline-offset-4 decoration-foreground" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("tab2");
                }}
              >
                Vasa
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium ${
                  activeTab === "tab3" ? "tab-active underline underline-offset-4 decoration-foreground" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("tab3");
                }}
              >
                Bedroom
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Room Cards Section */}
      <motion.div
        className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredRooms.map((room, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-slate-100 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Image Container */}
            <div className="relative group overflow-hidden ">
            <Link href={`/details/${room.src}`}>
              {/* Like Icon */}
              <FaRegHeart
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "8px",
                  zIndex: "100",
                }}
                className="hover:text-foreground"
              />
              {/* Image */}
              <Image
                src={`/img/${room.src}.png`}
                alt={room.src}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-500 ease-in flex items-center justify-center flex-col">
                
                <IoSearch className="text-white" style={{ fontSize: "2rem" }} />
                <span className="text-white text-lg font-semibold mb-2">View</span>
              
              </div>
           </Link>
            </div>

            {/* Description and Price */}
            <div className="bg-gray-50 w-full p-2 h-auto">
              <div className="flex justify-between w-full gap-3  mt-4 mb-4 ">
                <p className="text-gray-700 text-base font-semibold">
                  {room.description}
                </p>
                <div className="flex">
                  <IoStarSharp style={{ color: "#ffd250" }} />
                  <IoStarSharp style={{ color: "#ffd250" }} />
                  <IoStarSharp style={{ color: "#ffd250" }} />
                  <IoStarSharp style={{ color: "#cccc" }} />
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="font-bold text-xl">{room.price}</p>
                <FaCartShopping
                  className="text-foreground"
                  style={{ fontSize: "24px" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}