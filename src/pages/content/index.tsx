import { FC, useState } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';
import { MioContentDiv } from './style';
import MioTopBar from './c-cmps/top-bar';
import MioLeftMenuBar from './c-cmps/left-menu-bar';
import { PICTURE } from '../../common';

const MioContent:FC = () => {  
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const routes = useRoutes(route);    

  const handleBackgroundLoad = () => {    
    setBackgroundLoaded(true);
  };

  return (
    <MioContentDiv style={{opacity:backgroundLoaded?1:0}}>
      {/* 图片加载完再展现，防止白屏 */}
      <img className='background' src={PICTURE.Background.default} alt="" onLoad={handleBackgroundLoad}/>
      <div className="background-cover"></div>
      <MioTopBar />
      <div className="middle">
        <MioLeftMenuBar />
        { routes }
      </div>
      <div className="play-bar">播放栏</div>
      
    </MioContentDiv>
  )
}

export default MioContent;