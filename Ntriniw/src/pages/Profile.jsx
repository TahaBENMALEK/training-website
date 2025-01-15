import React, { useState } from 'react';
import LargeNav from '../components/Communityy/LargeNav';

const Profile = () => {
    const [profileType, setProfileType] = useState(null);

    const handleProfileSelection = (type) => {
        setProfileType(type);
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <div className="lg:w-[16%] border-r border-r-gray-500 h-[100vh] sticky top-0 left-0">
                <LargeNav/>
            </div>
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Select Your Profile</h1>
                <div className="flex space-x-6 mb-8">
                    <button 
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        onClick={() => handleProfileSelection('coach')}
                    >
                        Coach Profile
                    </button>
                    <button 
                        className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300"
                        onClick={() => handleProfileSelection('athlete')}
                    >
                        Athlete Profile
                    </button>
                </div>

                {profileType === 'coach' && (
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Coach Profile</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <p className="text-gray-600"><strong>Clients:</strong> {/* Logic here */}</p>
                            <p className="text-gray-600"><strong>Programs:</strong> {/* Logic here */}</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-600"><strong>Dashboard:</strong> {/* Logic here */}</p>
                            <p className="text-gray-600"><strong>Calendar:</strong> {/* Logic here */}</p>
                        </div>
                    </div>
                )}

                {profileType === 'athlete' && (
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Athlete Profile</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <p className="text-gray-600"><strong>Programs:</strong> {/* Logic here */}</p>
                            <p className="text-gray-600"><strong>XPs:</strong> {/* Logic here */}</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-600"><strong>Progress:</strong> {/* Logic here */}</p>
                            <p className="text-gray-600"><strong>Reminders:</strong> {/* Logic here */}</p>
                            <p className="text-gray-600"><strong>Session Today:</strong> {/* Logic here */}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;