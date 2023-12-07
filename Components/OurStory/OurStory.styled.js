import styled from "styled-components";

export const OurStoryStyled = styled.section`
  @media (min-width: 1224px){
    margin-bottom: 80px;
  }
  .our-story-banner {
    padding: 24px;
  }

  .our-story-title {
    margin: 0;
    padding: 0 0 8px 0;
    font-family: "Jost";
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .our-story-description {
    margin: 0;
    font-family: "Jost";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #384955;
  }

  .our-story-cta button {
    max-width: 184px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 1224px) {
    padding: 0 80px;
    .our-story-banner {
      gap: 32px;
      background: linear-gradient(0deg, #FBFAFF 3.21%, #FFFFFF 100%);
      border-radius: 20px;
      //padding: 0 80px 0 80px;
    }

    .our-story-contents {
      max-width: 730px;
      width: 100%;
    }
  }
`;
