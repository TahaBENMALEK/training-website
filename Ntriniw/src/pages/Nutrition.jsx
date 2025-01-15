import React from 'react';
import { Link } from 'react-router-dom';
import nutritionImage from '../images/nutrition.jpg'; // Ensure this image exists

const nutritionPrograms = [
    { coach: 'Coach A', rating: 4.5, program: 'Nutrition Basics PDF', image: 'path/to/coachA.jpg' },
    { coach: 'Coach B', rating: 4.8, program: 'Healthy Recipes Video', image: 'path/to/coachB.jpg' },
    { coach: 'Coach C', rating: 4.2, program: '1-on-1 Nutrition Coaching', image: 'path/to/coachC.jpg' },
];

const Nutrition = () => {
    return (
        <div className="nutrition-page p-4">
            <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${nutritionImage})` }}>
                <h1 className="text-4xl font-bold text-white text-center pt-16">Nourish Your Body</h1>
            </div>
            <p className="mb-4 text-center">Welcome to the Nutrition Marketplace! Discover various nutrition programs and products.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nutritionPrograms.map((item, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                        <img src={item.image} alt={item.program} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold">{item.program}</h2>
                            <p>Coach: {item.coach}</p>
                            <p>Rating: {item.rating} ⭐</p>
                            <Link to={`/nutrition/${item.program}`} className="text-blue-500 hover:underline">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/signup" className="bg-blue-500 text-white py-2 px-4 rounded">Start Your Journey</Link>
            </div>
        </div>
    );
};

export default Nutrition;