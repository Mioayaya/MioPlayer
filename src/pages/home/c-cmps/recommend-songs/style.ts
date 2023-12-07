import styled from "@emotion/styled";
import { IMGSIZE } from "../../../../common";

export const MioHomeRecommendSongsDiv = styled.div`

  background-color: red;
  margin-top: 10px;

  .rotate-img {
    width: ${IMGSIZE.SongImgCard.width}px;
    height: ${IMGSIZE.SongImgCard.height}px;
  }

  .img {
    position: absolute;
    width: ${IMGSIZE.SongImgCard.width}px;
    height: ${IMGSIZE.SongImgCard.height}px;
  }
`
