import styled from "styled-components";

export const IndividualBlogStyled = styled.div`
  padding: 0  80px;

  @media (max-width: 1224px) {
    padding:  0 24px;
  }

  .blog-banner {
    max-width: 1280px;
    width: 100%;
    height: 586px;
    border-radius: 210px 20px;
    background: #EFEAF2;
    display: flex;
    padding: 41.967px;
    margin: 24px auto 40px auto;
    @media (max-width: 1224px) {
      border-radius: 53.484px 5.094px;
      padding: 20px;
      margin-bottom: 8px;
      margin-top: 24px;
      height: 222px;
    }
  }

  .individual-banner-image {
    border-radius: 168px 20px;
    @media (max-width: 1224px) {
      border-radius: 40px 6px;
    }
  }

  .description-section {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    display: flex;
    @media (max-width: 1224px) {
      display: block;
    }
  }

  .left-side {
    width: 20%;
    @media (max-width: 1224px) {
      width: 100%;
    }
  }

  .date-time {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 1224px) {
      justify-content: center;
      margin-bottom: 20px;
    }
  }

  .line {
    width: 35px;
    height: 1px;
    background: #C4C4C4;
  }

  .tags-section {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 40px;
  }

  .tags {
    padding: 5px 10px;
    border-radius: 8px;
    background: #D7D3DA;
  }

  .right-side {
    padding-left: 40px;
    width: 80%;
    @media (max-width: 1224px) {
      padding: 0;
      width: 100%;
    }
  }

  .title {
    background: var(--gradient-shade-2, linear-gradient(165deg, #5B307C 0%, #000 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 845px;
    margin-bottom: 24px;
    @media (max-width: 1224px) {
      margin-bottom: 8px;
    }
  }

  .individual-blog-description {
    padding: 0 0 60px 0;

    p {
      font-family: Jost, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-align: justify !important;
      margin: 0 !important;
      padding: 0 0 20px 0;
      color: #384955;
    }

    @media (min-width: 1224px) {
      padding: 0 0 20px 0;
      p {
        line-height: 22px;
        padding: 0 0 28px 0;
      }
    }
  }
`;