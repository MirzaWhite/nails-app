(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

// Define mutation
const CREATE_FRANCHISE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation contactUs(
        $cityId: ID
        $email: String
        $formType: ContactFormEnum!
        $message: String
        $name: String!
        $phoneNumber: String!
        $stateId: ID
    ) {
        contactUs(cityId:$cityId,email:$email,formType:$formType,message:$message,name:$name,phoneNumber:$phoneNumber,stateId:$stateId){
            message
        }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CREATE_FRANCHISE_MUTATION);


/***/ }),

/***/ 9451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_City = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`

query getCity(
$stateId: ID!
 ){
    citiesByState(stateId:$stateId){
        name
        id
    }
}
 `;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_City);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_Ftestimonial = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query Franchise(
$testimonialType: TestimonialTypeEnum!
){
  testimonials(testimonialType:$testimonialType){
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
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_Ftestimonial);


/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_State = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`

query getState {
    states{
        name
        id
    }
}
 `;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_State);


/***/ }),

/***/ 6039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Eligibility_Eligibility)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/Eligibility/Eligibility.styled.js

const OurEligibilityStyled = (external_styled_components_default()).div`
  .Eligibility{
    padding: 40px 30px;
    background: #EFEAF2;
    border-radius: 80px 20px; 
    margin: 10px 0px;
    @media(min-width: 1224px){
      background: #EFEAF2;
      border-radius: 200px 20px;
      padding: 40px 30px;
      width: 95%;
      margin: 80px auto;
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 5%;
      justify-content: center;
      align-items: center;
    }
    @media(min-width: 1224px){
      padding: 80px 80px;
      width: 90%;
      grid-template-columns: 1fr 1fr;
    }
  }
  .mobile-head{
    @media(min-width: 1224px){
      display: none;
    }
  }
  .image-section{
    text-align: -webkit-center;
  }
  .head{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .heading{
    display: flex;
    align-items: flex-end;
    gap: 15px;
  }
  .conditions1{
    margin-top: 24px;
  }
  .ds-head{
    display: none;
    @media(min-width: 1224px){
      display: block;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./elements/Font/Font.styled.js
var Font_styled = __webpack_require__(2586);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./Components/Eligibility/Eligibility.js







const Eligibility = ()=>{
    const isDesktopOrLaptop = (0,external_react_responsive_.useMediaQuery)({
        minWidth: 1224
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(OurEligibilityStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "Eligibility",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-head",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                            color: "#5B307C",
                            weight: 500,
                            className: "mb-2 head",
                            children: "What We Offer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                            color: "#384955",
                            weight: 300,
                            className: "mb-4",
                            children: "Discover the ultimate nail salon franchise experience with Nails and Beyond. Our brand provides exceptional service and luxurious experiences to our clients, and we're looking for franchise partners who share our passion for excellence. Join a trusted leader in the nail industry. Contact us today to learn more about our franchise opportunities."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image-section",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/eligibilityds.png" : "https://cdn.deepsense.space/nails/assets/images/eligibility.png",
                        alt: "eligibility",
                        layout: "fixed",
                        width: isDesktopOrLaptop ? 520 : 310,
                        height: isDesktopOrLaptop ? 520 : 310
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "eligibility-conditions",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ds-head",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.H6, {
                                color: "#5B307C",
                                weight: 500,
                                className: "mb-2 head",
                                children: "What We Offer"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "conditions1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://cdn.deepsense.space/nails/assets/images/tick.png",
                                            alt: "tick",
                                            layout: "fixed",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            color: "#5B307C",
                                            weight: 400,
                                            className: "mb-0",
                                            children: "Comprehensive, in-demand services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        children: "You can offer clients a diverse range of sought-after treatments, including nail art & extensions, lash extensions, lash lifting & tinting, brow lamination & tinting, hair extensions, tattoo (optional), and pedicure & manicure services."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "conditions1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://cdn.deepsense.space/nails/assets/images/tick.png",
                                            alt: "tick",
                                            layout: "fixed",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            color: "#5B307C",
                                            weight: 400,
                                            className: "mb-0",
                                            children: "Efficient, stylish studio design"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        children: "We will help you set up your own 400-500 sq. ft. studio, furnished with a modern layout that maximizes space and creates a welcoming atmosphere for clients. "
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "conditions1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://cdn.deepsense.space/nails/assets/images/tick.png",
                                            alt: "tick",
                                            layout: "fixed",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            color: "#5B307C",
                                            weight: 400,
                                            className: "mb-0",
                                            children: "Strong return on investment"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        children: "You can experience attractive profit margins, with an estimated ROI to be expected within 2 to 2.5 years, making it a financially attractive opportunity."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "conditions1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://cdn.deepsense.space/nails/assets/images/tick.png",
                                            alt: "tick",
                                            layout: "fixed",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            color: "#5B307C",
                                            weight: 400,
                                            className: "mb-0",
                                            children: "Comprehensive training and support"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                        children: "You and your staff will receive extensive training in all aspects of the business, from management to service provision, as well as ongoing support from the Nails ‘n Beyond team - whenever you need it!"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "conditions1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://cdn.deepsense.space/nails/assets/images/tick.png",
                                            alt: "tick",
                                            layout: "fixed",
                                            width: 20,
                                            height: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Font_styled.B2, {
                                            color: "#5B307C",
                                            weight: 400,
                                            className: "mb-0",
                                            children: "Marketing and branding assistance"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Font_styled.B2, {
                                        children: [
                                            " ",
                                            "Benefit from The Naturals Brand as well as Nails ‘n Beyond's proven marketing strategies and strong brand recognition to attract clients and foster loyalty.",
                                            " "
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
// export default Eligibility;
/* harmony default export */ const Eligibility_Eligibility = (dynamic_default()(()=>Promise.resolve(Eligibility), {
    ssr: false
}));


/***/ }),

/***/ 3553:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2586);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1451);
/* harmony import */ var _Apollo_query_GetStateQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4111);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Apollo_query_GetCityQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9451);
/* harmony import */ var _Apollo_mutation_FranchiseMutation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3857);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
react_toastify__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const FranchiseContact = ()=>{
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: statedata , 1: setStateData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: citydata , 1: setCitydata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [getCityData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(_Apollo_query_GetCityQuery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const [getFunData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(_Apollo_query_GetStateQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const [Submitfrom] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_Apollo_mutation_FranchiseMutation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const { 0: inputValues , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        FirstName: "",
        MobileNo: "",
        EmailID: "",
        State: "",
        City: "",
        Message: ""
    });
    const { 0: isCityError , 1: setCityError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ApiStatecalling();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onChangeHandler = (event)=>{
        const { name , value  } = event.target;
        if (name === "State") {
            ApiCityCalling(value);
        }
        if (name === "MobileNo") {
            if (isNaN(value)) {
                return false;
            }
        }
        setInputValue({
            ...inputValues,
            [name]: value
        });
    };
    const onClickHandler = ()=>{
        if (inputValues.State === "") {
            setCityError(true);
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.warning("Please select the state", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_CENTER
            });
        } else {
            setCityError(false);
        }
    };
    const FormSubmit = ()=>{
        const emailCond = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (inputValues.FirstName.trim() === "") {
            setError({
                ...error,
                FirstName: "Please enter your name",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            });
        } else if (inputValues.MobileNo.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "Please enter your mobile number",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            });
        } else if (inputValues.MobileNo.length !== 10) {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "Please enter valid mobile number",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            });
        } else if (inputValues.EmailID.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "Please enter your Emailid",
                State: "",
                City: "",
                Message: ""
            });
        } else if (inputValues.EmailID.match(emailCond) === null) {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "Please enter valid Emailid",
                State: "",
                City: "",
                Message: ""
            });
        } else if (inputValues.State.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "Please select your state",
                City: "",
                Message: ""
            });
        } else if (inputValues.City.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "Please select your city",
                Message: ""
            });
        } else if (inputValues.Message.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: "Please enter your Message"
            });
        } else {
            Submit();
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            });
        }
    };
    const ApiStatecalling = ()=>{
        try {
            getFunData().then(({ data , errors  })=>{
                if (data) {
                    setStateData(data.states);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    function ApiCityCalling(id) {
        console.log(inputValues.City);
        try {
            getCityData({
                variables: {
                    stateId: id
                }
            }).then(({ data , errors  })=>{
                if (data) {
                    setCitydata(data.citiesByState);
                    if (inputValues.City !== "") {
                        setInputValue((prevState)=>({
                                ...prevState,
                                City: data.citiesByState[0].id
                            }));
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    const Submit = async ()=>{
        try {
            const { data , errors  } = await Submitfrom({
                variables: {
                    cityId: inputValues.City,
                    email: inputValues.EmailID,
                    formType: "FRANCHISE",
                    message: inputValues.Message,
                    name: inputValues.FirstName,
                    phoneNumber: inputValues.MobileNo,
                    stateId: inputValues.State
                }
            });
            console.log(data.contactUs.message);
            if (data.contactUs.message.includes("Submitted")) {
                setInputValue({
                    FirstName: "",
                    MobileNo: "",
                    EmailID: "",
                    State: "",
                    City: "",
                    Message: ""
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("successfully", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FranchiseContactStyle, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "franchiseForm",
                className: "FranchiseContact",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.H6, {
                        color: "#5B307C",
                        weight: 500,
                        className: "title",
                        children: "Contact Us"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "FirstName",
                                        placeholder: "Name",
                                        value: inputValues.FirstName,
                                        onChange: onChangeHandler
                                    }),
                                    error?.FirstName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.FirstName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "MobileNo",
                                        pattern: "[0-9]*",
                                        maxLength: "10",
                                        placeholder: "Phone Number",
                                        value: inputValues.MobileNo,
                                        onChange: onChangeHandler
                                    }),
                                    error?.MobileNo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.MobileNo
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "EmailID",
                                        placeholder: "Email Address",
                                        value: inputValues.EmailID,
                                        onChange: onChangeHandler
                                    }),
                                    error?.EmailID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.EmailID
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "select-drop-down",
                                        type: "text",
                                        value: inputValues.State,
                                        name: "State",
                                        onChange: onChangeHandler,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                className: "select-option",
                                                disabled: true,
                                                selected: true,
                                                hidden: true,
                                                children: "Select State"
                                            }),
                                            statedata.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "select-option",
                                                    value: data.id,
                                                    children: data.name
                                                }, index))
                                        ]
                                    }),
                                    error?.State && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.State
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "select-drop-down",
                                        type: "text",
                                        value: inputValues.City,
                                        name: "City",
                                        onClick: ()=>onClickHandler(),
                                        onChange: onChangeHandler,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                className: "select-option",
                                                disabled: true,
                                                selected: true,
                                                hidden: true,
                                                children: "Select City"
                                            }),
                                            isCityError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                className: "select-option",
                                                children: "Please select the state"
                                            }),
                                            citydata?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "select-option",
                                                    value: data.id,
                                                    children: data.name
                                                }, index))
                                        ]
                                    }),
                                    error?.City && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.City
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        className: "message",
                                        name: "Message",
                                        value: inputValues.Message,
                                        placeholder: "Message",
                                        onChange: onChangeHandler
                                    }),
                                    error?.Message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger mb-2 mt-0",
                                        children: error.Message
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "submit",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .ContainedButton */ .F, {
                            width: "151px",
                            active_bg_color: "#5B307C",
                            padding: "16px",
                            fontSize: "16px",
                            onClick: ()=>FormSubmit(),
                            children: "Submit"
                        })
                    })
                ]
            })
        })
    });
};
// export default FranchiseContact;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.resolve(FranchiseContact), {
    ssr: false
}));
const FranchiseContactStyle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin: 20px 0;
  padding: 24px;
  @media (min-width: 1224px) {
    padding: 0;
  }

  .FranchiseContact {
    padding: 16px;
    background: #EFEAF2;
    border-radius: 20px;
    @media (min-width: 1224px) {
      padding: 40px 0;
      width: 90%;
      margin: 0 auto;
    }
  }

  .title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 20px;
    text-align: -webkit-center;
    @media (min-width: 1224px) {
      margin-bottom: 40px;
      background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  input, select, textarea {
    background: #FFFFFF;
    padding: 10px;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #BFBBC2;
    margin-bottom: 30px;
    @media (min-width: 1224px) {
      background: #FFFFFF;
      box-shadow: 0 8px 16px #D1C6DB;
      border-radius: 16px;
      padding: 17px;
      font-family: 'Jost', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #A9A8AD;
      margin-bottom: 24px;
    }
  }

  .select-drop-down {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${"https://cdn.deepsense.space/nails/assets/images/dropdown-arrow.png"}) !important;
    background-repeat: no-repeat !important;
    background-position-x: 95% !important;
    background-position-y: 23px !important;
    margin-right: 2rem;
    color: #A9A8AD;
    padding: 15px 10px;
    @media (max-width: 1224px) {
      background-position-y: 13px !important;
    }
  }

  .select-option {
    color: #A9A8AD
  }

  .message {
    height: 80px !important;
    @media (min-width: 1224px) {
      height: 110px !important;
    }
  }

  input, select, textarea:focus {
    outline: none;
  }

  ::placeholder {
    color: #A9A8AD !important;
  }

  .submit {
    text-align: -webkit-center;
    @media (min-width: 1224px) {
      margin-top: 20px;
    }
  }

  .form-section {
    @media (min-width: 1224px) {
      width: 87%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      gap: 10%;
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8135:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2586);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Apollo_query_GetFranchiseTestimonialQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(219);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3015);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_9__]);
([swiper__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// Import Swiper styles





const FranchiseTestimonials = ()=>{
    const { 0: testimonial , 1: setTestimonial  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: imageError , 1: setImageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imageError2 , 1: setImageError2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [getTestimonialData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(_Apollo_query_GetFranchiseTestimonialQuery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const handleImageError = ()=>{
        setImageError(true);
    };
    const handleImageError2 = ()=>{
        setImageError2(true);
    };
    function ApiCalling() {
        try {
            getTestimonialData({
                variables: {
                    testimonialType: "FRANCHISE"
                }
            }).then(({ data , errors  })=>{
                if (data) {
                    setTestimonial(data.testimonials);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ApiCalling();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const Review = "https://cdn.deepsense.space/nails/assets/images/review.png";
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        query: "(min-width:1224px)"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: testimonial.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FranchiseTestimonialsStyle, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "FranchiseTestimonial",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "head",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.H6, {
                                color: "#5B307C",
                                weight: 500,
                                className: "mb-2 head ",
                                children: "Franchise Testimonials"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                color: "#384955",
                                weight: 400,
                                className: "mb-4",
                                children: "What our precious clients have to say about our franchise!"
                            })
                        ]
                    }),
                    isDesktopOrLaptop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                        // install Swiper modules
                        className: "mySwiper",
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Scrollbar,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.A11y
                        ],
                        spaceBetween: 50,
                        loop: true,
                        slidesPerView: 3,
                        navigation: true,
                        pagination: {
                            clickable: true
                        },
                        children: testimonial.map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "testimonial-box",
                                    children: [
                                        item?.desktopImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "profile",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "profile-image",
                                                src: imageError ? "https://cdn.deepsense.space/nails/assets/images/FranchiseTestimonialDummy.png" : item.desktopImage,
                                                alt: "profilepic",
                                                layout: "fixed",
                                                width: 140,
                                                height: 140,
                                                onError: handleImageError
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.S1, {
                                            color: "#592F79",
                                            weight: 500,
                                            className: "mb-1 ",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                            color: "#592F79",
                                            weight: 400,
                                            className: "mb-2",
                                            children: item.role
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                            color: "#384955",
                                            weight: 400,
                                            className: "mb-3",
                                            children: item.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "review-start",
                                            children: [
                                                item.rating === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: Review,
                                                    alt: "review",
                                                    layout: "fixed",
                                                    width: 16,
                                                    height: 16
                                                }),
                                                item.rating === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index);
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                        // install Swiper modules
                        className: "mySwiper",
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Scrollbar,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.A11y
                        ],
                        spaceBetween: 50,
                        slidesPerView: 1,
                        navigation: true,
                        loop: true,
                        pagination: {
                            clickable: true
                        },
                        children: testimonial.map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "testimonial-box",
                                    children: [
                                        item?.mobileImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "profile",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "profile-image",
                                                src: imageError2 ? "https://cdn.deepsense.space/nails/assets/images/FranchiseTestimonialDummy.png" : item.mobileImage,
                                                alt: "FranchiseTesimonialProfile",
                                                layout: "fixed",
                                                width: 140,
                                                height: 140,
                                                onError: handleImageError2
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.S1, {
                                            color: "#592F79",
                                            weight: 500,
                                            className: "mb-1",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                            color: "#592F79",
                                            weight: 400,
                                            className: "mb-2",
                                            children: item.role
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_5__.B2, {
                                            color: "#384955",
                                            weight: 400,
                                            className: "mb-3",
                                            children: item.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "review-start",
                                            children: [
                                                item.rating === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: Review,
                                                    alt: "review",
                                                    layout: "fixed",
                                                    width: 16,
                                                    height: 16
                                                }),
                                                item.rating === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                }),
                                                item.rating === 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: Review,
                                                            alt: "review",
                                                            layout: "fixed",
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index);
                        })
                    })
                ]
            })
        })
    });
};
// export default FranchiseTestimonials;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>Promise.resolve(FranchiseTestimonials), {
    ssr: false
}));
const FranchiseTestimonialsStyle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin: 20px 0;
  @media (min-width: 900px) {
    margin: 70px 0px;
  }

  .FranchiseTestimonial {
    padding: 24px;
    text-align: -webkit-center;
    @media (min-width: 1200px) {
      padding: 0px;
      width: 90%;
      margin: 0px auto;
    }
  }

  .head {
    text-align: -webkit-center;
  }

  .testimonial-box {
    background: #EFEAF2;
    text-align: -webkit-center;
    border-radius: 80px 16px;
    padding: 24px 24px 25px 24px;
    position: relative;
    margin-top: 30px;
    width: 320px;
    @media (min-width: 767px) {
      padding: 24px 40px 24px 40px;
      width: 320px;
    }
    @media (min-width: 1000px) {
      padding: 24px 40px 24px 40px;
      width: 292px;
    }
    @media (min-width: 1300px) {
      padding: 24px 40px 24px 40px;
      width: 392px;
    }
  }

  .review-start {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .profile-image {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px 20px;
  }

  .head {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .profile {
    position: absolute;
    top: -61px;
    left: 92px;
    border-radius: 40px 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px 20px;
    @media (min-width: 1200px) {
      left: 85px;
    }
    @media (min-width: 1300px) {
      left: 130px;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-next {
    background-image: url("https://cdn.deepsense.space/nails/assets/images/right.png");
    width: 60px;
    height: 60px;
    position: absolute;
    right: 6%;
    top: 52%;
    @media (min-width: 1224px) {
      display: none;
    }
  }

  .swiper-button-prev {
    background-image: url("https://cdn.deepsense.space/nails/assets/images/left.png");
    width: 60px;
    height: 60px;
    position: absolute;
    left: 4%;
    top: 52%;
    z-index: 10;
    @media (min-width: 1224px) {
      display: none;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px !important;
    left: 0px;
    width: 100%;
    display: none;
    @media (min-width: 1224px) {
      display: block;
    }
  }

  .swiper-wrapper {
    @media (min-width: 1200px) {
      margin-bottom: 50px !important;
    }
  }

  .swiper-pagination-bullet-active {
    background: #5B307C !important;
    border-radius: 100px !important;
    width: 72px !important;
    height: 8px !important;
  }

  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: #5B307C !important;
    opacity: inherit;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Components_Eligibility_Eligibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6039);
/* harmony import */ var _Components_FranchiseTestimonials_FranchiseTestimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8135);
/* harmony import */ var _Components_FranchiseContactUs_FranchiseContact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3553);
/* harmony import */ var _Components_FAQS_Faqs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1303);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Apollo_query_GetFaqsQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5863);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4257);
/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6147);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_FranchiseTestimonials_FranchiseTestimonial__WEBPACK_IMPORTED_MODULE_4__, _Components_FranchiseContactUs_FranchiseContact__WEBPACK_IMPORTED_MODULE_5__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_11__]);
([_Components_FranchiseTestimonials_FranchiseTestimonial__WEBPACK_IMPORTED_MODULE_4__, _Components_FranchiseContactUs_FranchiseContact__WEBPACK_IMPORTED_MODULE_5__, _Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Franchise = ({ homepageQuery  })=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)({
        minWidth: 1224
    });
    const { 0: faqsData , 1: setFaqsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [getFaqsData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery)(_Apollo_query_GetFaqsQuery__WEBPACK_IMPORTED_MODULE_9__/* .GET_FAQS_QUERY */ .Q);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        FaqsDataApi();
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const FaqsDataApi = async ()=>{
        try {
            await getFaqsData({
                variables: {
                    faqType: "FRANCHISE"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Nails Beyond"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AboutUsBanner_AboutUsBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                CTALink: "#franchiseForm",
                CTAName: "Get Started",
                picture: isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/FranchiseDesktop.webp" : "https://cdn.deepsense.space/nails/assets/images/FranchiseMobile.webp",
                Title: "Join Our Successful Franchise Family Today!",
                Description: "Welcome Nails’n Beyond salon franchise page! We are excited to offer you the opportunity to join our successful brand and become a part of our growing family. At our salons," + " we are passionate about providing high-quality nail art and eyebrow services to our clients. "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OfferServices_OfferServices__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                Services: homepageQuery.Services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Eligibility_Eligibility__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_FranchiseTestimonials_FranchiseTestimonial__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            faqsData?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_FAQS_Faqs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                faqsData: faqsData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_FranchiseContactUs_FranchiseContact__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
async function getServerSideProps({ req , res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    const { data  } = await _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_12__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql`
            query franchisePage {
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
            }

        `
    });
    return {
        props: {
            homepageQuery: data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Franchise);

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3282:
/***/ ((module) => {

"use strict";
module.exports = require("react-accessible-accordion");

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

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,260,152,952,664,586,451,857,37], () => (__webpack_exec__(8290)));
module.exports = __webpack_exports__;

})();