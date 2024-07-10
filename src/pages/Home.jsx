import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Home = ({ songs, setCurrentSong }) => {
    return (
        <div className=' bg-gradient-to-br from-black to-[#121286] w-full h-[70vh] hidescrollbar overflow-y-scroll overflow-x-hidden border-t border-gray-800'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
                {songs.map(song => (
                    <div key={song.id} className="bg-gradient-to-br from-[#04045b] shadow-white to-[#020227] p-4 rounded shadow container" onClick={() => setCurrentSong(song)}>
                        <img src={song.image} alt={song.name} className="w-full h-48 object-cover mb-2 rounded image" />
                        <h2 className="text-xl">{song.name}</h2>
                        <p>{song.artists.join(', ')}</p>
                        <div className="middle">
                            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Home;
