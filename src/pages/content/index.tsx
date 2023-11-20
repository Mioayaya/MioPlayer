import { FC } from 'react';
import { useRoutes } from 'react-router';
import route from '../../router';

const MioContent:FC = () => {

  return (
    <div> 
      { useRoutes(route) }
    </div>
  )
}

export default MioContent;