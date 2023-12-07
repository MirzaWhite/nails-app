"use strict";
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductView_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9458);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7311);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2586);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1451);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6555);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3038);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_11__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ProductView = (props)=>{
    const { toggleModal , product  } = props;
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)({
        minWidth: 1224
    });
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const handleShareDesign = ()=>{
        if (navigator.share) {
            const urlLink = router.asPath;
            navigator.share({
                title: "Share Design",
                text: "Check out this design",
                url: urlLink
            }).then(()=>{
                console.log("Design shared successfully");
            }).catch((error)=>{
                console.error("Error sharing design:", error);
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductView_styled__WEBPACK_IMPORTED_MODULE_1__/* .ProductViewContainerStyled */ .N, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "product-container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "position-relative product-image-section",
                            children: [
                                !isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex justify-content-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
                                        size: "lg",
                                        floating: true,
                                        tag: "a",
                                        onClick: toggleModal,
                                        className: "floating-btn close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                            fas: true,
                                            icon: "times",
                                            size: "lg",
                                            className: "icon"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-image-slider-container position-relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                            speed: 1000,
                                            slidesPerView: 1,
                                            loop: true,
                                            effect: "fade",
                                            modules: [
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
                                            ],
                                            onBeforeInit: (swiper)=>{
                                                swiperRef.current = swiper;
                                            },
                                            children: product?.gallery?.map((item)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: isDesktopOrLaptop ? "" : "d-flex justify-content-center",
                                                        children: isDesktopOrLaptop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: item.desktopImage ? item.desktopImage : "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                                            alt: "product",
                                                            width: 327,
                                                            height: 432,
                                                            style: {
                                                                borderRadius: "10px"
                                                            },
                                                            fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: item.mobileImage ? item.mobileImage : "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                                            alt: "product",
                                                            width: 148,
                                                            height: 172,
                                                            style: {
                                                                borderRadius: "10px"
                                                            },
                                                            fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png"
                                                        })
                                                    })
                                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
                                            })
                                        }),
                                        !isDesktopOrLaptop && product?.gallery?.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex gap-5 align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "leftArrow-btn",
                                                    onClick: ()=>swiperRef.current?.slidePrev(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                                        fas: true,
                                                        icon: "arrow-left",
                                                        size: "lg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rightArrow-btn",
                                                    onClick: ()=>swiperRef.current?.slideNext(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                                        fas: true,
                                                        icon: "arrow-right",
                                                        size: "lg"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex justify-content-center align-items-center mt-3",
                                    children: [
                                        !isDesktopOrLaptop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
                                            className: "share-btn px-0",
                                            onClick: handleShareDesign,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                                    fas: true,
                                                    icon: "share-alt",
                                                    size: "lg"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                                    className: "ms-3",
                                                    weight: 400,
                                                    children: "Share Design"
                                                })
                                            ]
                                        }) : "",
                                        isDesktopOrLaptop && product?.gallery?.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex gap-5 w-100 justify-content-between align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "leftArrow-btn",
                                                    onClick: ()=>swiperRef.current?.slidePrev(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                                        fas: true,
                                                        icon: "arrow-left",
                                                        size: "lg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rightArrow-btn",
                                                    onClick: ()=>swiperRef.current?.slideNext(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                                        fas: true,
                                                        icon: "arrow-right",
                                                        size: "lg"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-7",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-detail-section ps-sm-4 ps-0",
                            children: [
                                isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex justify-content-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
                                        size: "lg",
                                        floating: true,
                                        tag: "a",
                                        onClick: toggleModal,
                                        className: "floating-btn close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
                                            fas: true,
                                            icon: "times",
                                            size: "lg",
                                            className: "icon"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "py-sm-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.S1, {
                                            weight: 500,
                                            className: "product-name text-center text-sm-start",
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B1, {
                                            weight: 500,
                                            className: "product-description",
                                            color: "#384955",
                                            children: product.longDescription
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex justify-content-center justify-content-sm-start align-items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex gap-2 align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: "https://cdn.deepsense.space/nails/assets/images/hash-tag.svg",
                                                            alt: "clock",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                                            weight: 500,
                                                            color: "#BFBBC2",
                                                            className: "mb-0",
                                                            children: product.sku
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "vertical-line"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex gap-2 align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: "https://cdn.deepsense.space/nails/assets/images/clock.svg",
                                                            alt: "clock",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                                            weight: 500,
                                                            color: "#BFBBC2",
                                                            className: "mb-0",
                                                            children: product.duration
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-flex justify-content-center justify-content-sm-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: `/booking?product=${product.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_10__/* .ContainedButton */ .F, {
                                                    padding: "16px 48px",
                                                    fontSize: "16px",
                                                    children: "Book Appointment!"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ProductViewContainerStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProductViewContainerStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  .floating-btn{
    background: #FFFFFF;
    &:active,&:focus,&:hover{
      background: #FFFFFF;
    }
    .icon:before{
      color: #000000;
    }
  }
  .share-btn{
    color: #5B307C;
    background: #ffffff;
    box-shadow: none;
    display: flex;
    align-items: center;
    &:active,&:focus,&:hover{
      background: #ffffff;
      box-shadow: none;
    }
  }
  .leftArrow-btn,.rightArrow-btn{
    color: #5B307C;
    cursor: pointer;
  }
  .product-name{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .product-description{
    margin-bottom: 8px;
  }
  .vertical-line{
    width: 22px;
    height: 0px;
    border: 1px solid #BFBBC2;
    transform: rotate(90deg);
  } 
  @media (max-width: 1224px){ 
    .leftArrow-btn{
      position: absolute;
      top:50%;
      left: 24px;
      transform: translateY(-50%);
      z-index: 1;
    }
    .rightArrow-btn{
      position: absolute;
      top:50%;
      right: 24px;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
`;


/***/ })

};
;