import React from 'react'
import Stories from './Stories'
import FeedCard from './FeedCard'

const Feed = () => {
  return (
    <div className="py-7 flex items-start gap-x-20">
        <div className="w-full h-auto">
            <Stories/>
            <div className="w-full h-auto flex items-center justify-center mt-6">
                <div className="w-[80%] h-auto">
                    <FeedCard/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Feed