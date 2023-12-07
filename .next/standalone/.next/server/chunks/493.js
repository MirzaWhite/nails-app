"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 3493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TestimonialStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TestimonialStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  background: #efeaf2;
  border-radius: 20px;
  padding: 32px 0;
  margin: 80px auto;
  max-width: 1280px;

  .title {
    text-align: center;
    padding-top: 32px;
    padding-bottom: 16px;
    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .description {
    font-weight: 400;
    color: #384955;
  }
  .testimonial-swiper-container{
    .swiper{
      .swiper-wrapper{
        padding-top: 100px;
        padding-bottom: 200px;
        .swiper-slide-active{
          z-index: 1;
        }
        .swiper-slide-prev,.swiper-slide-next{
          transform: scale(0.8);
          opacity: 0.5;
          margin-top: 20px;
          @media(min-width: 1200px){
            width: 400px !important;
            height: 300px !important;
            overflow: hidden;

          }
        }
      }
      .swiper-pagination{
        .swiper-pagination-bullet {
          cursor: pointer;
          background: #5b307c;
          opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
        }
        .swiper-pagination-bullet-active {
          background: #5b307c;
          border-radius: 52px;
          height: 3px;
          width: 35px;
          padding-bottom: 5px;
        }
      }
      .swiper-button-next {
        background-image: url("https://cdn.deepsense.space/nails/assets/images/right-arrow.svg");
        width: 68px;
        height: 68px;
        top: 20%;
        right: 10%;
        transform: translate(-80%,-90%);
      }
      .swiper-button-prev {
        background-image: url("https://cdn.deepsense.space/nails/assets/images/left-arrow.svg");
        width: 68px;
        height: 68px;
        top: 20%;
        left: 20%;
        transform: translate(-80%,-80%);        
      }
      .swiper-button-next:after,
      .swiper-button-prev:after {
        display: none;
      }
    }
    .swiper-slide-active{
      .card-section {
        //max-width: 1200px;
        width: 100%;
        height: 100%;
        position: relative;
        background: #ffffff;
        border: 1px solid #5b307c;
        box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.02);
        border-radius: 20px;
        padding: 40px 40px 70px 40px;
        transform: scale(1.3);
        animation-name: pop-up;
        animation-duration: 1.2s;
        opacity: 1;
        z-index: 1;
        @media (min-width: 1200px) {
          margin-top: -40px;  
          overflow: hidden;
        }
      }
    }
    .swiper-slide{
      .card-section {
        //max-width: 1200px;
        width: 100%;
        height: 100%;
        position: relative;
        background: #ffffff;
        border: 1px solid #5b307c;
        box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.02);
        border-radius: 20px;
        padding: 40px 40px 70px 40px;
        @media(min-width: 1224px){
          width: 100%;
        }
      }
    }
      .name {
        color: #5b307c;
        margin-bottom: 12px;
        font-weight: 400;
      }
      .image-section{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -50px;
        border: 12px solid #FFFFFF;
        filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.08));
        border-radius: 100%;
        .profile-image{
          border-radius: 100%;
          width: 100px;
          height: 100px;
          position: relative;
          overflow: hidden;
        }
      }
      
    }
   
  }
  @keyframes pop-up {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 1;
    }
  }
  @keyframes pop-up-mobile {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (max-width: 1224px) {
    border-radius: 100px 20px 20px 20px;
    padding: 16px 24px;
    .testimonial-swiper-container{
      .swiper{
        .swiper-wrapper {
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .swiper-button-prev{
          top: auto;
          transform: none;
          bottom: -10px;
          left: 0;
        }
        .swiper-button-next{
          top: auto;
          transform: none;
          bottom: -10px;
          right: 0;
        }
      }
      .swiper-slide-active{
        .card-section{
        padding: 20px 24px 80px 24px;
        border-radius: 80px 10px 10px 10px;
         transform: scale(1);
          animation-name: pop-up-mobile;
          animation-duration: 1.5s;
        }
      }
    }
`;


/***/ })

};
;