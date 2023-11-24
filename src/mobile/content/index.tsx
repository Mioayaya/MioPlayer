import { FC } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';
import { Link } from 'react-router-dom';
import { MioMobContentDiv } from './style';

const MioMobContent:FC = () => {

  return (
    <MioMobContentDiv> 
      <div className="route">
        { useRoutes(route) }
      </div>
      <div className="play-bord">播放</div>
      <div className="menu">
        <Link to={'/'}>首页</Link>
        <Link to={'/home'}>首页</Link>
        <Link to={'/home/test'}>首页</Link>
        <Link to={'/test'}> 测试</Link>
      </div>
    </MioMobContentDiv>
  )
}

export default MioMobContent;