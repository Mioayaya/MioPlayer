import styled from "@emotion/styled";
import { PICTURE } from "../../common";

console.log(PICTURE.BACKGROUND.default);


export const MioContentDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${PICTURE.BACKGROUND.default});
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
    overflow-y: scroll;        
    ::-webkit-scrollbar-thumb {      
      background-color: #aee;
    }
  }

  .play-bar {
    height: 75px;
  }  
`