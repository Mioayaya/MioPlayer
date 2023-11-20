import { FC } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';
import { Link } from 'react-router-dom';

const MioMobContent:FC = () => {

  return (
    <div> 
      { useRoutes(route) }
      <div className="router">
        <Link to={'/'}>首页</Link>
        <Link to={'/home'}>首页</Link>
        <Link to={'/home/test'}>首页</Link>
        <Link to={'/test'}> 测试</Link>
      </div>
    </div>
  )
}

export default MioMobContent;