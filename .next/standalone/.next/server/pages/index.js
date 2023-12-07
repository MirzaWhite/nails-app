"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutUsShort_AboutUsShort)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/AboutUsShort/AboutUsShort.styled.js

const AboutUsShortContainerStyled = (external_styled_components_default()).div`
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
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: ./elements/Button/Button.js + 1 modules
var Button = __webpack_require__(1451);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/AboutUsShort/AboutUsShort.js








const AboutUsShort = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(AboutUsShortContainerStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-sm-4 order-2 order-sm-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "masonary-container d-flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "left-section d-flex flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "large-part",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://cdn.deepsense.space/nails/assets/images/About-section1.webp",
                                                alt: "",
                                                layout: "fill",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                priority: false
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "small-part"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "right-section d-flex flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "small-part"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "large-part",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://cdn.deepsense.space/nails/assets/images/About-section2.webp",
                                                alt: "",
                                                layout: "fill",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                priority: false
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "d-flex justify-content-center mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about-us",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    children: "Know More"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-sm-8 order-1 order-sm-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-100 d-flex align-items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "about-details-section",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                    weight: 400,
                                    color: "#384955",
                                    className: "section-title mb-0",
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content-section",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                            weight: 500,
                                            className: "title",
                                            children: "Discover the passion behind our artistic nail designs!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            weight: 400,
                                            color: "#384955",
                                            className: "description mb-0",
                                            children: "Nails’n Beyond was founded by a team of experienced nail artists who saw the need for high-quality, affordable nail artistry services"
                                        })
                                    ]
                                }),
                                isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about-us",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                                        padding: "16px 48px",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        children: "Know More"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
// export default AboutUsShort;
/* harmony default export */ const AboutUsShort_AboutUsShort = (dynamic_default()(()=>Promise.resolve(AboutUsShort), {
    ssr: false
}));


/***/ }),

/***/ 9250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7311);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2607);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2586);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1451);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var _CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6599);
/* harmony import */ var _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(641);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6555);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3038);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_8__, _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_11__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_8__, _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const BestSeller = (props)=>{
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    const isDesktopOrLaptop2 = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1000
    });
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedProduct , 1: setSelectedProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: bestSellerData , 1: setBestSellerData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.BestSellers);
    const slidesPerView = 3;
    const toggleModal = ()=>{
        setShowModal(!showModal);
    };
    const chooseDesign = (product)=>{
        setSelectedProduct(product);
        setShowModal(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .MainContainerStyle */ .fk, {
        className: "top-picks-component",
        children: [
            !isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                        weight: 400,
                        className: "head mb-3",
                        color: "#384955",
                        children: "Best Sellers"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.H6, {
                        weight: 500,
                        className: "title",
                        children: "Unleash your cosmic side with celestial themed nail art"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                        weight: 400,
                        className: "description",
                        color: "#384955",
                        children: "Embrace the beauty of the stars, moons, and galaxies through shimmering metallic hues, celestial motifs, and celestial accents. These designs are perfect for adding a touch of magic to your nails."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ds-Best-seller-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-container position-relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                            spaceBetween: 0,
                            slidesPerView: 1,
                            slideper: true,
                            loop: true,
                            breakpoints: {
                                700: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                    centeredSlides: false
                                },
                                1350: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                    centeredSlides: true
                                }
                            },
                            onSlideChange: ()=>console.log("slide change"),
                            onSwiper: (swiper)=>console.log(swiper),
                            onBeforeInit: (swiper)=>{
                                swiperRef.current = swiper;
                                console.log(swiper);
                            },
                            children: bestSellerData?.edges.map((item)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwiperCard, {
                                        product: item.node,
                                        chooseDesign: chooseDesign
                                    })
                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
                            })
                        })
                    }),
                    isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ds-best-seller-text",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                weight: 400,
                                className: "head mb-3",
                                color: "#384955",
                                children: "Best Sellers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                weight: 500,
                                className: "title",
                                children: "Unleash your cosmic side with celestial themed nail art"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                weight: 400,
                                className: "description",
                                color: "#384955",
                                children: "Embrace the beauty of the stars, moons, and galaxies through shimmering metallic hues, celestial motifs, and celestial accents. These designs are perfect for adding a touch of magic to your nails."
                            }),
                            bestSellerData?.edges.length > slidesPerView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "controll-button",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                                            size: "lg",
                                            floating: true,
                                            tag: "a",
                                            onClick: ()=>swiperRef.current?.slidePrev(),
                                            className: "floating-btn ds-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                                                fas: true,
                                                icon: "arrow-left",
                                                size: "lg",
                                                className: "icon"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                                            size: "lg",
                                            floating: true,
                                            tag: "a",
                                            onClick: ()=>swiperRef.current?.slideNext(),
                                            className: "floating-btn ds-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                                                fas: true,
                                                icon: "arrow-right",
                                                size: "lg",
                                                className: "icon"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-center gap-4",
                children: [
                    !isDesktopOrLaptop && bestSellerData?.edges.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        className: "floating-btn left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                            fas: true,
                            icon: "arrow-left",
                            size: "lg",
                            className: "icon"
                        })
                    }),
                    !isDesktopOrLaptop2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                        href: "/products",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .ContainedButton */ .F, {
                            fontSize: "16px",
                            padding: "16px 48px",
                            children: "Explore Designs"
                        })
                    }),
                    !isDesktopOrLaptop && bestSellerData?.edges.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slideNext(),
                        className: "floating-btn right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                            fas: true,
                            icon: "arrow-right",
                            size: "lg",
                            className: "icon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                show: showModal,
                setShowModal: setShowModal,
                toggleModal: toggleModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    toggleModal: toggleModal,
                    product: selectedProduct
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(()=>Promise.resolve(BestSeller), {
    ssr: false
}));
const SwiperCard = (props)=>{
    const { product , chooseDesign  } = props;
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .SwiperCardContainerStyle */ .rj, {
        className: "d-flex flex-column justify-content-center align-items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                className: "mySwiper2 swiper-v",
                direction: "horizontal",
                spaceBetween: 50,
                nested: true,
                pagination: {
                    clickable: true
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                ],
                children: product?.gallery.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .ImageSliderContainerStyle */ .lb, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "image-slider-card position-relative",
                                children: [
                                    isDesktopOrLaptop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        src: item.desktopImage,
                                        fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        width: 343,
                                        objectPosition: "center",
                                        priority: false
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        src: item.mobileImage,
                                        fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overlay",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                            color: "#FFFFFF",
                                            weight: 400,
                                            className: "mb-0",
                                            children: product.sku
                                        })
                                    })
                                ]
                            })
                        })
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B1, {
                weight: 500,
                color: "#384955",
                className: "mb-4 mt-2 top-pick-name",
                children: product.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .ContainedButton */ .F, {
                padding: isDesktopOrLaptop ? "14px 88px" : "14px 32px",
                width: "280px",
                bg_color: "#FFFFFF",
                color: "#5B307C",
                active_bg_color: "#FFFFFF",
                border_color: "#5B307C",
                fontSize: "16px",
                onClick: ()=>chooseDesign(product),
                children: "Choose Design"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fk": () => (/* binding */ MainContainerStyle),
/* harmony export */   "lb": () => (/* binding */ ImageSliderContainerStyle),
/* harmony export */   "rj": () => (/* binding */ SwiperCardContainerStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: 20px 24px;
  background: #EFEAF2;
  border-radius: 20px 20px 100px 20px;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .ds-Best-seller-section{
    
    @media(min-width: 1023px){
     display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .controll-button{
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
  }
  .floating-btn{
    background: #FFFFFF;
    &:active,&:focus,&:hover{
      background: #FFFFFF;
    }
    .icon:before{
      color: #000000;
    }
  }
  .swiper-container{
    width: 70%;
    margin: 40px auto 40px 0px;
    .floating-btn{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.left{
        left: -60px;
      }
      &.right{
        right: -60px;
      }
    }
  } 
  .head{
    text-decoration: underline;
    text-decoration-color: #5B307C;
    text-decoration-thickness: 2px;
  }
  .ds-best-seller-text{
    padding: 24px 36px;
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .description{
      width: 100%;
    }
    .swiper-container{
      width: 100%;
    }
  }
`;
const SwiperCardContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #FFFFFF;
  border-radius: 100px 16px 16px 16px;
  padding: 20px; 
  max-width: 320px;
  margin: 0 auto;
    .swiper-pagination{
      top: 0;
      .swiper-pagination-bullet{
        background: #8E4FC7;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          background: #5B307C;
        }
      }
    }
  @media(min-width: 1224px){
    .top-pick-name{
      height: 50px;
    }
  }
