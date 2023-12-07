(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401,406],{638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},5152:function(a,b,c){a.exports=c(638)},9008:function(a,b,c){a.exports=c(5443)},5910:function(a,b,c){"use strict";c.d(b,{t:function(){return y}});var d=c(655),e=c(7294),f=c.t(e,2),g=c(4012),h=c(3917),i=c(320),j=!1,k=f.useSyncExternalStore||function(a,b,c){var d=b();__DEV__&&!j&&d!==b()&&(j=!0,__DEV__&&h.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var f=e.useState({inst:{value:d,getSnapshot:b}}),g=f[0].inst,k=f[1];return i.JC?e.useLayoutEffect(function(){Object.assign(g,{value:d,getSnapshot:b}),l(g)&&k({inst:g})},[a,d,b]):Object.assign(g,{value:d,getSnapshot:b}),e.useEffect(function(){return l(g)&&k({inst:g}),a(function(){l(g)&&k({inst:g})})},[a]),d};function l(a){var b=a.value,c=a.getSnapshot;try{return b!==c()}catch(d){return!0}}var m=c(2152),n=c(5092),o=c(990),p=c(1644),q=c(4692),r=c(8702),s=c(3712),t=c(1436),u=Object.prototype.hasOwnProperty,v=function(){function a(a,b,c){this.client=a,this.query=b,this.ssrDisabledResult=(0,r.J)({loading:!0,data:void 0,error:void 0,networkStatus:p.I.loading}),this.skipStandbyResult=(0,r.J)({loading:!1,data:void 0,error:void 0,networkStatus:p.I.ready}),this.toQueryResultCache=new(i.mr?WeakMap:Map),(0,q.Vp)(b,q.n_.Query);var d=c&&c.result,e=d&&d.data;e&&(this.previousData=e)}return a.prototype.forceUpdate=function(){__DEV__&&h.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},a.prototype.executeQuery=function(a){var b,c=this;a.query&&Object.assign(this,{query:a.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=a);var d=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(b=this.result)|| void 0===b?void 0:b.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(a){var b;d.subscribe({next:function(a){b=a},error:function(){a(c.toQueryResult(c.observable.getCurrentResult()))},complete:function(){a(c.toQueryResult(b))}})})},a.prototype.useQuery=function(a){var b=this;this.renderPromises=(0,e.useContext)((0,n.K)()).renderPromises,this.useOptions(a);var c=this.useObservableQuery(),d=k((0,e.useCallback)(function(){if(b.renderPromises)return function(){};var a=function(){var a=b.result,d=c.getCurrentResult();!(a&&a.loading===d.loading&&a.networkStatus===d.networkStatus&&(0,m.D)(a.data,d.data))&&b.setResult(d)},d=function(f){var g=c.last;e.unsubscribe();try{c.resetLastResults(),e=c.subscribe(a,d)}finally{c.last=g}if(!u.call(f,"graphQLErrors"))throw f;var h=b.result;(!h||h&&h.loading||!(0,m.D)(f,h.error))&&b.setResult({data:h&&h.data,error:f,loading:!1,networkStatus:p.I.error})},e=c.subscribe(a,d);return function(){return setTimeout(function(){return e.unsubscribe()})}},[c,this.renderPromises,this.client.disableNetworkFetches,]),function(){return b.getCurrentResult()},function(){return b.getCurrentResult()});return this.unsafeHandlePartialRefetch(d),this.toQueryResult(d)},a.prototype.useOptions=function(b){var c,d=this.createWatchQueryOptions(this.queryHookOptions=b),e=this.watchQueryOptions;!(0,m.D)(d,e)&&(this.watchQueryOptions=d,e&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(c=this.result)|| void 0===c?void 0:c.data)||this.previousData,this.result=void 0)),this.onCompleted=b.onCompleted||a.prototype.onCompleted,this.onError=b.onError||a.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&& !1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},a.prototype.getObsQueryOptions=function(){var a=[],b=this.client.defaultOptions.watchQuery;return b&&a.push(b),this.queryHookOptions.defaultOptions&&a.push(this.queryHookOptions.defaultOptions),a.push((0,s.o)(this.observable&&this.observable.options,this.watchQueryOptions)),a.reduce(g.J)},a.prototype.createWatchQueryOptions=function(a){void 0===a&&(a={});var b,c=a.skip,e=(a.ssr,a.onCompleted,a.onError,a.defaultOptions,(0,d._T)(a,["skip","ssr","onCompleted","onError","defaultOptions"])),f=Object.assign(e,{query:this.query});if(this.renderPromises&&("network-only"===f.fetchPolicy||"cache-and-network"===f.fetchPolicy)&&(f.fetchPolicy="cache-first"),f.variables||(f.variables={}),c){var g=f.fetchPolicy,h=void 0===g?this.getDefaultFetchPolicy():g,i=f.initialFetchPolicy,j=void 0===i?h:i;Object.assign(f,{initialFetchPolicy:j,fetchPolicy:"standby"})}else f.fetchPolicy||(f.fetchPolicy=(null===(b=this.observable)|| void 0===b?void 0:b.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return f},a.prototype.getDefaultFetchPolicy=function(){var a,b;return(null===(a=this.queryHookOptions.defaultOptions)|| void 0===a?void 0:a.fetchPolicy)||(null===(b=this.client.defaultOptions.watchQuery)|| void 0===b?void 0:b.fetchPolicy)||"cache-first"},a.prototype.onCompleted=function(a){},a.prototype.onError=function(a){},a.prototype.useObservableQuery=function(){var a=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,e.useMemo)(function(){return{refetch:a.refetch.bind(a),reobserve:a.reobserve.bind(a),fetchMore:a.fetchMore.bind(a),updateQuery:a.updateQuery.bind(a),startPolling:a.startPolling.bind(a),stopPolling:a.stopPolling.bind(a),subscribeToMore:a.subscribeToMore.bind(a)}},[a]);var b=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&b&&(this.renderPromises.registerSSRObservable(a),a.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(a)),a},a.prototype.setResult=function(a){var b=this.result;b&&b.data&&(this.previousData=b.data),this.result=a,this.forceUpdate(),this.handleErrorOrCompleted(a)},a.prototype.handleErrorOrCompleted=function(a){var b=this;if(!a.loading){var c=this.toApolloError(a);Promise.resolve().then(function(){c?b.onError(c):a.data&&b.onCompleted(a.data)}).catch(function(a){__DEV__&&h.kG.warn(a)})}},a.prototype.toApolloError=function(a){return(0,t.O)(a.errors)?new o.cA({graphQLErrors:a.errors}):a.error},a.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},a.prototype.toQueryResult=function(a){var b=this.toQueryResultCache.get(a);if(b)return b;var c=a.data,e=(a.partial,(0,d._T)(a,["data","partial"]));return this.toQueryResultCache.set(a,b=(0,d.pi)((0,d.pi)((0,d.pi)({data:c},e),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!b.error&&(0,t.O)(a.errors)&&(b.error=new o.cA({graphQLErrors:a.errors})),b},a.prototype.unsafeHandlePartialRefetch=function(a){a.partial&&this.queryHookOptions.partialRefetch&&!a.loading&&(!a.data||0===Object.keys(a.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(a,{loading:!0,networkStatus:p.I.refetch}),this.observable.refetch())},a}(),w=c(6252),x=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore",];function y(a,b){var c,f,h,i,j,k,l,m=(0,e.useRef)(),n=(0,e.useRef)(),o=(0,e.useRef)(),p=m.current?(0,g.J)(b,m.current):b,q=null!==(c=null==p?void 0:p.query)&& void 0!==c?c:a;n.current=p,o.current=q;var r=(f=(0,w.x)(b&&b.client),h=q,i=(0,e.useRef)(),i.current&&f===i.current.client&&h===i.current.query||(i.current=new v(f,h,i.current)),j=i.current,k=(0,e.useState)(0),l=(k[0],k[1]),j.forceUpdate=function(){l(function(a){return a+1})},j),s=r.useQuery((0,d.pi)((0,d.pi)({},p),{skip:!m.current})),t=s.observable.options.initialFetchPolicy||r.getDefaultFetchPolicy(),u=Object.assign(s,{called:!!m.current}),y=(0,e.useMemo)(function(){for(var a={},b=0,c=x;b<c.length;b++)!function(b){var c=u[b];a[b]=function(){return m.current||(m.current=Object.create(null),r.forceUpdate()),c.apply(this,arguments)}}(c[b]);return a},[]);return Object.assign(u,y),[(0,e.useCallback)(function(a){m.current=a?(0,d.pi)((0,d.pi)({},a),{fetchPolicy:a.fetchPolicy||t}):{fetchPolicy:t};var b=(0,g.J)(n.current,(0,d.pi)({query:o.current},m.current)),c=r.executeQuery((0,d.pi)((0,d.pi)({},b),{skip:!1})).then(function(a){return Object.assign(a,y)});return c.catch(function(){}),c},[]),u]}}}])