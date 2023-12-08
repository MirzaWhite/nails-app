(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2879:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return c(9950)}])},5863:function(a,b,c){"use strict";c.d(b,{Q:function(){return g}});var d=c(7297),e=c(7283);function f(){var a=(0,d.Z)(["\n    query faqSections($faqType:FAQSectionTypeEnum!){\n        faqSections(faqType:$faqType){\n            question\n            answer\n            sortOrder\n            faqType\n            id\n        }\n    }\n    \n    "]);return f=function(){return a},a}var g=(0,e.Ps)(f())},6361:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(5893);c(7294);var e=c(7297),f=c(9521);function g(){var a=(0,e.Z)(['\n  padding: 40px 0;\n  .about-us-banner {\n    background: #efeaf2;\n    border-radius: 80px 20px;\n    padding: 40px 24px;\n  }\n  .about-us-title {\n    margin: 0;\n    padding: 0 0 8px 0;\n    font-family: "Jost",sans-serif;\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 44px;\n    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n  .about-us-description {\n    margin: 0;\n    font-family: "Jost",sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 20px;\n    color: #384955;\n  }\n  .about-us-cta  button{\n    max-width: 222px;\n    width: 100%;\n    margin-top:24px;\n    @media(min-width: 1224px){\n      margin-top:31px;\n    }\n  }\n  .about-us-banner-image {\n    border-radius: 80px 20px;\n  }\n\n  @media (min-width: 1224px) {\n    padding: 40px 0 80px 0;\n    .about-us-banner {\n      border-radius: 200px 20px;\n      padding: 40px 80px;\n      gap:45px;\n      //margin-top:31px;\n    }\n    .about-us-contents {\n      max-width: 500px;\n      width: 100%;\n    }\n    .about-us-banner-image {\n      border-radius: 100px 20px;\n    }\n  }\n']);return g=function(){return a},a}var h=f.ZP.section(g()),i=c(1852),j=c(5675),k=c.n(j),l=c(1664),m=c.n(l),n=c(1451),o=c(5152),p=c.n(o),q=function(a){var b=(0,i.useMediaQuery)({minWidth:1224}),c=a.Title,e=a.Description,f=a.picture,g=a.CTAName,j=a.CTALink;return(0,d.jsx)(h,{children:(0,d.jsxs)("div",{className:b?" d-flex align-items-center justify-content-center about-us-banner":"about-us-banner",children:[(0,d.jsxs)("div",{className:"about-us-contents",children:[(0,d.jsxs)("h1",{className:"about-us-title",children:[" ",c||"Welcome to Nails’n Beyond!"]}),(0,d.jsx)("p",{className:"about-us-description",children:e||"Your go-to nail artistry destination. We are a full-service salon dedicated to providing our clients with exceptional nail care, personalized attention, and a relaxing atmosphere. Our team of highly skilled and experienced technicians are passionate about their craft and are dedicated to making your nails look and feel amazing. From trendy nail designs to classic looks, we offer a wide range of services to suit every style and occasion."}),b&&(0,d.jsx)(m(),{href:j||"/booking",children:(0,d.jsx)("div",{className:"about-us-cta",children:(0,d.jsxs)(n.F,{padding:"16px 48px",fontSize:"16px",lineHeight:"22px",children:[" ",g||"Book Appointment"]})})})]}),(0,d.jsxs)("div",{className:b?"":"text-center pt-4",children:[(0,d.jsx)(k(),{src:f||"https://cdn.deepsense.space/nails/assets/images/aboutUsImg.webp",alt:"alt",width:b?780:345,height:b?520:230,layout:"intrinsic",className:"about-us-banner-image"}),(0,d.jsx)("br",{}),!b&&(0,d.jsx)(m(),{href:j||"/booking",children:(0,d.jsx)("div",{className:"d-flex justify-content-center about-us-cta",children:(0,d.jsxs)(n.F,{padding:"16px 48px",fontSize:"16px",lineHeight:"22px",children:[" ",g||"Book Appointment"]})})})]})]})})},r=p()(function(){return Promise.resolve(q)},{ssr:!1})},1303:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(7297),j=c(9521);function k(){var a=(0,i.Z)(['\n  padding: 16px 24px;\n  background: #EFEAF2;\n  border-radius: 20px;\n  margin-top: 40px;\n  margin-bottom: 100px;\n\n  .faqs-title {\n    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n\n  .faqs-subtitle {\n    color: #384955;\n  }\n\n  .accordion-item:first-of-type .accordion-button {\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    background: #FFFFFF;\n    box-shadow: 0 8px 16px rgba(91, 48, 124, 0.1);\n  }\n\n  .accordion-body {\n    font-family: \'Jost\';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n    color: #384955;\n    background: #FFFFFF;\n    border-bottom-right-radius: 16px;\n    border-bottom-left-radius: 16px;\n    padding: 0 24px 24px 24px;\n  }\n\n  .accordion-item {\n    background: #FFFFFF;\n  }\n\n  .accordion {\n    padding-top: 24px;\n  }\n\n  .accordion-item:last-of-type .accordion-button.collapsed {\n    border-bottom-right-radius: 16px;\n    border-bottom-left-radius: 16px;\n  }\n\n  .accordion-button {\n    font-family: \'Jost\';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 27px;\n    color: #5B307C;\n  }\n\n  .iQHCuG .accordion-item:first-of-type .accordion-button, .accordion-button:not(.collapsed) {\n    box-shadow: none !important;\n  }\n\n  .accordion-button:after {\n    background-image: url("/assets/plus-mobile.png");\n\n  }\n\n  .accordion-button:not(.collapsed):after {\n    background-image: url("/assets/minus-mobile.png");\n    position: absolute;\n    bottom: 31px;\n    right: 22px;\n  }\n\n  @media (min-width: 1224px) {\n    padding: 32px 200px;\n    background: #EFEAF2;\n    border-radius: 20px 100px;\n    margin: 80px;\n\n    .accordion-button {\n      font-size: 32px;\n    }\n\n    .accordion-body {\n      max-width: 650px;\n      width: 100%;\n    }\n\n    .accordion-button:after {\n      background-image: url("/assets/plus.png")\n    }\n\n    .accordion-button:not(.collapsed):after {\n      background-image: url("/assets/minus.png");\n      bottom: 0;\n      right: 22px;\n    }\n  }\n\n\n']);return k=function(){return a},a}var l=j.ZP.div(k()),m=c(2586),n=c(7886),o=c(5152),p=c.n(o),q=function(a){var b=(0,h.useState)([]),c=b[0],e=b[1],i=a.faqsData;(0,h.useEffect)(function(){return(null==i?void 0:i.length)>0&&o(i.map(function(a){return a.answer})),function(){}},[i]);var j,k=[],o=(j=(0,d.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,null==b?void 0:b.forEach(function(a){JSON.parse(a).blocks.map(function(a){var b,c;"Header"===a.type?k.push({ans:null==a?void 0:null===(b=a.data)|| void 0===b?void 0:b.text}):"paragraph"===a.type&&k.push({ans:null==a?void 0:null===(c=a.data)|| void 0===c?void 0:c.text})}),e(k)});case 2:case"end":return a.stop()}},a)})),function(a){return j.apply(this,arguments)});return(0,g.jsx)(l,{children:(null==i?void 0:i.length)>0&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(m.H6,{className:"text-center faqs-title",children:"FAQ’s"}),(0,g.jsx)(m.B2,{className:"text-center faqs-subtitle",children:"Most Frequently Asked Questions about our Services."})]}),(0,g.jsx)("div",{children:null==i?void 0:i.map(function(a,b){var d;return(0,g.jsx)(n.FI,{initialActive:1,children:(0,g.jsx)(n.nn,{collapseId:0===b&&1,headerTitle:a.question,children:c.length>0&&(null===(d=c[b])|| void 0===d?void 0:d.ans)})},b)})})]})})},r=p()(function(){return Promise.resolve(q)},{ssr:!1})},9950:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return I},default:function(){return J}});var d=c(7568),e=c(828),f=c(4051),g=c.n(f),h=c(5893),i=c(7294),j=c(6361),k=c(7297),l=c(9521);function m(){var a=(0,k.Z)(['\n  @media (min-width: 1224px){\n    margin-bottom: 80px;\n  }\n  .our-story-banner {\n    padding: 24px;\n  }\n\n  .our-story-title {\n    margin: 0;\n    padding: 0 0 8px 0;\n    font-family: "Jost";\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 44px;\n    background: linear-gradient(97.83deg, #5b307c 18.12%, #000000 86.11%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n\n  .our-story-description {\n    margin: 0;\n    font-family: "Jost";\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 20px;\n    color: #384955;\n  }\n\n  .our-story-cta button {\n    max-width: 184px;\n    width: 100%;\n    margin-top: 24px;\n    margin-bottom: 40px;\n  }\n\n  @media (min-width: 1224px) {\n    padding: 0 80px;\n    .our-story-banner {\n      gap: 32px;\n      background: linear-gradient(0deg, #FBFAFF 3.21%, #FFFFFF 100%);\n      border-radius: 20px;\n      //padding: 0 80px 0 80px;\n    }\n\n    .our-story-contents {\n      max-width: 730px;\n      width: 100%;\n    }\n  }\n']);return m=function(){return a},a}var n=l.ZP.section(m()),o=c(5675),p=c.n(o),q=c(1852),r=c(1664),s=c.n(r),t=c(1451),u=c(5152),v=c.n(u),w=function(){var a=(0,q.useMediaQuery)({minWidth:1224});return(0,h.jsx)(n,{children:(0,h.jsxs)("div",{className:a?" d-flex align-items-center justify-content-center our-story-banner":"our-story-banner ",children:[(0,h.jsxs)("div",{className:a?" our-story-contents order-2":"our-story-contents",children:[(0,h.jsx)("h1",{className:"our-story-title",children:"Our Story"}),(0,h.jsx)("p",{className:"our-story-description",children:"At Nails'n Beyond, we have a passion for creativity and beauty. Our journey in the nail care industry began with the desire to provide a unique and exceptional experience for our clients."}),(0,h.jsx)("p",{className:"our-story-description pt-3",children:"Our vision was to create a nail art studio that offers high-quality services with personalized attention, where clients can indulge in some well-deserved self-care and leave feeling confident and beautiful. We started small, but with a lot of passion and hard work, we have grown into one of the most popular nail salons in the industry."}),(0,h.jsx)("p",{className:"our-story-description pt-3",children:"Over the years, we have developed a team of highly skilled and experienced nail technicians, who are passionate about delivering the best possible service. We use only the highest quality products and adhere to strict sanitation protocols to ensure that our clients receive a safe and comfortable experience!"}),a&&(0,h.jsx)(s(),{href:"/gallery",children:(0,h.jsx)("div",{className:"our-story-cta",children:(0,h.jsx)(t.F,{padding:"16px 48px",fontSize:"16px",lineHeight:"22px",children:"View Gallery"})})})]}),(0,h.jsxs)("div",{className:a?" order-1":"text-center pt-4",children:[(0,h.jsx)(p(),{src:a?"https://cdn.deepsense.space/nails/assets/images/Our_storyD.webp":"https://cdn.deepsense.space/nails/assets/images/Our_storyM.webp",alt:"alt",width:a?500:330,height:a?451:330,layout:"intrinsic",className:"our-story-image"}),(0,h.jsx)("br",{}),!a&&(0,h.jsx)(s(),{href:"/gallery",children:(0,h.jsx)("div",{className:"d-flex justify-content-center our-story-cta",children:(0,h.jsx)(t.F,{padding:"16px 48px",fontSize:"16px",lineHeight:"22px",children:"View Gallery"})})})]})]})})},x=v()(function(){return Promise.resolve(w)},{ssr:!1}),y=c(7740),z=c(1303),A=c(8892),B=c(4018),C=c(9419),D=c(9008),E=c.n(D),F=c(5910),G=c(5863),H=function(a){var b=a.homepageQuery;console.log(b.TestimonialData);var c,f=(0,i.useState)(""),k=f[0],l=f[1],m=(0,e.Z)((0,F.t)(G.Q),1),n=m[0];(0,i.useEffect)(function(){return o(),function(){}},[]);var o=(c=(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n({variables:{faqType:"NORMAL"}}).then(function(a){l(a.data.faqSections)});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),console.log(a.t0);case 8:case"end":return a.stop()}},a,null,[[0,5]])})),function(){return c.apply(this,arguments)});return(0,h.jsxs)("div",{children:[(0,h.jsx)(E(),{children:(0,h.jsx)("title",{children:"Nails Beyond"})}),(0,h.jsx)(j.Z,{}),(0,h.jsx)(x,{}),(0,h.jsx)(C.Z,{Services:b.Services}),(0,h.jsx)(y.Z,{TestimonialData:b.TestimonialData}),(0,h.jsx)(A.Z,{}),(0,h.jsx)(z.Z,{faqsData:k}),(0,h.jsx)(B.Z,{})]})},I=!0,J=H}},function(a){a.O(0,[546,212,173,18,425,774,888,179],function(){var b;return a(a.s=2879)}),_N_E=a.O()}])