`;
const ImageSliderContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  .image-slider-card{
    width: 280px;
    height: 343px;
    border-radius: 100px 20px 20px 20px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    .overlay{
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.48) 2.68%, rgba(0, 0, 0, 0) 100%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100px 20px 20px 20px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      padding: 18px;
    }
  }
  
`;


/***/ }),

/***/ 1092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var _HeroBanner_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6514);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2586);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7311);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3038);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const HeroBanner = (props)=>{
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
        minWidth: 1224
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: hasMounted , 1: setHasMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: bannerData , 1: setBannerData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.HomeBanner);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    const navigateToServices = ()=>{
        router.push("/products");
    };
    if (!hasMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HeroBanner_styled__WEBPACK_IMPORTED_MODULE_6__/* .HomeBannerStyled */ .Z, {
        className: "position-relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                className: "mySwiper",
                loop: true,
                autoplay: {
                    delay: 3000
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
                ],
                onBeforeInit: (swiper)=>{
                    swiperRef.current = swiper;
                },
                children: bannerData?.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-card-item position-relative",
                            children: isDesktopOrLaptop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                src: item?.desktopImage,
                                alt: "hero banner",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center",
                                fallbackImg: "https://cdn.deepsense.space/nails/assets/images/homebanner.png"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                src: item?.mobileImage,
                                alt: "hero banner",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center",
                                fallbackImg: "https://cdn.deepsense.space/nails/assets/images/homebanner.png"
                            })
                        })
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)());
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "banner-details",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.S1, {
                        className: "text-left text-sm-center banner-title",
                        weight: 500,
                        children: "Nails That Go Beyond"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B2, {
                        className: "text-left text-sm-center banner-description",
                        weight: 400,
                        children: "Experience our curated collection of expert nail artistry services to take your nail art game to the next level"
                    }),
                    isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBBtn, {
                        className: "service-btn",
                        onClick: navigateToServices,
                        children: "Our Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between justify-content-sm-center align-items-center gap-4 custom-navigation",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBBtn, {
                                size: "lg",
                                floating: true,
                                tag: "a",
                                onClick: ()=>swiperRef.current?.slidePrev(),
                                className: "floating-btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBIcon, {
                                    fas: true,
                                    icon: "arrow-left",
                                    size: "lg",
                                    className: "icon"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBBtn, {
                                size: "lg",
                                floating: true,
                                tag: "a",
                                onClick: ()=>swiperRef.current?.slideNext(),
                                className: "floating-btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBIcon, {
                                    fas: true,
                                    icon: "arrow-right",
                                    size: "lg",
                                    className: "icon"
                                })
                            })
                        ]
                    })
                ]
            }),
            !isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        className: "floating-btn small-device-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBIcon, {
                            fas: true,
                            icon: "arrow-left",
                            size: "lg",
                            className: "icon"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slideNext(),
                        className: "floating-btn small-device-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBIcon, {
                            fas: true,
                            icon: "arrow-right",
                            size: "lg",
                            className: "icon"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>Promise.resolve(HeroBanner), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeBannerStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HomeBannerStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  position: relative;

  .swiper-card-item {
    width: 100%;
    height: 680px;
  }

  .service-btn {
  }

  .banner-details {
    position: absolute;
    height: 100%;
    width: 480px;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: linear-gradient(270deg, rgba(91, 48, 124, 0.2) 0%, rgba(0, 0, 0, 0) 100%), rgba(91, 48, 124, 0.2);
    color: #FFFFFF;
    padding: 0 40px;

    .banner-title {
      margin-bottom: 8px;
    }

    .banner-description {
      margin-bottom: 32px;
    }

  }

  .custom-navigation {
    position: absolute;
    bottom: 27px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }

  .floating-btn {
    background: #FFFFFF;

    &:active, &:focus, &:hover {
      background: #FFFFFF;
    }

    .icon:before {
      color: #000000;
    }
  }

  button {
    background: #5B307C;
    border-radius: 40px;
    border: none;
    padding: 16px 48px;
    font-size: 16px;
    color: #FFFFFF;
    text-transform: capitalize;

    &:active, &:focus, &:hover {
      background: #5B307C;
    }
  }

  @media (max-width: 1224px) {
    .banner-details {
      width: 100%;
      padding: 24px;
      align-items: flex-start;
      height: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
      border-radius: 40px;

      .banner-description {
        margin-bottom: 0;
      }
    }

    button {
      padding: 16px 48px;
    }

    .custom-navigation {
      display: none !important;
    }

    .small-device-left {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    .small-device-right {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    .swiper-card-item {
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
      overflow: hidden;
    }
  }
`;


/***/ }),

/***/ 8951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OurPortfolio_OurPortfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/OurPortfolio/OurPortfolio.styled.js

const OurPortfolioContainerStyle = (external_styled_components_default()).div`
  padding: 64px 80px;
  @media(min-width: 1400px){
    display: grid;
    place-items: center;
  }
  .image-item{
    position: relative; 
    //padding-bottom: 100%;
    border-radius: 20px;
    overflow: hidden;
    height: 233px;
    &.small{
      width: 233px;
    }
    &.large{
      width: 399px;
    }
  }
  .our-portfolio{
    width: 50%;
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .image-item{
      height: 100px;
      flex-shrink: 0;
      flex-grow: 0;
      width: 100% !important;
    }
  }

`;
const PortfolioCardContainerStyle = (external_styled_components_default()).div`
  background: #EFEAF2;
  border-radius: 20px;
  padding: 0 32px;
  height: 233px;
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    margin-bottom: 24px;
  }
  @media(max-width: 1224px){
    height: auto;
    padding: 16px;
    .description{
      margin-bottom: 0;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: ./elements/Button/Button.js + 1 modules
var Button = __webpack_require__(1451);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/OurPortfolio/OurPortfolio.js








const OurPortfolio = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OurPortfolioContainerStyle, {
        children: [
            isDesktopOrLaptop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "large-device-section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item small",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/square1.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item large",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/rectangle1.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "our-portfolio",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(PortfolioCard, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center gap-3 mt-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item large",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/rectangle2.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item small",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/square2.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item large",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/rectangle3.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image-item small",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/square3.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    priority: false
                                })
                            })
                        ]
                    })
                ]
            }),
            !isDesktopOrLaptop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "small-device-section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-4 d-flex align-items-center justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-item small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://cdn.deepsense.space/nails/assets/images/square1.webp",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-4 d-flex align-items-center justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-item small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://cdn.deepsense.space/nails/assets/images/square2.webp",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-4 d-flex align-items-center justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-item small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://cdn.deepsense.space/nails/assets/images/square3.webp",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row mt-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PortfolioCard, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row mt-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-item small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://cdn.deepsense.space/nails/assets/images/rectangle1.webp",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-item large",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://cdn.deepsense.space/nails/assets/images/rectangle2.webp",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    })
                                })
                            })
                        ]
                    }),
                    !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex justify-content-center mt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                            padding: "16px 31px",
                            fontSize: "16px",
                            lineHeight: "22px",
                            children: "View Gallery"
                        })
                    })
                ]
            })
        ]
    });
};
// export default OurPortfolio;
/* harmony default export */ const OurPortfolio_OurPortfolio = (dynamic_default()(()=>Promise.resolve(OurPortfolio), {
    ssr: false
}));
const PortfolioCard = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PortfolioCardContainerStyle, {
        className: "d-flex flex-column justify-content-center align-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                weight: 600,
                className: "title text-center",
                children: "Our Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                weight: 400,
                className: "description text-center",
                color: "#384955",
                children: "Take a look at some of our best works"
            }),
            isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/gallery",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                    padding: "16px 48px",
                    fontSize: "16px",
                    lineHeight: "22px",
                    children: "View Gallery"
                })
            })
        ]
    });
};


