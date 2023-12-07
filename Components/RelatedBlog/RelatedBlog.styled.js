import styled from "styled-components";
export const RelatedBlogStyled = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 80px 0;

  .title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media(max-width: 1224px){
      text-align: center;
      margin-bottom: 0;
    }
  }

  .floating-btn {
    background: #FFFFFF;

    &:active, &:focus, &:hover {
      background: #FFFFFF;
    }

    .icon:before {
      color: #EFEAF2;
    }
  }

  .btn-floating.btn-lg .fas {
    background-color: #9D87AFB2;
    color: #EFEAF2 !important;
  }

  .swiper-container {
    width: 91%;
    margin: 23px auto 0 auto;

    .floating-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &.left {
        z-index: 1;
        left: -90px;
        @media (max-width: 1224px) {
          left: -15px;
        }
      }

      &.right {
        z-index: 1;
        right: -90px;
        @media (max-width: 1224px) {
          right: -15px;

        }
      }
    }

    @media (max-width: 1224px) {
      width: 100%;
      margin: 15px auto 0 auto;
    }
  }


@media(max-width: 1224px){
  padding: 0;
}

`;