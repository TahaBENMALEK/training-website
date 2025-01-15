import React from 'react';
//this is the stories page
const Stories = () => {
    return (
        <div className="flex bg-gray-200 min-h-screen">
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Inspiring Stories</h1>
                <p className="mb-4">Read about our community members' journeys and achievements!</p>
                <ul className="list-disc pl-6">
                    <li>John's Transformation: From Zero to Hero</li>
                    <li>Maria's Journey: How Nutrition Changed My Life</li>
                    <li>Coach D's Tips: Building a Stronger You</li>
                </ul>
            </div>
        </div>
    );
};

export default Stories;