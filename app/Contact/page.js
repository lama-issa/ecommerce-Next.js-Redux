"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div
      id="Contact"
      className="min-h-screen bg-gray-100 p-5 flex justify-center items-center"
    >
      <div className="relative w-full max-w-6xl">
        <Image
          src="/img/dots-green.svg"
          alt="background dots"
          width={300}
          height={300}
          className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/4 z-0 "
        />

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Form Section */}
          <form className="bg-white p-8  shadow-lg relative z-10">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            <div className="border-b-4 border-foreground mx-auto mb-8 w-20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  className="border-b-2 border-gray-300 bg-transparent p-2 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  className="border-b-2 border-gray-300 bg-transparent p-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject..."
                className="border-b-2 border-gray-300 bg-transparent p-2 text-sm focus:outline-none w-full"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter your message..."
                className="bg-gray-100 border h-32 border-gray-300 p-2 rounded-sm text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-foreground text-white py-2 px-6 mt-5 rounded-sm w-full hover:bg-opacity-90"
            >
              Send
            </button>
          </form>

          {/* Image Section */}

          <motion.div
            className="flex justify-center items-center overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }} //الصورة تبدأ صغيرة (scale: 0.5) وشفافة.
            whileInView={{ opacity: 1, scale: 1 }} //عندما تصبح مرئية، يكبر حجمها تدريجيًا إلى الحجم الطبيعي (scale: 1) وتصبح مرئية تمامًا.
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <Image
              src="/img/v1.png"
              alt="Contact illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
