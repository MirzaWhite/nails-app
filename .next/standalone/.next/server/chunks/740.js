"use strict";
exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 7740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Testimonials_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3493);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2586);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
/* harmony import */ var _CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3038);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_7__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Testimonials = (props)=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: testimonial , 1: setTestimonial  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.TestimonialData);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            console.log(props.TestimonialData, "data");
        };
    }, [
        props.TestimonialData
    ]);
    const handleSlideChange = (swiper)=>{
        setActiveIndex(swiper.activeIndex);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Testimonials_styled__WEBPACK_IMPORTED_MODULE_2__/* .TestimonialStyled */ .A, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.H6, {
                className: "text-center title",
                children: " Testimonials"
            }),
            testimonial?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "testimonial-swiper-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar,
                        swiper__WEBPACK_IMPORTED_MODULE_5__.A11y
                    ],
                    pagination: {
                        clickable: true,
                        dynamicBullets: true
                    },
                    speed: 1800,
                    slidesPerView: isDesktopOrLaptop ? 3 : 1,
                    centeredSlides: true,
                    loop: true,
                    spaceBetween: isDesktopOrLaptop ? 30 : 20,
                    className: "mySwiper",
                    // initialSlide={isDesktopOrLaptop?2:1}
                    navigation: true,
                    onSlideChange: handleSlideChange,
                    autoplay: {
                        delay: 2000
                    },
                    children: testimonial?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "card-section",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.H6, {
                                        className: "name text-center",
                                        children: data.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B2, {
                                        className: "description",
                                        children: data.description
                                    }),
                                    data.desktopImage || data.mobileImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image-section",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "profile-image",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImage_CustomImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                src: isDesktopOrLaptop ? data.desktopImage : data.mobileImage,
                                                alt: "profilepic",
                                                layout: "fill",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                fallbackImg: "https://cdn.deepsense.space/nails/assets/images/test3.png"
                                            })
                                        })
                                    }) : ""
                                ]
                            })
                        }, index))
                })
            })
        ]
    });
};
// export default Testimonials;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.resolve(Testimonials), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;