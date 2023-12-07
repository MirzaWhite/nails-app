"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
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

/***/ 2599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CLIENTGALLERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query Client(
$galleryType: GalleryTypeEnum!
){
  galleries(galleryType:$galleryType){
    galleryMedias {
      id
      desktopImage
      mobileImage
    }
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_CLIENTGALLERY);


/***/ }),

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ GET_GALLERIES_QUERY)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_GALLERIES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query  galleries($galleryType:GalleryTypeEnum!){
        galleries(galleryType:$galleryType){
            name
            description
            galleryType
            galleryMedias {
                id
                mobileImage
                desktopImage
                hostedUrlMobile
                hostedUrlDesktop
                provider
                providerUrl
                thumbnailMobile
                thumbnailDesktop
                name
                description
                sortOrder
            }
        }
    }

`;


/***/ }),

/***/ 6963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CelebrityGallery_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3101);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2586);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Apollo_query_GetGalleriesQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const CelebrityGallery = ()=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: play , 1: setPlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeData , 1: setActiveData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: galleriesData , 1: setGalleriesData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: CelebrityData , 1: setCelebrityData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [getGalleriesData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery)(_Apollo_query_GetGalleriesQuery__WEBPACK_IMPORTED_MODULE_9__/* .GET_GALLERIES_QUERY */ .P);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GalleriesDataApi();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const GalleriesDataApi = async ()=>{
        try {
            await getGalleriesData({
                variables: {
                    galleryType: "CELEBRITY"
                }
            }).then(({ data  })=>{
                setGalleriesData(data.galleries);
                setCelebrityData(data.galleries[0].galleryMedias);
            });
        } catch (error) {
            console.log(error);
        }
    };
    let getAllVideoClassName;
    const pauseVideoFunc = (data)=>{
        setActiveData(data);
        setPlay(false);
        if (activeData !== data) {
            getAllVideoClassName = document.querySelectorAll(".video-tag");
            for(let i = 0; i < getAllVideoClassName.length; i++){
                getAllVideoClassName[i].pause();
            }
        }
    };
    const playHandler = async (index, id)=>{
        if (activeData === index) {
            if (play) {
                setPlay(false);
                await document.getElementById(id).pause();
            } else {
                setPlay(true);
                await document.getElementById(id).play();
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (CelebrityData.length > 0 && isDesktopOrLaptop) {
            var celebritys = document.getElementById("celebritys");
            celebritys.innerHTML = `<div> <p className="text-center " id="celebrity-name"> ${CelebrityData[activeData]?.name}  </p>
                                          <p className="text-center" id="celebrity-description">${CelebrityData[activeData]?.description} </p>   
           </div>`;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        activeData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CelebrityGallery_styled__WEBPACK_IMPORTED_MODULE_2__/* .CelebrityGalleryStyled */ .O, {
        children: galleriesData.length > 0 && galleriesData?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    !isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mobile-heading",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.H6, {
                                color: "red",
                                className: "text-center celebrity-title",
                                children: data.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B2, {
                                color: "#384955",
                                margin: "8px",
                                "line-height": "22px",
                                weight: 400,
                                className: "text-center celebrity-subtitle",
                                children: data.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "celebrity-gallery-part",
                        children: [
                            isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.H6, {
                                        color: "red",
                                        className: "text-center celebrity-title",
                                        children: data.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B2, {
                                        color: "#384955",
                                        margin: "8px auto 27px auto",
                                        "line-height": "22px",
                                        weight: 400,
                                        className: "text-center celebrity-subtitle",
                                        children: data.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "celebrity-gallery-carousel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                                        onSlideChange: (e)=>pauseVideoFunc(e.realIndex),
                                        modules: [
                                            swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                                            swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                            swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar,
                                            swiper__WEBPACK_IMPORTED_MODULE_4__.A11y
                                        ],
                                        pagination: {
                                            clickable: true,
                                            dynamicBullets: true
                                        },
                                        spaceBetween: 20,
                                        slidesPerView: 3,
                                        speed: 1000,
                                        // loop={true}
                                        className: "mySwiper",
                                        centeredSlides: true,
                                        initialSlide: 0,
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 300,
                                            modifier: 1,
                                            slideShadows: true,
                                            scale: 1
                                        },
                                        effect: "coverflow",
                                        grabCursor: true,
                                        navigation: true,
                                        breakpoints: {
                                            "@0.00": {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            },
                                            "@1.00": {
                                                slidesPerView: 3,
                                                spaceBetween: 10
                                            },
                                            "@1.50": {
                                                slidesPerView: 3,
                                                spaceBetween: 30
                                            }
                                        },
                                        children: CelebrityData.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                                className: "swiper-slide cursor-pointer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cursor-pointer",
                                                    children: [
                                                        data?.providerUrl === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                            poster: data.mobileImage === null && data.desktopImage === null ? isDesktopOrLaptop ? data.thumbnailDesktop : data.thumbnailMobile : isDesktopOrLaptop ? data.desktopImage : data.mobileImage,
                                                            onClick: data.mobileImage === null && data.desktopImage === null && data.providerUrl === null ? ()=>playHandler(index, data.id) : undefined,
                                                            width: "100%",
                                                            height: "100%",
                                                            autoPlay: false,
                                                            id: data.id,
                                                            className: "video-tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                src: data.providerUrl === null ? isDesktopOrLaptop ? data.hostedUrlMobile : data.hostedUrlDesktop : data.providerUrl,
                                                                type: "video/mp4"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                            width: "100%",
                                                            height: "100%",
                                                            src: data.providerUrl
                                                        }),
                                                        play === false && data.mobileImage === null && data.desktopImage === null && data.providerUrl === null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "video-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: "https://cdn.deepsense.space/nails/assets/images/videoPlay.png",
                                                                alt: "storeMap",
                                                                layout: "fixed",
                                                                width: isDesktopOrLaptop ? 60 : 40,
                                                                height: isDesktopOrLaptop ? 60 : 40,
                                                                onClick: data.mobileImage === null && data.desktopImage === null && data.providerUrl === null ? ()=>playHandler(index, data.id) : undefined
                                                            })
                                                        }),
                                                        !isDesktopOrLaptop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "celebritys-data",
                                                            variants: {
                                                                visible: {
                                                                    transition: {
                                                                        staggerChildren: 0
                                                                    }
                                                                }
                                                            },
                                                            initial: "hidden",
                                                            animate: "visible",
                                                            exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                    duration: 1
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B1, {
                                                                    className: "text-center ",
                                                                    children: data.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B2, {
                                                                    className: "text-center",
                                                                    children: data.description
                                                                })
                                                            ]
                                                        }, index)
                                                    ]
                                                })
                                            }, index))
                                    }),
                                    isDesktopOrLaptop && CelebrityData.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "celebritys-data",
                                        id: "celebritys",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B1, {
                                                className: "text-center ",
                                                id: "celebrity-name",
                                                children: CelebrityData[activeData]?.name && CelebrityData[activeData]?.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_7__.B2, {
                                                className: "text-center",
                                                children: CelebrityData[activeData]?.description && CelebrityData[activeData]?.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CelebrityGallery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CelebrityGalleryStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CelebrityGalleryStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  .celebrity-gallery-part {
    padding: 24px 24px 0 24px;
    background: #efeaf2;
    border-radius: 20px;
  }

  .celebrity-title {
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .celebrity-subtitle {
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .mobile-heading {
    padding: 16px 24px 27px 24px;
  }

  .serviceImage2 {
    filter: blur(5px);
    transition: filter 0.5s, opacity 0.5s;
    transform: scale(0.6);
  }

  .serviceImage2.active {
    filter: none;
    opacity: 1;
  }

  .swiper-slide {
    margin-left: 40px;
  }

  .swiper {
    padding-bottom: 100px;
  }

  :root {
    --swiper-theme-color: #ffffff;
  }

  .swiper-slide {
    margin-left: 0;
  }

  .swiper-slide:not(.swiper-slide-active) {
    filter: blur(2px);
    transform: scale(0.8);
  }

  .swiper-slide:not(.swiper-slide-active) .celebritys-data,
  .swiper-slide:not(.swiper-slide-active) .video-btn {
    display: none;
  }

  .swiper-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    bottom: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto !important;
  }

  .swiper-pagination-bullet-active {
    background: #5b307c;
    border-radius: 52px;
    height: 3px;
    width: 35px;
  }

  .swiper-pagination-bullet {
    background: #5b307c;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
  }

  .swiper-button-next {
    background-image: url("/assets/rightArrow.png");
    width: 68px;
    height: 68px;
  }

  .swiper-button-prev {
    background-image: url("/assets/leftArrow.png");
    width: 68px;
    height: 68px;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 7%);
    bottom: var(--swiper-navigation-bottom-offset, 30%);
    top: var(--swiper-navigation-top-offset, 88%);
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 7%);
    top: var(--swiper-navigation-top-offset, 88%);
  }

  .celebritys-data {
    background: #01308c;
    color: #ffffff;
    background: #ffffff;
    border-radius: 16px;
    color: #384955;
    padding: 16px 16px 28px 16px;
    max-width: 650px;
    width: 100%;
    margin: 24px auto 0 auto;
    text-align: center;
  }

  .video-tag {
    border: 8px solid #ffffff;
    border-radius: 16px;
  }

  .video-btn {
    position: absolute;
    left: 50%;
    bottom: 58%;
    transform: translate(-50%, -58%);
  }

  #celebrity-name,
  #celebrity-description {
    font-family: "Jost";
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #384955;
    animation-duration: 3s;
    animation-name: slidein;
    margin: 0;
  }

  #celebrity-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  @keyframes slidein {
    from {
      opacity: 0;
    }
    75% {
      opacity: 0.7;
    }

    to {
      opacity: 1;
    }
  }
  @media (min-width: 1024px) {
    .video-btn {
      left: 52%;
      bottom: 61%;
      transform: translate(-52%, -61%);
    }
  }

  @media (min-width: 1224px) {
    .celebrity-gallery-part {
      padding: 50px 50px 0px 50px;
      margin: 41px 80px 80px 80px;
    }

    .swiper-horizontal .swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
      display: none;
    }

    .swiper {
      padding-bottom: 250px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: var(--swiper-navigation-top-offset, 66%);
      right: var(--swiper-navigation-sides-offset, 20%);
    }

    .swiper-button-prev {
      left: var(--swiper-navigation-sides-offset, 20%);
    }

    .celebritys-data {
      margin-top: 14px;
    }

    .celebrity-gallery-carousel {
      position: relative;
    }

    .celebritys-data {
      margin-top: 14px;
      max-width: calc(100% / 3);
      position: absolute;
      left: calc(50% - (((100% / 3) / 2) + 5px));
      bottom: 16%;
      transform: translate(-40%, -20);
    }

    .video-btn {
      left: 52%;
      bottom: 25%;
      transform: translate(-52%, -25%);
      cursor: pointer;
    }
  }

  @media (min-width: 1280px) {
    .swiper-button-next,
    .swiper-button-prev {
      top: var(--swiper-navigation-top-offset, 70%);
    }
  }
`;


