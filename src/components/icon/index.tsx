import { FC, memo } from 'react'
import { MioIconDiv } from './style'

interface Iprops {
  iconName: string
}

const MioIcon:FC<Iprops> = memo((props) => {
  const { iconName } = props;

  return (
    <MioIconDiv>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#${iconName}`}></use>
      </svg>    
    </MioIconDiv>
  )
})

export default MioIcon