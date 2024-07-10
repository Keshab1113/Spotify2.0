// src/components/Navbar.jsx
import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-br from-black to-[#121286] text-white p-4 h-[10vh] flex justify-between items-center">
            <div className="text-2xl font-bold ">Spotify 2.0</div>
            <Search/>
        </nav>
    );
};

export default Navbar;
