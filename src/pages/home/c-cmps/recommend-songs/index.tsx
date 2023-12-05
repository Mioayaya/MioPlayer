import { FC, useEffect, memo, useState } from 'react';
import { Imusic } from '../../../../type';
import { MioHomeRecommendSongsDiv } from './style';
import { imgFunc } from '../../../../utils';
import { IMGSIZE } from '../../../../common';

interface Iprops {
  songData: Imusic.Isong[]
}

const MioHomeRecommendSongs:FC<Iprops> = memo((props) => {  
  const { songData } = props;

  return (
    <MioHomeRecommendSongsDiv>
      <div className="img">
        <img src={imgFunc.getImgBySize(songData[3].picUrl,IMGSIZE.SongImgCard.max)} alt="" />
      </div>
    </MioHomeRecommendSongsDiv>
  )
})

export default MioHomeRecommendSongs;