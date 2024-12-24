"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { FaCarSide } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineSupport } from "react-icons/md";
import { IoMdReturnRight } from "react-icons/io";


export default function ChooseUs() {
  return (
    <div id="about" className="bg-gray-50 min-h-screen p-10 flex items-center justify-center">
      <div className="lg:flex justify-around">
        <motion.div
          className="lg:w-1/2 mb-20"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8 }} 
          viewport={{ once: false }}
        >
          <h1 className="text-3xl font-bold mb-3">Why Choose Us</h1>
          <div className="border-b-4 border-foreground mt-2 block mb-10 w-60"></div>
          <p className="text-gray-400">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-24">
            {[
              { Icon: FaCarSide, title: "Fast & Free Shipping" },
              { Icon: FiShoppingBag, title: "Quality Products" },
              { Icon: MdOutlineSupport, title: "24/7 Support" },
              { Icon: IoMdReturnRight, title: "Easy Returns" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="icon1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                viewport={{ once: false }}
              >
                <item.Icon className="text-2xl mb-2 shadow-xl text-foreground" />
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-400">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center h-screen"
          initial={{ opacity: 0, scale: 0.5 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <Image
            src={"/img/dots-yellow.svg"}
            alt="choose us img"
            width={255}
            height={217}
            className="absolute transform translate-x-[-80%] translate-y-[-100%] z-0"
          />
          <Image
            src="/img/img2.jpg"
            alt="choose us img"
            width={500}
            height={500}
            className="rounded-3xl relative z-10"
          />
        </motion.div>
      </div>
    </div>
  );
}
