import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: sticky;
  z-index: 1000;
  width: 100%;
  top: 0;
  .Header {
    padding: 12px 24px;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 20px 20px;
    overflow: hidden;
    transition: 1s;
    height: 64px;
    @media(min-width: 1224px){
      height:fit-content;
      padding: 15px 5%;
      background: #FFFFFF;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
      border-radius: 0 0;
    }
  }
.Header1{
  padding: 12px 24px;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  transition: 1s;
  height: 650px;
  @media(min-width: 760px){
    height: 650px;
  }
  @media(min-width: 1224px){
    height:100px;
  }
}
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close{
    cursor: pointer;
  }
  .menu-text-section{
    display: none;
    @media(min-width: 1224px){
      display: block;
    }
  }
  .book{
    padding: 12px 32px;
    background: #5B307C;
    box-shadow: 0px 1px 40px 12px rgba(0, 0, 0, 0.08);
    border-radius: 40px;
    width: fit-content;
    cursor: pointer;
  }
  .menu-text-section{
    display: none;
    @media(min-width: 1224px){
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 1224px){
      display: none;
    }
  }
  .title-focus{
    cursor: pointer;
    color: #384955;
    padding: 12px 32px;
    transition: all 0.5s;
    width: fit-content;
    border-radius: 40px;
  }
  .title-focus:hover{    
    background: #5B307C;
    box-shadow: 0px 1px 40px 12px rgba(0, 0, 0, 0.08);       
    color: #ffffff !important;
  }
  .menu-section{
    cursor: pointer;
    @media(min-width: 1224px){
      display: none;
    }
  }
  .logo-section{
    cursor: pointer;
  }
`;