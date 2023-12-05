import styled from "@emotion/styled";
import { LAYOUT } from "../../../../common";

export const MioTopBarDiv = styled.div`
  height: ${LAYOUT.Configtation.topBarHeight};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  /* box-shadow: 0 2px 4px rgba(255,255,255,0.1); */
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  
  .top-bar-left {
    display: flex;
    align-items: center;
   
    .web-name {    
      font-weight: 600;
      font-size: 1.2rem;      
    }

    .opreate-btns {
    }

    &>*:not(:last-child) {
      margin-right: 10px;
    }
  }

  .top-bar-middle {    
    /* background: black; */
    text-align: center;
    font-size: 2rem;
    color: white;
    width: 350px;
  }

  .web-img {
    width: 45px;
    height: 45px;    
    img {      
      object-fit: cover;
      border-radius: 20%;
    }
  }
`
