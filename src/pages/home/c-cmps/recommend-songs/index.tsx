import { FC, useEffect, memo, useState, useRef,  } from 'react';
import { Imusic } from '../../../../type';
import { MioHomeRecommendSongsDiv } from './style';
import { imgFunc } from '../../../../utils';
import { IMGSIZE } from '../../../../common';
import { useSpring,a } from '@react-spring/web';

interface Iprops {
  songData: Imusic.Isong[]
}

const MioHomeRecommendSongs:FC<Iprops> = memo((props) => {  
  const { songData } = props;
  const imgRef = useRef<HTMLImageElement|null>(null);
  const [flipped, setFilpped] = useState(false);
  const [imgCenter,setImgCenter] = useState<number|null>(null);
  const [option,setOption] = useState<number>(0);
  const [pOption,setPoption] = useState<number>(1);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const imgClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setFilpped(s=>!s);
    if(imgCenter){
      let step = option;
      setPoption(step);
      if(e.clientX>=imgCenter) {
        step===songData.length-1?step=0:step=step+1;
      } else {
        step===0?step=songData.length-1:step=step-1;
      }
      setOption(step);
    }
  }

  useEffect(() => {
    console.log(songData.length);
    
    const rect = imgRef.current?.getBoundingClientRect();
    if(rect) {
      const center = Math.floor((rect.left+rect.width)/2);
      setImgCenter(center);
    }
  },[imgRef])

  return (
    <MioHomeRecommendSongsDiv>
      <div className="rotate-img" onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => imgClick(e)}>
        <a.div
          className="img"
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        >
          <img
            ref={imgRef}
            src={imgFunc.getImgBySize(songData[5].picUrl,IMGSIZE.SongImgCard.max)} 
            alt="" 
          />
        </a.div>

        <a.div
          className="img"
          style={{
            opacity,
            transform,
            rotateY: '180deg',
          }}
        >
          <img
            ref={imgRef}
            src={imgFunc.getImgBySize(songData[3].picUrl,IMGSIZE.SongImgCard.max)} 
              alt="" 
          />
        </a.div>
      </div>

    </MioHomeRecommendSongsDiv>
  )
})

export default MioHomeRecommendSongs;