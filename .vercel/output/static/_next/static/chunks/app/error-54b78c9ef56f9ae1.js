(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7601],{25014:function(e,t,r){"use strict";r.r(t),r.d(t,{item:function(){return n},list:function(){return i}}),r(92975),r(53209);var n="_3nqhft1",i="_3nqhft0"},22896:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){!function(e,t,r){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t){var r={};for(var n in e)r[n]=t(e[n],n);return r}r.r(t),r.d(t,{buttonStyles:function(){return u}}),r(92975),r(28109);var s,l,o=(e,t,r)=>{for(var n of Object.keys(e)){var i;if(e[n]!==(null!==(i=t[n])&&void 0!==i?i:r[n]))return!1}return!0},u=(s={defaultClassName:"_1gr9yvi0",variantClassNames:{type:{highContrast:"_1gr9yvi1",neutral:"_1gr9yvi2",outlined:"_1gr9yvi3",text:"_1gr9yvi4"}},defaultVariants:{type:"highContrast"},compoundVariants:[]},(l=e=>{var t=s.defaultClassName,r=i(i({},s.defaultVariants),e);for(var n in r){var a,l=null!==(a=r[n])&&void 0!==a?a:s.defaultVariants[n];if(null!=l){var u=l;"boolean"==typeof u&&(u=!0===u?"true":"false");var c=s.variantClassNames[n][u];c&&(t+=" "+c)}}for(var[f,d]of s.compoundVariants)o(f,r,s.defaultVariants)&&(t+=" "+d);return t}).variants=()=>Object.keys(s.variantClassNames),l.classNames={get base(){return s.defaultClassName.split(" ")[0]},get variants(){return a(s.variantClassNames,e=>a(e,e=>e.split(" ")[0]))}},l)},14051:function(e,t,r){Promise.resolve().then(r.bind(r,52218))},30085:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g},metadata:function(){return y},runtime:function(){return b}});var n=r(30719),i=r(25014);function a(e){let{children:t,style:r,testId:a}=e;return(0,n.jsx)("ul",{className:i.list,"data-testid":a,style:r,children:t})}function s(e){let{children:t,hidden:r,id:a,style:s}=e;return(0,n.jsx)("li",{className:i.item,id:a,hidden:r,style:s,children:t})}var l=r(22896),o=r(75097),u=r(44189),c=r(46227),f=e=>{let{as:t,color:r,position:n,className:i,padding:a,paddingTop:s,paddingRight:l,paddingBottom:f,paddingLeft:d,paddingX:h,paddingY:p,marginTop:m,marginRight:v,marginBottom:b,marginLeft:y,marginX:g,marginY:j,display:x,flexDirection:k,alignItems:O,justifyContent:w,placeItems:C,flexShrink:N,flexGrow:_,gap:P,columnGap:I,rowGap:Z,columns:E,gridTemplateColumns:S,width:D,maxWidth:V,height:q,aspectRatio:M,textAlign:T,overflow:A,...G}=e,H=(0,u.Z)((0,o.sprinkles)({color:r,position:n,padding:a,paddingTop:s,paddingRight:l,paddingBottom:f,paddingLeft:d,paddingX:h,paddingY:p,marginTop:m,marginRight:v,marginBottom:b,marginLeft:y,marginX:g,marginY:j,display:x,flexDirection:k,alignItems:O,justifyContent:w,placeItems:C,flexShrink:N,flexGrow:_,gap:P,columnGap:I,rowGap:Z,columns:E,gridTemplateColumns:S,width:D,maxWidth:V,height:q,aspectRatio:M,textAlign:T,overflow:A}),i);return(0,c.createElement)(t||"div",{className:H,...G})},d=r(16291);function h(e){let{as:t,fontSize:r="md",color:n="foreground",testId:i,...a}=e,s=t||"h2";return(0,c.createElement)(s,{className:(0,u.Z)(d.root,d.tracking[s],(0,o.sprinkles)({fontSize:r,color:n})),"data-testid":i,...a})}var p=r(99903),m=r(73587);function v(e){let{statusCode:t,title:r}=e;return(0,n.jsxs)(f,{as:"header",textAlign:{md:"center"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(m.Z,{height:"xl"}),(0,n.jsxs)(f,{textAlign:"left",children:[(0,n.jsx)(h,{as:"h1",fontSize:"xxl",children:r}),(0,n.jsx)(a,{children:"404"===t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:"If you typed the web address, check it's correct."}),(0,n.jsx)(s,{children:"If you copied and pasted the web address, check you copied the entire address."}),(0,n.jsxs)(s,{children:["If the web address is correct or you clicked a link or button and ended up on this page, please raise a"," ",(0,n.jsx)(p.Z,{href:"https://github.com/luke-h1/lhowsam.com/issues",variant:"underline",children:"GitHub issue"})]})]}):(0,n.jsxs)(s,{children:["It looks like something went wrong. Please try again later. In the meantime, please raise a"," ",(0,n.jsx)(p.Z,{href:"https://github.com/luke-h1/lhowsam.com/issues",variant:"underline",children:"GitHub issue"})]})})]}),(0,n.jsx)(m.Z,{height:"xxl"}),(0,n.jsx)(f,{textAlign:"left",children:(0,n.jsx)(p.Z,{href:"/",className:(0,l.buttonStyles)({type:"highContrast"}),children:"Go Home"})})]})}let b="edge",y={title:"500 internal server error",description:"500 internal server error"};function g(){return(0,n.jsx)(v,{statusCode:"500",title:"500 internal server error"})}},99903:function(e,t,r){"use strict";var n=r(30719),i=r(44189),a=r(81230),s=r(68735);t.Z=e=>{let{children:t,variant:r="neutral",underlined:l=!1,className:o,id:u,href:c,css:f,testId:d,...h}=e,p="string"==typeof c&&c.startsWith("http"),m="string"==typeof c&&c.startsWith("#");return p||m?(0,n.jsx)("a",{"data-testid":d,id:u,rel:p?"noopener noreferrer":void 0,target:p?"_blank":void 0,className:(0,i.Z)(s.variants[r],o,{[s.underlined]:l}),style:{...f},...h,href:c,children:t}):(0,n.jsx)(a.default,{"data-testid":d,id:u,href:c,className:(0,i.Z)(s.variants[r],o),style:{...f},...h,children:t})}},73587:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(75097),i=r(44189),a=r(46227);function s(e){let{height:t,width:r}=e;return(0,a.createElement)("span",{"aria-hidden":!0,className:(0,i.Z)((0,n.sprinkles)({display:r?"inline-block":"block",width:r,height:t}))})}},53209:function(){},28109:function(){},92975:function(){}},function(e){e.O(0,[2717,5606,4021,2332,125,6103,8026,1991,1744],function(){return e(e.s=14051)}),_N_E=e.O()}]);