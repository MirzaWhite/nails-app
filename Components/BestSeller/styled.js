import styled from "styled-components";

export const MainContainerStyle = styled.div`
  padding: 20px 24px;
  background: #EFEAF2;
  border-radius: 20px 20px 100px 20px;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .ds-Best-seller-section{
    
    @media(min-width: 1023px){
     display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .controll-button{
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
  }
  .floating-btn{
    background: #FFFFFF;
    &:active,&:focus,&:hover{
      background: #FFFFFF;
    }
    .icon:before{
      color: #000000;
    }
  }
  .swiper-container{
    width: 70%;
    margin: 40px auto 40px 0px;
    .floating-btn{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.left{
        left: -60px;
      }
      &.right{
        right: -60px;
      }
    }
  } 
  .head{
    text-decoration: underline;
    text-decoration-color: #5B307C;
    text-decoration-thickness: 2px;
  }
  .ds-best-seller-text{
    padding: 24px 36px;
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .description{
      width: 100%;
    }
    .swiper-container{
      width: 100%;
    }
  }
`

export const SwiperCardContainerStyle = styled.div`
  background: #FFFFFF;
  border-radius: 100px 16px 16px 16px;
  padding: 20px; 
  max-width: 320px;
  margin: 0 auto;
    .swiper-pagination{
      top: 0;
      .swiper-pagination-bullet{
        background: #8E4FC7;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          background: #5B307C;
        }
      }
    }
  @media(min-width: 1224px){
    .top-pick-name{
      height: 50px;
    }
  }
`

export const ImageSliderContainerStyle = styled.div`
  .image-slider-card{
    width: 280px;
    height: 343px;
    border-radius: 100px 20px 20px 20px;
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
      border-radius: 100px 20px 20px 20px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      padding: 18px;
    }
  }
  
`