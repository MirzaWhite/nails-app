import styled from "styled-components";

export const H4 = styled.h4`
  font-family: "Jost", sans-serif;
  font-size: 40px;
  line-height: 55px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 76px;
  }
`;

export const H6 = styled.h6`
  font-family: "Jost", sans-serif;
  font-size: 32px;
  line-height: 44px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 55px;
  }
`;

// Styling for Subtitle

export const S1 = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 20px;
  line-height: 27px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const S2 = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 24px;
  line-height: 33px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

//body style

export const B1 = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 16px;
  line-height: 14px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const B2 = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const B3 = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin || 0};
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;