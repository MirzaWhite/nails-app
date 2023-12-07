import styled from "styled-components";

export const PRODUCT_CARD_STYLED = styled.div`
  .product-card-section {
    //cursor: pointer;
    width: 100%;
    margin: 0 auto 64px auto;
    .product-cta {
      background: #ffffff;
      border: 1px solid #5B307C;
      border-radius: 26px;
      padding: 9px 20px;
      font-style: normal;
      font-weight: 400;
      font-family: "Jost", sans-serif;
      font-size: 16px;
      line-height: 22px;
      color: #5B307C;
      margin-top: 8px;
    }
    .swiper-pagination{
      
      top: 0;
      .swiper-pagination-bullet{
        background: #ffffff;
        opacity: 1;
        cursor: pointer;
        &.swiper-pagination-bullet-active{
          background: #8E4FC7;
        }
      }
    }
  }

  @media (max-width: 1224px){   
    .product-card-section {
      margin-bottom: 24px;
    }
  }
  .product-name{
    height: 50px;
    cursor: pointer;
  }
`;

export const ImageSliderContainerStyle = styled.div`
  .image-slider-card{
    width: 173px;
    height: 224px;
    border-radius: 20px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    .overlay{
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.48) 2.68%, rgba(0, 0, 0, 0) 100%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      padding: 16px;
    }
  }
  
`