"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 6599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomModal_CustomModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mdb-react-ui-kit"
var external_mdb_react_ui_kit_ = __webpack_require__(7311);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/CustomModal/CustomModal.styled.js

const CustomModalContainerStyled = (external_styled_components_default()).div`
  .modal{
    background: rgba(157, 135, 175, 0.7);
    backdrop-filter: blur(3px);
  }
  @media(max-width: 1224px){
    .modal-dialog{
      margin: 32px;
    }
  }  
`;

;// CONCATENATED MODULE: ./Components/CustomModal/CustomModal.js



const CustomModal = (props)=>{
    const { show , setShowModal , toggleModal , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(CustomModalContainerStyled, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBModal, {
            show: show,
            setShow: setShowModal,
            tabIndex: "-1",
            staticBackdrop: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBModalDialog, {
                size: "lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBModalContent, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBModalBody, {
                        children: children
                    })
                })
            })
        })
    });
};
/* harmony default export */ const CustomModal_CustomModal = (CustomModal);


/***/ })

};
;