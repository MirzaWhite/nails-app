import styled from "styled-components";

export const CelebrityGalleryStyled = styled.section`
  .celebrity-gallery-part {
    padding: 24px 24px 0 24px;
    background: #efeaf2;
    border-radius: 20px;
  }

  .celebrity-title {
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .celebrity-subtitle {
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .mobile-heading {
    padding: 16px 24px 27px 24px;
  }

  .serviceImage2 {
    filter: blur(5px);
    transition: filter 0.5s, opacity 0.5s;
    transform: scale(0.6);
  }

  .serviceImage2.active {
    filter: none;
    opacity: 1;
  }

  .swiper-slide {
    margin-left: 40px;
  }

  .swiper {
    padding-bottom: 100px;
  }

  :root {
    --swiper-theme-color: #ffffff;
  }

  .swiper-slide {
    margin-left: 0;
  }

  .swiper-slide:not(.swiper-slide-active) {
    filter: blur(2px);
    transform: scale(0.8);
  }

  .swiper-slide:not(.swiper-slide-active) .celebritys-data,
  .swiper-slide:not(.swiper-slide-active) .video-btn {
    display: none;
  }

  .swiper-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    bottom: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto !important;
  }

  .swiper-pagination-bullet-active {
    background: #5b307c;
    border-radius: 52px;
    height: 3px;
    width: 35px;
  }

  .swiper-pagination-bullet {
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
    right: var(--swiper-navigation-sides-offset, 7%);
    bottom: var(--swiper-navigation-bottom-offset, 30%);
    top: var(--swiper-navigation-top-offset, 88%);
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 7%);
    top: var(--swiper-navigation-top-offset, 88%);
  }

  .celebritys-data {
    background: #01308c;
    color: #ffffff;
    background: #ffffff;
    border-radius: 16px;
    color: #384955;
    padding: 16px 16px 28px 16px;
    max-width: 650px;
    width: 100%;
    margin: 24px auto 0 auto;
    text-align: center;
  }

  .video-tag {
    border: 8px solid #ffffff;
    border-radius: 16px;
  }

  .video-btn {
    position: absolute;
    left: 50%;
    bottom: 58%;
    transform: translate(-50%, -58%);
  }

  #celebrity-name,
  #celebrity-description {
    font-family: "Jost";
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #384955;
    animation-duration: 3s;
    animation-name: slidein;
    margin: 0;
  }

  #celebrity-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  @keyframes slidein {
    from {
      opacity: 0;
    }
    75% {
      opacity: 0.7;
    }

    to {
      opacity: 1;
    }
  }
  @media (min-width: 1024px) {
    .video-btn {
      left: 52%;
      bottom: 61%;
      transform: translate(-52%, -61%);
    }
  }

  @media (min-width: 1224px) {
    .celebrity-gallery-part {
      padding: 50px 50px 0px 50px;
      margin: 41px 80px 80px 80px;
    }

    .swiper-horizontal .swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
      display: none;
    }

    .swiper {
      padding-bottom: 250px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: var(--swiper-navigation-top-offset, 66%);
      right: var(--swiper-navigation-sides-offset, 20%);
    }

    .swiper-button-prev {
      left: var(--swiper-navigation-sides-offset, 20%);
    }

    .celebritys-data {
      margin-top: 14px;
    }

    .celebrity-gallery-carousel {
      position: relative;
    }

    .celebritys-data {
      margin-top: 14px;
      max-width: calc(100% / 3);
      position: absolute;
      left: calc(50% - (((100% / 3) / 2) + 5px));
      bottom: 16%;
      transform: translate(-40%, -20);
    }

    .video-btn {
      left: 52%;
      bottom: 25%;
      transform: translate(-52%, -25%);
      cursor: pointer;
    }
  }

  @media (min-width: 1280px) {
    .swiper-button-next,
    .swiper-button-prev {
      top: var(--swiper-navigation-top-offset, 70%);
    }
  }
`;
