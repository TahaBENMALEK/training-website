import React from 'react'
import { Link } from 'react-router-dom'
import storiesData from './StoriesData/StoriesData'

const Stories = () => {
  return (
    <div className="max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        {/* Your Story */}
        <Link to="/create-story" className="flex items-center justify-center flex-col flex-shrink-0">
            <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
                <img 
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" 
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                    alt="Your Story"
                />
            </div>
            <span className="text-xs mt-1">Your Story</span>
        </Link>

        {/* Other Stories */}
        {storiesData.map((story) => (
            <Link 
                key={story.id}
                to={`/story/${story.id}`}
                className="flex items-center justify-center flex-col flex-shrink-0"
            >
                <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
                    <img 
                        src={story.imageUrl}
                        alt={story.username}
                        className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                    />
                </div>
                <span className="text-xs mt-1">{story.username}</span>
            </Link>
        ))}
    </div>
  )
}

export default Stories