/***/ }),

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PartnerBrand_PartnerBrand)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/PartnerBrand/PartnerBrand.styled.js

const PartnerBrandContainerStyle = (external_styled_components_default()).div`
  padding: 80px;
  .inner-container{
    background: #EFEAF2;
    border-radius: 100px 20px;
    padding: 32px;    
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  .description{
    margin-bottom: 40px;
  }
  .partner-section{
    gap: 48px;
    overflow: scroll;
    .partner-item{
      width: 100px;
      height: 100px;
      background: #FFFFFF;
      position: relative;
      border-radius: 100%;
      overflow: hidden;
      flex-grow: 0;
      flex-shrink: 0;
    }
    &::-webkit-scrollbar{
      width: 0px;
      background: transparent;
    }
  }
  @media(max-width: 1224px){
    padding: 40px 24px;
    .inner-container{
      padding: 30px 10px;
    }
    .description{
      margin-bottom: 8px;
    }
    .partner-section{
      gap: 14px;      
      .partner-item {
        width: 54px;
        height: 54px;       
        &:first-child{
          margin-left: 30px;
        }
        &:last-child{
          margin-right: 30px;
        }
      }     
    }
  }
`;

// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./Components/PartnerBrand/PartnerBrand.js






const PartnerBrand = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PartnerBrandContainerStyle, {
        children: [
            !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx(TitleAndDescription, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner-container",
                children: [
                    isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx(TitleAndDescription, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex flex-nowrap partner-section justify-content-center align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner1.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner2.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner3.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner4.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner5.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "partner-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://cdn.deepsense.space/nails/assets/images/partner6.png",
                                    alt: "",
                                    layout: "fill",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                    priority: false
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const PartnerBrand_PartnerBrand = (dynamic_default()(()=>Promise.resolve(PartnerBrand), {
    ssr: false
}));
const TitleAndDescription = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                weight: 600,
                className: "title text-center",
                children: "Partner Brands"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                weight: 400,
                className: "description text-center",
                color: "#384955",
                children: "We collaborate with the best brands to ensure that you get the best care"
            })
        ]
    });
};


