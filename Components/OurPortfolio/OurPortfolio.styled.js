import styled from "styled-components";

export const OurPortfolioContainerStyle = styled.div`
  padding: 64px 80px;
  @media(min-width: 1400px){
    display: grid;
    place-items: center;
  }
  .image-item{
    position: relative; 
    //padding-bottom: 100%;
    border-radius: 20px;
    overflow: hidden;
    height: 233px;
    &.small{
      width: 233px;
    }
    &.large{
      width: 399px;
    }
  }
  .our-portfolio{
    width: 50%;
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .image-item{
      height: 100px;
      flex-shrink: 0;
      flex-grow: 0;
      width: 100% !important;
    }
  }

`

export const PortfolioCardContainerStyle = styled.div`
  background: #EFEAF2;
  border-radius: 20px;
  padding: 0 32px;
  height: 233px;
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    margin-bottom: 24px;
  }
  @media(max-width: 1224px){
    height: auto;
    padding: 16px;
    .description{
      margin-bottom: 0;
    }
  }
`