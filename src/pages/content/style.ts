import styled from "@emotion/styled";
import { LAYOUT, PICTURE } from "../../common";

export const MioContentDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${PICTURE.Background.default});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  

  &>*:not(.background-cover) {
    opacity: 0.7;
    /* background-color: #000; */
    color: #fff;
    z-index: 2;
  }

  .background-cover {
    width: 100vw;
    height: 100vh;
    position: absolute;
    backdrop-filter: blur(10px);
    opacity: 0.9;
    z-index: 1;
  }
  
  .middle {
    flex: 1;    
    overflow-y: hidden;
    &>*:not(.content-left) {
      padding: ${LAYOUT.Configtation.contentPaddingV} 0;
    }
  }

  .content-left {
    position: fixed;
    top: 50%;
    left: 7%;
    transform: translate(0,-50%);
  }

  .play-bar {
    height: ${LAYOUT.Configtation.playerBarHeight};
    box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.1);
  }  
`