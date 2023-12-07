import styled from "styled-components";
import {MDBBtn} from "mdb-react-ui-kit";

export const ButtonStyled = styled(MDBBtn)`
  background-color: ${({ bg_color }) => bg_color? bg_color : "#5B307C"};
  border-radius: ${({ radious }) => radious? radious : "48px"};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  text-transform: capitalize;
  color: ${({ color }) => color? color : "#FFFFFF"};
  font-family: "Jost", sans-serif;
  font-weight: ${(props) => props.weight? props.weight : "400"};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineheight }) => lineheight};
  border: ${({ border_color }) => `1px solid ${border_color}`};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  &:active,
  &:hover,
  &:focus {
    background-color: ${({ active_bg_color }) => active_bg_color? active_bg_color+" !important" : "#5B307C !important"};
    color: ${({ color }) => color? color : "#FFFFFF"};
    border: ${({ border_color }) => `1px solid ${border_color}`};
  }
  &:disabled {
    background-color: #D7D3DA;
    color:  #787579;
    opacity: 0.38;
    cursor: no-drop;
  }
`;

