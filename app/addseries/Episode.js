import React from 'react';

const Episode = ({ arr, setArr, props, sub }) => {
  const handleSeasonChange = (seasonIndex, newValue) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[seasonIndex].number = newValue;
      return newArr;
    });
  };

  const handleAddEpisode = (seasonIndex) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      const newEpisodeNo = newArr[seasonIndex].episode.length + 1;
      newArr[seasonIndex].episode.push({ link: '', no: newEpisodeNo });
      return newArr;
    });
  };

  const handleDeleteEpisode = (seasonIndex, episodeIndex) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[seasonIndex].episode.splice(episodeIndex, 1);
      return newArr;
    });
  };

  const handleDeleteSeason = (seasonIndex) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr.splice(seasonIndex, 1);
      return newArr;
    });
  };

  const handleEpisodeChange = (seasonIndex, episodeIndex, property, newValue) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[seasonIndex].episode[episodeIndex][property] = newValue;
      return newArr;
    });
  };

  const handleAddSeason = () => {
    setArr((prevArr) => [...prevArr, { number: '', episode: [] }]);
  };

  return (
    <main className=' fixed top-0  h-[100vh] w-[100vw] flex items-center justify-center z-50 bg-black bg-opacity-30'>
      <div className=' w-full lg:w-[90%] border-white border-[1px] overflow-y-scroll scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin h-[100%] lg:h-[90%] bg-black text-white flex-col items-center justify-center p-3'>
        <div className=' flex justify-between '><header className=' font-bold mb-5'>ADD EPISODES</header> <div className=' bg-red-500 px-3 py-1 flex justify-center items-center font-bold cursor-pointer hover:bg-red-600' onClick={()=>sub(false)}>CLOSE</div></div>
        <div className=' '>
          {arr.map((season, seasonIndex) => (
            <div key={seasonIndex} className='mb-20 '>
              <div className='flex flex-col sm:flex-row'>
                <p className='mr-2 font-bold text-2xl'>SEASON: {season.number}</p>
                <button
                  onClick={() => handleAddEpisode(seasonIndex)}
                  className='bg-green-500 font-bold px-4 py-1 cursor-pointer'
                >
                  ADD EPISODE
                </button>
                <button
                  onClick={() => handleDeleteSeason(seasonIndex)}
                  className='bg-red-500 font-bold px-4 py-1 ml-2 cursor-pointer'
                >
                  DELETE SEASON
                </button>
              </div>
              {season.episode.map((episode, episodeIndex) => (
                <div key={episodeIndex} className='mt-4'>
                  <form className='flex items-center mb-5'>
                    <div className='mr-5'>
                      <p className='font-bold'>EPISODE {episode.no}</p>
                    </div>
                    <input
                      type='text'
                      placeholder='EPISODE LINK'
                      value={episode.link}
                      onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, 'link', e.target.value)}
                      className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25 mr-5'
                    />
                    <div className='flex'>
    
                      <button
                        onClick={() => handleDeleteEpisode(seasonIndex, episodeIndex)}
                        className='bg-red-500 font-bold px-4 py-1 ml-2 cursor-pointer'
                      >
                        DELETE EPISODE
                      </button>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={handleAddSeason} className=' bg-violet-700 font-bold mr-2 px-5 py-1 cursor-pointer'>
          ADD SEASON
        </button>
        <input type='submit' onClick={props} className='bg-red-500 ml-5 font-bold px-5 py-1 cursor-pointer' value={'SUBMIT'} />
      </div>
    </main>
  );
};

export default Episode;
