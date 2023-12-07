"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Franchise_Franchise)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/Franchise/Franchise.styled.js

const FranchiseStyled = (external_styled_components_default()).section`
  padding: 16px 24px;
  background: #EFEAF2;
  border-radius: 20px 100px;
  margin-top: 40px;

  .franchise-title {
    color: #384955;
    border-bottom: 2px solid #5B307C;
    width: 71px;
  }

  .franchise-subtitle {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding-top: 16px;
    padding-bottom: 5px;
  }

  .franchise-description {
    color: #384955;
    padding-bottom: 13px;
  }

  .franchise-image {
    border-radius: 100px;
  }

  .read-more-btn {
    text-align: center;
    padding-top: 13px;
  }

  //
  .read-more-btn button {
    padding: 16px 48px;
    background: #5B307C;
    border: 1px solid #8F8C91;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
  }

  @media (min-width: 1270px) {
    background: transparent;
    padding: 50px 80px 0 80px;
    .franchise-image {
      border-radius: 0px 20px 100px 0px;
    }

    .franchise-subtitle {
      line-height: 44px;
    }

    .franchise-content {
      background: #EFEAF2;
      border-radius: 100px 0px 0px 20px;
      padding: 34px 48px;
    }

    .read-more-btn {
      text-align: start;
      padding-top: 24px;
    }
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }

  .image-section {
    @media (min-width: 1270px) {
      width: 642px;
      height: 352px;
    }
  }

  .image-section span {
    @media (min-width: 1270px) {
      width: 642px !important;
      height: 352px !important;
    }
  }
`;

// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./elements/Button/Button.js + 1 modules
var Button = __webpack_require__(1451);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/Franchise/Franchise.js









const Franchise = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1270
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(FranchiseStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: isDesktopOrLaptop ? "d-flex" : "",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "franchise-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                            className: "franchise-title",
                            children: "Franchise "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                            className: "franchise-subtitle",
                            children: "Be Part of Our Franchise Network!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                            className: "franchise-description",
                            children: "Join our network of highly successful salons to provide the best, high-quality nail artistry services to customers across the city"
                        }),
                        isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/franchise",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                                    width: "171px",
                                    active_bg_color: "#5B307C",
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    children: "Read More"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image-section",
                    children: isDesktopOrLaptop ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "alt",
                        src: "https://cdn.deepsense.space/nails/assets/images/nailFranchise.png",
                        width: 658,
                        height: 369,
                        className: "franchise-image",
                        priority: false
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "alt",
                            src: "https://cdn.deepsense.space/nails/assets/images/franchisem.webp",
                            width: 330,
                            height: 190,
                            className: "franchise-image",
                            priority: false
                        })
                    })
                }),
                !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "read-more-btn d-flex justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/franchise",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                            width: "171px",
                            active_bg_color: "#5B307C",
                            padding: "16px 48",
                            fontSize: "16px",
                            children: "Read More"
                        })
                    })
                })
            ]
        })
    });
};
// export default Franchise;
/* harmony default export */ const Franchise_Franchise = (dynamic_default()(()=>Promise.resolve(Franchise), {
    ssr: false
}));


/***/ })

};
;