import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; 

function Navbar({ onPrev, onNext, onToggleTranslation, onToggleTafsir, showTranslation, showTafsir }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-30">
      <div className="container mx-auto flex items-center justify-between">
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={onToggleTranslation}
            >
              {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={onToggleTafsir}
            >
              {showTafsir ? 'Hide Tafsir' : 'Show Tafsir'}
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={onPrev}
            >
              <MdArrowBack className="inline-block mr-2" /> Previous Surah
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={onNext}
            >
              <MdArrowForward className="inline-block mr-2" /> Next Surah
            </button>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 z-20 flex flex-col items-center justify-center">
          <div className="w-3/4 max-w-md">
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
              onClick={() => {
                onToggleTranslation();
                toggleMenu();
              }}
            >
              {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
              onClick={() => {
                onToggleTafsir();
                toggleMenu();
              }}
            >
              {showTafsir ? 'Hide Tafsir' : 'Show Tafsir'}
            </button>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
              onClick={() => {
                onPrev();
                toggleMenu();
              }}
            >
              <MdArrowBack className="inline-block mr-2" /> Previous Surah
            </button>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => {
                onNext();
                toggleMenu();
              }}
            >
              <MdArrowForward className="inline-block mr-2" /> Next Surah
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
