import React from 'react'
import photo1 from "../images/offres/photo1.png"
import photo2 from "../images/offres/photo2.jpeg"
import photo3 from "../images/offres/photo3.jpeg"
import photo4 from "../images/offres/photo4.png"
//this is the offers page
const Offres = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={photo1} 
              alt="Fitness Training" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
                Learn to live a healthy life with fitness
              </h2>
              <p className="text-gray-700 text-base">
                Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={photo2} 
              alt="Exercise Technique" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
                Understand how to do exercises properly
              </h2>
              <p className="text-gray-700 text-base">
                Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={photo3} 
              alt="Progress Tracking" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
                Track your progress weekly
              </h2>
              <p className="text-gray-700 text-base">
                We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={photo4} 
              alt="Personalized Plan" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
                Follow a specific plan made just for you
              </h2>
              <p className="text-gray-700 text-base">
                Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body type. This gives the best possible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offres