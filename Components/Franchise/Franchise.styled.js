import styled from "styled-components";

export const FranchiseStyled = styled.section`
  padding: 16px 24px;
  background: #EFEAF2;
  border-radius: 20px 100px;
  margin-top: 40px;

  .franchise-title {
    color: #384955;
    border-bottom: 2px solid #5B307C;
    width: 71px;
  }

  .franchise-subtitle {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding-top: 16px;
    padding-bottom: 5px;
  }

  .franchise-description {
    color: #384955;
    padding-bottom: 13px;
  }

  .franchise-image {
    border-radius: 100px;
  }

  .read-more-btn {
    text-align: center;
    padding-top: 13px;
  }

  //
  .read-more-btn button {
    padding: 16px 48px;
    background: #5B307C;
    border: 1px solid #8F8C91;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
  }

  @media (min-width: 1270px) {
    background: transparent;
    padding: 50px 80px 0 80px;
    .franchise-image {
      border-radius: 0px 20px 100px 0px;
    }

    .franchise-subtitle {
      line-height: 44px;
    }

    .franchise-content {
      background: #EFEAF2;
      border-radius: 100px 0px 0px 20px;
      padding: 34px 48px;
    }

    .read-more-btn {
      text-align: start;
      padding-top: 24px;
    }
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }

  .image-section {
    @media (min-width: 1270px) {
      width: 642px;
      height: 352px;
    }
  }

  .image-section span {
    @media (min-width: 1270px) {
      width: 642px !important;
      height: 352px !important;
    }
  }
`