(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

// Define mutation
const CREATE_SUBSCRIBE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
     mutation subscribe(
        $email:String!
       
  ) {
    subscribe(email:$email){
        message
}
  }
  `;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CREATE_SUBSCRIBE_MUTATION);


/***/ }),

/***/ 5722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2469);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2586);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1451);
/* harmony import */ var _Apollo_mutation_SubscribeMutation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5884);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
react_toastify__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Footer = ()=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        minWidth: 1224
    });
    const [Subscribe] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(_Apollo_mutation_SubscribeMutation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { 0: emailId , 1: setEmailid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const VerifyEmail = async ()=>{
        try {
            const { data , errors  } = await Subscribe({
                variables: {
                    email: emailId
                }
            });
            if (data.subscribe.message.includes("already")) {
                setEmailid("");
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("alredy subscribed", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_CENTER
                });
            }
            if (data.subscribe.message.includes("successfully")) {
                setEmailid("");
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("successfully", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_CENTER
                });
            }
            console.log(data.subscribe.message);
        } catch (error) {
            console.log(error);
        }
    };
    function EmailValidation() {
        setError("");
        const emailCond = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailId.trim() === "" || emailId.match(emailCond) === null) {
            setError("Please Enter Valid EmailId");
            return false;
        } else {
            setError("");
            VerifyEmail();
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_2__/* .FooterStyled */ .c, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "footer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: isDesktopOrLaptop ? "d-none" : "subscribe-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "subscribe-box",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.S2, {
                                color: "#5B307C",
                                weight: 500,
                                className: "text-center mb-3 title",
                                children: "Subscribe For Newsletter"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-field",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "Email Address",
                                        type: "text",
                                        name: "Email",
                                        value: emailId,
                                        onChange: (e)=>setEmailid(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "child",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ContainedButton */ .F, {
                                            width: "100px",
                                            fontSize: "16px",
                                            padding: "13px",
                                            onClick: ()=>EmailValidation(),
                                            children: "Subscribe"
                                        })
                                    })
                                ]
                            }),
                            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                style: {
                                    color: "red",
                                    marginBottom: "5px",
                                    marginTop: "8px"
                                },
                                children: error
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                color: "#384955",
                                weight: 500,
                                className: "mt-1",
                                children: "By signing and clicking Submit, you affirm that you have read and agree to the Privacy Policy and Terms of Use. and want to receive news. "
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ds-footer-area",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ds-links",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "links-section",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: "https://cdn.deepsense.space/nails/assets/images/newmainlogo.png",
                                                alt: "footerlogo1",
                                                layout: "fixed",
                                                width: isDesktopOrLaptop ? 155 : 94,
                                                height: isDesktopOrLaptop ? 105 : 64,
                                                onClick: ()=>router.push("/")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "social-links",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.facebook.com/nailsnbeyondindia",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: "https://cdn.deepsense.space/nails/assets/images/facebook.png",
                                                                alt: "facebook",
                                                                layout: "fixed",
                                                                width: isDesktopOrLaptop ? 55 : 35,
                                                                height: isDesktopOrLaptop ? 55 : 35
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.instagram.com/nails.n.beyond/",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: "https://cdn.deepsense.space/nails/assets/images/insta.png",
                                                                alt: "insta",
                                                                layout: "fixed",
                                                                width: isDesktopOrLaptop ? 55 : 35,
                                                                height: isDesktopOrLaptop ? 55 : 35
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "site-links",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "head",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.S2, {
                                                    weight: 500,
                                                    children: "Site Links"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "link-text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/about-us",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/gallery",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "Gallery"
                                                        })
                                                    }),
                                                    isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/blogs",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "Blogs"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/contact-us",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "Contact Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/booking",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                                            className: !isDesktopOrLaptop ? "d-none" : "",
                                                            color: "#384955",
                                                            weight: 500,
                                                            children: "Book Appointment"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: isDesktopOrLaptop ? "DS-subscribe" : "d-none",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "DSsubscribe-box2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.S2, {
                                            color: "#5B307C",
                                            weight: 500,
                                            className: "text-center mb-3 title",
                                            children: "Subscribe For Newsletter"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-field",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    placeholder: "Email Address",
                                                    type: "text",
                                                    name: "Email",
                                                    value: emailId,
                                                    onChange: (e)=>setEmailid(e.target.value)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "child",
                                                    onClick: ()=>EmailValidation(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ContainedButton */ .F, {
                                                        width: "140px",
                                                        fontSize: "16px",
                                                        padding: "18px 32px",
                                                        children: "Subscribe"
                                                    })
                                                })
                                            ]
                                        }),
                                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            style: {
                                                color: "red",
                                                marginBottom: "5px",
                                                marginTop: "8px"
                                            },
                                            children: error
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                            color: "#384955",
                                            weight: 500,
                                            className: "ds-para mt-1",
                                            children: "By signing and clicking Submit, you affirm that you have read and agree to the Privacy Policy and Terms of Use. and want to receive news. "
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "reserved",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                            className: isDesktopOrLaptop ? "d-none" : "",
                            color: "#384955",
                            weight: 400,
                            children: "2023 Nails.N.Beyond.All Rights Reserved"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ds-reserve",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                    color: "#384955",
                                    weight: 400,
                                    children: "2023 Nails.N.Beyond.All Rights Reserved"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                    color: "#384955",
                                    weight: 400,
                                    onClick: ()=>router.push("./privacy-policy"),
                                    className: "privacy",
                                    children: "Privacy Policy | Terms & Conditions"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FooterStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  .subscribe-section{
    padding: 40px 24px;
  }
  .subscribe-box{
    background: #EFEAF2;
    border-radius: 20px;
    padding: 16px 12px;
  }
  .title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .privacy{
    cursor: pointer;
  }
  input{
    padding: 17px 15px;
    background: #FFFFFF;
    border-radius: 100px;
    width: 100%;
    color: #384955;
    border: none;
    @media(min-width: 1224px){
      background: #EFEAF2;
      border-radius: 80px;
      padding: 24px;
    }
  }
  input:focus{
    outline:none;
  }
  .Subscribe{
    padding: 10px 20px;
    background: #5B307C;
    box-shadow: 0px 0.606838px 24.2735px 7.28205px rgba(0, 0, 0, 0.08);
    border-radius: 24.2735px;
  }
  .DSsubscribe-box2{
    @media(min-width: 1224px){
      padding: 40px;
      background: #FFFFFF;
      border-radius: 20px;
      max-width: 550px;
    }
  }
  .DS-subscribe{
    @media(min-width: 1224px) {
      display: grid;
      place-items: flex-end;
    }
  }
  .input-field{
    position: relative;
  }
  .child{
    position: absolute;
    top: 7px;
    right: 5px;
    @media(min-width: 1224px){
      top: 9px;
    }
  }
  .ds-para{
    @media(min-width: 1224px){
      text-align: left;
      margin-top: 15px !important;
    }
  }
  .footer-section{
    padding: 24px 30px 40px 30px;
    background: #EFEAF2;
    border-radius: 200px 200px 0px 0px;
    text-align: -webkit-center;
    @media(min-width: 1224px){
      padding: 64px 0px;
      background: #EFEAF2;
      border-radius: inherit;
    }
  }
  .ds-footer-area{
    @media(min-width: 1224px){
      width: 90%;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
    }
  }
  .ds-links{
    @media(min-width: 1224px){
      display:flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 50px;
    }
   }
  .social-links{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin-top: 10px;
  }
  .links-section{
    cursor: pointer;
    @media(min-width: 1224px){
      text-align: justify;
    }
  }
  .head{
    margin: 21px 0px 16px 0px;
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media(min-width: 1224px){
      text-align: justify;
    }
  }
  .link-text{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media(min-width: 1224px){
      flex-direction: column;
      gap: 10px;
      align-items: baseline;
    }
  }
  .reserved{
    padding: 7px 0px 15px 0px ;
    text-align: -webkit-center;
  }
  .ds-reserve{
    display: none;
    @media(min-width: 1224px){
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0px auto;
    }
  }
`;


/***/ }),

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/Header/Header.styled.js

