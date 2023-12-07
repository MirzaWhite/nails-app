import styled from "styled-components";

export const OurEligibilityStyled = styled.div`
  .Eligibility{
    padding: 40px 30px;
    background: #EFEAF2;
    border-radius: 80px 20px; 
    margin: 10px 0px;
    @media(min-width: 1224px){
      background: #EFEAF2;
      border-radius: 200px 20px;
      padding: 40px 30px;
      width: 95%;
      margin: 80px auto;
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 5%;
      justify-content: center;
      align-items: center;
    }
    @media(min-width: 1224px){
      padding: 80px 80px;
      width: 90%;
      grid-template-columns: 1fr 1fr;
    }
  }
  .mobile-head{
    @media(min-width: 1224px){
      display: none;
    }
  }
  .image-section{
    text-align: -webkit-center;
  }
  .head{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .heading{
    display: flex;
    align-items: flex-end;
    gap: 15px;
  }
  .conditions1{
    margin-top: 24px;
  }
  .ds-head{
    display: none;
    @media(min-width: 1224px){
      display: block;
    }
  }
`;