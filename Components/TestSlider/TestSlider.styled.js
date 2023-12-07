import styled from "styled-components";

export const TestStyled = styled.div `
  background: #efeaf2;
  border-radius: 20px;
  padding: 32px 0px;
  margin:80px auto;
  max-width: 1280px; 
  .title {
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .name {
    color: #5b307c;
    padding-top: 40px;
    padding-bottom: 12px;
    font-weight: 500;
    color: #5b307c;
  }
  .description {
    padding: 12px 48px 120px 48px;
    font-weight: 400;
    color: #384955;
  }
  .card-section {

    position: relative;
    background: #ffffff;
    border: 1px solid #5b307c;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 20px;
    overflow:hidden;
  }
  @keyframes pop-up {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scalex(1);
      opacity: 1;
    }
  }
  .swiper-slide.active {
    max-width:628px!important;
    width: 100%!important;
    animation-name: pop-up;
    animation-duration: 1.5s;
    position: relative;
    //transform: scaleX(1.5);
    z-index: 1;
    opacity: 1;
    .card-section {
      border: none;
  
      //height: 293px;
    }
    .image-section {
      position: absolute;
      left: calc(50% - 61px);
      bottom: 85px;
    }
  }
  .swiper-slide:not(.swiper-slide-active) {
    position: relative;
    transform: scale(0.7);
    opacity: 0.5;
    .card-section {
      // width: 400px;
      bottom: -127px;
      position: relative;
      max-height: 254px;
    }
    .image-section {
      position: absolute;
      left: calc((50% * 0.8) - 10px);
      bottom: 0;
    }
  }
  .swiper-pagination-bullet-active {
    background: #5b307c;
    border-radius: 52px;
    height: 3px;
    width: 35px;
    padding-bottom: 5px;
  }
  .swiper-pagination-bullet {
    cursor: pointer;
    background: #5b307c;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
  }
  .swiper-button-next {
    background-image: url("/assets/rightArrow.png");
    width: 68px;
    height: 68px;
  }
  .swiper-button-prev {
    background-image: url("/assets/leftArrow.png");
    width: 68px;
    height: 68px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 18%);
    bottom: var(--swiper-navigation-bottom-offset, 30%);
    top: var(--swiper-navigation-top-offset, 15%);
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 18%);
    top: var(--swiper-navigation-top-offset, 15%);
  }
  @media (max-width: 1224px) {
    border-radius: 100px 20px 20px 20px;
    padding: 16px 24px;
    H6 {
      padding-top: 16px;
    }
    .name{
      padding-top:20.6px;
    }
    .description{
      padding: 6px 24px 60px 24px;
    }
    .card-section {
      margin-top: 15px;
      border-radius: 80px 10px 10px 10px;
    }

    .swiper-slide.active {

      margin-bottom: 65px;
      .image-section {
        position: absolute;
        left: calc(50% - 61px);
        bottom: 85px;                                                                                             
        Image{
          width:80px;
          hieght:100px;
        }
      }
    }
    .swiper-slide:not(.swiper-slide-active) {
      .image-section {
        position: absolute;
        left: calc(50% - 40px);
        bottom: 0;
      }
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: var(--swiper-navigation-sides-offset, 0%);
      bottom: var(--swiper-navigation-bottom-offset, 30%);
      top: var(--swiper-navigation-top-offset, 92%);
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: var(--swiper-navigation-sides-offset, 0%);
      top: var(--swiper-navigation-top-offset, 92%);
    }
    .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
      left: 45%;
      bottom: 6%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
  }                                                                                                                                                                                                                                                                                                                                         
`