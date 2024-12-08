import React from 'react';
import { FaMapMarkerAlt, FaLink, FaRegBookmark, FaRegUser, FaEllipsisH } from 'react-icons/fa';
import { BsGrid3X3, BsBookmark, BsPersonSquare } from 'react-icons/bs';
import LargeNav from '../components/Communityy/LargeNav';

const Profile = () => {
  const profileData = {
    username: 'ntriniw_official',
    fullName: 'Ntriniw',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    posts: 42,
    followers: 1234,
    following: 567,
    bio: 'Welcome to Ntriniw - Your Digital Community 🌟',
    location: 'Morocco',
    website: 'www.ntriniw.com',
    posts: [
      {
        id: 1,
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
        likes: 124,
        comments: 8
      },
      {
        id: 2,
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
        likes: 89,
        comments: 5
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg',
        likes: 432,
        comments: 21
      }
    ]
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="fixed w-[245px] h-screen border-r border-gray-200">
        <LargeNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[245px]">
        <div className="max-w-[935px] mx-auto px-4 py-8">
          {/* Profile Header */}
          <div className="flex gap-8 mb-12">
            {/* Profile Image */}
            <div className="w-[150px] h-[150px] flex-shrink-0">
              <img 
                src={profileData.profileImage} 
                alt={profileData.username}
                className="w-full h-full rounded-full object-cover border border-gray-200"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              {/* Username and Buttons */}
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-xl font-light">{profileData.username}</h1>
                <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm">
                  Edit profile
                </button>
                <button className="text-gray-700">
                  <FaEllipsisH />
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mb-4">
                <div className="flex gap-1">
                  <span className="font-semibold">{profileData.posts.length}</span>
                  <span className="text-gray-700">posts</span>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">{profileData.followers}</span>
                  <span className="text-gray-700">followers</span>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">{profileData.following}</span>
                  <span className="text-gray-700">following</span>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h2 className="font-semibold">{profileData.fullName}</h2>
                <p className="text-sm mb-1">{profileData.bio}</p>
                {profileData.location && (
                  <p className="text-sm flex items-center gap-1 text-gray-700">
                    <FaMapMarkerAlt className="text-xs" /> {profileData.location}
                  </p>
                )}
                {profileData.website && (
                  <p className="text-sm flex items-center gap-1">
                    <FaLink className="text-xs" />
                    <a href={`https://${profileData.website}`} 
                       className="text-blue-900 hover:underline"
                       target="_blank" 
                       rel="noopener noreferrer">
                      {profileData.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center border-t border-gray-200">
            <button className="flex items-center gap-2 px-6 py-4 text-xs font-semibold border-t border-black -mt-[1px]">
              <BsGrid3X3 /> POSTS
            </button>
            <button className="flex items-center gap-2 px-6 py-4 text-xs font-semibold text-gray-400">
              <BsBookmark /> SAVED
            </button>
            <button className="flex items-center gap-2 px-6 py-4 text-xs font-semibold text-gray-400">
              <BsPersonSquare /> TAGGED
            </button>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-3 gap-1 mt-4">
            {profileData.posts.map(post => (
              <div key={post.id} className="relative aspect-square group">
                <img 
                  src={post.image} 
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-8 text-white">
                    <span className="flex items-center gap-2">
                      <span>❤️</span> {post.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <span>💬</span> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
