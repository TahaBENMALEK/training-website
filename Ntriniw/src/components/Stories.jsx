import React from 'react'
import Workshop from "../images/workshop.jpeg"
import { Link } from 'react-router-dom'
import Workshops from "../pages/Workshops.jsx"

const Stories = () => {
  return (
    <div className="h-auto w-full bg-gray-800">
        <div className="flex p-4">
            <img src={Workshops} alt="Workshop" className="h-auto  w-[40%] rounded-lg shadow-lg border-2 border-white hover:scale-105 transition-transform duration-300 object-cover"></img>
            <div className="flex flex-col">
            <p className=" text-2xl text-gray-100 font-serif ml-4 mt-32 hover:text-cyan-300 "> Avec NtriNiw, participe à des workshops collectifs animés par des coachs professionnels et donne un nouvel élan à ta transformation physique et mentale !  </p>
            <Link to="/Workshops" className="text-white font-bold hover:text-cyan-300 mt-4">Learn more</Link>
            </div>
        </div>
    </div>
  )
}

export default Stories