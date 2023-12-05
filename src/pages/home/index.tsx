import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MioScrollReveal from '../../components/scroll-reveal';
import MioHomeWelcom from './c-cmps/welcome';
import { Ijinrishici, Imusic, Istore } from '../../type';
import { foundMusicApi, jinrishiciApi } from '../../service';
import { MioHomeDiv } from './style';
import MioHomeRecommendSongs from './c-cmps/recommend-songs';

const MioHome:FC = () => {  
  const isSign = useSelector<Istore.Islice,boolean>(state => state.userSlice.isSign);
  const [ weatherData,setWeatherData ] = useState<Ijinrishici.IweatherData|null>(null);
  const [ songData,setSongData ] = useState<Imusic.Isong[]|null>(null);

  useEffect(() => {
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getWelcome = async () => {
    const weather = await jinrishiciApi.getWeather();
    setWeatherData(weather.data.weatherData);
  }

  const getSongs = async () => {
    const res = await foundMusicApi.getPersonalizedNewSong() as {result:Imusic.Isong[]};
    setSongData(res.result);
  }

  const getAll = async () => {
    try {
      await Promise.all([
        getWelcome(),
        getSongs()
      ])
    } catch(err) {
      console.log('err:',err);
    }
  }

  return (
    <MioHomeDiv>
      { !weatherData && <>loading····</> }
      <MioScrollReveal>
        { weatherData && <MioHomeWelcom isSign={isSign} weatherData={weatherData}/> }
        { weatherData && songData && <MioHomeRecommendSongs songData={songData}/> }
      </MioScrollReveal>
    </MioHomeDiv>
  )
}

export default MioHome;