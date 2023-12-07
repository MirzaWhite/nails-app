import styled from "styled-components";

export const PartnerBrandContainerStyle = styled.div`
  padding: 80px;
  .inner-container{
    background: #EFEAF2;
    border-radius: 100px 20px;
    padding: 32px;    
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    margin-bottom: 40px;
  }
  .partner-section{
    gap: 48px;
    overflow: scroll;
    .partner-item{
      width: 100px;
      height: 100px;
      background: #FFFFFF;
      position: relative;
      border-radius: 100%;
      overflow: hidden;
      flex-grow: 0;
      flex-shrink: 0;
    }
    &::-webkit-scrollbar{
      width: 0px;
      background: transparent;
    }
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .inner-container{
      padding: 30px 10px;
    }
    .description{
      margin-bottom: 8px;
    }
    .partner-section{
      gap: 14px;      
      .partner-item {
        width: 54px;
        height: 54px;       
        &:first-child{
          margin-left: 30px;
        }
        &:last-child{
          margin-right: 30px;
        }
      }     
    }
  }
`