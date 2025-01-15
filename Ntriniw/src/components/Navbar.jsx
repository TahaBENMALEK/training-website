import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import LogoNtriniw from "../images/logontriniw.png";

const Navbar = () => {
  return (
    <header className="bg-black" >
        <nav className="px-4 flex justify-between items-center">
          <Link 
            to="/">
           <img src={LogoNtriniw} alt="Ntriniw" className="w-28 h-auto" />
          </Link>
           
            <div className="text-white flex gap-4">
                <a href="https://www.instagram.com/ntriniw/" className="hover:text-teal-200 py-4"> <FaInstagram/> </a>
                <a href="" className="hover:text-teal-300 py-4 "> <FaFacebook/> </a>
                <Link to="/Login">
                    <button  className="bg-teal-300 px-6 py-2 font-medium rounded hover:bg-white hover:text-teal-200 ">Log in</button>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;