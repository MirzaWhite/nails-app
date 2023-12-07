"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: process.env.NEXT_PUBLIC_SERVICE_URL,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 3038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const CustomImage = ({ alt , fallbackImg , ...props })=>{
    const { 0: src , 1: setSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.src);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        src: src,
        alt: alt,
        onError: ()=>setSrc(fallbackImg)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomImage);


/***/ }),

/***/ 4257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OfferServices_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7695);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2586);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3282);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1451);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3038);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_7__]);
uuid__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const OfferServices = (props)=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: hasMounted , 1: setHasMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: servicesData , 1: setServicesData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.Services);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_OfferServices_styled__WEBPACK_IMPORTED_MODULE_1__/* .OfferServicesContainerStyle */ .A, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_2__.H6, {
                weight: 600,
                className: "title text-center",
                children: "Services We Offer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_2__.B2, {
                weight: 400,
                className: "description text-center",
                color: "#384955",
                children: "We offer a variety of nail artistry and styling services that will help you to express your creativity and flaunt your style"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "back-container",
                children: [
                    isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex align-items-center justify-content-evenly large-device-services-list",
                        children: servicesData?.edges?.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "service-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_2__.S2, {
                                        weight: 500,
                                        className: "mb-2 text-center service-title",
                                        children: item?.node?.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        src: isDesktopOrLaptop ? item?.node?.desktopImage : item?.node?.mobileImage,
                                        alt: "",
                                        width: 280,
                                        height: 280,
                                        style: {
                                            borderRadius: "20px"
                                        },
                                        fallbackImg: "https://cdn.deepsense.space/nails/assets/images/offer-service-1.png",
                                        priority: false
                                    })
                                ]
                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)());
                        })
                    }),
                    !isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "small-device-services-list",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                            preExpanded: [
                                2
                            ],
                            children: servicesData?.edges.map((item, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionItem, {
                                    uuid: index,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionItemHeading, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionItemButton, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_2__.S2, {
                                                    weight: 500,
                                                    className: "mb-2 text-center",
                                                    children: item?.node?.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionItemPanel, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OfferServices_styled__WEBPACK_IMPORTED_MODULE_1__/* .AnimatePanelStyle */ .B, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    src: isDesktopOrLaptop ? item?.node?.desktopImage : item?.node?.mobileImage,
                                                    alt: "",
                                                    width: 280,
                                                    height: 280,
                                                    style: {
                                                        borderRadius: "20px"
                                                    },
                                                    fallbackImg: "https://cdn.deepsense.space/nails/assets/images/offer-service-1.png",
                                                    priority: false
                                                })
                                            })
                                        })
                                    ]
                                }, index);
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-center btn-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: "/products",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ContainedButton */ .F, {
                                padding: "16px 48px",
                                fontSize: "16px",
                                lineHeight: "22px",
                                children: "Our Services"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
// export default OfferServices;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>Promise.resolve(OfferServices), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ OfferServicesContainerStyle),
/* harmony export */   "B": () => (/* binding */ AnimatePanelStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OfferServicesContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: 0px 80px;
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    width: 40%;
    margin: 0 auto;
  }
  .back-container{
    width: 100%;
    height: 360px;
    background: #EFEAF2;
    border-radius: 20px 100px;
    margin-top: 120px;
    position: relative;
    .large-device-services-list{
      position: absolute;
      width: 100%;
      top: -90px;
    }
    .service-title{
      max-width: 200px;
      width: 100%;
      margin: auto;
    }
    .service-item{
      padding-top: 10px;
      background: #EFEAF2;
      border-radius: 20px;
    }
    .small-device-services-list{
      position: absolute;
      width: 100%;
      top: -200px;     
      .accordion{
        width: 280px;
        margin: 0 auto;
        background: #EFEAF2;
        border-radius: 20px;
        .accordion__item{          
          box-shadow: 0px -4px 4px rgba(91, 48, 124, 0.2);
          border-radius: 20px;
          .accordion__heading{           
            padding: 10px 0;
          }
        }
      }
    }
    .btn-section{
      position: absolute;
      width: 100%;
      bottom: 24px;
    }
  }
  
  
  @media(max-width: 1224px){
    padding: 40px 24px;
    .description{
      width: 100%;
    }
    .back-container{
      height: 400px;
      margin-top: 230px;
    }
  }
`;
const fadeinAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;
const AnimatePanelStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  animation-name: ${fadeinAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-in;
`;


/***/ })

};
;