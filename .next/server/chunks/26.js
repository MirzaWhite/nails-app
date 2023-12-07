"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2586);
/* harmony import */ var _ContactUsForm_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3578);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1451);
/* harmony import */ var _BookAppointment_index_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9662);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7311);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Apollo_query_GetLocateUsQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3279);
/* harmony import */ var _Apollo_mutation_FranchiseMutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3857);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
react_toastify__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const ContactUsForm = ()=>{
    const isDesktopOrLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
        query: "(min-width:1224px)"
    });
    const { 0: selectedPositionIsVisible , 1: setSelectedPositionIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: locateUsData , 1: setLocateUsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: typeData , 1: setTypeData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: selectedData , 1: setSelectedData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: mobileNo , 1: setMobileNo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [getLocateUsData] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(_Apollo_query_GetLocateUsQuery__WEBPACK_IMPORTED_MODULE_10__/* .GET_STORES_QUERY */ .K);
    const [contactUsFormMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_Apollo_mutation_FranchiseMutation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        LocateUsDataApi();
        return ()=>{};
    }, [
        typeData
    ]);
    const LocateUsDataApi = async ()=>{
        try {
            await getLocateUsData({
                variables: {
                    fullAddress_Icontains: typeData.length > 0 ? typeData : "N"
                }
            }).then(({ data  })=>{
                setLocateUsData(data.stores.edges);
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleOnChangeService = (data)=>{
        setSelectedPositionIsVisible(false);
        setSelectedData(data);
        setTypeData("");
    };
    const typeDataFromInput = (e)=>{
        if (e.target.value !== "") {
            setSelectedPositionIsVisible(true);
            setTypeData(e.target.value);
        } else {
            setSelectedPositionIsVisible(false);
            setTypeData("");
        }
    };
    const handleNameChange = (e)=>{
        setName(e.target.value);
    };
    const handleMobileNoChange = (e)=>{
        setMobileNo(e.target.validity.valid ? e.target.value : mobileNo);
    };
    const handleMessageChange = (e)=>{
        setMessage(e.target.value);
    };
    const handleSubmit = async ()=>{
        let tmp_error = {};
        if (name === "") {
            tmp_error = {
                name: "Please enter your name"
            };
            setError(tmp_error);
        } else if (mobileNo === "") {
            tmp_error = {
                mobileNo: "Please enter your mobile number"
            };
            setError(tmp_error);
        } else if (mobileNo.length > 10 || mobileNo.length < 10) {
            tmp_error = {
                mobileNo: "Please enter valid mobile number"
            };
            setError(tmp_error);
        } else if (message === "") {
            tmp_error = {
                message: "Please enter your Message"
            };
            setError(tmp_error);
        } else {
            let variable = {
                phoneNumber: mobileNo,
                message: message,
                name: name,
                formType: "NORMAL"
            };
            try {
                setLoading(true);
                const data = await contactUsFormMutation({
                    variables: variable
                });
                if (data?.data?.contactUs) {
                    setLoading(false);
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(data?.data?.contactUs?.message, {
                        position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_CENTER
                    });
                    setError({});
                    setName("");
                    setMobileNo("");
                    setMessage("");
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    };
    const RedirectToMap = ()=>{
        if (selectedData?.coordinate?.length > 1) {
            window.open(selectedData.coordinate, "_blank");
        } else if (locateUsData[0]?.node?.coordinate?.length > 1) {
            debugger;
            window.open(locateUsData[0].node.coordinate, "_blank");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactUsForm_styled__WEBPACK_IMPORTED_MODULE_4__/* .ContactUsFormtStyle */ .V, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "contactform",
            className: "about-us-contact",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "locate-us",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.H6, {
                                    color: "#5B307C",
                                    weight: 500,
                                    className: "title",
                                    children: "Locate Us"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookAppointment_index_style__WEBPACK_IMPORTED_MODULE_7__/* .SelectServicesStyle */ .D9, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "select-our-services",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    value: typeData,
                                                    type: "text",
                                                    name: "fname",
                                                    placeholder: "Search Your Store",
                                                    onChange: (event)=>typeDataFromInput(event),
                                                    className: "search-address"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_8__.MDBCollapse, {
                                                show: selectedPositionIsVisible,
                                                className: "overflow-auto opints-to-select",
                                                children: locateUsData.length > 0 ? locateUsData.map((item, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-flex justify-content-between single-service",
                                                        onClick: ()=>handleOnChangeService(item.node),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B1, {
                                                            className: "d-flex align-items-center py-2",
                                                            color: "#BFBBC2",
                                                            children: item.node.fullAddress
                                                        }, index)
                                                    }, index);
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B1, {
                                                    className: "d-flex align-items-center justify-content-center no-store",
                                                    color: "#BFBBC2",
                                                    children: "No store available."
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "contact-detail-part mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex contacts",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        width: isDesktopOrLaptop ? "52px" : "32px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: "https://cdn.deepsense.space/nails/assets/images/location.png",
                                                        alt: "alt",
                                                        width: isDesktopOrLaptop ? 24 : 16,
                                                        height: isDesktopOrLaptop ? 30 : 20,
                                                        priority: false
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B2, {
                                                    className: "address-part",
                                                    children: selectedData?.fullAddress ? selectedData?.fullAddress : locateUsData[0]?.node.fullAddress
                                                })
                                            ]
                                        }),
                                        selectedData?.phoneNumber?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex contacts",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: "https://cdn.deepsense.space/nails/assets/images/phone.png",
                                                        alt: "alt",
                                                        width: isDesktopOrLaptop ? 24 : 16,
                                                        height: isDesktopOrLaptop ? 24 : 16,
                                                        priority: false
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B2, {
                                                    className: "address-part",
                                                    children: [
                                                        " ",
                                                        selectedData?.phoneNumber ? selectedData?.phoneNumber : locateUsData[0]?.node.phoneNumber
                                                    ]
                                                })
                                            ]
                                        }),
                                        selectedData?.email?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex contacts",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: "https://cdn.deepsense.space/nails/assets/images/message.png",
                                                        alt: "alt",
                                                        width: isDesktopOrLaptop ? 28 : 18,
                                                        height: isDesktopOrLaptop ? 22 : 14,
                                                        priority: false
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B2, {
                                                    className: "address-part",
                                                    children: selectedData?.email ? selectedData?.email : locateUsData[0]?.node.email
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.B2, {
                                            onClick: ()=>RedirectToMap(),
                                            className: "text-center view-map",
                                            children: "View on Map"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: isDesktopOrLaptop ? "contact-us" : "contact-us pt-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Font_Font_styled__WEBPACK_IMPORTED_MODULE_3__.H6, {
                                    color: "#5B307C",
                                    weight: 500,
                                    className: "title",
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "form-values",
                                    type: "text",
                                    name: "fname",
                                    placeholder: "Name",
                                    value: name,
                                    onChange: (e)=>handleNameChange(e)
                                }),
                                error.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-danger mb-2 mt-0",
                                    children: error.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "form-values",
                                    type: "text",
                                    name: "Phone Number",
                                    placeholder: "Phone Number",
                                    value: mobileNo,
                                    pattern: "[0-9]*",
                                    maxLength: "10",
                                    onInput: (e)=>handleMobileNoChange(e),
                                    onChange: (e)=>handleMobileNoChange(e)
                                }),
                                error.mobileNo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-danger mb-2 mt-0",
                                    children: error.mobileNo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "message",
                                    name: "Message",
                                    placeholder: "Message",
                                    rows: "4",
                                    cols: "50",
                                    value: message,
                                    onChange: (e)=>handleMessageChange(e)
                                }),
                                error.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-danger mb-2 mt-0",
                                    children: error.message
                                }),
                                isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "submit Roboto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ContainedButton */ .F, {
                                        width: "151px",
                                        active_bg_color: "#5B307C",
                                        padding: "16px 48px",
                                        onClick: handleSubmit,
                                        fontSize: "16px",
                                        disabled: loading,
                                        children: "Submit"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !isDesktopOrLaptop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "submit pt-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ContainedButton */ .F, {
                        width: "151px",
                        active_bg_color: "#5B307C",
                        padding: "16px",
                        onClick: handleSubmit,
                        disabled: loading,
                        fontSize: "16px",
                        children: "Submit"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(()=>Promise.resolve(ContactUsForm), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ContactUsFormtStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContactUsFormtStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: 24px 24px 36px 24px;

  .about-us-contact {
    padding: 16px;
    background: #EFEAF2;
    border-radius: 20px;
    scroll-margin-top: 64px;
    @media(min-width: 1224px){
      scroll-margin-top: 85px;
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
  }
.search-store{
  border:none;
  width: 100%;
}
  .form-values{
    background: #FFFFFF;
    padding: 10px;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #BFBBC2;
    margin-bottom: 15px;
  }

  .contact-detail-part {
    padding: 24px 10px 12px 10px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 20px;
  }

  .contacts {
    gap: 16px;
    padding-top: 12px;
  }

  .address-part {
    color: #384955;
  }

  .view-map {
    color: #5B307C;
    padding: 30px 0 28px 0;
    cursor: pointer;
  }

  .message {
    height: 80px !important;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 16px;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #BFBBC2;
    border: none;
    padding: 10px;
  }

  input:focus, .message:focus {
    outline: none;
  }

  ::placeholder {
    color: #A9A8AD !important;
  }

  button {
  
    text-align: center;
    
  }

  button:focus {
    outline: none;
  }

  .submit {
    text-align: -webkit-center;
  }
  .error-msg{
    color: red;
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 500;
  }


  @media (min-width: 1224px) {
    padding-bottom: 85px;
    .form-section {
      width: 87%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .submit {
      margin-top: 20px;
    }

    .message {
      height: 110px !important;
      font-size: 20px;
      color: #A9A8AD;
      max-width: 500px;
      width: 100%;
    }

    .form-values {
      border-radius: 16px;
      padding: 17px;
      font-size: 20px;
      color: #A9A8AD;
      max-width: 500px;
    }

    .about-us-contact {
      padding: 40px 0;
      width: 90%;
      margin: 0 auto;
    }

    .title {
      margin-bottom: 40px;
    }


    .contact-detail-part {
      max-width: 500px;
      width: 100%;
    }

    .contacts {
      gap: 60px;
      padding-top: 20px;
    }

    .view-map {
      color: #5B307C;
      padding-bottom: 16px;
    }

    .locate-us {
      width: 50vw;
      padding-right: 50px;
      border-right: 3px solid #D7D3DA;

    }

    .contact-us {
      padding-left: 50px;
      width: 50vw;
    }

    .contact-detail-part {
      padding: 24px 24px 12px 36px;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }

`;


/***/ })

};
;