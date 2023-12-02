import { FC } from 'react';

const MioHome:FC = () => {
  const fileArr:Array<number> = [];
  fileArr.length = 100;
  fileArr.fill(123);

  return (
    <div> 
      <h1>Home Page</h1>
      {
        fileArr.map((item,index) => <p key={index+item}>hhh</p>)
      }
    </div>
  )
}

export default MioHome;