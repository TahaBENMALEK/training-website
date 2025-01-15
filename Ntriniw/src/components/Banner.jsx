import React from 'react'
import { Link } from 'react-router-dom';
import fondo from "../images/fondo.jpg"
//this is the banner of the home page
const Banner = () => {
  return (
    <>
    <div className='lg:h-screen h-screen px-2 py-32' style={{backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> 
        <div className="text-center text-white">
            <h1 className="lg:text-5xl leading-snug font-bold mb-5" > Bienvenue sur le site officiel de NtriNiw !  </h1>
            <p className="text-gray-100 mx-auto mb-5"> une communauté dynamique pour échanger avec des coachs et des passionnés. Rejoignez-nous pour atteindre vos objectifs santé et bien-être ! </p>
            <Link to="/About" className="font-medium hover:text-cyan-300">Learn more</Link>
        </div>
    </div>
    
    </>
  )
}

export default Banner