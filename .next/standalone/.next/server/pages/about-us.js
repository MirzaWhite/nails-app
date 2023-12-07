"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 7852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OurStory_OurStory)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/OurStory/OurStory.styled.js

const OurStoryStyled = (external_styled_components_default()).section`
  @media (min-width: 1224px){
    margin-bottom: 80px;
  }
  .our-story-banner {
    padding: 24px;
  }

  .our-story-title {
    margin: 0;
    padding: 0 0 8px 0;
    font-family: "Jost";
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .our-story-description {
    margin: 0;
    font-family: "Jost";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #384955;
  }

  .our-story-cta button {
    max-width: 184px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 1224px) {
    padding: 0 80px;
    .our-story-banner {
      gap: 32px;
      background: linear-gradient(0deg, #FBFAFF 3.21%, #FFFFFF 100%);
      border-radius: 20px;
      //padding: 0 80px 0 80px;
    }

    .our-story-contents {
      max-width: 730px;
      width: 100%;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./elements/Button/Button.js + 1 modules
var Button = __webpack_require__(1451);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/OurStory/OurStory.js








const OurStory = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(OurStoryStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: isDesktopOrLaptop ? " d-flex align-items-center justify-content-center our-story-banner" : "our-story-banner ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: isDesktopOrLaptop ? " our-story-contents order-2" : "our-story-contents",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "our-story-title",
                            children: "Our Story"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "our-story-description",
                            children: "At Nails'n Beyond, we have a passion for creativity and beauty. Our journey in the nail care industry began with the desire to provide a unique and exceptional experience for our clients."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "our-story-description pt-3",
                            children: "Our vision was to create a nail art studio that offers high-quality services with personalized attention, where clients can indulge in some well-deserved self-care and leave feeling confident and beautiful. We started small, but with a lot of passion and hard work, we have grown into one of the most popular nail salons in the industry."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "our-story-description pt-3",
                            children: "Over the years, we have developed a team of highly skilled and experienced nail technicians, who are passionate about delivering the best possible service. We use only the highest quality products and adhere to strict sanitation protocols to ensure that our clients receive a safe and comfortable experience!"
                        }),
                        isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/gallery",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "our-story-cta",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    children: "View Gallery"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: isDesktopOrLaptop ? " order-1" : "text-center pt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/Our_storyD.webp" : "https://cdn.deepsense.space/nails/assets/images/Our_storyM.webp",
                            alt: "alt",
                            width: isDesktopOrLaptop ? 500 : 330,
                            height: isDesktopOrLaptop ? 451 : 330,
                            layout: "intrinsic",
                            className: "our-story-image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/gallery",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex justify-content-center our-story-cta",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ContainedButton */.F, {
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    children: "View Gallery"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
// export default OurStory;
/* harmony default export */ const OurStory_OurStory = (dynamic_default()(()=>Promise.resolve(OurStory), {
    ssr: false
}));


/***/ }),

/***/ 1683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_AboutUsBanner_AboutUsBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6361);
/* harmony import */ var _Components_OurStory_OurStory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
/* harmony import */ var _Components_FAQS_Faqs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1303);
/* harmony import */ var _Components_Franchise_Franchise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8892);
/* harmony import */ var _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5026);
/* harmony import */ var _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4257);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Apollo_query_GetFaqsQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5863);
/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6147);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__, _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_7__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_8__]);
([_Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__, _Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_7__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const AboutUs = ({ homepageQuery  })=>{
    console.log(homepageQuery.TestimonialData);
    const { 0: faqsData , 1: setFaqsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [getFaqsData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_query_GetFaqsQuery__WEBPACK_IMPORTED_MODULE_11__/* .GET_FAQS_QUERY */ .Q);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        FaqsDataApi();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const FaqsDataApi = async ()=>{
        try {
            await getFaqsData({
                variables: {
                    faqType: "NORMAL"
                }
            }).then(({ data  })=>{
                setFaqsData(data.faqSections);
            });
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Nails Beyond"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AboutUsBanner_AboutUsBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OurStory_OurStory__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                Services: homepageQuery.Services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                TestimonialData: homepageQuery.TestimonialData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Franchise_Franchise__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_FAQS_Faqs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                faqsData: faqsData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AboutUsPageContactUs_ContactUsForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
async function getServerSideProps({ req , res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    const { data  } = await _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_12__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql`
            query aboutPage {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);

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
var __webpack_exports__ = __webpack_require__.X(0, [377,260,152,952,664,586,451,438,493,26,857,740,37,892], () => (__webpack_exec__(1683)));
module.exports = __webpack_exports__;

})();