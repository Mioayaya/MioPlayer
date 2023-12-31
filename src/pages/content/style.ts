import styled from "@emotion/styled";
import { LAYOUT, PICTURE } from "../../common";

export const MioContentDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-image: url(${PICTURE.Background.default});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  &>*:not(.background-cover,.background) {
    color: #fff;
    z-index: 2;
  }

  .background,.background-cover {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  .background {
    z-index: 0;
    object-fit: cover;
    object-position: center center;
  }

  .background-cover {
    backdrop-filter: blur(10px);
    opacity: 0.9;  
    z-index: 1;
  }
  
  .middle {
    flex: 1;    
    overflow-y: scroll;
    padding: ${LAYOUT.Configtation.contentPaddingV} 0;
    padding-left: ${LAYOUT.Configtation.contentPaddingL};
    padding-right: ${LAYOUT.Configtation.contentPaddingR};
      ::-webkit-scrollbar-thumb {      
      background-color: rgba(0,0,0,0.55);
    }
  }

  .play-bar {
    height: ${LAYOUT.Configtation.playerBarHeight};
    box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.1);
  }  
`