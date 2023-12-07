import styled from "styled-components";
import {B2} from "../../elements/Font/Font.styled";
import React from "react";

export const PRODUCT_LISTING_STYLED = styled.div`
  margin-top: 80px;
  padding: 0 100px;
  .checkbox-label {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #384955;
    font-family: 'Jost',sans-serif;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background: #EFEAF2;
      border-radius: 4px;
    }
    .checkmark:after {
      left: 50%;
      top: 50%;
      width: 7px;
      height: 10px;
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      transform: translate(-50%, -50%) rotate(40deg);
      content: "";
      position: absolute;
      display: none;
    }
  }
  .filter-section{
    width: 80%;
    .filter-item-header{
      cursor: pointer;
    }    
  }
  .filter-button{
    border: 1px solid #5B307C;
    border-radius: 8px;
    padding: 9px 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #5B307C;
    max-width: 173px;
    width: 100%;
    margin: 24px;   
  }
  .product-title{
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .search-Bar{
    position: relative;
    max-width: 720px;
    margin: 32px auto 24px auto;
    @media(max-width: 1224px){
      margin:24px;
    }
  }
  .search-Bar Input{
    height: 64px;
    width: 100%;
    padding-left: 40px;
    background: #FFFFFF;
    border: 1px solid rgba(91, 48, 124, 0.3);
    border-radius: 16px;
  }
  .search-logo{
    position: absolute;
    padding-right: 14px;
    top: 30%;
    right: 0;
  }
  .search-box::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #BFBBC2;
  }
  .mobile-filter-modal{
    
    .modal-body{
      padding: 0;
    }
  }
 
  .accordion-borderless .accordion-item .accordion-button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    padding: 8px;
  }


  .accordion-borderless .accordion-item .accordion-button:not(.collapsed) {
    background-color: #FFFFFF;
    box-shadow: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    padding: 8px;
  }
  .accordion-button::after {
    flex-shrink: 0;
    width: var(--bs-accordion-btn-icon-width);
    height: var(--bs-accordion-btn-icon-width);
    content: "";
    background-image: url("/assets/select-box-arrow.png");
    background-repeat: no-repeat;
    background-size: var(--bs-accordion-btn-icon-width);
    transition: var(--bs-accordion-btn-icon-transition);
    margin-left:15px;
  }
  .collapse{
    height: auto!important;
  }
  ${"" /* checkbox */}
  
  /* Hide the browser's default checkbox */
 
  /* Create a custom checkbox */
 
  /* When the checkbox is checked, add a blue background */
  /* Create the checkmark/indicator (hidden when not checked) */
  
  /* Show the checkmark when checked */
  /* Style the checkmark/indicator */
  .row {
 --mdb-gutter-x: 0rem !important;
}
 
@media (max-width: 1224px) {
padding: 0;
  margin-top: 28px;
  .card-filter-section{
    display: block!important;
    padding-left: 24px;
  }
  .mobile-filter-modal{
    .left-side{
      background: #F9F7FA;
      border-radius: 20px 0 0 20px;
      .filter-attribute-name{
        padding: 10px 17px;
        color: #384955;
        .cursor-pointer{
          cursor: pointer;
        }
        &.active{
          background: #EFEAF2;
        }
      }
    }
    .floating-btn{
      background: #FFFFFF;
      &:active,&:focus,&:hover{
        background: #FFFFFF;
      }
      .icon:before{
        color: #000000;
      }
    }
  }
  .checkbox-label{
    width: fit-content;
    .checkmark{
      background-color: #ffffff;
      border: 1px solid #384955;
      filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.24));
    }
  }
  
  .right-side{
    //margin-left: 12px;
    //padding-top: 48px;
  }

  .cross-cta{
    right: 5px;
    top:5px;

  }
 


  .apply-cta{
    background: #5B307C;
    border-radius: 40px;
    padding: 16px 48px;
    max-width: 136px;
    color: #fff;
    border: none;
    margin-bottom: 20px;
  }
} 
`;