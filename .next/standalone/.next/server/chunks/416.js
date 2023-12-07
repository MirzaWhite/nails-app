"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 9365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ GET_BLOGS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_BLOGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getBlogs($search:String){
        getBlogs(search:$search) {
            results {
                title
                titleSlug
                shortDescription
                featuredImageMobileUrl
                featuredImageDesktopUrl
                publishedAt
            }
        }
    }
`;


/***/ }),

/***/ 2475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BlogsCardStyled */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2586);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elements_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3331);









const BlogsCard = (props)=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
        minWidth: 1224
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: blogsCardData , 1: setBlogsCardData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setBlogsCardData(props.data);
    }, [
        props.data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogsCardStyled, {
            onClick: ()=>router.push(`${blogsCardData.titleSlug}`),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: props.blog ? "blog-card blog-card-container" : "blog-card-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: isDesktopOrLaptop ? blogsCardData.featuredImageDesktopUrl : blogsCardData.featuredImageMobileUrl,
                        alt: "blogs-image",
                        width: isDesktopOrLaptop ? 310 : 302,
                        height: isDesktopOrLaptop ? 280 : 273,
                        className: "feature-image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                        className: "blogs-created-at",
                        color: "#6C757D",
                        weight: 400,
                        children: (0,_elements_utils__WEBPACK_IMPORTED_MODULE_8__/* .BlogDate */ .w)(blogsCardData?.publishedAt)?.slice(6, 8) + "." + (0,_elements_utils__WEBPACK_IMPORTED_MODULE_8__/* .BlogDate */ .w)(blogsCardData?.publishedAt)?.slice(4, 6) + "." + (0,_elements_utils__WEBPACK_IMPORTED_MODULE_8__/* .BlogDate */ .w)(blogsCardData?.publishedAt)?.slice(0, 4)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B1, {
                        className: "blog-card-title",
                        color: "#495057",
                        weight: 600,
                        children: blogsCardData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                        color: "#6C757D",
                        weight: 400,
                        children: blogsCardData.shortDescription
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.resolve(BlogsCard), {
    ssr: false
}));
const BlogsCardStyled = (styled_components__WEBPACK_IMPORTED_MODULE_6___default().div)`

  .blog-card-container {
    cursor: pointer;
    box-shadow: 0 8px 15px 0 #D1C6DB;
    background: #FFFFFF;
    max-width: 326px;
    width: 100%;
    padding: 11px;
    border-radius: 39px 12px;
    height: 460px;
    margin: 10px auto;
    border-collapse: collapse;
  }


  .feature-image {
    border-radius: 38px 11px;
  }

  .blogs-created-at {
    padding: 8px 0 0 0;
  }

  .blog-card-title {
    padding: 15px 0 11px 0;
  }

  .blog-card {
    margin: 10px 0;
  }

  @media (min-width: 1224px) {
    .blog-card-container {
      max-width: 334px;
      height: 482px;
      padding: 12px;
      border-radius: 42px 16px;
      box-shadow: 0 8px 16px 0 #D1C6DB;
      margin: 0 auto 19px auto;
    }

  }
`;


/***/ }),

/***/ 3331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ BlogDate)
/* harmony export */ });
const BlogDate = (data)=>{
    if (data) {
        return data.replaceAll("-", "");
    }
};


/***/ })

};
;