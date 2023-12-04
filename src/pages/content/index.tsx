import { FC } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';
import { MioContentDiv } from './style';
import MioTopBar from './c-cmps/top-bar';
import MioLeftMenuBar from './c-cmps/left-menu-bar';

const MioContent:FC = () => {

  return (
    <MioContentDiv>
      <div className="background-cover"></div>
      <MioTopBar />
      <div className="middle">
        <MioLeftMenuBar />
        { useRoutes(route) }
      </div>
      <div className="play-bar">播放栏</div>
    </MioContentDiv>
  )
}

export default MioContent;