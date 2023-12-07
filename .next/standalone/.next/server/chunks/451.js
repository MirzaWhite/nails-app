"use strict";
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 1451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ ContainedButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "mdb-react-ui-kit"
var external_mdb_react_ui_kit_ = __webpack_require__(7311);
;// CONCATENATED MODULE: ./elements/Button/Button.styled.js


const ButtonStyled = external_styled_components_default()(external_mdb_react_ui_kit_.MDBBtn)`
  background-color: ${({ bg_color  })=>bg_color ? bg_color : "#5B307C"};
  border-radius: ${({ radious  })=>radious ? radious : "48px"};
  padding: ${({ padding  })=>padding};
  width: ${({ width  })=>width};
  text-transform: capitalize;
  color: ${({ color  })=>color ? color : "#FFFFFF"};
  font-family: "Jost", sans-serif;
  font-weight: ${(props)=>props.weight ? props.weight : "400"};
  font-size: ${({ fontSize  })=>fontSize};
  line-height: ${({ lineheight  })=>lineheight};
  border: ${({ border_color  })=>`1px solid ${border_color}`};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  &:active,
  &:hover,
  &:focus {
    background-color: ${({ active_bg_color  })=>active_bg_color ? active_bg_color + " !important" : "#5B307C !important"};
    color: ${({ color  })=>color ? color : "#FFFFFF"};
    border: ${({ border_color  })=>`1px solid ${border_color}`};
  }
  &:disabled {
    background-color: #D7D3DA;
    color:  #787579;
    opacity: 0.38;
    cursor: no-drop;
  }
`;

;// CONCATENATED MODULE: ./elements/Button/Button.js


const ContainedButton = ({ bg_color , radious , padding , width , color , active_bg_color , disabled_bg_color , disabled , fontSize , lineHeight , border_color , children , onClick , CustomclassName ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonStyled, {
        bg_color: bg_color,
        radious: radious,
        padding: padding,
        width: width,
        color: color,
        active_bg_color: active_bg_color,
        disabled_bg_color: disabled_bg_color,
        disabled: disabled,
        fontSize: fontSize,
        lineheight: lineHeight,
        border_color: border_color,
        className: `d-flex justify-content-center align-items-center ${CustomclassName}`,
        onClick: onClick,
        children: [
            children,
            " "
        ]
    });
};


/***/ })

};
;