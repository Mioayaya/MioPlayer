import { FC, memo } from 'react'
import { MioLeftMenuBarDiv } from './style'
import { MENUBAR } from '../../../../common'
import MioIcon from '../../../../components/icon'

interface Iprops {

}

const MioLeftMenuBar:FC<Iprops> = memo(() => {
  return (
    <MioLeftMenuBarDiv>
      {
        MENUBAR.LeftMenuBar.map((item) => {
          return (
            <div className="menu" key={item.key} title={item.name}>
              <MioIcon iconName={item.icon} />
            </div>
          )
        })
      }
    </MioLeftMenuBarDiv>

  )
})

export default MioLeftMenuBar