"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 5863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ GET_FAQS_QUERY)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_FAQS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query faqSections($faqType:FAQSectionTypeEnum!){
        faqSections(faqType:$faqType){
            question
            answer
            sortOrder
            faqType
            id
        }
    }
    
    `;


/***/ }),

/***/ 6361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutUsBanner_AboutUsBanner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/AboutUsBanner/AboutUsBanner.styled.js

const AboutUsBannerStyled = (external_styled_components_default()).section`
  padding: 40px 0;
  .about-us-banner {
    background: #efeaf2;
    border-radius: 80px 20px;
    padding: 40px 24px;
  }
  .about-us-title {
    margin: 0;
    padding: 0 0 8px 0;
    font-family: "Jost",sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .about-us-description {
    margin: 0;
    font-family: "Jost",sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #384955;
  }
  .about-us-cta  button{
    max-width: 222px;
    width: 100%;
    margin-top:24px;
    @media(min-width: 1224px){
      margin-top:31px;
    }
  }
  .about-us-banner-image {
    border-radius: 80px 20px;
  }

  @media (min-width: 1224px) {
    padding: 40px 0 80px 0;
    .about-us-banner {
      border-radius: 200px 20px;
      padding: 40px 80px;
      gap:45px;
      //margin-top:31px;
    }
    .about-us-contents {
      max-width: 500px;
      width: 100%;
    }
    .about-us-banner-image {
      border-radius: 100px 20px;
    }
  }
`;

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./elements/Button/Button.js + 1 modules
var Button = __webpack_require__(1451);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/AboutUsBanner/AboutUsBanner.js








const AboutUsBanner = (props)=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    const { Title , Description , picture , CTAName , CTALink  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(AboutUsBannerStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: isDesktopOrLaptop ? " d-flex align-items-center justify-content-center about-us-banner" : "about-us-banner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "about-us-contents",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "about-us-title",
                            children: [
                                " ",
                                Title ? Title : "Welcome to Nails’n Beyond!"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "about-us-description",
                            children: Description ? Description : "Your go-to nail artistry destination. We are a full-service salon dedicated to providing our clients with exceptional nail care, personalized attention, and a relaxing atmosphere. Our team of highly skilled and experienced technicians are passionate about their craft and are dedicated to making your nails look and feel amazing. From trendy nail designs to classic looks, we offer a wide range of services to suit every style and occasion."
                        }),
                        isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: CTALink ? CTALink : "/booking",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "about-us-cta",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* ContainedButton */.F, {
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    children: [
                                        " ",
                                        CTAName ? CTAName : "Book Appointment"
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: isDesktopOrLaptop ? "" : "text-center pt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: picture ? picture : "https://cdn.deepsense.space/nails/assets/images/aboutUsImg.webp",
                            alt: "alt",
                            width: isDesktopOrLaptop ? 780 : 345,
                            height: isDesktopOrLaptop ? 520 : 230,
                            layout: "intrinsic",
                            className: "about-us-banner-image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        !isDesktopOrLaptop && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: CTALink ? CTALink : "/booking",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex justify-content-center about-us-cta",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* ContainedButton */.F, {
                                    padding: "16px 48px",
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    children: [
                                        " ",
                                        CTAName ? CTAName : "Book Appointment"
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
// export default AboutUsBanner;
/* harmony default export */ const AboutUsBanner_AboutUsBanner = (dynamic_default()(()=>Promise.resolve(AboutUsBanner), {
    ssr: false
}));


/***/ }),

/***/ 1303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FAQS_Faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/FAQS/Faqs.styled.js

const FaqsStyled = (external_styled_components_default()).div`
  padding: 16px 24px;
  background: #EFEAF2;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 100px;

  .faqs-title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .faqs-subtitle {
    color: #384955;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px rgba(91, 48, 124, 0.1);
  }

  .accordion-body {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #384955;
    background: #FFFFFF;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 0 24px 24px 24px;
  }

  .accordion-item {
    background: #FFFFFF;
  }

  .accordion {
    padding-top: 24px;
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .accordion-button {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #5B307C;
  }

  .iQHCuG .accordion-item:first-of-type .accordion-button, .accordion-button:not(.collapsed) {
    box-shadow: none !important;
  }

  .accordion-button:after {
    background-image: url("/assets/plus-mobile.png");

  }

  .accordion-button:not(.collapsed):after {
    background-image: url("/assets/minus-mobile.png");
    position: absolute;
    bottom: 31px;
    right: 22px;
  }

  @media (min-width: 1224px) {
    padding: 32px 200px;
    background: #EFEAF2;
    border-radius: 20px 100px;
    margin: 80px;

    .accordion-button {
      font-size: 32px;
    }

    .accordion-body {
      max-width: 650px;
      width: 100%;
    }

    .accordion-button:after {
      background-image: url("/assets/plus.png")
    }

    .accordion-button:not(.collapsed):after {
      background-image: url("/assets/minus.png");
      bottom: 0;
      right: 22px;
    }
  }


`;

// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: external "mdb-react-ui-kit"
var external_mdb_react_ui_kit_ = __webpack_require__(7311);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/FAQS/Faqs.js






const Faqs = (props)=>{
    const { 0: faqsAnswer , 1: setFaqsAnswer  } = (0,external_react_.useState)([]);
    const { faqsData  } = props;
    (0,external_react_.useEffect)(()=>{
        if (faqsData?.length > 0) {
            getDiscription(faqsData.map((data)=>{
                return data.answer;
            }));
        }
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        faqsData
    ]);
    let tempFaqsAnswer = [];
    const getDiscription = async (data)=>{
        await data?.forEach((data)=>{
            let obj = JSON.parse(data);
            obj.blocks.map((item)=>{
                if (item.type === "Header") {
                    tempFaqsAnswer.push({
                        ans: item?.data?.text
                    });
                } else if (item.type === "paragraph") {
                    tempFaqsAnswer.push({
                        ans: item?.data?.text
                    });
                }
            });
            setFaqsAnswer(tempFaqsAnswer);
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(FaqsStyled, {
        children: faqsData?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                            className: "text-center faqs-title",
                            children: "FAQ’s"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                            className: "text-center faqs-subtitle",
                            children: "Most Frequently Asked Questions about our Services."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: faqsData?.map((data, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBAccordion, {
                            initialActive: 1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdb_react_ui_kit_.MDBAccordionItem, {
                                collapseId: index === 0 && 1,
                                headerTitle: data.question,
                                children: faqsAnswer.length > 0 && faqsAnswer[index]?.ans
                            })
                        }, index);
                    })
                })
            ]
        })
    });
};
// export default Faqs
/* harmony default export */ const FAQS_Faqs = (dynamic_default()(()=>Promise.resolve(Faqs), {
    ssr: false
}));


/***/ })

};
;