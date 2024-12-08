import React from 'react'
import LargeNav from './LargeNav'
import Feed from './Feed'

const Home2 = () => {
  return (
    <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 ">
        <div className="lg:w-[16%] border-r border-r-gray-500 h-[100vh] sticky top-0 left-0">
            <LargeNav/>
        </div>
        <Feed/>

    </div>
  )
}

export default Home2