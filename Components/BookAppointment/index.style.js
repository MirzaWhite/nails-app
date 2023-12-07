import styled from "styled-components";

const BookAppointmentStyle = styled.div`
  padding: 40px 80px;

  .inner-div {
    background: #EFEAF2;
    border-radius: 20px;
    padding: 40px 0;
  }

  .title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .max-w-400 {
    max-width: 400px;
  }

  @media only screen and (max-width: 1224px) {
    padding: 44px 0;
    .inner-div {
      border-radius: 20px;
      padding: 16px 20px;
    }
  }
`;
export const BookAppointmentFormStyle = styled.div`
  padding: 40px 6%;
  width: 100%;
  position: relative;

  select {
    -webkit-appearance: none;
    appearance: none;
  }

  

  @media (min-width: 1224px) {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-image: url(${`./assets/select-arrow.png`}) !important;
      background-repeat: no-repeat !important;
      background-position-x: 92% !important;
      background-position-y: 26px !important;
      border: 1px solid #dfdfdf !important;
      border-radius: 2px;
      @media (max-width: 1224px) {
        background-position-y: 26px !important;
      }
    }
  }


  .time-picker {
    color: black;
  }

  .inner-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5%;

    .form, .form-summery {
      width: 50%;
    }
  }

  @media only screen and (max-width: 1224px) {
    flex-direction: column;
    .inner-form {
      flex-direction: column;

      .form, .form-summery {
        width: 100% !important;
      }
    }

  }

  .form-summery {
    width: 50%;
    position: relative;
    background: #FFFFFF;
    filter: drop-shadow(0px 8px 16px #D1C6DB);
    @media only screen and (max-width: 1224px) {
      width: 100%;
      margin: 40px 0;
    }

    .main-content {
      padding: 32px;
    }

    hr {
      border: 1px dashed #BFBBC2;
    }
  }

  .top-border-vector {
    position: absolute;
    transform: translateY(-90%);
    width: 100%;
  }

  .bottom-border-vector {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: rotate(180deg) translateY(-90%);
  }

  @media only screen and (max-width: 1224px) {
    padding: 0;
  }
`
export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  Width: 100%;

  input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }

 

  input, select {
    position: relative;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 17.5px 16px;
    border: none;
    width: 100%;
    color: #384955;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    filter: drop-shadow(0px 8px 16px #D1C6DB);


    &::placeholder {
      color: #BFBBC2;
    }

    &:focus {
      outline: none;
    }

  }
  @media (min-width: 1224px) {
    select{
      font-size: 18px;
      
    }
  }
  @media (max-width: 1224px) {
    input, select {
      font-size: 16px;
    }
  }
`
export const SelectServicesStyle = styled.div`
  .select-our-services, .select-our-service {
    background: #FFFFFF;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 16px;
    filter: drop-shadow(0px 8px 16px #D1C6DB);
    padding: 16px 17.5px;
    //margin-top: 40px;
  }

  .select-our-service {
    padding: 0 17.5px;
  }

  .search-store-data {
    height: 62px;
  }

  .selected-value {
  }

  .search-store {
    border: none;
    width: 100%;
    filter: none;
    padding: 0;
  }

  .search-address {
    border: none;
    width: 100%;
    filter: none;
    background: #FFFFFF;
    color: #A9A8AD;
  }

  .single-service {
    cursor: pointer;

    &:hover {
      background: #F5F4F6;
    }
  }
  .no-store{
    padding: 67px 0;
    @media(min-width: 1224px){
      padding: 76px 0;
    }
  }
  
  .opints-to-select {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    -ms-overflow-style: none;
    scrollbar-width: none;
 

    &&::-webkit-scrollbar {
      display: none;
    }
  }
`


export default BookAppointmentStyle;


export const ServiceCardContainerStyle = styled.div`
  .image-section {
    width: 100px;
    height: 133px;
    border: 1px solid rgba(157, 135, 175, 0.7);
    border-radius: 8px;
    overflow: hidden;
  }

  @media (max-width: 1224px) {
    .image-section {
      width: 72px;
      height: 104px;
    }
  }
`
export const BookConformStyle = styled.div`
  .modal {
    background: rgba(157, 135, 175, 0.7) !important;
    backdrop-filter: blur(3px) !important;
  }

  .closebutton {
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
    @media (min-width: 1224px) {
      padding: 40px 40px;
    }
  }

  .modal-dialog {
    @media (min-width: 700px) {
      max-width: 500px !important;
      margin-right: auto;
      margin-left: auto;
    }
    @media (min-width: 1200px) {
      max-width: 860px !important;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .content-box {
    text-align: -webkit-center;
  }
`