import React from 'react';
import {
  IoHomeOutline,
  IoSearchOutline,
  IoLibraryOutline,
  IoAdd,
  IoChevronBack,
  IoChevronForward,
  IoPlay,
  IoPause,
  IoShuffle,
  IoRepeat,
} from 'react-icons/io5';
import {
  FaHeart,
  FaEllipsisH,
  FaStepBackward,
  FaStepForward,
} from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import {
  HiOutlineQueueList,
  HiOutlineSpeakerWave,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2';

const playlists = [
  'Liked Songs', 'My Playlist #1', 'Indie Hits', 'Rock Classics',
  'Hip-Hop Control', 'Acoustic Chill', 'Jazz Vibes', 'Electronic Focus',
  'Workout Beats', 'Sleep',
];

const songs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', dateAdded: '4 hari yang lalu', duration: '5:55' },
  { id: 2, title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', dateAdded: '2 mgg yang lalu', duration: '5:01' },
  { id: 3, title: 'Hotel California', artist: 'Eagles', album: 'Hotel California', dateAdded: '1 bln yang lalu', duration: '6:30' },
  { id: 4, title: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', dateAdded: '3 bln yang lalu', duration: '8:02' },
  { id: 5, title: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller', dateAdded: '5 bln yang lalu', duration: '4:54' },
];

const Sidebar = () => (
  <aside className="w-64 bg-neutral-900 text-neutral-300 p-2 flex flex-col space-y-2">
    <div className="bg-neutral-800 rounded-lg p-2">
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center gap-4 text-white font-bold hover:text-white transition-colors duration-300">
            <IoHomeOutline size={28} />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-4 hover:text-white transition-colors duration-300 font-semibold">
            <IoSearchOutline size={28} />
            Search
          </a>
        </li>
      </ul>
    </div>
    <div className="bg-neutral-800 rounded-lg flex-grow flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 hover:text-white transition-colors duration-300 font-semibold">
          <IoLibraryOutline size={28} />
          Your Library
        </a>
        <button className="text-neutral-400 hover:text-white hover:bg-neutral-700 rounded-full p-1 transition-colors duration-300">
          <IoAdd size={24} />
        </button>
      </div>
      <div className="overflow-y-auto px-2">
        {playlists.map((playlist, index) => (
          <a key={index} href="#" className="flex items-center gap-3 p-2 rounded hover:bg-neutral-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-neutral-700 rounded flex-shrink-0"></div>
            <div>
              <p className="text-white font-medium">{playlist}</p>
              <p className="text-sm text-neutral-400">Playlist • User</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </aside>
);

const MainContent = () => (
  <main className="flex-1 bg-neutral-800 rounded-lg overflow-y-auto">
    <div className="bg-gradient-to-b from-emerald-800 to-neutral-800/20 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <button className="bg-black rounded-full p-1 text-white">
            <IoChevronBack size={24} />
          </button>
          <button className="bg-black rounded-full p-1 text-white">
            <IoChevronForward size={24} />
          </button>
        </div>
        <button className="bg-black text-white font-bold text-sm px-4 py-2 rounded-full hover:scale-105">
          Upgrade
        </button>
      </div>
      <div className="flex items-end gap-6">
        <div className="w-56 h-56 bg-gradient-to-br from-green-600 to-blue-400 shadow-2xl flex items-center justify-center">
          <FaHeart size={80} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Playlist</p>
          <h1 className="text-8xl font-black text-white tracking-tighter">
            Liked Songs
          </h1>
          <p className="text-sm text-neutral-300 mt-2">
            Your favorite tracks all in one place.
          </p>
          <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-white">
            <span className="bg-green-500 rounded-full w-6 h-6"></span>
            <span>Nephyy • 123 songs</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-6 mb-6">
        <button className="bg-green-500 text-black rounded-full p-4 hover:scale-105 transition-transform">
          <IoPlay size={32} />
        </button>
        <button className="text-neutral-400 hover:text-white">
          <FaHeart size={32} />
        </button>
        <button className="text-neutral-400 hover:text-white">
          <FaEllipsisH size={24} />
        </button>
      </div>
      <table className="w-full text-left text-neutral-400">
        <thead className="border-b border-neutral-700 sticky top-0 bg-neutral-800">
          <tr>
            <th className="p-4 font-normal text-sm w-8">#</th>
            <th className="p-4 font-normal text-sm">Title</th>
            <th className="p-4 font-normal text-sm">Album</th>
            <th className="p-4 font-normal text-sm">Date added</th>
            <th className="p-4 font-normal text-sm">
              <FiClock />
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="group hover:bg-neutral-700/50 rounded-lg">
              <td className="p-4 rounded-l-lg">
                <span className="group-hover:hidden">{song.id}</span>
                <IoPlay className="hidden group-hover:block text-white" />
              </td>
              <td className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-600 rounded flex-shrink-0"></div>
                <div>
                  <p className="text-white">{song.title}</p>
                  <p className="text-sm">{song.artist}</p>
                </div>
              </td>
              <td className="p-4">{song.album}</td>
              <td className="p-4">{song.dateAdded}</td>
              <td className="p-4 rounded-r-lg">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
);

const PlayerBar = () => (
  <footer className="bg-black text-white p-4">
    <div className="grid grid-cols-3 items-center">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-neutral-700 rounded"></div>
        <div>
          <p className="font-semibold">Bohemian Rhapsody</p>
          <p className="text-sm text-neutral-400">Queen</p>
        </div>
        <button className="text-neutral-400 hover:text-white">
          <FaHeart size={18} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-neutral-400 hover:text-white"><IoShuffle size={20} /></button>
          <button className="text-neutral-400 hover:text-white"><FaStepBackward size={20} /></button>
          <button className="bg-white text-black rounded-full p-2 hover:scale-105"><IoPause size={24} /></button>
          <button className="text-neutral-400 hover:text-white"><FaStepForward size={20} /></button>
          <button className="text-neutral-400 hover:text-white"><IoRepeat size={20} /></button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-xl">
          <span className="text-xs text-neutral-400">1:35</span>
          <div className="w-full bg-neutral-600 h-1 rounded-full">
            <div className="bg-white h-1 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <span className="text-xs text-neutral-400">5:55</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button className="text-neutral-400 hover:text-white"><HiOutlineQueueList size={20} /></button>
        <button className="text-neutral-400 hover:text-white"><HiOutlineDevicePhoneMobile size={20} /></button>
        <div className="flex items-center gap-2">
          <button className="text-neutral-400 hover:text-white"><HiOutlineSpeakerWave size={20} /></button>
          <div className="w-24 bg-neutral-600 h-1 rounded-full">
            <div className="bg-white h-1 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="h-screen bg-black text-[#B3B3B3] flex flex-col p-2 gap-2">
      <div className="flex flex-1 gap-2 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;
