import { FC } from 'react';
import { Outlet } from 'react-router';

const MioMobHome:FC = () => {

  return (
    <div>
      <h2>Mobile Home Page</h2>
      <Outlet />
    </div>
  )
}

export default MioMobHome;