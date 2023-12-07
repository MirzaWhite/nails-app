import styled from "styled-components";

export const ProductViewContainerStyled = styled.div`
  .floating-btn{
    background: #FFFFFF;
    &:active,&:focus,&:hover{
      background: #FFFFFF;
    }
    .icon:before{
      color: #000000;
    }
  }
  .share-btn{
    color: #5B307C;
    background: #ffffff;
    box-shadow: none;
    display: flex;
    align-items: center;
    &:active,&:focus,&:hover{
      background: #ffffff;
      box-shadow: none;
    }
  }
  .leftArrow-btn,.rightArrow-btn{
    color: #5B307C;
    cursor: pointer;
  }
  .product-name{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .product-description{
    margin-bottom: 8px;
  }
  .vertical-line{
    width: 22px;
    height: 0px;
    border: 1px solid #BFBBC2;
    transform: rotate(90deg);
  } 
  @media (max-width: 1224px){ 
    .leftArrow-btn{
      position: absolute;
      top:50%;
      left: 24px;
      transform: translateY(-50%);
      z-index: 1;
    }
    .rightArrow-btn{
      position: absolute;
      top:50%;
      right: 24px;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
`