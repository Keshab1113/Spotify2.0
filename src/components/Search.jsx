import React, { useState } from 'react';
import songs from '../assets/songs'

const Search = () => {
    const [query, setQuery] = useState("");
    

    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.artists.some(artist => artist.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="">
            <input
                type="text"
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Search for a song or artist..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
            <div className="flex flex-col absolute bg-gray-600 p-4">
                {filteredSongs.slice(0, 5).map(song => (
                    <div key={song.id} className="bg-gray-800 px-4 py-1 rounded shadow mb-2" onClick={() => setCurrentSong(song)}>
                        <h2 className="">{song.name}</h2>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}

export default Search;
