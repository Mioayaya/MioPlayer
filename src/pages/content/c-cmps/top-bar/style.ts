import styled from "@emotion/styled";

export const MioTopBarDiv = styled.div`
  height: 75px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  
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
    background: black;
    color: white;
    width: 350px;
  }

  .web-img {
    width: 45px;
    height: 45px;
    img {
      background-size: cover;
      border-radius: 20%;
    }
  }
`
