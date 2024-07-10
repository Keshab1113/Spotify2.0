import React from 'react';

const SongList = ({ songs, setCurrentSong }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Song List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {songs.map(song => (
                    <div key={song.id} className="bg-gray-800 p-4 rounded shadow" onClick={() => setCurrentSong(song)}>
                        <img src={song.image} alt={song.name} className="w-full h-48 object-cover mb-2 rounded" />
                        <h2 className="text-xl">{song.name}</h2>
                        <p>{song.artists.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SongList;
