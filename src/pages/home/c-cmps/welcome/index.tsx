import { FC, useEffect, memo, useState } from 'react';
import { load } from 'jinrishici';

import { MioHomeWelcomeDiv } from './style';
import { jinrishiciApi } from '../../../../service';
import { Ijinrishici } from '../../../../type';
import { Message } from '@arco-design/web-react';

const helloWord = ['早上好','中午好','下午好','晚上好','夜深了，晚安'];
const timeMap = new Map<number,string>();
for(let i=0;i<24;i++) {
  if(i>=5&&i<=10) timeMap.set(i,helloWord[0]);
  if(i>10&&i<=13) timeMap.set(i,helloWord[1]);
  if(i>13&&i<=17) timeMap.set(i,helloWord[2]);
  if(i>17&&i<=22) timeMap.set(i,helloWord[3]);
  if(i>22||i<=4)  timeMap.set(i,helloWord[4]);
}
interface Iprops {
  isSign: boolean
}

const MioHomeWelcom:FC<Iprops> = memo((props) => {  
  const { isSign } = props;
  const [ hello,setHello ] = useState<string>('······');
  const [ weatherData,setWeatherData ] = useState<Ijinrishici.IweatherData|null>(null);
  const [ sentence,setSentence ] = useState<string|null>(null);

  useEffect(() => {    
    const date = new Date();    
    setHello(timeMap.get(date.getHours()) as string);
    try {
      getWeather();
      getPoem();
    } catch {
      Message.error('some was wrong~');
    }
  },[])

  const getWeather = async () => {
    const res = await jinrishiciApi.getWeather();  
    setWeatherData(res.data.weatherData);
  }

  const getPoem = async () => {
    await load((res: {data:{content:string,[s:string]:string|number}}) => {      
      setSentence(res.data.content)
    });    
  }

  

  return (
    <MioHomeWelcomeDiv>
      { !isSign && <div className='img'><img src="" alt="头像" /></div> }
      <h1 className='hello'>{hello}</h1>
      { !isSign && <h1 className='nick-name'>, nicName</h1>}

      { weatherData && 
        <div className="weather">
          <div className="weather-top">
            <span className="temperature">{weatherData.temperature}℃</span>
            <span className="weather-desc">{weatherData.weather}</span>
            <span className="wind">{weatherData.windDirection}{weatherData.windPower}级</span>
          </div>
          <div className="weather-bottom">
            <span className="pm25" title='pm2.5'>空气质量: {weatherData.pm25}</span>
            <span className="visibility">可见度: {weatherData.visibility}</span>
          </div>
        </div>
      }

      { sentence &&
        <div className="sentence">{sentence}</div>
      }

    </MioHomeWelcomeDiv>
  )
})

export default MioHomeWelcom;