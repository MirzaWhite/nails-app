
import styled from "styled-components";

export const BookConformStyle = styled.div`
  .modal {
    background: rgba(157, 135, 175, 0.7) !important;
    backdrop-filter: blur(3px) !important;
  }
  .closebutton{
    display: flex;
    justify-content: flex-end;
  }
  .modal-dialog {
    position: relative;
    width: auto;
    margin: 24px;
    pointer-events: none;
  }
  .modal-body {
    padding: 24px;
    @media(min-width: 1224px){
      padding: 40px 40px;
    }
  }
  .modal-dialog {
    @media(min-width: 700px) {
      max-width: 500px !important;
      margin-right: auto;
      margin-left: auto;
    }
    @media(min-width: 1200px) {
      max-width: 860px !important;
      margin-right: auto;
      margin-left: auto;
    }
  }
  .content-box{
    text-align: -webkit-center;
  }
`