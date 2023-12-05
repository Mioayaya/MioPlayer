import { FC, useEffect, memo, useState } from 'react';
import { Imusic } from '../../../../type';

interface Iprops {
  songData: Imusic.Isong[]
}

const MioHomeRecommendSongs:FC<Iprops> = memo((props) => {  
  const { songData } = props;

  useEffect(() => {
    console.log(songData);
    
  },[])

  return (
    <div>
      <h1>recommendSongs</h1>
    </div>
  )
})

export default MioHomeRecommendSongs;