import styled from "@emotion/styled";

export const MioHomeWelcomeDiv = styled.div`
  display: flex;
  align-items: center;
  /* background-color: black; */

  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #aeaeae;
    img {
      border-radius: 50%;
    }
  }

  &>*:not(:last-child) {
    margin-right: 10px;
  }

  h1 {
    font-size: 2.5rem;
  }

  .weather {
    margin-left: 20px;
    font-size: 1.1rem;
    .weather-top,.weather-bottom {
      &>*:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .sentence {
    font-size: 1rem;
    font-style: italic;
  }
`
