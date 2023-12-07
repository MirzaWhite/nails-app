import styled, { keyframes }  from "styled-components";

export const OfferServicesContainerStyle = styled.div`
  padding: 0px 80px;
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    width: 40%;
    margin: 0 auto;
  }
  .back-container{
    width: 100%;
    height: 360px;
    background: #EFEAF2;
    border-radius: 20px 100px;
    margin-top: 120px;
    position: relative;
    .large-device-services-list{
      position: absolute;
      width: 100%;
      top: -90px;
    }
    .service-title{
      max-width: 200px;
      width: 100%;
      margin: auto;
    }
    .service-item{
      padding-top: 10px;
      background: #EFEAF2;
      border-radius: 20px;
    }
    .small-device-services-list{
      position: absolute;
      width: 100%;
      top: -200px;     
      .accordion{
        width: 280px;
        margin: 0 auto;
        background: #EFEAF2;
        border-radius: 20px;
        .accordion__item{          
          box-shadow: 0px -4px 4px rgba(91, 48, 124, 0.2);
          border-radius: 20px;
          .accordion__heading{           
            padding: 10px 0;
          }
        }
      }
    }
    .btn-section{
      position: absolute;
      width: 100%;
      bottom: 24px;
    }
  }
  
  
  @media(max-width: 1224px){
    padding: 40px 24px;
    .description{
      width: 100%;
    }
    .back-container{
      height: 400px;
      margin-top: 230px;
    }
  }
`
const fadeinAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`
export const AnimatePanelStyle = styled.div`
  animation-name: ${fadeinAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-in;
`



