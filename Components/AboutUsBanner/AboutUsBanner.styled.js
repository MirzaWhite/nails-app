import styled from "styled-components";

export const AboutUsBannerStyled = styled.section`
  padding: 40px 0;
  .about-us-banner {
    background: #efeaf2;
    border-radius: 80px 20px;
    padding: 40px 24px;
  }
  .about-us-title {
    margin: 0;
    padding: 0 0 8px 0;
    font-family: "Jost",sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .about-us-description {
    margin: 0;
    font-family: "Jost",sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #384955;
  }
  .about-us-cta  button{
    max-width: 222px;
    width: 100%;
    margin-top:24px;
    @media(min-width: 1224px){
      margin-top:31px;
    }
  }
  .about-us-banner-image {
    border-radius: 80px 20px;
  }

  @media (min-width: 1224px) {
    padding: 40px 0 80px 0;
    .about-us-banner {
      border-radius: 200px 20px;
      padding: 40px 80px;
      gap:45px;
      //margin-top:31px;
    }
    .about-us-contents {
      max-width: 500px;
      width: 100%;
    }
    .about-us-banner-image {
      border-radius: 100px 20px;
    }
  }
`;
