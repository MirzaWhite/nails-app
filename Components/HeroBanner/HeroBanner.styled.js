import styled from "styled-components";

export const HomeBannerStyled = styled.section`
  position: relative;

  .swiper-card-item {
    width: 100%;
    height: 680px;
  }

  .service-btn {
  }

  .banner-details {
    position: absolute;
    height: 100%;
    width: 480px;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: linear-gradient(270deg, rgba(91, 48, 124, 0.2) 0%, rgba(0, 0, 0, 0) 100%), rgba(91, 48, 124, 0.2);
    color: #FFFFFF;
    padding: 0 40px;

    .banner-title {
      margin-bottom: 8px;
    }

    .banner-description {
      margin-bottom: 32px;
    }

  }

  .custom-navigation {
    position: absolute;
    bottom: 27px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }

  .floating-btn {
    background: #FFFFFF;

    &:active, &:focus, &:hover {
      background: #FFFFFF;
    }

    .icon:before {
      color: #000000;
    }
  }

  button {
    background: #5B307C;
    border-radius: 40px;
    border: none;
    padding: 16px 48px;
    font-size: 16px;
    color: #FFFFFF;
    text-transform: capitalize;

    &:active, &:focus, &:hover {
      background: #5B307C;
    }
  }

  @media (max-width: 1224px) {
    .banner-details {
      width: 100%;
      padding: 24px;
      align-items: flex-start;
      height: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
      border-radius: 40px;

      .banner-description {
        margin-bottom: 0;
      }
    }

    button {
      padding: 16px 48px;
    }

    .custom-navigation {
      display: none !important;
    }

    .small-device-left {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    .small-device-right {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    .swiper-card-item {
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
      overflow: hidden;
    }
  }
`;