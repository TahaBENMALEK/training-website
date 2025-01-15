import React from 'react';
import { Link } from 'react-router-dom';
import trainingImage from '../images/training.jpg'; // Ensure this image exists

const trainingPrograms = [
    { coach: 'Coach D', rating: 4.7, program: 'Strength Training PDF', image: '../images/training.jpg' },
    { coach: 'Coach E', rating: 4.9, program: 'Workout Video Series', image: '../images/training.jpg' },
    { coach: 'Coach F', rating: 4.3, program: '1-on-1 Training Coaching', image: '../images/training.jpg' },
];

const Training = () => {
    return (
        <div className="training-page p-4">
            <h1 className="text-2xl font-bold mb-4">Training Marketplace</h1>
            <img src={trainingImage} alt="Training" className="w-full h-auto rounded-lg mb-4" />
            <p className="mb-4">Welcome to the Training Marketplace! Here you can explore various training programs.</p>
            <div className="flex flex-col mt-4">
                {trainingPrograms.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-300 mb-2 rounded-lg">
                        <img src={item.image} alt={item.coach} className="w-12 h-12 rounded-full mr-4" />
                        <span className="font-semibold">{item.coach}</span>
                        <span className="text-yellow-500">{item.rating} ⭐</span>
                        <span>{item.program}</span>
                    </div>
                ))}
            </div>
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    );
};

export default Training;