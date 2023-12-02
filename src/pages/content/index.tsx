import { FC } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';
import { MioContentDiv } from './style';

const MioContent:FC = () => {
  

  return (
    <MioContentDiv> 
      <div className="top">something else</div>
      <div className="middle">
        { useRoutes(route) }
      </div>
      <div className="play-bar">播放栏</div>
    </MioContentDiv>
  )
}

export default MioContent;