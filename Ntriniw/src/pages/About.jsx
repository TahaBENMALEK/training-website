import React from 'react'
import { Link } from 'react-router-dom';
import Sorties from '../components/Sorties.jsx'
import Offres from '../components/offres.jsx'
import fondo from '../images/fondo.jpg'

const About = () => {
  return (
    <div>
       <div className='h-auto px-2 py-32 bg-black ' style={{backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> 
        <div className="text-center text-white">
            <h1 className="lg:text-5xl leading-snug font-bold mb-5" > About us  </h1>
            <p className="text-gray-100 mx-auto mb-5">   </p>
        </div>
    </div>
    <Sorties/>
    <Offres/>
    </div>
  )
}

export default About