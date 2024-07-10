import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Genres = ({ musics }) => {
  const [genreData, setGenreData] = useState(null);


  if (!musics) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-black to-[#121286] w-full h-[70vh] hidescrollbar overflow-y-scroll overflow-x-hidden border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
        {musics && musics.albums.items.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-[#04045b] shadow-white to-[#020227] p-4 rounded shadow container">
            <h1>{item.data.name}</h1>
            <img src={item.data.coverArt.sources[0].url} alt="" />
            <h1>{item.data.name}</h1>
            {/* {console.log(item)} */}
          </div>

        ))}
      </div>
    </div>
  );
};

export default Genres;
