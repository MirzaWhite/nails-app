import styled from "styled-components";

export const FaqsStyled = styled.div`
  padding: 16px 24px;
  background: #EFEAF2;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 100px;

  .faqs-title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .faqs-subtitle {
    color: #384955;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px rgba(91, 48, 124, 0.1);
  }

  .accordion-body {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #384955;
    background: #FFFFFF;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 0 24px 24px 24px;
  }

  .accordion-item {
    background: #FFFFFF;
  }

  .accordion {
    padding-top: 24px;
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .accordion-button {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #5B307C;
  }

  .iQHCuG .accordion-item:first-of-type .accordion-button, .accordion-button:not(.collapsed) {
    box-shadow: none !important;
  }

  .accordion-button:after {
    background-image: url("/assets/plus-mobile.png");

  }

  .accordion-button:not(.collapsed):after {
    background-image: url("/assets/minus-mobile.png");
    position: absolute;
    bottom: 31px;
    right: 22px;
  }

  @media (min-width: 1224px) {
    padding: 32px 200px;
    background: #EFEAF2;
    border-radius: 20px 100px;
    margin: 80px;

    .accordion-button {
      font-size: 32px;
    }

    .accordion-body {
      max-width: 650px;
      width: 100%;
    }

    .accordion-button:after {
      background-image: url("/assets/plus.png")
    }

    .accordion-button:not(.collapsed):after {
      background-image: url("/assets/minus.png");
      bottom: 0;
      right: 22px;
    }
  }


`