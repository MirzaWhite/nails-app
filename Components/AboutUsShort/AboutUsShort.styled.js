import styled from "styled-components";

export const AboutUsShortContainerStyled = styled.div`
  padding: 67px 80px;

  .masonary-container {
    gap: 22px;

    .left-section, .right-section {
      width: 50%;
      gap: 22px;

      .large-part {
        height: 300px;
        width: 100%;
        overflow: hidden;
        position: relative;
      }

      .small-part {
        height: 200px;
        width: 100%;
      }
    }

    .left-section {
      margin-top: 30px;

      .large-part {
        border-radius: 90px 20px 20px 20px;
      }

      .small-part {
        background: #EFEAF2;
        box-shadow: 0px 4px 4px rgba(91, 48, 124, 0.2);
        border-radius: 90px 20px 20px 20px;
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
    }

    .right-section {
      .large-part {
        border-radius: 20px 20px 90px 20px;
      }

      .small-part {
        background: #EFEAF2;
        box-shadow: 0px 4px 4px rgba(91, 48, 124, 0.2);
        border-radius: 20px 20px 90px 20px;
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
    }
  }

  .about-details-section {
    background: #EFEAF2;
    border-radius: 40px 40px 230px 40px;
    padding: 32px;

    .section-title {
      border-bottom: 2px solid #5B307C;
      width: fit-content;
    }

    .title {
      background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .content-section {
      margin: 32px 0;
      width: 80%;
    }
  }

  @media (max-width: 1224px) {
    padding: 16px 24px;
    background: #EFEAF2;
    border-radius: 20px 20px 100px 20px;
    margin-top: 52px;
    .masonary-container {
      gap: 14px;

      .left-section, .right-section {
        gap: 14px;

        .large-part {
          height: 260px;
        }

        .small-part {
          height: 150px;
          background: #FFFFFF;
        }
      }
    }

    .about-details-section {
      padding: 0;

      .content-section {
        width: 100%;
      }
    }
  }
`