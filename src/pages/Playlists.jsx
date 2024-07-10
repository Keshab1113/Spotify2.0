import React from 'react'
import { CiPlay1 } from "react-icons/ci";

const Playlists = ({ songs, setCurrentSong }) => {
  return (
    <div className=' bg-gray-900 w-full h-[70vh] hidescrollbar overflow-y-scroll overflow-x-hidden border-t border-gray-800'>
      {/* <h1 className=' text-2xl font-bold bg-black text-white p-4'>Playlists</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAaURQlAYc9BjI8GRNE7kKQFhY5LqbVb6Xum4i_wX7J7Sk_bT" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgABuToncPeDqO5dRkgHgWGEToytvRV2k4WK_UPnUOIrEn8rGA" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://i.timesnowhindi.com/stories/Jubin_Nautiyal_0.jpg" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://blackhattalent.com/wp-content/uploads/2023/08/Shreya-Ghoshal5-scaled.jpg" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202401/65b8b49231b3f-pak-singer-atif-aslam-303424947-16x9.jpg?size=948:533" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://5.imimg.com/data5/WJ/RW/MY-11621704/bollywood-singers.jpg" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-6db6fa7c7f807f6fd90cfdd126263713-lq" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://www.india-forums.com/bollywood/images/uploads/62E_nk1.jpg" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://thelistacademy.com/wp-content/uploads/2020/04/armaan-mal5e93091a53337.jpg" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://www.rollingstone.com/wp-content/uploads/2022/02/GettyImages-1252411540.jpg?w=1024" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_naps83YGsxC-HaE0eu5l7PP8TxLirUAwdbSmk6=s900-c-k-c0x00ffffff-no-rj" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow container">
          <img src="https://cdn.thestorypedia.com/images/2016/11/1478520710_pjpkmufjgdfja_2.jpg?v=107" className="w-full h-48 object-cover mb-2 rounded image" />
          <div className="middle">
            <div className="text"><CiPlay1 className=' text-[5rem]' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlists
