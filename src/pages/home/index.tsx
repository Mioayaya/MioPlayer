import { FC, useEffect } from 'react';
import { MioHomeDiv } from './style';
import MioScrollReveal from '../../components/scroll-reveal';
import MioHomeWelcom from './c-cmps/welcome';

const MioHome:FC = () => {  
  const fileArr:Array<number> = [];
  fileArr.length = 100;
  fileArr.fill(123);

  return (
    <MioHomeDiv>
      <MioScrollReveal>
        <MioHomeWelcom />
      {
        fileArr.map((item,index) => <p key={index+item}>hhh</p>)
      }
      </MioScrollReveal>
    </MioHomeDiv>
  )
}

export default MioHome;