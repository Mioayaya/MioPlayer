import styled from "@emotion/styled";

export const MioMobContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  .route {
    overflow-y: scroll;
    height: 85vh;
  }

  .play-bord {
    height: 5vh;
    display: flex;
    align-items: center;
  }
  .menu {
    height: 10vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`