/***/ }),

/***/ 3525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7311);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TopPicks_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5719);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2586);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1451);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var _CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6599);
/* harmony import */ var _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(641);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6555);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3038);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_8__, _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_11__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_8__, _ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const TopPicks = (props)=>{
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: hasMounted , 1: setHasMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedProduct , 1: setSelectedProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: topPickData , 1: setTopPickData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.TopPick);
    const slidesPerView = 3;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    const toggleModal = ()=>{
        setShowModal(!showModal);
    };
    const chooseDesign = (product)=>{
        setSelectedProduct(product);
        setShowModal(true);
    };
    if (!hasMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_TopPicks_styled__WEBPACK_IMPORTED_MODULE_5__/* .MainContainerStyle */ .fk, {
        className: "top-picks-component",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.H6, {
                weight: 500,
                className: "title text-center",
                children: "What’s Trending?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                weight: 400,
                className: "description text-center",
                color: "#384955",
                children: "Discover the latest designs to glam up your nails"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "swiper-container position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                        spaceBetween: 0,
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            1224: {
                                slidesPerView: slidesPerView,
                                spaceBetween: 40
                            }
                        },
                        onSlideChange: ()=>console.log("slide change"),
                        onSwiper: (swiper)=>console.log(swiper),
                        onBeforeInit: (swiper)=>{
                            swiperRef.current = swiper;
                        },
                        children: topPickData?.edges.map((item)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwiperCard, {
                                    product: item.node,
                                    chooseDesign: chooseDesign
                                })
                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
                        })
                    }),
                    isDesktopOrLaptop && topPickData?.edges.length > slidesPerView && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                                size: "lg",
                                floating: true,
                                tag: "a",
                                onClick: ()=>swiperRef.current?.slidePrev(),
                                className: "floating-btn left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                                    fas: true,
                                    icon: "arrow-left",
                                    size: "lg",
                                    className: "icon"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                                size: "lg",
                                floating: true,
                                tag: "a",
                                onClick: ()=>swiperRef.current?.slideNext(),
                                className: "floating-btn right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                                    fas: true,
                                    icon: "arrow-right",
                                    size: "lg",
                                    className: "icon"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-center gap-4",
                children: [
                    !isDesktopOrLaptop && topPickData?.edges.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slidePrev(),
                        className: "floating-btn left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                            fas: true,
                            icon: "arrow-left",
                            size: "lg",
                            className: "icon"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                        href: "/products",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .ContainedButton */ .F, {
                            fontSize: "16px",
                            padding: "16px 48px",
                            children: "Explore Designs"
                        })
                    }),
                    !isDesktopOrLaptop && topPickData?.edges.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                        size: "lg",
                        floating: true,
                        tag: "a",
                        onClick: ()=>swiperRef.current?.slideNext(),
                        className: "floating-btn right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                            fas: true,
                            icon: "arrow-right",
                            size: "lg",
                            className: "icon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                show: showModal,
                setShowModal: setShowModal,
                toggleModal: toggleModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductView_ProductView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    toggleModal: toggleModal,
                    product: selectedProduct
                })
            })
        ]
    });
};
// export default TopPicks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(()=>Promise.resolve(TopPicks), {
    ssr: false
}));
const SwiperCard = (props)=>{
    const { product , chooseDesign  } = props;
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_TopPicks_styled__WEBPACK_IMPORTED_MODULE_5__/* .SwiperCardContainerStyle */ .rj, {
        className: "d-flex flex-column justify-content-center align-items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                className: "mySwiper2 swiper-v",
                direction: "horizontal",
                spaceBetween: 50,
                nested: true,
                pagination: {
                    clickable: true
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                ],
                children: product?.gallery.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopPicks_styled__WEBPACK_IMPORTED_MODULE_5__/* .ImageSliderContainerStyle */ .lb, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "image-slider-card position-relative",
                                children: [
                                    isDesktopOrLaptop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        src: item.desktopImage ? item.desktopImage : "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        width: 343,
                                        objectPosition: "center",
                                        priority: false
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        src: item.mobileImage ? item.mobileImage : "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        fallbackImg: "https://cdn.deepsense.space/nails/assets/images/nail.png",
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        priority: false
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overlay",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                                            color: "#FFFFFF",
                                            weight: 400,
                                            className: "mb-0",
                                            children: product.sku
                                        })
                                    })
                                ]
                            })
                        })
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B1, {
                weight: 500,
                color: "#384955",
                className: "mb-3 top-pick-name",
                children: product.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .ContainedButton */ .F, {
                padding: isDesktopOrLaptop ? "14px 88px" : "14px 32px",
                width: "280px",
                bg_color: "#FFFFFF",
                color: "#5B307C",
                active_bg_color: "#FFFFFF",
                border_color: "#5B307C",
                fontSize: "16px",
                onClick: ()=>chooseDesign(product),
                children: "Choose Design"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fk": () => (/* binding */ MainContainerStyle),
/* harmony export */   "lb": () => (/* binding */ ImageSliderContainerStyle),
/* harmony export */   "rj": () => (/* binding */ SwiperCardContainerStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: 60px 80px;
  background: #EFEAF2;
  border-radius: 0 0 100px 0;
  .swiper {
    width: 100%;
    height: 100%;
  }
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
  .floating-btn{
    background: #FFFFFF;
    &:active,&:focus,&:hover{
      background: #FFFFFF;
    }
    .icon:before{
      color: #000000;
    }
  }
  .swiper-container{
    width: 90%;
    margin: 40px auto;
    .floating-btn{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.left{
        left: -60px;
      }
      &.right{
        right: -60px;
      }
    }
  } 
  
  @media(max-width: 1224px){
    padding: 40px 24px;
    .description{
      width: 100%;
    }
    .swiper-container{
      width: 100%;
    }
  }
`;
const SwiperCardContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #FFFFFF;
  border-radius: 100px 16px 16px 16px;
  padding: 20px; 
  max-width: 320px;
  margin: 0 auto;
    .swiper-pagination{
      top: 0;
      .swiper-pagination-bullet{
        background: #8E4FC7;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          background: #5B307C;
        }
      }
    }
  @media(min-width: 1224px){
    .top-pick-name{
      height: 50px;
    }
  }
`;
const ImageSliderContainerStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  .image-slider-card{
    width: 280px;
    height: 343px;
    border-radius: 100px 20px 20px 20px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    .overlay{
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.48) 2.68%, rgba(0, 0, 0, 0) 100%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100px 20px 20px 20px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      padding: 18px;
    }
  }
  
`;


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_HeroBanner_HeroBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1092);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_TopPicks_TopPicks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3525);
/* harmony import */ var _Components_PartnerBrand_PartnerBrand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5222);
/* harmony import */ var _Components_AboutUsShort_AboutUsShort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3398);
/* harmony import */ var _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4257);
/* harmony import */ var _Components_OurPortfolio_OurPortfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8951);
/* harmony import */ var _Components_Franchise_Franchise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8892);
/* harmony import */ var _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7740);
/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6147);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5026);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_BestSeller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_HeroBanner_HeroBanner__WEBPACK_IMPORTED_MODULE_1__, _Components_TopPicks_TopPicks__WEBPACK_IMPORTED_MODULE_3__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_6__, _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_9__, _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_12__, _Components_BestSeller__WEBPACK_IMPORTED_MODULE_14__]);
([_Components_HeroBanner_HeroBanner__WEBPACK_IMPORTED_MODULE_1__, _Components_TopPicks_TopPicks__WEBPACK_IMPORTED_MODULE_3__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_6__, _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_9__, _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_12__, _Components_BestSeller__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Home = ({ homepageQuery  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Nails Beyond"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_HeroBanner_HeroBanner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                HomeBanner: homepageQuery.HomeBanner
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_TopPicks_TopPicks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                TopPick: homepageQuery.TopPick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AboutUsShort_AboutUsShort__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                Services: homepageQuery.Services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Franchise_Franchise__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OurPortfolio_OurPortfolio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_BestSeller__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                BestSellers: homepageQuery.BestSellers
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                TestimonialData: homepageQuery.TestimonialData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_PartnerBrand_PartnerBrand__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
async function getServerSideProps({ req , res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    const { data  } = await _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_11__.gql`
            query HomePage {
                HomeBanner:homeSlider{
                    id
                    desktopImage
                    mobileImage
                    hostedUrlMobile
                    hostedUrlDesktop
                    provider
                    providerUrl
                    sortOrder
                }
             TopPick:  searchProducts(isActive:true,isFeatured:true){
                 edges{
                     node{
                         id
                         name
                         sku
                         longDescription
                         duration
                         gallery{
                             desktopImage
                             mobileImage
                         }
                     }
                 }
             }
             
              BestSellers:  searchProducts(isActive:true,isBestSellingProduct:true){
                 edges{
                     node{
                         id
                         name
                         sku
                         longDescription
                         duration
                         gallery{
                             desktopImage
                             mobileImage
                         }
                     }
                 }
             }
             
                Services:  services(isFeatured:true,isActive:true){
                    edges{
                        node{
                            id
                            name
                            mobileImage
                            desktopImage
                        }
                    }
                }
                
                TestimonialData: testimonials(testimonialType:CLIENT){
                    id
                    mobileImage
                    desktopImage
                    name
                    role
                    description
                    rating
                    testimonialType
                    sortOrder
                }
                
                
                
            }
            
        `
    });
    return {
        props: {
            homepageQuery: data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7311:
/***/ ((module) => {

module.exports = require("mdb-react-ui-kit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3282:
/***/ ((module) => {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,260,152,952,664,586,451,438,493,26,857,740,599,641,892], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();