webpackJsonp([1],{"./app/actions/index.js":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n=function(e){return{type:"SELECT_GALLERY",gallery:e}}},"./app/components/SideNav/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=o("./node_modules/react/react.js"),a=o.n(s),u=o("./node_modules/react-router-dom/index.js"),l=o("./node_modules/react-redux/es/index.js"),c=o("./app/actions/index.js"),d=o("./node_modules/react-responsive/dist/react-responsive.js"),p=o.n(d),f=o("./node_modules/styled-components/dist/styled-components.es.js"),h=f.a.li.withConfig({displayName:"styles__MenuItem"})(["font-size: 1em;cursor: pointer;padding: 20px 0px 20px;@media (max-width: 767px) {font-size: 1em;padding: 8px 0px 8px;}@media (max-width: 480px) {font-size: 0.8em;padding: 8px 0px 8px;}"]),m=f.a.li.withConfig({displayName:"styles__SubMenuItem"})(["font-size: 1em;cursor: pointer;padding: 20px 0px 20px;@media (max-width: 999px) {margin: 15px;padding: 6px 0px 6px;font-size: 1em;}@media (max-width: 480px) {font-size: 0.8em;padding: 6px 0px 6px;margin: 10px;}"]),b=f.a.nav.withConfig({displayName:"styles__Container"})(["width: 180px;z-index: 3;position: fixed;top: 90px;line-height: 20px;@media (max-width: 767px) {width: 160px;top: 90px;}@media (max-width: 480px) {width: 100px;top: 80px;line-height: 16px;}"]),y=(o("./app/constants/actionTypes.js"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}()),x=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),g=y(p.a,{maxWidth:1e3},void 0,y(h,{},void 0,y(u.Link,{to:"/art"},void 0,"Art"))),v=y(u.Link,{to:"/art"},void 0,"Guache/Watercolor Portraits, 2016 - 2017"),w=y(u.Link,{to:"/art"},void 0,"Oil Portraits, 2016"),j=y(u.Link,{to:"/art"},void 0,"Various Works, 2011 - 2015"),_=y(u.Link,{to:"/art"},void 0,"They Return, comic, 2013"),S=y(p.a,{maxWidth:1e3},void 0,y(h,{},void 0,y(u.Link,{to:"/music"},void 0,"Music")),y(h,{},void 0,y(u.Link,{to:"/game"},void 0,"Game")),y(h,{},void 0,y("a",{href:"https://github.com/DwightBe"},void 0,"Code"))),C=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),x(t,[{key:"render",value:function(){var e=this;return y(b,{},void 0,y("ul",{},void 0,g,y(m,{onClick:function(){return e.props.onGalleryClick("Images2017")}},void 0,v),y(m,{onClick:function(){return e.props.onGalleryClick("Images2016")}},void 0,w),y(m,{onClick:function(){return e.props.onGalleryClick("Images2011")}},void 0,j),y(m,{onClick:function(){return e.props.onGalleryClick("TheyReturn")}},void 0,_),S))}}]),t}(a.a.Component),k=function(e){return{gallery:e.gallery}},R=function(e){return{onGalleryClick:function(t){e(Object(c.a)(t))}}};t.a=Object(l.b)(k,R)(C)},"./app/constants/actionTypes.js":function(e,t,o){"use strict"},"./app/containers/HomePage/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/react/react.js"),a=o.n(s),u=o("./node_modules/react-responsive/dist/react-responsive.js"),l=o.n(u),c=o("./app/components/SideNav/index.js"),d=(o("./node_modules/axios/index.js"),o("./node_modules/react-stripe-checkout/dist/main.js"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}(),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}()),p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=d(l.a,{maxWidth:1e3},void 0,d(c.a,{})),h=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){return d("div",{},void 0,f,d(l.a,{minWidth:999},void 0,d("div",{style:{textAlign:"center",padding:"40px",maxWidth:"600px",fontSize:"1.2em",margin:"0 auto"}},void 0,"Hello! Welcome to my portfolio. I am an artist and software developer living and working in Austin, Tx. I have been showing portraits in galleries since 2016, and working on software projects since 2012. This portfolio showcases all of my work in various media.")))}}]),t}(a.a.PureComponent);t.default=h},"./node_modules/axios/index.js":function(e,t,o){e.exports=o("./node_modules/axios/lib/axios.js")},"./node_modules/axios/lib/adapters/xhr.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/core/settle.js"),i=o("./node_modules/axios/lib/helpers/buildURL.js"),s=o("./node_modules/axios/lib/helpers/parseHeaders.js"),a=o("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),u=o("./node_modules/axios/lib/core/createError.js"),l="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||o("./node_modules/axios/lib/helpers/btoa.js");e.exports=function(e){return new Promise(function(t,c){var d=e.data,p=e.headers;n.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest,h="onreadystatechange",m=!1;if(window.XMLHttpRequest||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||a(e.url)||(f=new window.XDomainRequest,h="onload",m=!0,f.onprogress=function(){},f.ontimeout=function(){}),e.auth){var b=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+l(b+":"+y)}if(f.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f[h]=function(){if(f&&(4===f.readyState||m)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?f.response:f.responseText,i={data:n,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:o,config:e,request:f};r(t,c,i),f=null}},f.onerror=function(){c(u("Network Error",e,null,f)),f=null},f.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},n.isStandardBrowserEnv()){var x=o("./node_modules/axios/lib/helpers/cookies.js"),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?x.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in f&&n.forEach(p,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),c(e),f=null)}),void 0===d&&(d=null),f.send(d)})}},"./node_modules/axios/lib/axios.js":function(e,t,o){"use strict";function n(e){var t=new s(e),o=i(s.prototype.request,t);return r.extend(o,s.prototype,t),r.extend(o,t),o}var r=o("./node_modules/axios/lib/utils.js"),i=o("./node_modules/axios/lib/helpers/bind.js"),s=o("./node_modules/axios/lib/core/Axios.js"),a=o("./node_modules/axios/lib/defaults.js"),u=n(a);u.Axios=s,u.create=function(e){return n(r.merge(a,e))},u.Cancel=o("./node_modules/axios/lib/cancel/Cancel.js"),u.CancelToken=o("./node_modules/axios/lib/cancel/CancelToken.js"),u.isCancel=o("./node_modules/axios/lib/cancel/isCancel.js"),u.all=function(e){return Promise.all(e)},u.spread=o("./node_modules/axios/lib/helpers/spread.js"),e.exports=u,e.exports.default=u},"./node_modules/axios/lib/cancel/Cancel.js":function(e,t,o){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"./node_modules/axios/lib/cancel/CancelToken.js":function(e,t,o){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var o=this;e(function(e){o.reason||(o.reason=new r(e),t(o.reason))})}var r=o("./node_modules/axios/lib/cancel/Cancel.js");n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},"./node_modules/axios/lib/cancel/isCancel.js":function(e,t,o){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"./node_modules/axios/lib/core/Axios.js":function(e,t,o){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var r=o("./node_modules/axios/lib/defaults.js"),i=o("./node_modules/axios/lib/utils.js"),s=o("./node_modules/axios/lib/core/InterceptorManager.js"),a=o("./node_modules/axios/lib/core/dispatchRequest.js");n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(r,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[a,void 0],o=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)o=o.then(t.shift(),t.shift());return o},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,o){return this.request(i.merge(o||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,o,n){return this.request(i.merge(n||{},{method:e,url:t,data:o}))}}),e.exports=n},"./node_modules/axios/lib/core/InterceptorManager.js":function(e,t,o){"use strict";function n(){this.handlers=[]}var r=o("./node_modules/axios/lib/utils.js");n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},"./node_modules/axios/lib/core/createError.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/core/enhanceError.js");e.exports=function(e,t,o,r,i){var s=new Error(e);return n(s,t,o,r,i)}},"./node_modules/axios/lib/core/dispatchRequest.js":function(e,t,o){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=o("./node_modules/axios/lib/utils.js"),i=o("./node_modules/axios/lib/core/transformData.js"),s=o("./node_modules/axios/lib/cancel/isCancel.js"),a=o("./node_modules/axios/lib/defaults.js"),u=o("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),l=o("./node_modules/axios/lib/helpers/combineURLs.js");e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=l(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"./node_modules/axios/lib/core/enhanceError.js":function(e,t,o){"use strict";e.exports=function(e,t,o,n,r){return e.config=t,o&&(e.code=o),e.request=n,e.response=r,e}},"./node_modules/axios/lib/core/settle.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/core/createError.js");e.exports=function(e,t,o){var r=o.config.validateStatus;o.status&&r&&!r(o.status)?t(n("Request failed with status code "+o.status,o.config,null,o.request,o)):e(o)}},"./node_modules/axios/lib/core/transformData.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t,o){return n.forEach(o,function(o){e=o(e,t)}),e}},"./node_modules/axios/lib/defaults.js":function(e,t,o){"use strict";(function(t){function n(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=o("./node_modules/axios/lib/utils.js"),i=o("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=o("./node_modules/axios/lib/adapters/xhr.js"):void 0!==t&&(e=o("./node_modules/axios/lib/adapters/xhr.js")),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(s)}),e.exports=a}).call(t,o("./node_modules/process/browser.js"))},"./node_modules/axios/lib/helpers/bind.js":function(e,t,o){"use strict";e.exports=function(e,t){return function(){for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n];return e.apply(t,o)}}},"./node_modules/axios/lib/helpers/btoa.js":function(e,t,o){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,o,r=String(e),s="",a=0,u=i;r.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((o=r.charCodeAt(a+=.75))>255)throw new n;t=t<<8|o}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},"./node_modules/axios/lib/helpers/buildURL.js":function(e,t,o){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t,o){if(!t)return e;var i;if(o)i=o(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},"./node_modules/axios/lib/helpers/combineURLs.js":function(e,t,o){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"./node_modules/axios/lib/helpers/cookies.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,o,r,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"./node_modules/axios/lib/helpers/isAbsoluteURL.js":function(e,t,o){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"./node_modules/axios/lib/helpers/isURLSameOrigin.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return o&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,o=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(o){var r=n.isString(o)?e(o):o;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},"./node_modules/axios/lib/helpers/normalizeHeaderName.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t){n.forEach(e,function(o,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=o,delete e[n])})}},"./node_modules/axios/lib/helpers/parseHeaders.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,o,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),o=n.trim(e.substr(i+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([o]):s[t]?s[t]+", "+o:o}}),s):s}},"./node_modules/axios/lib/helpers/spread.js":function(e,t,o){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"./node_modules/axios/lib/utils.js":function(e,t,o){"use strict";function n(e){return"[object Array]"===S.call(e)}function r(e){return"[object ArrayBuffer]"===S.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function l(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===S.call(e)}function p(e){return"[object File]"===S.call(e)}function f(e){return"[object Blob]"===S.call(e)}function h(e){return"[object Function]"===S.call(e)}function m(e){return c(e)&&h(e.pipe)}function b(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function v(){function e(e,o){"object"==typeof t[o]&&"object"==typeof e?t[o]=v(t[o],e):t[o]=e}for(var t={},o=0,n=arguments.length;o<n;o++)g(arguments[o],e);return t}function w(e,t,o){return g(t,function(t,n){e[n]=o&&"function"==typeof t?j(t,o):t}),e}var j=o("./node_modules/axios/lib/helpers/bind.js"),_=o("./node_modules/is-buffer/index.js"),S=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:r,isBuffer:_,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:c,isUndefined:l,isDate:d,isFile:p,isBlob:f,isFunction:h,isStream:m,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:g,merge:v,extend:w,trim:y}},"./node_modules/is-buffer/index.js":function(e,t){function o(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(o(e)||n(e)||!!e._isBuffer)}},"./node_modules/react-stripe-checkout/dist/main.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o("./node_modules/react/react.js"),d=n(c),p=o("./node_modules/prop-types/index.js"),f=n(p),h=!1,m=!1,b=!1,y=function(e){function t(e){i(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:o.props.stripeKey}),o.hasPendingClick&&o.showStripeDialog())},o.onScriptError=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o.hideLoadingDialog(),o.props.onScriptError&&o.props.onScriptError.apply(o,t)},o.onClosed=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o._isMounted&&o.setState({open:!1}),o.props.closed&&o.props.closed.apply(o,t)},o.onOpened=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o.setState({open:!0}),o.props.opened&&o.props.opened.apply(o,t)},o.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(e,t){return u({},e,o.props.hasOwnProperty(t)&&r({},t,o.props[t]))},{opened:o.onOpened,closed:o.onClosed})},o.onClick=function(){if(!o.props.disabled)if(b)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?o.showStripeDialog():(o.showLoadingDialog(),o.hasPendingClick=!0)},o.handleOnMouseDown=function(){o.setState({buttonActive:!0})},o.handleOnMouseUp=function(){o.setState({buttonActive:!1})},o.state={open:!1,buttonActive:!1},o}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!m&&!h){h=!0;var t=document.createElement("script");"function"==typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var o=!1,n=new Promise(function(o,n){t.onload=function(){m=!0,h=!1,o(),e.onScriptLoaded()},t.onerror=function(t){b=!0,h=!1,n(t),e.onScriptError(t)}});return{promise:new Promise(function(e,t){n.then(function(){return o?t({isCanceled:!0}):e()}),n.catch(function(e){return t(o?{isCanceled:!0}:e)})}),cancel:function(){o=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){h||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return d.default.createElement("button",u({},r({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:u({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),d.default.createElement("span",{style:u({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return d.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},d.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?d.default.createElement(e,u({},r({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(d.default.Component);y.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},y.propTypes={desktopShowModal:f.default.bool,triggerEvent:f.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:f.default.string,style:f.default.object,textStyle:f.default.object,disabled:f.default.bool,ComponentClass:f.default.string,showLoadingDialog:f.default.func,hideLoadingDialog:f.default.func,onScriptError:f.default.func,onScriptTagCreated:f.default.func,reconfigureOnUpdate:f.default.bool,stripeKey:f.default.string.isRequired,token:f.default.func.isRequired,name:f.default.string,description:f.default.string,image:f.default.string,amount:f.default.number,locale:f.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:f.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:f.default.string,zipCode:f.default.bool,billingAddress:f.default.bool,shippingAddress:f.default.bool,email:f.default.string,allowRememberMe:f.default.bool,bitcoin:f.default.bool,alipay:f.default.oneOf(["auto",!0,!1]),alipayReusable:f.default.bool,opened:f.default.func,closed:f.default.func},y._isMounted=!1,t.default=y}});