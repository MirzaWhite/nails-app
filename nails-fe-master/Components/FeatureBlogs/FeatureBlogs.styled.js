import styled from "styled-components";

export const FeatureBlogsStyled = styled.div`
  padding: 24px 24px 5px 24px;

  .blogs-cards-container {
    height: 950px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .search-Bar {
    position: relative;
    max-width: 600px;
    margin: 0 auto 24px auto;
    @media (max-width: 1224px) {
      max-width: 1100px;
      margin: 16px 20px 40px 20px;
    }
  }

  .search-Bar Input {
    height: 54px;
    width: 100%;
    padding-left: 32px;
    border-radius: 16px;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(91, 48, 124, 0.6), rgba(91, 48, 124, 0.6));
    border: 1px solid #5B307C99;
    color: #BFBBC2;
    font-family: Jost, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;

    :focus-visible {
      outline: none;
    }
  }

  .search-logo {
    position: absolute;
    padding-right: 14px;
    top: 30%;
    right: 0;
  }

  .search-box::placeholder {
    color: #BFBBC2;
    font-family: Jost, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
  }

  .no-data-found {
    font-family: Jost, sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 22px;
    padding-top: 36px;
  }

  @media (min-width: 1224px) {
    padding: 39px 0 80px 0;

    .blogs-cards-container {
      height: auto;
      overflow: auto;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 1128px;
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      row-gap: 41px;
      column-gap: 62px;
    }

    .no-data-found {
      font-size: 52px;
      padding-top: 72px;
    }

  }

`