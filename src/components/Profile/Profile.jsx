import React from 'react';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import './Profile.css';

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
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <img src={profileData.profileImage} alt={profileData.username} />
        </div>
        <div className="profile-info">
          <h1>{profileData.username}</h1>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">{profileData.posts}</span>
              <span className="stat-label">posts</span>
            </div>
            <div className="stat">
              <span className="stat-value">{profileData.followers}</span>
              <span className="stat-label">followers</span>
            </div>
            <div className="stat">
              <span className="stat-value">{profileData.following}</span>
              <span className="stat-label">following</span>
            </div>
          </div>
          <div className="profile-bio">
            <h2>{profileData.fullName}</h2>
            <p>{profileData.bio}</p>
            <div className="profile-details">
              {profileData.location && (
                <p>
                  <FaMapMarkerAlt /> {profileData.location}
                </p>
              )}
              {profileData.website && (
                <p>
                  <FaLink />{' '}
                  <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer">
                    {profileData.website}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
