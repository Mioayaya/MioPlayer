import { FC, } from 'react';
import { MioHomeDiv } from './style';
import MioScrollReveal from '../../components/scroll-reveal';

const MioHome:FC = () => {  
  const fileArr:Array<number> = [];
  fileArr.length = 100;
  fileArr.fill(123);  

  return (
    <MioHomeDiv>
      <MioScrollReveal>
      <h1>Home Page</h1>
      {
        fileArr.map((item,index) => <p key={index+item}>hhh</p>)
      }
      </MioScrollReveal>
    </MioHomeDiv>
  )
}

export default MioHome;