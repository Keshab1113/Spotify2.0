// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import mypic from "/mypicture.jpg"

const Sidebar = () => {
    return (
        <div className=" bg-gradient-to-br from-black to-[#121286] text-white w-[20vw] min-h-screen p-4 pt-14 flex justify-center items-center flex-col">
            <div className=' bg-white rounded-full h-32 w-32 mb-10 overflow-hidden border'>
                <img src={mypic} alt="profile pic" className='rounded-full h-32 w-32'/>
            </div>
            <ul>
                <li className="mb-4 text-xl font-bold hover:text-slate-300"><Link to="/">Home</Link></li>
                <li className="mb-4 text-xl font-bold hover:text-slate-300"><Link to="/playlists">Playlists</Link></li>
                <li className="mb-4 text-xl font-bold hover:text-slate-300"><Link to="/albums">Albums</Link></li>
                <li className="mb-4 text-xl font-bold hover:text-slate-300"><Link to="/genres">Genres</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
