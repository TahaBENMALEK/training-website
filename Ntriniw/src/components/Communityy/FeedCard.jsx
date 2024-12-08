import React from 'react'
import instagramFeed from "./FeedData"
import { Link } from 'react-router-dom'

const FeedCard = () => {
  return (
    <>
    {instagramFeed.map((feed) => ( 
      <div key={feed.id} className="w-full h-auto mb-6 bg-white rounded-lg shadow p-4">
        {/* Header with user info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img 
                src={feed.profileImg} 
                className="w-full h-full object-cover"
                alt={feed.username}
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{feed.username}</h3>
              <p className="text-gray-500 text-xs">{feed.time}</p>
            </div>
          </div>
          <button className="text-gray-500">•••</button>
        </div>

        {/* Post Image */}
        <div className="w-full h-[300px] overflow-hidden rounded-lg mb-4">
          <img 
            src={feed.postImg} 
            alt="post" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button className="text-2xl">❤️</button>
            <button className="text-2xl">💬</button>
            <button className="text-2xl">➡️</button>
          </div>
          <button className="text-2xl">🔖</button>
        </div>

        {/* Likes */}
        <div className="flex items-center mb-2">
          <div className="flex -space-x-2 mr-2">
            <img 
              src={feed.mutualFrndImg1} 
              alt="friend1" 
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            <img 
              src={feed.mutualFrndImg2} 
              alt="friend2" 
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm">Liked by <span className="font-semibold">{feed.likeCount}</span> others</p>
        </div>

        {/* Caption */}
        <p className="text-sm mb-2">
          <span className="font-semibold mr-2">{feed.username}</span>
          {feed.caption}
        </p>

        {/* Comments */}
        <button className="text-gray-500 text-sm">
          View all {feed.commentCount} comments
        </button>
      </div>
    ))}
    </>
  )
}

export default FeedCard