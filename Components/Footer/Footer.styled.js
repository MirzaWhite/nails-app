import styled from "styled-components";

export const FooterStyled = styled.div`
  .subscribe-section{
    padding: 40px 24px;
  }
  .subscribe-box{
    background: #EFEAF2;
    border-radius: 20px;
    padding: 16px 12px;
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .privacy{
    cursor: pointer;
  }
  input{
    padding: 17px 15px;
    background: #FFFFFF;
    border-radius: 100px;
    width: 100%;
    color: #384955;
    border: none;
    @media(min-width: 1224px){
      background: #EFEAF2;
      border-radius: 80px;
      padding: 24px;
    }
  }
  input:focus{
    outline:none;
  }
  .Subscribe{
    padding: 10px 20px;
    background: #5B307C;
    box-shadow: 0px 0.606838px 24.2735px 7.28205px rgba(0, 0, 0, 0.08);
    border-radius: 24.2735px;
  }
  .DSsubscribe-box2{
    @media(min-width: 1224px){
      padding: 40px;
      background: #FFFFFF;
      border-radius: 20px;
      max-width: 550px;
    }
  }
  .DS-subscribe{
    @media(min-width: 1224px) {
      display: grid;
      place-items: flex-end;
    }
  }
  .input-field{
    position: relative;
  }
  .child{
    position: absolute;
    top: 7px;
    right: 5px;
    @media(min-width: 1224px){
      top: 9px;
    }
  }
  .ds-para{
    @media(min-width: 1224px){
      text-align: left;
      margin-top: 15px !important;
    }
  }
  .footer-section{
    padding: 24px 30px 40px 30px;
    background: #EFEAF2;
    border-radius: 200px 200px 0px 0px;
    text-align: -webkit-center;
    @media(min-width: 1224px){
      padding: 64px 0px;
      background: #EFEAF2;
      border-radius: inherit;
    }
  }
  .ds-footer-area{
    @media(min-width: 1224px){
      width: 90%;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
    }
  }
  .ds-links{
    @media(min-width: 1224px){
      display:flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 50px;
    }
   }
  .social-links{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin-top: 10px;
  }
  .links-section{
    cursor: pointer;
    @media(min-width: 1224px){
      text-align: justify;
    }
  }
  .head{
    margin: 21px 0px 16px 0px;
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media(min-width: 1224px){
      text-align: justify;
    }
  }
  .link-text{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media(min-width: 1224px){
      flex-direction: column;
      gap: 10px;
      align-items: baseline;
    }
  }
  .reserved{
    padding: 7px 0px 15px 0px ;
    text-align: -webkit-center;
  }
  .ds-reserve{
    display: none;
    @media(min-width: 1224px){
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0px auto;
    }
  }
`;