const HeaderStyled = (external_styled_components_default()).div`
  position: sticky;
  z-index: 1000;
  width: 100%;
  top: 0;
  .Header {
    padding: 12px 24px;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 20px 20px;
    overflow: hidden;
    transition: 1s;
    height: 64px;
    @media(min-width: 1224px){
      height:fit-content;
      padding: 15px 5%;
      background: #FFFFFF;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
      border-radius: 0 0;
    }
  }
.Header1{
  padding: 12px 24px;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  transition: 1s;
  height: 650px;
  @media(min-width: 760px){
    height: 650px;
  }
  @media(min-width: 1224px){
    height:100px;
  }
}
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close{
    cursor: pointer;
  }
  .menu-text-section{
    display: none;
    @media(min-width: 1224px){
      display: block;
    }
  }
  .book{
    padding: 12px 32px;
    background: #5B307C;
    box-shadow: 0px 1px 40px 12px rgba(0, 0, 0, 0.08);
    border-radius: 40px;
    width: fit-content;
    cursor: pointer;
  }
  .menu-text-section{
    display: none;
    @media(min-width: 1224px){
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 1224px){
      display: none;
    }
  }
  .title-focus{
    cursor: pointer;
    color: #384955;
    padding: 12px 32px;
    transition: all 0.5s;
    width: fit-content;
    border-radius: 40px;
  }
  .title-focus:hover{    
    background: #5B307C;
    box-shadow: 0px 1px 40px 12px rgba(0, 0, 0, 0.08);       
    color: #ffffff !important;
  }
  .menu-section{
    cursor: pointer;
    @media(min-width: 1224px){
      display: none;
    }
  }
  .logo-section{
    cursor: pointer;
  }
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./Components/Header/Header.js







const Header = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const ChangeValue = (url)=>{
        if (url) {
            router.push(url);
        }
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(HeaderStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: show ? "Header1" : "Header",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "heading",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-section",
                            onClick: ()=>router.push("/"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "https://cdn.deepsense.space/nails/assets/images/newmainlogo.png",
                                alt: "main-logo",
                                layout: "fixed",
                                width: isDesktopOrLaptop ? 100 : 67,
                                height: isDesktopOrLaptop ? 58 : 40
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "menu-text-section",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/products"),
                                    className: "title-focus",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        weight: 500,
                                        children: "Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title-focus",
                                    onClick: ()=>router.push("/gallery"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        weight: 500,
                                        children: "Gallery"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/franchise"),
                                    className: "title-focus",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        weight: 500,
                                        children: "Franchise "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/blogs"),
                                    className: "title-focus",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        weight: 500,
                                        children: "Blogs "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/contact-us"),
                                    className: "title-focus",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        weight: 500,
                                        children: "Contact Us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/booking"),
                                    className: "book",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        color: "#FFFFFF",
                                        weight: 500,
                                        children: "Book With Us"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-section",
                            onClick: ()=>ChangeValue(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "https://cdn.deepsense.space/nails/assets/images/menuicon.png",
                                alt: "icon",
                                layout: "fixed",
                                width: 24,
                                height: 24
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title-focus mb-5 mt-4",
                            onClick: ()=>ChangeValue("/products"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                weight: 500,
                                children: "Services"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title-focus mb-5",
                            onClick: ()=>ChangeValue("/gallery"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                weight: 500,
                                children: "Gallery"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title-focus mb-5",
                            onClick: ()=>ChangeValue("/franchise"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                weight: 500,
                                children: "Franchise "
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title-focus mb-5",
                            onClick: ()=>ChangeValue("/blogs"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                weight: 500,
                                children: "Blogs "
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title-focus mb-5",
                            onClick: ()=>ChangeValue("/contact-us"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                weight: 500,
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "book mb-4",
                            onClick: ()=>ChangeValue("/booking"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.S1, {
                                color: "#FFFFFF",
                                "font-weight": 500,
                                children: "Book With Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "close mt-3 mb-4",
                            onClick: ()=>ChangeValue(null),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "https://cdn.deepsense.space/nails/assets/images/taggleclose.png",
                                alt: "icon",
                                layout: "fixed",
                                width: 50,
                                height: 50
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6147);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5722);
/* harmony import */ var _Components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8094);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
        client: _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Header_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 7311:
/***/ ((module) => {

"use strict";
module.exports = require("mdb-react-ui-kit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,260,952,664,586,451], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();