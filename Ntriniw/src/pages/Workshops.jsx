import React from 'react';
import LargeNav from '../components/Communityy/LargeNav';

const Workshop = () => {
    return (
        <div className="flex bg-gray-200 min-h-screen">
            <div className="lg:w-[16%] border-r border-r-gray-500 h-[100vh] sticky top-0 left-0">
              <LargeNav/>
            </div>
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Upcoming Workshops</h1>
                <p className="mb-4">Join our interactive workshops to enhance your skills!</p>
                <ul className="list-disc pl-6">
                    <li>Strength Training Techniques - Jan 15, 2024</li>
                    <li>Nutrition Basics for Athletes - Jan 22, 2024</li>
                    <li>Advanced Coaching Strategies - Jan 29, 2024</li>
                </ul>
            </div>
        </div>
    );
};

export default Workshop;