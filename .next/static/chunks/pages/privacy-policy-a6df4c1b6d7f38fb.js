(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{9587:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return c(4555)}])},638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},4555:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return p}});var d=c(5893);c(7294);var e=c(9008),f=c.n(e),g=c(7297),h=c(5152),i=c.n(h),j=c(9521),k=c(2586);function l(){var a=(0,g.Z)(["\n    padding: 100px 0px;\n    width: 80%;\n    margin: 0 auto;\n  .title{\n    padding: 10px;\n    text-align: -webkit-center;\n    background-color: #512f86;\n    margin-bottom: 10px;\n  }\n \n"]);return l=function(){return a},a}var m=function(){return(0,d.jsxs)(o,{children:[(0,d.jsx)("div",{className:"title",children:(0,d.jsx)(k.H4,{weight:600,color:"#ffffff",className:"title text-center",children:" Privacy Policy"})}),(0,d.jsx)(k.S1,{weight:600,color:"#512f86",className:"mb-4",children:"INFORMATION ABOUT OUR ORGANISATION AND WEBSITE"}),(0,d.jsx)(k.B1,{weight:600,color:"#000000",className:"mb-4",children:"Nails n Beyond  respects your privacy and is committed to protecting it. We provide this Privacy Statement to inform you of our Privacy Policy and practices and of the choices you can make about the way your information is collected online and how that information is used. This website is governed in accordance with the laws of India. The courts of CHENNAI shall have exclusive jurisdiction over any dispute arising out of your use of this website"}),(0,d.jsx)(k.S1,{weight:600,color:"#512f86",className:"mb-4",children:"DATA COLLECTION AND USE"}),(0,d.jsxs)(k.B1,{weight:600,color:"#000000",className:"mb-4",children:["When you request information through this site, we may need to know some personal information about you. When emailing us or subscribing for free news or information we need your e-mail address, name, and other limited personal identifiers, typically name, address, and contact number. If you chose to purchase information, goods, products, or services, we will usually require some additional limited financial details and you would be bound by the terms & conditions of the other third-party sites Where you request employment related services or products, we will usually need limited data about personal identifiers, education, employment, family, and financial details. Your personal data will be processed to provide information, goods, products, and services you request in the form that you require. If we require sensitive personal data, then we will ensure that the collection and use is in strict accordance with the principles of data protection and data privacy of the applicable legislation set out below.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"We may appoint third party organizations to assist us in providing you with the information, goods, products, and services you request. In these circumstances, we will take steps to ensure that your personal information is held in strict accordance with our privacy policy and is only used for the purpose of fulfilling your request."]}),(0,d.jsx)(k.S1,{weight:600,color:"#512f86",className:"mb-4",children:"DATA RETENTION"}),(0,d.jsx)(k.B1,{weight:600,color:"#000000",className:"mb-4",children:"Data is held for the lifetime your subscription is active for the purposes of contacting you effectively after which time it is depersonalized and non-identifiable. We do not collect any additional information about you other than that outlined above"}),(0,d.jsx)(k.S1,{weight:600,color:"#512f86",className:"mb-4",children:"ACCESS TO YOUR PERSONAL DATA "}),(0,d.jsxs)(k.B1,{weight:600,color:"#000000",className:"mb-4",children:["To enquire about accessing your personal data, or if you have any questions relating to Nails n Beyond data privacy policy please contact us at",(0,d.jsx)("span",{className:"ms-2 me-2",children:(0,d.jsx)("a",{href:"care@nailsnbeyond.in",children:"care@nailsnbeyond.in"})}),"We will provide you with a readable copy of the personal data that we keep about you within 40 days, although we will require proof of your identity before disclosing that data. We allow you to challenge the data that we hold on to you and, where appropriate, you may have the data: erased, rectified, amended, or completed. We reserve the right to refuse to provide our visitors with a copy of their personal data but will give reasons for our refusal. You will be able to challenge our decision to refuse to provide you with a copy of your personal data.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"At present we do not give visitors to our website the option of using a secure transmission method to send us their personal data."]}),(0,d.jsx)(k.S1,{weight:600,color:"#512f86",className:"mb-4",children:"HYPERLINKS "}),(0,d.jsx)(k.B1,{weight:600,color:"#000000",className:"mb-4",children:"The Nails n Beyond website may provide links to third-party websites for your convenience and information. If you access those links, you will leave the Nails n Beyond  website. Nails n Beyond  does not control those sites or their privacy practices, which may differ from Natural’s. We do not endorse or make any representations about third-party websites. The Nails n Beyond  Privacy Statement does not cover the personal data you choose to give to unrelated third parties. We encourage you to review the privacy policy of any company before submitting your personal information. Some third-party companies may choose to share their personal data with Nails n Beyond ; that sharing is governed by that third-party company’s privacy policy."})]})},n=i()(function(){return Promise.resolve(m)},{ssr:!1}),o=j.ZP.div(l()),p=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(f(),{children:(0,d.jsx)("title",{children:"Nails Beyond"})}),(0,d.jsx)(n,{})]})}},5152:function(a,b,c){a.exports=c(638)},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=9587)}),_N_E=a.O()}])