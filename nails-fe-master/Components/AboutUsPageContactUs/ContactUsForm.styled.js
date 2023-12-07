import styled from "styled-components";

export const ContactUsFormtStyle = styled.section`
  padding: 24px 24px 36px 24px;

  .about-us-contact {
    padding: 16px;
    background: #EFEAF2;
    border-radius: 20px;
    scroll-margin-top: 64px;
    @media(min-width: 1224px){
      scroll-margin-top: 85px;
    }
  }
  .title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 20px;
    text-align: -webkit-center;
  }
.search-store{
  border:none;
  width: 100%;
}
  .form-values{
    background: #FFFFFF;
    padding: 10px;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #BFBBC2;
    margin-bottom: 15px;
  }

  .contact-detail-part {
    padding: 24px 10px 12px 10px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 20px;
  }

  .contacts {
    gap: 16px;
    padding-top: 12px;
  }

  .address-part {
    color: #384955;
  }

  .view-map {
    color: #5B307C;
    padding: 30px 0 28px 0;
    cursor: pointer;
  }

  .message {
    height: 80px !important;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 16px;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #BFBBC2;
    border: none;
    padding: 10px;
  }

  input:focus, .message:focus {
    outline: none;
  }

  ::placeholder {
    color: #A9A8AD !important;
  }

  button {
  
    text-align: center;
    
  }

  button:focus {
    outline: none;
  }

  .submit {
    text-align: -webkit-center;
  }
  .error-msg{
    color: red;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 500;
  }


  @media (min-width: 1224px) {
    padding-bottom: 85px;
    .form-section {
      width: 87%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .submit {
      margin-top: 20px;
    }

    .message {
      height: 110px !important;
      font-size: 20px;
      color: #A9A8AD;
      max-width: 500px;
      width: 100%;
    }

    .form-values {
      border-radius: 16px;
      padding: 17px;
      font-size: 20px;
      color: #A9A8AD;
      max-width: 500px;
    }

    .about-us-contact {
      padding: 40px 0;
      width: 90%;
      margin: 0 auto;
    }

    .title {
      margin-bottom: 40px;
    }


    .contact-detail-part {
      max-width: 500px;
      width: 100%;
    }

    .contacts {
      gap: 60px;
      padding-top: 20px;
    }

    .view-map {
      color: #5B307C;
      padding-bottom: 16px;
    }

    .locate-us {
      width: 50vw;
      padding-right: 50px;
      border-right: 3px solid #D7D3DA;

    }

    .contact-us {
      padding-left: 50px;
      width: 50vw;
    }

    .contact-detail-part {
      padding: 24px 24px 12px 36px;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }

`