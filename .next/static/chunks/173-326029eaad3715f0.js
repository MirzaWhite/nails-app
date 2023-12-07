(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},5152:function(a,b,c){a.exports=c(638)},1876:function(a,b,c){"use strict";c.d(b,{Mt:function(){return V},Ol:function(){return T},Qd:function(){return L},UQ:function(){return A},on:function(){return R}});var d,e=c(7294);function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?f(Object(c),!0).forEach(function(b){k(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function h(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a,b,c){return b&&i(a.prototype,b),c&&i(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(){return(l=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function m(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&o(a,b)}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function o(a,b){return(o=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function p(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function q(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function r(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=n(a);if(b){var e=n(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return function(a,b){if(b&&("object"==typeof b||"function"==typeof b))return b;if(void 0!==b)throw TypeError("Derived constructors may only return object or undefined");return q(a)}(this,c)}}function s(a,b){if(a){if("string"==typeof a)return t(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return t(a,b)}}function t(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var u=j(function a(b){var c=this,d=b.expanded,e=b.allowMultipleExpanded,f=b.allowZeroExpanded;h(this,a),k(this,"expanded",void 0),k(this,"allowMultipleExpanded",void 0),k(this,"allowZeroExpanded",void 0),k(this,"toggleExpanded",function(a){var b;return c.isItemDisabled(a)?c:c.isItemExpanded(a)?c.augment({expanded:c.expanded.filter(function(b){return b!==a})}):c.augment({expanded:c.allowMultipleExpanded?[].concat(function a(b){if(Array.isArray(b))return t(b)}(b=c.expanded)||function a(b){if("undefined"!=typeof Symbol&&null!=b[Symbol.iterator]||null!=b["@@iterator"])return Array.from(b)}(b)||s(b)||function a(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[a]):[a]})}),k(this,"isItemDisabled",function(a){var b=c.isItemExpanded(a),d=1===c.expanded.length;return Boolean(b&&!c.allowZeroExpanded&&d)}),k(this,"isItemExpanded",function(a){return -1!==c.expanded.indexOf(a)}),k(this,"getPanelAttributes",function(a,b){var d=null!=b?b:c.isItemExpanded(a);return{role:c.allowMultipleExpanded?void 0:"region","aria-hidden":c.allowMultipleExpanded?!d:void 0,"aria-labelledby":c.getButtonId(a),id:c.getPanelId(a),hidden:!d||void 0}}),k(this,"getHeadingAttributes",function(){return{role:"heading"}}),k(this,"getButtonAttributes",function(a,b){var d=null!=b?b:c.isItemExpanded(a),e=c.isItemDisabled(a);return{id:c.getButtonId(a),"aria-disabled":e,"aria-expanded":d,"aria-controls":c.getPanelId(a),role:"button",tabIndex:0}}),k(this,"getPanelId",function(a){return"accordion__panel-".concat(a)}),k(this,"getButtonId",function(a){return"accordion__heading-".concat(a)}),k(this,"augment",function(b){return new a(g({expanded:c.expanded,allowMultipleExpanded:c.allowMultipleExpanded,allowZeroExpanded:c.allowZeroExpanded},b))}),this.expanded=void 0===d?[]:d,this.allowMultipleExpanded=void 0!==e&&e,this.allowZeroExpanded=void 0!==f&&f}),v=(0,e.createContext)(null),w=function(a){m(c,a);var b=r(c);function c(){var a;h(this,c);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=b.call.apply(b,[this].concat(e)),k(q(a),"state",new u({expanded:a.props.preExpanded,allowMultipleExpanded:a.props.allowMultipleExpanded,allowZeroExpanded:a.props.allowZeroExpanded})),k(q(a),"toggleExpanded",function(b){a.setState(function(a){return a.toggleExpanded(b)},function(){a.props.onChange&&a.props.onChange(a.state.expanded)})}),k(q(a),"isItemDisabled",function(b){return a.state.isItemDisabled(b)}),k(q(a),"isItemExpanded",function(b){return a.state.isItemExpanded(b)}),k(q(a),"getPanelAttributes",function(b,c){return a.state.getPanelAttributes(b,c)}),k(q(a),"getHeadingAttributes",function(){return a.state.getHeadingAttributes()}),k(q(a),"getButtonAttributes",function(b,c){return a.state.getButtonAttributes(b,c)}),a}return j(c,[{key:"render",value:function(){var a=this.state,b=a.allowZeroExpanded,c=a.allowMultipleExpanded;return(0,e.createElement)(v.Provider,{value:{allowMultipleExpanded:c,allowZeroExpanded:b,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),c}(e.PureComponent);k(w,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var x,y=function(a){m(c,a);var b=r(c);function c(){var a;h(this,c);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=b.call.apply(b,[this].concat(e)),k(q(a),"renderChildren",function(b){return b?a.props.children(b):null}),a}return j(c,[{key:"render",value:function(){return(0,e.createElement)(v.Consumer,null,this.renderChildren)}}]),c}(e.PureComponent),z=["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"],A=function(a){var b=a.className,c=a.allowMultipleExpanded,d=a.allowZeroExpanded,f=a.onChange,g=a.preExpanded,h=p(a,z);return(0,e.createElement)(w,{preExpanded:g,allowMultipleExpanded:c,allowZeroExpanded:d,onChange:f},(0,e.createElement)("div",l({"data-accordion-component":"Accordion",className:void 0===b?"accordion":b},h)))};(x=d||(d={})).Accordion="Accordion",x.AccordionItem="AccordionItem",x.AccordionItemButton="AccordionItemButton",x.AccordionItemHeading="AccordionItemHeading",x.AccordionItemPanel="AccordionItemPanel";var B=d,C=0,D=e.useId||function(){var a=C;return C+=1,"raa-".concat(a)},E=/[\u0009\u000a\u000c\u000d\u0020]/g;function F(a){return!(""===a||E.test(a))||(console.error('uuid must be a valid HTML5 id but was given "'.concat(a,'", ASCII whitespaces are forbidden')),!1)}var G=(0,e.createContext)(null),H=function(a){var b=a.children,c=a.uuid,d=a.accordionContext,f=a.dangerouslySetExpanded,g=function(){d.toggleExpanded(c)},h=function(a){var d=null!=f?f:a.isItemExpanded(c),h=a.isItemDisabled(c),i=a.getPanelAttributes(c,f),j=a.getHeadingAttributes(c),k=a.getButtonAttributes(c,f);return(0,e.createElement)(G.Provider,{value:{uuid:c,expanded:d,disabled:h,toggleExpanded:g,panelAttributes:i,headingAttributes:j,buttonAttributes:k}},b)};return(0,e.createElement)(y,null,h)},I=function(a){return(0,e.createElement)(y,null,function(b){return(0,e.createElement)(H,l({},a,{accordionContext:b}))})},J=function(a){var b=a.children,c=function(a){return a?b(a):null};return(0,e.createElement)(G.Consumer,null,c)},K=["uuid","dangerouslySetExpanded","className","activeClassName"],L=function(a){var b,c,d=a.uuid,f=a.dangerouslySetExpanded,g=a.className,h=void 0===g?"accordion__item":g,i=a.activeClassName,j=p(a,K),k=(0,e.useState)(D()),m=(c=1,function a(b){if(Array.isArray(b))return b}(b=k)||function a(b,c){var d,e,f=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=f){var g=[],h=!0,i=!1;try{for(f=f.call(b);!(h=(d=f.next()).done)&&(g.push(d.value),!c||g.length!==c);h=!0);}catch(j){i=!0,e=j}finally{try{h||null==f.return||f.return()}finally{if(i)throw e}}return g}}(b,c)||s(b,c)||function a(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=m[0],o=null!=d?d:n,q=function(a){var b=a.expanded;return(0,e.createElement)("div",l({"data-accordion-component":"AccordionItem",className:b&&i?i:h},j))};return F(o.toString()),j.id&&F(j.id),(0,e.createElement)(I,{uuid:o,dangerouslySetExpanded:f},(0,e.createElement)(J,null,q))};function M(a){return a&&(a.matches('[data-accordion-component="Accordion"]')?a:M(a.parentElement))}function N(a){var b=M(a);return b&&Array.from(b.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}L.displayName=B.AccordionItem;var O={END:"End",ENTER:"Enter",HOME:"Home",SPACE:" ",SPACE_DEPRECATED:"Spacebar",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},P=["toggleExpanded","className"],Q=function(a){var b=a.toggleExpanded,c=a.className,d=p(a,P),f=function(a){var c,d,e,f,g,h=a.key;if((h===O.ENTER||h===O.SPACE||h===O.SPACE_DEPRECATED)&&(a.preventDefault(),b()),a.target instanceof HTMLElement)switch(h){case O.HOME:a.preventDefault(),(d=(N(c=a.target)||[])[0])&&d.focus();break;case O.END:a.preventDefault(),(g=(f=N(e=a.target)||[])[f.length-1])&&g.focus();break;case O.LEFT:case O.UP:a.preventDefault(),function(a){var b=N(a)||[],c=b.indexOf(a);if(-1!==c){var d=b[c-1];d&&d.focus()}}(a.target);break;case O.RIGHT:case O.DOWN:a.preventDefault(),function(a){var b=N(a)||[],c=b.indexOf(a);if(-1!==c){var d=b[c+1];d&&d.focus()}}(a.target)}};return d.id&&F(d.id),(0,e.createElement)("div",l({className:void 0===c?"accordion__button":c},d,{role:"button",tabIndex:0,onClick:b,onKeyDown:f,"data-accordion-component":"AccordionItemButton"}))},R=function(a){return(0,e.createElement)(J,null,function(b){var c=b.toggleExpanded,d=b.buttonAttributes;return(0,e.createElement)(Q,l({toggleExpanded:c},a,d))})},S=function(a){m(c,a);var b=r(c);function c(){var a;h(this,c);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=b.call.apply(b,[this].concat(e)),k(q(a),"ref",void 0),k(q(a),"setRef",function(b){a.ref=b}),a}return j(c,[{key:"componentDidUpdate",value:function(){c.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){c.VALIDATE(this.ref)}},{key:"render",value:function(){return(0,e.createElement)("div",l({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(a){if(void 0===a)throw Error("ref is undefined");if(!(1===a.childElementCount&&a.firstElementChild&&"AccordionItemButton"===a.firstElementChild.getAttribute("data-accordion-component")))throw Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),c}(e.PureComponent);k(S,"defaultProps",{className:"accordion__heading","aria-level":3});var T=function(a){return(0,e.createElement)(J,null,function(b){var c=b.headingAttributes;return a.id&&F(a.id),(0,e.createElement)(S,l({},a,c))})};T.displayName=B.AccordionItemHeading;var U=["className","region","id"],V=function(a){var b=a.className,c=void 0===b?"accordion__panel":b,d=a.region,f=a.id,h=p(a,U),i=function(a){var b=a.panelAttributes;f&&F(f);var i=g(g({},b),{},{"aria-labelledby":d?b["aria-labelledby"]:void 0});return(0,e.createElement)("div",l({"data-accordion-component":"AccordionItemPanel",className:c},h,i,{role:d?"region":void 0}))};return(0,e.createElement)(J,null,i)}},9534:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}}])