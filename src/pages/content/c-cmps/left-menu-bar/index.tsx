import { FC, memo } from 'react'
import { MioLeftMenuBarDiv } from './style'
import { MENUBAR } from '../../../../common'
import MioIcon from '../../../../components/icon'
import { Link } from 'react-router-dom'

interface Iprops {

}

const MioLeftMenuBar:FC<Iprops> = memo(() => {
  return (
    <MioLeftMenuBarDiv>
      {
        MENUBAR.LeftMenuBar.map((item) => {
          return (
            <Link to={item.link} key={item.key}>
              <div className="menu" title={item.name}>
                <MioIcon iconName={item.icon} />
              </div>
            </Link>
          )
        })
      }
    </MioLeftMenuBarDiv>

  )
})

export default MioLeftMenuBar