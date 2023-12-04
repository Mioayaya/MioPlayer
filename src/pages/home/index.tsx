import { FC, useEffect, useState } from 'react';
import { MioHomeDiv } from './style';
import MioScrollReveal from '../../components/scroll-reveal';
import MioHomeWelcom from './c-cmps/welcome';
import { useSelector } from 'react-redux';
import { Istore } from '../../type';

const MioHome:FC = () => {  
  const isSign = useSelector<Istore.Islice,boolean>(state => state.userSlice.isSign);

  return (
    <MioHomeDiv>
      <MioScrollReveal>
        <MioHomeWelcom isSign={isSign}/>
      </MioScrollReveal>
    </MioHomeDiv>
  )
}

export default MioHome;