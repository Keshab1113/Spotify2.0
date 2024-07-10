import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ currentSong }) => {
    return (
        <div className="bg-gradient-to-br from-black to-[#121286] text-white p-4 fixed bottom-0 flex justify-between items-center w-[80vw] h-[20vh]">
            <AudioPlayer
                src={currentSong && currentSong.link}
                className=' bg-gradient-to-br from-black to-[#121286] text-white'
                onPlay={() => console.log("Playing")}
                showSkipControls={true}
                showJumpControls={true}
                showDownloadProgress={true}
                customAdditionalControls={[]}
                header={currentSong &&`Now Playing: ${currentSong.name}`}
                footer={currentSong &&`By: ${currentSong.artists.join(', ')}`}
            />
        </div>
    );
};

export default Player;
