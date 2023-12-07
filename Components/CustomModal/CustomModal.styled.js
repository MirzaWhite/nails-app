import styled from "styled-components";

export const CustomModalContainerStyled = styled.div`
  .modal{
    background: rgba(157, 135, 175, 0.7);
    backdrop-filter: blur(3px);
  }
  @media(max-width: 1224px){
    .modal-dialog{
      margin: 32px;
    }
  }  
`