/***/ }),

/***/ 9827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2586);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
/* harmony import */ var _Apollo_query_GetClientGallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__]);
([swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import Swiper core and required modules




// Import Swiper styles



const ClientsGallery = ()=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        query: "(min-width:1024px)"
    });
    const Desktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        query: "(min-width:1224px)"
    });
    const { 0: imageError , 1: setImageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError1 , 1: setImageError1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError2 , 1: setImageError2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError3 , 1: setImageError3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError4 , 1: setImageError4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError5 , 1: setImageError5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError6 , 1: setImageError6  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: clientdata , 1: setClientdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [getClientData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery)(_Apollo_query_GetClientGallery__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    const handleImageError = (Count)=>{
        if (Count === 0) {
            setImageError(true);
        }
        if (Count === 1) {
            setImageError1(true);
        }
        if (Count === 2) {
            setImageError2(true);
        }
        if (Count === 3) {
            setImageError3(true);
        }
        if (Count === 4) {
            setImageError4(true);
        }
        if (Count === 5) {
            setImageError5(true);
        }
        if (Count === 6) {
            setImageError6(true);
        }
    };
    function ApiProduct() {
        try {
            getClientData({
                variables: {
                    galleryType: "CLIENT"
                }
            }).then(({ data , errors  })=>{
                if (data) {
                    setClientdata(data.galleries[0].galleryMedias);
                    console.log(data.galleries[0].galleryMedias, "yes");
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ApiProduct();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const tempArr = clientdata;
    const clientDetails = [];
    for(let i = 0; i < tempArr.length; i += 7){
        clientDetails.push(tempArr.slice(i, i + 7));
    }
    console.log(clientDetails, "why");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: clientDetails.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ClientsGallerysStyle, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.H6, {
                            color: "#5B307C",
                            weight: 500,
                            className: "title mb-2",
                            children: "Clients Gallery"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_6__.B2, {
                            color: "#384955",
                            weight: 400,
                            className: "sub-title mb-4",
                            children: "A showcase of some of our most favourite looks we have created for our clients"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination
                    ],
                    spaceBetween: 50,
                    slidesPerView: 1,
                    initialSlide: 0,
                    loop: true,
                    pagination: {
                        clickable: true
                    },
                    children: clientDetails?.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "Clientsgallery",
                                children: [
                                    Desktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mobile-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "client-image",
                                            src: imageError ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : item[0].mobileImage,
                                            alt: "gallery1",
                                            layout: "fixed",
                                            width: 218,
                                            height: 320,
                                            onError: ()=>handleImageError(0)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "two-image",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "client-image",
                                                src: imageError1 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[1].desktopImage : item[1].mobileImage,
                                                alt: "gallery2",
                                                layout: "fixed",
                                                width: isDesktopOrLaptop ? 216 : 90,
                                                height: isDesktopOrLaptop ? 140 : 60,
                                                onError: ()=>handleImageError(1)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "client-image",
                                                src: imageError2 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[2].desktopImage : item[2].mobileImage,
                                                alt: "gallery3",
                                                layout: "fixed",
                                                width: isDesktopOrLaptop ? 216 : 90,
                                                height: isDesktopOrLaptop ? 224 : 94,
                                                onError: ()=>handleImageError(2)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: "client-image",
                                        src: imageError3 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[3].desktopImage : item[3].mobileImage,
                                        alt: "gallery4",
                                        layout: "fixed",
                                        width: isDesktopOrLaptop ? 305 : 130,
                                        height: isDesktopOrLaptop ? 488 : 202,
                                        onError: ()=>handleImageError(3)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "two-image",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "client-image",
                                                src: imageError4 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[4].desktopImage : item[4].mobileImage,
                                                alt: "gallery2",
                                                layout: "fixed",
                                                width: isDesktopOrLaptop ? 216 : 90,
                                                height: isDesktopOrLaptop ? 140 : 60,
                                                onError: ()=>handleImageError(4)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "client-image",
                                                src: imageError5 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[5].desktopImage : item[5].mobileImage,
                                                alt: "gallery3",
                                                layout: "fixed",
                                                width: isDesktopOrLaptop ? 216 : 90,
                                                height: isDesktopOrLaptop ? 224 : 94,
                                                onError: ()=>handleImageError(5)
                                            })
                                        ]
                                    }),
                                    Desktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mobile-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "client-image",
                                            src: imageError6 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[6].desktopImage : item[6].mobileImage,
                                            alt: "gallery1",
                                            layout: "fixed",
                                            width: 218,
                                            height: 320,
                                            onError: ()=>handleImageError(6)
                                        })
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientsGallery);
const ClientsGallerysStyle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
padding:24px;
@media (min-width: 1200px) {
    width:93%;
    padding: 60px 0px;
    margin:0px auto;
}

.Clientsgallery{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    @media (min-width: 767px) {
        gap: 28px;
        margin-bottom: 40px;
    }
}
.two-image{
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 767px) {
        gap: 28px;
    }
}
.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #5B307C;
    width:200px !important;
    height:6px !important;
    border-radius: 1px !important;
}
.swiper-pagination-bullet {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #5B307C !important;
}
.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    width: 400px !important;
    transform: translateX(-50%);
    white-space: nowrap;
}
.sub-title{
    @media (min-width: 1000px) {
        margin: 0px auto;
        width:40%;
    }
}
  .client-image{
    border-radius: 16px !important;
  }
  
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 619:
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
/* harmony import */ var _Components_CelebrityGallery_CelebrityGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6963);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_ClientGallery_ClientsGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9827);
/* harmony import */ var _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7740);
/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6147);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_CelebrityGallery_CelebrityGallery__WEBPACK_IMPORTED_MODULE_2__, _Components_ClientGallery_ClientsGallery__WEBPACK_IMPORTED_MODULE_4__, _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_5__]);
([_Components_CelebrityGallery_CelebrityGallery__WEBPACK_IMPORTED_MODULE_2__, _Components_ClientGallery_ClientsGallery__WEBPACK_IMPORTED_MODULE_4__, _Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const gallery = ({ homepageQuery  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Nails Beyond"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_CelebrityGallery_CelebrityGallery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_ClientGallery_ClientsGallery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                TestimonialData: homepageQuery.TestimonialData
            })
        ]
    });
};
async function getServerSideProps({ req , res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    const { data  } = await _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
            query HomePage {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,260,152,586,493,740], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();