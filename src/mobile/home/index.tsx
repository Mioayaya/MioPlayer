import { FC } from 'react';
import { MioMobHomeDiv } from './style';

const testArr:number[] = [];
testArr.length = 100;
testArr.fill(1);
const testComponent = testArr.map((item,index) => <p>{item}-{index}</p>)


const MioMobHome:FC = () => {

  return (
    <MioMobHomeDiv>
      <div className="home-l1">
        <div className="home-l1-img"></div>
        <div className="home-l1-desc">
          <div className="l1-desc-title">早上中午晚上好</div>
          <div className="l1-desc-res">内容.......</div>
        </div>
      </div>
      <h2>Mobile Home Page</h2>
      { testComponent }
    </MioMobHomeDiv>
  )
}

export default MioMobHome;