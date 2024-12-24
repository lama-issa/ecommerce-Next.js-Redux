import React from 'react'

export default function HeaderPage() {
  return (
    <div className="background-image">
    <div className="flex justify-center items-center min-h-screen">
    <div className="border border-foreground text-black bg-white opacity-75 p-6 sm:p-8 text-center mx-4 sm:w-full sm:mx-4 lg:w-1/2 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-slate-100 hover:scale-105">
    <h1 className="mb-4 text-3xl font-bold">New Hotel</h1>
        <span className="border-b-2 border-foreground w-1/2 block m-auto mb-5"></span>
        <p className="mb-6 sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className="bg-foreground py-3 px-5 font-semibold hover:opacity-80 transition ease-out duration-200 text-white">
          Read More
        </button>
      </div>
    </div>
  </div>
  
  )
}
