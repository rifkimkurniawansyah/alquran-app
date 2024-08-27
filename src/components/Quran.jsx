import React, { useEffect, useState } from 'react';

function Quran() {
  const [ayah, setAyah] = useState(null);
  const [ayahId, setAyahId] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTafsir, setShowTafsir] = useState(false);

  useEffect(() => {
    fetch(`https://json-server-alquran-app.vercel.app/api/${ayahId}`)
      .then(response => response.json())
      .then(data => setAyah(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [ayahId]);

  if (!ayah) {
    return <div>Loading...</div>;
  }

  const ayahs = Object.entries(ayah.text);
  const translation = ayah.translations.id.text;
  const tafsir = ayah.tafsir.id.kemenag.text;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-30">
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setShowTranslation(prev => !prev)}
          >
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setShowTafsir(prev => !prev)}
          >
            {showTafsir ? 'Hide Tafsir' : 'Show Tafsir'}
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setAyahId(prevId => Math.max(prevId - 1, 1))}
          >
            Previous Surah
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setAyahId(prevId => prevId + 1)}
          >
            Next Surah
          </button>
        </div>
        <div className="flex-1 text-right mx-4">
          <p className="text-lg font-semibold">{ayah.name}</p>
        </div>
      </div>

      <div className="pt-20 px-6 mt-6 flex-1">
        <h1 className="text-3xl font-bold mb-4">{ayah.name_latin}</h1>
        <p className="text-lg font-semibold mb-4">({ayah.translations.id.name})</p>
        <p className="text-lg font-semibold">Jumlah Ayat: {ayah.number_of_ayah}</p>

        <div className="w-full space-y-4 mt-4">
          {ayahs.map(([key, text]) => (
            <div key={key} className="border-b border-gray-700 pb-4 mb-4">
              <p className="font-arabic text-3xl mb-2 text-right">{text}</p>
              <p className="text-base text-gray-300 text-right">Ayat {key}:</p>
              {showTranslation && (
                <p className="text-lg mt-2">{translation[key]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {showTafsir && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-start items-center p-6 overflow-auto z-20 mt-16">
          <div className="bg-gray-800 p-4 rounded-md max-w-2xl w-full">
            <h2 className="text-xl font-semibold mb-4">Tafsir:</h2>
            {ayahs.map(([key]) => (
              <div key={key} className="mb-2">
                <p><strong>Ayat {key}:</strong> {tafsir[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quran;
