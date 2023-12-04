import { FC, useEffect, memo } from 'react';
import { MioHomeWelcomeDiv } from './style';

interface Iprops {
  isSign: boolean
}

const MioHomeWelcom:FC<Iprops> = memo((props) => {  
  const { isSign } = props;

  useEffect(() => {
    console.log('render');
    
  })

  return (
    <MioHomeWelcomeDiv>
      { isSign && <div className='img'><img src="" alt="头像" /></div> }

      <h1 className='hello'>早上中午晚上好</h1>

      { isSign && <h1 className='nick-name'>, nicName</h1>}
    </MioHomeWelcomeDiv>
  )
})

export default MioHomeWelcom;