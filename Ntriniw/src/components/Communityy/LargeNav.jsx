import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaDumbbell, FaUtensils, FaFacebookMessenger, FaHeart, FaUser, FaLightbulb, FaUsers } from 'react-icons/fa';
import LogoNtriniw from "../../images/logontriniw.png";

const LargeNav = () => {
    const sidebarItems = [
        {
            name: "Community",
            link: "/community",
            icon: FaUsers, 
        },
        //{name: "Search", link: "/search", icon: FaSearch,},//
        {
            name: "Workshop",
            link: "/workshop",
            icon: FaLightbulb,
        },
        {
            name: "Nutrition",
            link: "/nutrition",
            icon: FaUtensils,
        },
        {
            name: "Training",
            link: "/training",
            icon: FaDumbbell,
        },
        {
            name: "Messages",
            link: "/messages",
            icon: FaFacebookMessenger,
        },
        //**{
        //     name: "Notifications",
        //     link: "/notifications",
        //     icon: FaHeart,
        // },*/
        {
            name: "Profile",
            link: "/profile",
            icon: FaUser,
        },
    ];

    return (
        <div className="w-full h-full relative bg-white">
            <Link to="/about" className="mb-4 px-2 py-2 block">
                <img src={LogoNtriniw} alt="Ntriniw" className="w-28 h-auto" />    
            </Link>
            <div className="mt-4">
                {sidebarItems.map((item) => (
                    <Link to={item.link} key={item.name} className="flex gap-4 p-2 text-black hover:bg-cyan-600 rounded-lg mb-2">
                        <item.icon className="w-6 h-6" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LargeNav;