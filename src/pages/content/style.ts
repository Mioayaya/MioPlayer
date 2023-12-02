import styled from "@emotion/styled";

export const MioContentDiv = styled.div`  
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top {
    height: 150px;
  } 
  
  .middle {
    overflow-y: scroll;
    background-color: black;
    color: #fff;
    ::-webkit-scrollbar-thumb {      
      background-color: #aee;
    }
  }

  .play-bar {
    height: 150px;
  }  
`