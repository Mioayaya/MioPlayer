import styled from "@emotion/styled";
import { LAYOUT } from "../../../../common";

export const MioLeftMenuBarDiv = styled.div`
  position: fixed;
  top: 50%;
  left: ${LAYOUT.Configtation.contentPaddingR};
  transform: translate(-50%,-50%);
  .menu {
    cursor: pointer;
  }
`
