import { FC } from 'react';
import { MioTopBarDiv } from './style';

const MioTopBar:FC = () => {

  return (
    <MioTopBarDiv>

      <div className="top-bar-left">
        <div className="web-img">
          <img src="/public/kagami.png" alt="MioPlayer" />
        </div>
        <div className="web-name">MioMusic</div>
        <div className="opreate-btns">
          <button className="back">{'<'}</button>
          <button className="forward">{'>'}</button>
        </div>
        <div className="search">搜索栏</div>
      </div>

      <div className="top-bar-middle">歌词</div>

      <div className="top-bar-right">
        header and other things
      </div>
      
    </MioTopBarDiv>
  )
}

export default MioTopBar;