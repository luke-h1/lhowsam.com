"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3770],{10830:function(e,t,r){r.d(t,{$j:function(){return t7},CP:function(){return oi},Ct:function(){return t2},EK:function(){return rc},F2:function(){return ni},Fg:function(){return eA},J2:function(){return oc},Jh:function(){return tY},Kq:function(){return ok},Kx:function(){return oO},Lg:function(){return x},Lt:function(){return j},NM:function(){return rM},OK:function(){return nq},Od:function(){return nP},Of:function(){return T},Oo:function(){return nd},Ph:function(){return ow},Q5:function(){return C},Qr:function(){return nV},R:function(){return nF},RE:function(){return rH},Re:function(){return rV},SV:function(){return rI},Tu:function(){return nw},VW:function(){return ie},Vq:function(){return nx},W2:function(){return rp},X6:function(){return rv},XL:function(){return eE},XZ:function(){return rl},Xp:function(){return r8},Y8:function(){return op},Zb:function(){return rn},__:function(){return tO},bg:function(){return rK},d2:function(){return eB},eb:function(){return eN},f6:function(){return eM},fo:function(){return rY},gF:function(){return rw},h4:function(){return eR},hO:function(){return z},h_:function(){return r7},iX:function(){return rL},j2:function(){return nC},kC:function(){return t4},kS:function(){return nN},li:function(){return rU},m4:function(){return v},mh:function(){return r2},oi:function(){return oq},p2:function(){return tW},p8:function(){return nk},pm:function(){return it},qE:function(){return tP},qh:function(){return eS},rj:function(){return rm},rs:function(){return o_},sJ:function(){return rQ},sN:function(){return nA},sz:function(){return rA},td:function(){return nG},u:function(){return o3},uE:function(){return o1},ue:function(){return eD},v2:function(){return n_},vI:function(){return r6},x4:function(){return nY},xu:function(){return tU},xv:function(){return t0},zx:function(){return rr}});var o=r(94242),n=r(69528),i=r(30719),a=r(65443),l=r(46227),d=r(29317),s=r(62409),c=r(28066),u=r(78750),f=r(98588),p=r(56498),h=r(53355),m=r(61610),b=r(18385),g=r(50058);let v=o.m4,x=(0,o.fi)(),w=[],y={},$="--motion-content-opacity",k={initial:{opacity:.5,[$]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[$]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[$]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function z(e){return 0===e?0:`${e/16}rem`}function j(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function R(e,t){return void 0===e?t||w:Array.isArray(e)?e:[e]}function E(e,t,r=w){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:i}=(0,n.aQ)(e);return j(o,r,e=>{var r;return r=z(i[e]),t.reduce((e,t)=>(e[t]=r,e),{})})}function S(e,t){let{$size:r,$weight:o}=t,{font:i,media:a}=(0,n.aQ)(t.theme),{family:l,sizes:d,weights:s}=i[e],c=o&&s[o]||s.regular,u=d[2],f={position:"relative",fontFamily:l,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[f,...j(a,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:n,letterSpacing:i,lineHeight:a}=e,l=t+r,d=a-l,s=2*Math.floor(1.125*o/2)+1;return{fontSize:z(o),lineHeight:`calc(${a} / ${o})`,letterSpacing:z(i),transform:`translateY(${z(r)})`,"&:before":{marginTop:`calc(${z(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:z((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:z((d-n)/2)}}})(d[e]||u))]:(S.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:f}),S.warned=!0),[f])}function _(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$align,e=>({textAlign:e}))}function C(e,t){let r;let o=(0,a.c)(3);o[0]!==t||o[1]!==e?(r=()=>[R(e,t),JSON.stringify(e??t)],o[0]=t,o[1]=e,o[2]=r):r=o[2];let[n,i]=(0,l.useState)(r),[d,s]=n,c=JSON.stringify(e??t);return c!==s&&i([R(e,t),c]),d}function T(e,t,r){let o,n,i;let d=(0,a.c)(8),s=void 0===t?F:t;d[0]!==r||d[1]!==s||d[2]!==e?(o=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let n=r?.();if(!n||n.contains(o)){for(let e of s().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},d[0]=r,d[1]=s,d[2]=e,d[3]=o):o=d[3];let c=(0,g.i)(o),u=!!e;d[4]!==u||d[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i=[u,c],d[4]=u,d[5]=c,d[6]=n,d[7]=i):(n=d[6],i=d[7]),(0,l.useEffect)(n,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function F(){return w}function M(e,t){let r,o;let n=(0,a.c)(6);n[0]!==t||n[1]!==e.current?(r=()=>{e.current?.setCustomValidity(t||"")},n[0]=t,n[1]=e.current,n[2]=r):r=n[2],n[3]!==t||n[4]!==e?(o=[t,e],n[3]=t,n[4]=e,n[5]=o):o=n[5],(0,l.useEffect)(r,o)}var O,N=[],A="ResizeObserver loop completed with undelivered notifications.",L=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:A}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=A),window.dispatchEvent(e)};(I=O||(O={})).BORDER_BOX="border-box",I.CONTENT_BOX="content-box",I.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var I,B,D=function(e){return Object.freeze(e)},Q=function(e,t){this.inlineSize=e,this.blockSize=t,D(this)},P=function(){function e(e,t,r,o){return this.x=e,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,D(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,r=this.top,o=this.right,n=this.bottom;return{x:e,y:t,top:r,right:o,bottom:n,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),H=function(e){return e instanceof SVGElement&&"getBBox"in e},V=function(e){if(H(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e.offsetWidth,i=e.offsetHeight;return!(n||i||e.getClientRects().length)},W=function(e){if(e instanceof Element)return!0;var t,r=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},q=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},X="u">typeof window?window:{},G=new WeakMap,Y=/auto|scroll/,K=/^tb|vertical/,U=/msie|trident/i.test(X.navigator&&X.navigator.userAgent),J=function(e){return parseFloat(e||"0")},Z=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new Q((r?t:e)||0,(r?e:t)||0)},ee=D({devicePixelContentBoxSize:Z(),borderBoxSize:Z(),contentBoxSize:Z(),contentRect:new P(0,0,0,0)}),et=function(e,t){if(void 0===t&&(t=!1),G.has(e)&&!t)return G.get(e);if(V(e))return G.set(e,ee),ee;var r=getComputedStyle(e),o=H(e)&&e.ownerSVGElement&&e.getBBox(),n=!U&&"border-box"===r.boxSizing,i=K.test(r.writingMode||""),a=!o&&Y.test(r.overflowY||""),l=!o&&Y.test(r.overflowX||""),d=o?0:J(r.paddingTop),s=o?0:J(r.paddingRight),c=o?0:J(r.paddingBottom),u=o?0:J(r.paddingLeft),f=o?0:J(r.borderTopWidth),p=o?0:J(r.borderRightWidth),h=o?0:J(r.borderBottomWidth),m=o?0:J(r.borderLeftWidth),b=u+s,g=d+c,v=m+p,x=f+h,w=l?e.offsetHeight-x-e.clientHeight:0,y=a?e.offsetWidth-v-e.clientWidth:0,$=o?o.width:J(r.width)-(n?b+v:0)-y,k=o?o.height:J(r.height)-(n?g+x:0)-w,z=$+b+y+v,j=k+g+w+x,R=D({devicePixelContentBoxSize:Z(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:Z(z,j,i),contentBoxSize:Z($,k,i),contentRect:new P(u,d,$,k)});return G.set(e,R),R},er=function(e,t,r){var o=et(e,r),n=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case O.DEVICE_PIXEL_CONTENT_BOX:return a;case O.BORDER_BOX:return n;default:return i}},eo=function(e){var t=et(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=D([t.borderBoxSize]),this.contentBoxSize=D([t.contentBoxSize]),this.devicePixelContentBoxSize=D([t.devicePixelContentBoxSize])},en=function(e){if(V(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},ei=function(){var e=1/0,t=[];N.forEach(function(r){if(0!==r.activeTargets.length){var o=[];r.activeTargets.forEach(function(t){var r=new eo(t.target),n=en(t.target);o.push(r),t.lastReportedSize=er(t.target,t.observedBox),n<e&&(e=n)}),t.push(function(){r.callback.call(r.observer,o,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var r=0;r<t.length;r++)(0,t[r])();return e},ea=function(e){N.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(en(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},el=function(){var e=0;for(ea(0);N.some(function(e){return e.activeTargets.length>0});)ea(e=ei());return N.some(function(e){return e.skippedTargets.length>0})&&L(),e>0},ed=[],es=function(e){if(!B){var t=0,r=document.createTextNode("");new MutationObserver(function(){return ed.splice(0).forEach(function(e){return e()})}).observe(r,{characterData:!0}),B=function(){r.textContent="".concat(t?t--:t++)}}ed.push(e),B()},ec=function(e){es(function(){requestAnimationFrame(e)})},eu=0,ef={attributes:!0,characterData:!0,childList:!0,subtree:!0},ep=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],eh=function(e){return void 0===e&&(e=0),Date.now()+e},em=!1,eb=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!em){em=!0;var r=eh(e);ec(function(){var o=!1;try{o=el()}finally{if(em=!1,e=r-eh(),!eu)return;o?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,ef)};document.body?t():X.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ep.forEach(function(t){return X.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),ep.forEach(function(t){return X.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),eg=function(e){!eu&&e>0&&eb.start(),(eu+=e)||eb.stop()},ev=function(){function e(e,t){this.target=e,this.observedBox=t||O.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=er(this.target,this.observedBox,!0);return H(e=this.target)||q(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ex=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},ew=new WeakMap,ey=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return -1},e$=function(){function e(){}return e.connect=function(e,t){var r=new ex(e,t);ew.set(e,r)},e.observe=function(e,t,r){var o=ew.get(e),n=0===o.observationTargets.length;0>ey(o.observationTargets,t)&&(n&&N.push(o),o.observationTargets.push(new ev(t,r&&r.box)),eg(1),eb.schedule())},e.unobserve=function(e,t){var r=ew.get(e),o=ey(r.observationTargets,t),n=1===r.observationTargets.length;o>=0&&(n&&N.splice(N.indexOf(r),1),r.observationTargets.splice(o,1),eg(-1))},e.disconnect=function(e){var t=this,r=ew.get(e);r.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),ek=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");e$.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!W(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");e$.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!W(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");e$.unobserve(this,e)},e.prototype.disconnect=function(){e$.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let ez="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:ek,ej=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(r,o){let n=t.get(r)||[],i=e.get(r);return t.has(r)||(t.set(r,n),i=({subscribe(e,t){let r=new ez(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(r,e=>{for(let t of n)t(e)})),n.push(o),()=>{let e=n.indexOf(o);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function eR(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(null);return o[0]!==e?(t=()=>{if(e)return ej.subscribe(e,i)},r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,l.useEffect)(t,r),n}function eE(e){return eR(e)?._contentRect||null}function eS(e){let t,r;let o=(0,a.c)(3);return o[0]!==e?(t=()=>(addEventListener("keydown",e),()=>removeEventListener("keydown",e)),r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,l.useEffect)(t,r)}function e_(e,t){let{subscribe:r,getSnapshot:o}=(0,l.useMemo)(()=>{let t;let r=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=r();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>r().matches}},[e]);return(0,l.useDebugValue)(e),(0,l.useSyncExternalStore)(r,o,t)}let eC=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function eT(e,t){let r=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(eC[r]=eC[r]||(0,l.createContext)(t),eC[r])}let eF=eT("@sanity/ui/context/theme",null);function eM(e){let t,r,n,d;let c=(0,a.c)(15),u=(0,l.useContext)(eF),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),m=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==m?(e={version:0,theme:h,scheme:p,tone:m},c[0]=h,c[1]=p,c[2]=m,c[3]=e):e=c[3],t=e}let b=t;t:{let e;if(!h){r=null;break t}c[4]!==h||c[5]!==p||c[6]!==m?(e=(0,o.BA)(h,p,m),c[4]=h,c[5]=p,c[6]=m,c[7]=e):e=c[7],r=e}let g=r;if(!g){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==g?(n=(0,i.jsx)(s.f6,{theme:g,children:f}),c[9]=f,c[10]=g,c[11]=n):n=c[11],c[12]!==n||c[13]!==b?(d=(0,i.jsx)(eF.Provider,{value:b,children:n}),c[12]=n,c[13]=b,c[14]=d):d=c[14],d}function eO(){let e=(0,l.useContext)(eF);if(!e)throw Error("useRootTheme(): missing context value");return e}function eN(e){let t;let r=(0,a.c)(5),{children:o,scheme:n,tone:l}=e,d=eO(),s=n||d.scheme;return r[0]!==o||r[1]!==d.theme||r[2]!==s||r[3]!==l?(t=(0,i.jsx)(eM,{scheme:s,theme:d.theme,tone:l,children:o}),r[0]=o,r[1]=d.theme,r[2]=s,r[3]=l,r[4]=t):t=r[4],t}function eA(){return(0,s.Fg)()}function eL(){let e;let t=(0,a.c)(2),r=(0,s.Fg)();return t[0]!==r?(e=(0,n.aQ)(r),t[0]=r,t[1]=e):e=t[1],e}function eI(){return 0}function eB(){let e,t;let r=(0,a.c)(2),{media:o}=eL();return r[0]!==o?(t=function(e){let t;let r=e.length,o=()=>{if(!t){t=[];for(let n=r;n>-1;n-=1){var o;let r=0===(o=n)?`screen and (max-width: ${e[o]-1}px)`:o===e.length?`screen and (min-width: ${e[o-1]}px)`:`screen and (min-width: ${e[o-1]}px) and (max-width: ${e[o]-1}px)`;t.push({index:n,mq:window.matchMedia(r)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}}}(o),r[0]=o,r[1]=t):t=r[1],e=t,(0,l.useSyncExternalStore)(e.subscribe,e.getSnapshot,eI)}function eD(e){return e_("(prefers-color-scheme: dark)",void 0===e?eQ:e)}function eQ(){return!1}function eP(e){return e_("(prefers-reduced-motion: reduce)",void 0===e?eH:e)}function eH(){return!1}function eV(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return j(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function eW(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return j(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function eq(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return j(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function eX(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return j(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function eG(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return j(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}eM.displayName="ThemeProvider",eN.displayName="ThemeColorProvider";let eY={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eK={content:"content-box",border:"border-box"},eU={stretch:"stretch",fill:"100%"};function eJ(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eZ(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$sizing,e=>({boxSizing:eK[e]}))}function e0(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$height,e=>({height:eU[e]}))}function e1(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$overflow,e=>({overflow:e}))}let e2={"&&:not([hidden])":{display:"flex"}};function e3(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$align,e=>({alignItems:e}))}function e4(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$gap,e=>({gap:e?z(r[e]):void 0}))}function e5(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$wrap,e=>({flexWrap:e}))}function e6(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$justify,e=>({justifyContent:e}))}function e7(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$direction,e=>({flexDirection:e}))}let e8={minWidth:0,minHeight:0};function e9(){return[e8,te]}function te(e){let{media:t}=(0,n.aQ)(e.theme);return e.$flex?j(t,e.$flex,e=>({flex:e})):w}function tt(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tr(e){let{base:t,border:r,focusRing:o}=e,n=o.offset+o.width,i=0-o.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,r&&tt(r),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let to={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tn={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},ti={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function ta(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function tl(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$autoRows,e=>({gridAutoRows:e&&ti[e]}))}function td(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$autoCols,e=>({gridAutoColumns:e&&tn[e]}))}function ts(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function tc(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function tu(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$gap,e=>({gridGap:e?z(r[e]):void 0}))}function tf(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$gapX,e=>({columnGap:e?z(r[e]):void 0}))}function tp(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$gapY,e=>({rowGap:e?z(r[e]):void 0}))}let th={auto:"auto",full:"1 / -1"},tm={auto:"auto",full:"1 / -1"};function tb(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:th[e]})}function tg(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$rowStart,e=>({gridRowStart:e}))}function tv(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$rowEnd,e=>({gridRowEnd:e}))}function tx(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tm[e]})}function tw(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$columnStart,e=>({gridColumnStart:e}))}function ty(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function t$(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,n.aQ)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return j(d,u,(e,t)=>{let n=l.text.sizes[p[t]]||l.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[u[t]],d=s[f[t]],c={paddingTop:z(a-n.ascenderHeight),paddingRight:z(a),paddingBottom:z(a-n.descenderHeight),paddingLeft:z(a)};return o&&(c.paddingRight=z(a+i+d)),r&&(c.paddingLeft=z(a+i+d)),c})}function tk(e){return t$({...e,$iconRight:!0})}let tz=(0,s.iv)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tj(){return tz}function tR(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:i,font:a}=(0,n.aQ)(e.theme);return(0,s.iv)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${o&&a.text.weights[o]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function tE(e){let{font:t,media:r}=(0,n.aQ)(e.theme);return j(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:z(r.fontSize),lineHeight:r.lineHeight/r.fontSize}})}function tS(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:d}=(0,n.aQ)(e.theme);return(0,s.iv)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${tt({color:l.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${tt({color:l.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:tr({border:{color:l.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:tr({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tt({color:l.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tt({color:l.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tt({color:l.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tt({color:l.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function t_(e){let{theme:t}=e;return[E(t,["padding"],e.$padding),E(t,["paddingLeft","paddingRight"],e.$paddingX),E(t,["paddingTop","paddingBottom"],e.$paddingY),E(t,["paddingTop"],e.$paddingTop),E(t,["paddingRight"],e.$paddingRight),E(t,["paddingBottom"],e.$paddingBottom),E(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function tC(e){let{media:t,radius:r}=(0,n.aQ)(e.theme);return j(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=z(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function tT(e,t){return`${e.map(z).join(" ")} ${t}`}let tF=s.zo.div(function(e){return S("label",e)},_,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,s.iv)`
    text-transform: uppercase;

    ${t&&(0,s.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tM=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,tO=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(22);p[0]!==e?({accent:r,align:o,children:n,muted:d,size:s,textOverflow:c,weight:u,...l}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s,p[7]=c,p[8]=u):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==d&&d,m=void 0===s?2:s,b=n;if("ellipsis"===c){let e;p[9]!==b?(e=(0,i.jsx)(tM,{children:b}),p[9]=b,p[10]=e):e=p[10],b=e}else{let e;p[11]!==b?(e=(0,i.jsx)("span",{children:b}),p[11]=b,p[12]=e):e=p[12],b=e}let g=C(o),v=C(m);return p[13]!==r||p[14]!==b||p[15]!==h||p[16]!==t||p[17]!==l||p[18]!==g||p[19]!==v||p[20]!==u?(f=(0,i.jsx)(tF,{"data-ui":"Label",...l,$accent:r,$align:g,$muted:h,$size:v,$weight:u,ref:t,children:b}),p[13]=r,p[14]=b,p[15]=h,p[16]=t,p[17]=l,p[18]=g,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});tO.displayName="ForwardRef(Label)";let tN=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return j(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:z(r.size),height:z(r.size),borderRadius:z(r.size/2),"&>svg":{width:z(r.size),height:z(r.size),borderRadius:z(r.size/2)}}})},function(e){let{$color:t}=e,{avatar:r}=(0,n.aQ)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tr({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),tA=s.zo.div(function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}}),tL=s.zo.ellipse(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),tI=s.zo.ellipse(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),tB=s.zo.div(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),tD=(0,s.zo)(tO)({color:"inherit"}),tQ=s.zo.svg(function(){return{position:"relative"}}),tP=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S;let _=(0,a.c)(52);_[0]!==e?({__unstable_hideInnerStroke:r,as:s,color:h,src:p,title:g,initials:c,onImageLoadError:u,arrowPosition:n,animateArrowFrom:o,status:m,size:b,...f}=e,_[0]=e,_[1]=r,_[2]=o,_[3]=n,_[4]=s,_[5]=c,_[6]=u,_[7]=f,_[8]=p,_[9]=h,_[10]=m,_[11]=b,_[12]=g):(r=_[1],o=_[2],n=_[3],s=_[4],c=_[5],u=_[6],f=_[7],p=_[8],h=_[9],m=_[10],b=_[11],g=_[12]);let T=void 0===h?"gray":h,F=void 0===m?"online":m,M=void 0===b?1:b,{avatar:O}=eL(),N=d.isValidElementType(s)?s:"div",A=C(M),L=(O.sizes[A[0]]||O.sizes[0]).size,I=L/2,B=(0,l.useId)(),[D,Q]=(0,l.useState)(o||n||"inside"),[P,H]=(0,l.useState)(!1),V=`avatar-image-${B}`;_[13]!==D||_[14]!==n?(v=()=>{if(D===n)return;let e=requestAnimationFrame(()=>Q(n));return()=>cancelAnimationFrame(e)},x=[D,n],_[13]=D,_[14]=n,_[15]=v,_[16]=x):(v=_[15],x=_[16]),(0,l.useEffect)(v,x),_[17]!==p?(w=()=>{p&&H(!1)},y=[p],_[17]=p,_[18]=w,_[19]=y):(w=_[18],y=_[19]),(0,l.useEffect)(w,y),_[20]!==u?($=()=>{H(!0),u&&u(Error("Avatar: the image failed to load"))},_[20]=u,_[21]=$):$=_[21];let W=$;_[22]!==A?(z=A.map(tH),_[22]=A,_[23]=z):z=_[23],k=z;let q="string"==typeof N?N:void 0;return _[24]!==T?(j=(0,i.jsx)(tA,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:T})})}),_[24]=T,_[25]=j):j=_[25],_[26]!==r||_[27]!==I||_[28]!==L||_[29]!==W||_[30]!==P||_[31]!==V||_[32]!==p?(R=!P&&p&&(0,i.jsxs)(tQ,{viewBox:`0 0 ${L} ${L}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:V,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:p,width:"1",height:"1",onError:W})})}),(0,i.jsx)("circle",{cx:I,cy:I,r:I,fill:`url(#${V})`}),!r&&(0,i.jsx)(tL,{cx:I,cy:I,rx:I,ry:I,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tI,{cx:I,cy:I,rx:I,ry:I,vectorEffect:"non-scaling-stroke"})]}),_[26]=r,_[27]=I,_[28]=L,_[29]=W,_[30]=P,_[31]=V,_[32]=p,_[33]=R):R=_[33],_[34]!==P||_[35]!==c||_[36]!==k||_[37]!==p?(E=(P||!p)&&c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tB,{children:(0,i.jsx)(tD,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),_[34]=P,_[35]=c,_[36]=k,_[37]=p,_[38]=E):E=_[38],_[39]!==D||_[40]!==N||_[41]!==T||_[42]!==t||_[43]!==f||_[44]!==A||_[45]!==F||_[46]!==q||_[47]!==j||_[48]!==R||_[49]!==E||_[50]!==g?(S=(0,i.jsxs)(tN,{as:N,"data-as":q,"data-ui":"Avatar",...f,$color:T,$size:A,"aria-label":g,"data-arrow-position":D,"data-status":F,ref:t,title:g,children:[j,R,E]}),_[39]=D,_[40]=N,_[41]=T,_[42]=t,_[43]=f,_[44]=A,_[45]=F,_[46]=q,_[47]=j,_[48]=R,_[49]=E,_[50]=g,_[51]=S):S=_[51],S});function tH(e){return 1===e?1:2===e?3:3===e?5:0}tP.displayName="ForwardRef(Avatar)";let tV=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return j(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:z(r.size/2),minWidth:z(r.size),height:z(r.size)}:y})},function(e){let{space:t}=(0,n.aQ)(e.theme);return(0,s.iv)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${z(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tW=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(9),{count:s,size:c}=e,u=C(void 0===c?1:c);return d[0]!==u?(o=u.map(tq),d[0]=u,d[1]=o):o=d[1],r=o,d[2]!==s||d[3]!==r?(n=(0,i.jsx)(tO,{as:"span",size:r,weight:"medium",children:s}),d[2]=s,d[3]=r,d[4]=n):n=d[4],d[5]!==t||d[6]!==u||d[7]!==n?(l=(0,i.jsx)(tV,{$size:u,"data-ui":"AvatarCounter",ref:t,children:n}),d[5]=t,d[6]=u,d[7]=n,d[8]=l):l=d[8],l});function tq(e){return 1===e?1:2===e?3:3===e?5:0}tW.displayName="ForwardRef(AvatarCounter)";let tX=(0,s.iv)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tG=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return j(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:z(r.distance)}}:y})},function(){return tX}),tY=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c;let u=(0,a.c)(15);u[0]!==e?({children:r,maxLength:n,size:d,...o}=e,u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=d):(r=u[1],o=u[2],n=u[3],d=u[4]);let f=void 0===n?4:n,p=void 0===d?1:d,h=l.Children.toArray(r).filter(l.isValidElement),m=C(p),b=h.length,g=b-(Math.max(f,0)-1),v=g>1?h.slice(g,b):h,x=0===b&&(0,i.jsx)("div",{children:(0,i.jsx)(tW,{count:b,size:m})}),w=0!==b&&g>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tW,{count:g,size:m})});u[5]!==m?(s=(e,t)=>(0,i.jsx)("div",{children:(0,l.cloneElement)(e,{size:m})},String(t)),u[5]=m,u[6]=s):s=u[6];let y=v.map(s);return u[7]!==tG||u[8]!==t||u[9]!==o||u[10]!==m||u[11]!==x||u[12]!==w||u[13]!==y?(c=(0,i.jsxs)(tG,{"data-ui":"AvatarStack",...o,ref:t,$size:m,children:[x,w,y]}),u[7]=tG,u[8]=t,u[9]=o,u[10]=m,u[11]=x,u[12]=w,u[13]=y,u[14]=c):c=u[14],c});tY.displayName="ForwardRef(AvatarStack)";let tK=s.zo.div(function(){return eY},e9,function(){return[eZ,e0,e1,eJ]},function(){return[tb,tg,tv,tx,tw,ty]},function(e){let{theme:t}=e;return[E(t,["margin"],e.$margin),E(t,["marginLeft","marginRight"],e.$marginX),E(t,["marginTop","marginBottom"],e.$marginY),E(t,["marginTop"],e.$marginTop),E(t,["marginRight"],e.$marginRight),E(t,["marginBottom"],e.$marginBottom),E(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},t_),tU=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_,T,F;let M=(0,a.c)(59);M[0]!==e?({as:E,column:r,columnStart:n,columnEnd:o,display:S,flex:l,height:d,margin:_,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:m,padding:T,paddingX:w,paddingY:y,paddingTop:x,paddingRight:v,paddingBottom:b,paddingLeft:g,row:k,rowStart:j,rowEnd:z,sizing:R,...$}=e,M[0]=e,M[1]=r,M[2]=o,M[3]=n,M[4]=l,M[5]=d,M[6]=s,M[7]=c,M[8]=u,M[9]=f,M[10]=p,M[11]=h,M[12]=m,M[13]=b,M[14]=g,M[15]=v,M[16]=x,M[17]=w,M[18]=y,M[19]=$,M[20]=k,M[21]=z,M[22]=j,M[23]=R,M[24]=E,M[25]=S,M[26]=_,M[27]=T):(r=M[1],o=M[2],n=M[3],l=M[4],d=M[5],s=M[6],c=M[7],u=M[8],f=M[9],p=M[10],h=M[11],m=M[12],b=M[13],g=M[14],v=M[15],x=M[16],w=M[17],y=M[18],$=M[19],k=M[20],z=M[21],j=M[22],R=M[23],E=M[24],S=M[25],_=M[26],T=M[27]);let O=void 0===E?"div":E,N=void 0===S?"block":S,A=void 0===_?0:_,L=void 0===T?0:T,I="string"==typeof O?O:void 0,B=C(r),D=C(n),Q=C(o),P=C(N),H=C(l),V=C(d),W=C(A),q=C(p),X=C(h),G=C(f),Y=C(u),K=C(s),U=C(c),J=C(m),Z=C(L),ee=C(w),et=C(y),er=C(x),eo=C(v),en=C(b),ei=C(g),ea=C(k),el=C(j),ed=C(z),es=C(R);return M[28]!==O||M[29]!==e.children||M[30]!==t||M[31]!==$||M[32]!==V||M[33]!==W||M[34]!==q||M[35]!==X||M[36]!==G||M[37]!==Y||M[38]!==K||M[39]!==U||M[40]!==J||M[41]!==Z||M[42]!==ee||M[43]!==et||M[44]!==er||M[45]!==eo||M[46]!==en||M[47]!==ei||M[48]!==ea||M[49]!==el||M[50]!==ed||M[51]!==es||M[52]!==I||M[53]!==B||M[54]!==D||M[55]!==Q||M[56]!==P||M[57]!==H?(F=(0,i.jsx)(tK,{"data-as":I,"data-ui":"Box",...$,$column:B,$columnStart:D,$columnEnd:Q,$display:P,$flex:H,$height:V,$margin:W,$marginX:q,$marginY:X,$marginTop:G,$marginRight:Y,$marginBottom:K,$marginLeft:U,$overflow:J,$padding:Z,$paddingX:ee,$paddingY:et,$paddingTop:er,$paddingRight:eo,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:el,$rowEnd:ed,$sizing:es,as:O,ref:t,children:e.children}),M[28]=O,M[29]=e.children,M[30]=t,M[31]=$,M[32]=V,M[33]=W,M[34]=q,M[35]=X,M[36]=G,M[37]=Y,M[38]=K,M[39]=U,M[40]=J,M[41]=Z,M[42]=ee,M[43]=et,M[44]=er,M[45]=eo,M[46]=en,M[47]=ei,M[48]=ea,M[49]=el,M[50]=ed,M[51]=es,M[52]=I,M[53]=B,M[54]=D,M[55]=Q,M[56]=P,M[57]=H,M[58]=F):F=M[58],F});tU.displayName="ForwardRef(Box)";let tJ=s.zo.div(function(e){return S("text",e)},_,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,s.iv)`
    color: var(--card-fg-color);

    ${t&&(0,s.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tZ=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,t0=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:r,children:o,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,b=void 0!==d&&d,g=void 0===s?2:s,v=o;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tZ,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=C(r),w=C(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==b||h[15]!==t||h[16]!==n||h[17]!==x||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(tJ,{"data-ui":"Text",...n,$accent:m,$align:x,$muted:b,ref:t,$size:w,$weight:u,children:f}),h[13]=m,h[14]=b,h[15]=t,h[16]=n,h[17]=x,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});t0.displayName="ForwardRef(Text)";let t1=(0,s.zo)(tU)(tC,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),t2=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);if(f[0]!==e){let{children:t,fontSize:i,mode:a,padding:c,radius:u,tone:p,...h}=e;r=t,n=i,l=c,d=u,s=p,o=h,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s}else r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6];let p=void 0===n?1:n,h=void 0===l?1:l,m=void 0===s?"default":s,b=C(void 0===d?"full":d),g=C(h);return f[7]!==r||f[8]!==p?(c=(0,i.jsx)(t0,{size:p,children:r}),f[7]=r,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==o||f[12]!==b||f[13]!==g||f[14]!==c||f[15]!==m?(u=(0,i.jsx)(t1,{"data-ui":"Badge",...o,$tone:m,$radius:b,padding:g,ref:t,children:c}),f[10]=t,f[11]=o,f[12]=b,f[13]=g,f[14]=c,f[15]=m,f[16]=u):u=f[16],u});t2.displayName="ForwardRef(Badge)";let t3=(0,s.zo)(tU)(e9,function(){return[e2,e3,e4,e5,e6,e7]}),t4=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({align:r,as:o,direction:s,gap:n,justify:l,wrap:c,...d}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s,f[7]=c):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=C(r),m=C(p),b=C(n),g=C(l),v=C(c);return f[8]!==o||f[9]!==t||f[10]!==d||f[11]!==h||f[12]!==m||f[13]!==b||f[14]!==g||f[15]!==v?(u=(0,i.jsx)(t3,{"data-ui":"Flex",...d,$align:h,$direction:m,$gap:b,$justify:g,$wrap:v,forwardedAs:o,ref:t}),f[8]=o,f[9]=t,f[10]=d,f[11]=h,f[12]=m,f[13]=b,f[14]=g,f[15]=v,f[16]=u):u=f[16],u});t4.displayName="ForwardRef(Flex)";let t5=(0,s.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t6=(0,s.zo)(t0)`
  & > span > svg {
    animation: ${t5} 500ms linear infinite;
  }
`,t7=(0,l.forwardRef)(function(e,t){let r,o;let n=(0,a.c)(4);return n[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,i.jsx)(c.L4p,{}),n[0]=r):r=n[0],n[1]!==e||n[2]!==t?(o=(0,i.jsx)(t6,{"data-ui":"Spinner",...e,ref:t,children:r}),n[1]=e,n[2]=t,n[3]=o):o=n[3],o});function t8(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function t9(...e){return e.filter(Boolean).join(",")}t7.displayName="ForwardRef(Spinner)";let re=s.zo.button(tC,function(e){let{$width:t}=e,{style:r}=(0,n.aQ)(e.theme);return(0,s.iv)`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,s.iv)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:i}=(0,n.aQ)(e.theme),a="ghost"===e.$mode,l=o.button[t]||o.button.default,d=l[e.$tone]||l.default,s={width:r.border.width,color:"var(--card-border-color)"},c=void 0;return[t8(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:tt(s),'&:disabled, &[data-disabled="true"]':t8(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:t9(tt(s),a?c:void 0),"&:focus":{boxShadow:tr({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:t9(tt(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":t8(o,d.hovered),"&:active":t8(o,d.pressed),"&[data-hovered]":t8(o,d.hovered)},"&[data-selected]":t8(o,d.pressed)}},i?.button?.root].filter(Boolean)}),rt=s.zo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`,rr=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_,T,F,M,O,N,A,L;let I=(0,a.c)(64);I[0]!==e?({children:n,disabled:s,fontSize:x,icon:r,iconRight:o,justify:w,loading:c,mode:y,padding:$,paddingX:m,paddingY:b,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:z,text:S,textAlign:_,tone:j,type:R,muted:E,width:T,...g}=e,I[0]=e,I[1]=r,I[2]=o,I[3]=n,I[4]=s,I[5]=c,I[6]=u,I[7]=f,I[8]=p,I[9]=h,I[10]=m,I[11]=b,I[12]=g,I[13]=v,I[14]=x,I[15]=w,I[16]=y,I[17]=$,I[18]=k,I[19]=z,I[20]=j,I[21]=R,I[22]=E,I[23]=S,I[24]=_,I[25]=T):(r=I[1],o=I[2],n=I[3],s=I[4],c=I[5],u=I[6],f=I[7],p=I[8],h=I[9],m=I[10],b=I[11],g=I[12],v=I[13],x=I[14],w=I[15],y=I[16],$=I[17],k=I[18],z=I[19],j=I[20],R=I[21],E=I[22],S=I[23],_=I[24],T=I[25]);let B=void 0===x?1:x,D=void 0===w?"center":w,Q=void 0===y?"default":y,P=void 0===$?3:$,H=void 0===k?2:k,V=void 0===z?3:z,W=void 0===j?"default":j,q=void 0===R?"button":R,X=void 0!==E&&E,{button:G}=eL(),Y=C(D),K=C(P),U=C(m),J=C(b),Z=C(h),ee=C(u),et=C(f),er=C(p),eo=C(H),en=C(V);I[26]!==K||I[27]!==ee||I[28]!==et||I[29]!==er||I[30]!==Z||I[31]!==U||I[32]!==J?(M={padding:K,paddingX:U,paddingY:J,paddingTop:Z,paddingBottom:ee,paddingLeft:et,paddingRight:er},I[26]=K,I[27]=ee,I[28]=et,I[29]=er,I[30]=Z,I[31]=U,I[32]=J,I[33]=M):M=I[33],F=M;let ei=!!(c||s),ea=v?"":void 0,el=!!(c||s);return I[34]!==c?(O=!!c&&(0,i.jsx)(rt,{children:(0,i.jsx)(t7,{})}),I[34]=c,I[35]=O):O=I[35],I[36]!==r||I[37]!==o||I[38]!==F||I[39]!==G||I[40]!==B||I[41]!==Y||I[42]!==X||I[43]!==en||I[44]!==S||I[45]!==_?(N=(r||S||o)&&(0,i.jsx)(tU,{as:"span",...F,children:(0,i.jsxs)(t4,{as:"span",justify:Y,gap:en,children:[r&&(0,i.jsxs)(t0,{size:B,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]}),S&&(0,i.jsx)(tU,{children:(0,i.jsx)(t0,{muted:X,align:_,size:B,textOverflow:"ellipsis",weight:G.textWeight,children:S})}),o&&(0,i.jsxs)(t0,{size:B,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})]})}),I[36]=r,I[37]=o,I[38]=F,I[39]=G,I[40]=B,I[41]=Y,I[42]=X,I[43]=en,I[44]=S,I[45]=_,I[46]=N):N=I[46],I[47]!==F||I[48]!==n?(A=n&&(0,i.jsx)(tU,{as:"span",...F,children:n}),I[47]=F,I[48]=n,I[49]=A):A=I[49],I[50]!==Q||I[51]!==eo||I[52]!==t||I[53]!==g||I[54]!==ei||I[55]!==ea||I[56]!==el||I[57]!==O||I[58]!==N||I[59]!==A||I[60]!==W||I[61]!==q||I[62]!==T?(L=(0,i.jsxs)(re,{"data-ui":"Button",...g,$mode:Q,$radius:eo,$tone:W,"data-disabled":ei,"data-selected":ea,disabled:el,ref:t,type:q,$width:T,children:[O,N,A]}),I[50]=Q,I[51]=eo,I[52]=t,I[53]=g,I[54]=ei,I[55]=ea,I[56]=el,I[57]=O,I[58]=N,I[59]=A,I[60]=W,I[61]=q,I[62]=T,I[63]=L):L=I[63],L});rr.displayName="ForwardRef(Button)";let ro=(0,s.zo)(tU)(function(){return[eV,eW,eq,eX,eG]},tC,function(e){let{card:t,media:r,shadow:o}=(0,n.aQ)(e.theme);return j(r,e.$shadow,e=>(function(e,t=1){if(!e)return y;let r=`0 0 0 ${z(t)} var(--card-shadow-outline-color)`,o=tT(e.umbra,"var(--card-shadow-umbra-color)"),n=tT(e.penumbra,"var(--card-shadow-penumbra-color)"),i=tT(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${n}, ${i}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=(0,n.aQ)(e.theme);return(0,s.iv)`
    ${t&&(0,s.iv)`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:i,color:a,style:l}=(0,n.aQ)(e.theme),d={width:i.border.width,color:"var(--card-border-color)"};return(0,s.iv)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t8(a,a,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tr({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tr({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),rn=(0,l.forwardRef)(function(e,t){let r,o,n,l,s,c,u,f,p,h,m,b,g,v,x,w,y,$;let k=(0,a.c)(42);k[0]!==e?({__unstable_checkered:g,__unstable_focusRing:v,as:r,border:o,borderTop:c,borderRight:s,borderBottom:n,borderLeft:l,muted:u,pressed:f,radius:x,scheme:h,selected:m,shadow:b,tone:w,...p}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=n,k[4]=l,k[5]=s,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=m,k[12]=b,k[13]=g,k[14]=v,k[15]=x,k[16]=w):(r=k[1],o=k[2],n=k[3],l=k[4],s=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],m=k[11],b=k[12],g=k[13],v=k[14],x=k[15],w=k[16]);let z=void 0!==g&&g,j=void 0!==v&&v,R=void 0===x?0:x,E=void 0===w?"default":w,S=(0,d.isValidElementType)(r)?r:"div",_=eO(),T="inherit"===E?_.tone:E,F="string"==typeof S?S:void 0,M=_.scheme,O=C(o),N=C(c),A=C(s),L=C(n),I=C(l),B=C(R),D=C(b),Q=z?"":void 0,P=f?"":void 0,H=m?"":void 0;return k[17]!==S||k[18]!==z||k[19]!==j||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==_.scheme||k[24]!==m||k[25]!==I||k[26]!==B||k[27]!==D||k[28]!==Q||k[29]!==P||k[30]!==H||k[31]!==F||k[32]!==O||k[33]!==N||k[34]!==A||k[35]!==L||k[36]!==T?(y=(0,i.jsx)(ro,{"data-as":F,"data-scheme":M,"data-ui":"Card","data-tone":T,...p,$border:O,$borderTop:N,$borderRight:A,$borderBottom:L,$borderLeft:I,$checkered:z,$focusRing:j,$muted:u,$radius:B,$shadow:D,$tone:T,"data-checkered":Q,"data-pressed":P,"data-selected":H,forwardedAs:S,ref:t,selected:m}),k[17]=S,k[18]=z,k[19]=j,k[20]=u,k[21]=t,k[22]=p,k[23]=_.scheme,k[24]=m,k[25]=I,k[26]=B,k[27]=D,k[28]=Q,k[29]=P,k[30]=H,k[31]=F,k[32]=O,k[33]=N,k[34]=A,k[35]=L,k[36]=T,k[37]=y):y=k[37],k[38]!==h||k[39]!==y||k[40]!==T?($=(0,i.jsx)(eN,{scheme:h,tone:T,children:y}),k[38]=h,k[39]=y,k[40]=T,k[41]=$):$=k[41],$});rn.displayName="ForwardRef(Card)";let ri=s.zo.div(function(){return(0,s.iv)`
    position: relative;
    display: inline-block;
  `}),ra=s.zo.input(function(e){let{color:t,input:r,radius:o}=(0,n.aQ)(e.theme),{focusRing:i}=r.checkbox;return(0,s.iv)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${z(r.checkbox.size)};
      width: ${z(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${tt({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${z(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${tt({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tr({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tr({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tt({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tr({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${tt({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${tt({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),rl=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,m,b,g,v,x;let w=(0,a.c)(25);w[0]!==e?({checked:r,className:o,disabled:d,indeterminate:s,customValidity:n,readOnly:u,style:p,...f}=e,w[0]=e,w[1]=r,w[2]=o,w[3]=n,w[4]=d,w[5]=s,w[6]=u,w[7]=f,w[8]=p):(r=w[1],o=w[2],n=w[3],d=w[4],s=w[5],u=w[6],f=w[7],p=w[8]);let y=(0,l.useRef)(null);w[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>y.current,w[9]=h):h=w[9],(0,l.useImperativeHandle)(t,h),w[10]!==s?(m=()=>{y.current&&(y.current.indeterminate=s||!1)},b=[s],w[10]=s,w[11]=m,w[12]=b):(m=w[11],b=w[12]),(0,l.useEffect)(m,b),M(y,n);let $=!d&&u?"":void 0,k=n?"":void 0,z=d||u;return w[13]!==r||w[14]!==u||w[15]!==f||w[16]!==$||w[17]!==k||w[18]!==z?(g=(0,i.jsx)(ra,{"data-read-only":$,"data-error":k,...f,checked:r,disabled:z,type:"checkbox",readOnly:u,ref:y}),w[13]=r,w[14]=u,w[15]=f,w[16]=$,w[17]=k,w[18]=z,w[19]=g):g=w[19],w[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsxs)("span",{children:[(0,i.jsx)(c.KML,{}),(0,i.jsx)(c.HFL,{})]}),w[20]=v):v=w[20],w[21]!==o||w[22]!==p||w[23]!==g?(x=(0,i.jsxs)(ri,{className:o,"data-ui":"Checkbox",style:p,children:[g,v]}),w[21]=o,w[22]=p,w[23]=g,w[24]=x):x=w[24],x});function rd({theme:e}){let{color:{syntax:t}}=(0,n.aQ)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}rl.displayName="ForwardRef(Checkbox)";let rs=s.zo.pre(function(){return(0,s.iv)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${rd}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return S("code",e)}),rc=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,f,p;let h=(0,a.c)(23);h[0]!==e?({children:r,language:o,size:l,weight:d,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5]);let m=void 0===l?2:l,b="string"==typeof o?o:void 0;h[6]!==b?(s=!!b&&u.hasLanguage(b),h[6]=b,h[7]=s):s=h[7];let g=s,v=C(m);return h[8]!==r||h[9]!==b||h[10]!==g?(c=!(b&&g)&&(0,i.jsx)("code",{children:r}),h[8]=r,h[9]=b,h[10]=g,h[11]=c):c=h[11],h[12]!==r||h[13]!==b||h[14]!==g?(f=b&&g&&(0,i.jsx)(u,{inline:!0,language:b,value:String(r)}),h[12]=r,h[13]=b,h[14]=g,h[15]=f):f=h[15],h[16]!==t||h[17]!==n||h[18]!==v||h[19]!==c||h[20]!==f||h[21]!==d?(p=(0,i.jsxs)(rs,{"data-ui":"Code",...n,$size:v,$weight:d,ref:t,children:[c,f]}),h[16]=t,h[17]=n,h[18]=v,h[19]=c,h[20]=f,h[21]=d,h[22]=p):p=h[22],p});rc.displayName="ForwardRef(Code)";let ru={width:"100%",margin:"0 auto"},rf=(0,s.zo)(tU)(function(){return ru},function(e){let{container:t,media:r}=(0,n.aQ)(e.theme);return j(r,e.$width,e=>({maxWidth:"auto"===e?"none":z(t[e])}))}),rp=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(9);d[0]!==e?({as:r,width:n,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s=C(void 0===n?2:n);return d[4]!==r||d[5]!==t||d[6]!==o||d[7]!==s?(l=(0,i.jsx)(rf,{"data-ui":"Container",...o,$width:s,forwardedAs:r,ref:t}),d[4]=r,d[5]=t,d[6]=o,d[7]=s,d[8]=l):l=d[8],l});rp.displayName="ForwardRef(Container)";let rh=(0,s.zo)(tU)(function(){return[to,ta,tl,td,ts,tc,tu,tf,tp]}),rm=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,m;let b=(0,a.c)(26);b[0]!==e?({as:r,autoRows:l,autoCols:o,autoFlow:n,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:d,...p}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=n,b[4]=l,b[5]=d,b[6]=s,b[7]=c,b[8]=u,b[9]=f,b[10]=p,b[11]=h):(r=b[1],o=b[2],n=b[3],l=b[4],d=b[5],s=b[6],c=b[7],u=b[8],f=b[9],p=b[10],h=b[11]);let g="string"==typeof r?r:void 0,v=C(l),x=C(o),w=C(n),y=C(s),$=C(c),k=C(u),z=C(f),j=C(h);return b[12]!==r||b[13]!==d||b[14]!==t||b[15]!==p||b[16]!==g||b[17]!==v||b[18]!==x||b[19]!==w||b[20]!==y||b[21]!==$||b[22]!==k||b[23]!==z||b[24]!==j?(m=(0,i.jsx)(rh,{"data-as":g,"data-ui":"Grid",...p,$autoRows:v,$autoCols:x,$autoFlow:w,$columns:y,$gap:$,$gapX:k,$gapY:z,$rows:j,forwardedAs:r,ref:t,children:d}),b[12]=r,b[13]=d,b[14]=t,b[15]=p,b[16]=g,b[17]=v,b[18]=x,b[19]=w,b[20]=y,b[21]=$,b[22]=k,b[23]=z,b[24]=j,b[25]=m):m=b[25],m});rm.displayName="ForwardRef(Grid)";let rb=s.zo.div(function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,s.iv)`
    ${t&&(0,s.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},_,function(e){return S("heading",e)}),rg=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,rv=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:r,children:o,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,b=void 0!==d&&d,g=void 0===s?2:s,v=o;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(rg,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=C(r),w=C(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==b||h[15]!==t||h[16]!==n||h[17]!==x||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(rb,{"data-ui":"Heading",...n,$accent:m,$align:x,$muted:b,$size:w,$weight:u,ref:t,children:f}),h[13]=m,h[14]=b,h[15]=t,h[16]=n,h[17]=x,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});rv.displayName="ForwardRef(Heading)";let rx=(0,s.zo)(tU)(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$space,e=>{let t=z(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),rw=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(12);f[0]!==e?({as:r,children:o,space:d,...n}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]),f[5]!==o?(c=l.Children.map(o,ry),f[5]=o,f[6]=c):c=f[6],s=c;let p=C(d);return f[7]!==r||f[8]!==s||f[9]!==n||f[10]!==p?(u=(0,i.jsx)(rx,{"data-ui":"Inline",...n,$space:p,forwardedAs:r,ref:t,children:s}),f[7]=r,f[8]=s,f[9]=n,f[10]=p,f[11]=u):u=f[11],u});function ry(e){return e&&(0,i.jsx)("div",{children:e})}rw.displayName="ForwardRef(Inline)";let r$=s.zo.kbd(tC,function(){return(0,s.iv)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),rk=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({children:r,fontSize:n,padding:l,radius:d,...o}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5]);let p=void 0===n?0:n,h=void 0===l?1:l,m=C(void 0===d?2:d);return f[6]!==r||f[7]!==p?(s=(0,i.jsx)(t0,{as:"span",size:p,weight:"semibold",children:r}),f[6]=r,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,i.jsx)(tU,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==o||f[14]!==m||f[15]!==c?(u=(0,i.jsx)(r$,{"data-ui":"KBD",...o,$radius:m,ref:t,children:c}),f[12]=t,f[13]=o,f[14]=m,f[15]=c,f[16]=u):u=f[16],u});rk.displayName="ForwardRef(KBD)";let rz={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),n=r.floating.width,i=r.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(o)?{originX:rj(.5-a/n,0,1),originY:"bottom"===o?0:1}:{originX:"left"===o?1:0,originY:rj(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function rj(e,t,r){return Math.min(Math.max(e,t),r)}function rR(e,t,r){let o=t.x-e.x,n=t.y-e.y;return rE(e,t,Math.min(1,r/Math.sqrt(o*o+n*n)))}function rE(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let rS=s.zo.div(({$w:e})=>(0,s.iv)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),r_=s.zo.path`
  stroke: var(--card-shadow-outline-color);
`,rC=s.zo.path`
  fill: var(--card-bg-color);
`,rT=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({width:l,height:r,radius:n,...o}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l):(r=p[1],o=p[2],n=p[3],l=p[4]);let h=void 0===n?0:n,{card:m}=eL(),b=m.shadow.outline,g=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],n=e[o-1],i=e[o+1];if(n&&t.radius){let e=rR(t,n,t.radius),o=rR(t,i,t.radius),a=rE(e,t,.5),l=rE(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:a,endControl:l})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:h,y:0,radius:h},{x:l/2,y:r-1,radius:h},{x:l-h,y:0,radius:h},{x:l,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${g}`,x=`${g} M ${l} -1 M 0 -1 Z`,w=`0 0 ${l} ${l}`;p[5]!==b||p[6]!==l?(d=(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:b,width:l,height:l,fill:"white"})}),p[5]=b,p[6]=l,p[7]=d):d=p[7];let y=2*b;return p[8]!==v||p[9]!==y?(s=(0,i.jsx)(r_,{d:v,mask:"url(#stroke-mask)",strokeWidth:y}),p[8]=v,p[9]=y,p[10]=s):s=p[10],p[11]!==x?(c=(0,i.jsx)(rC,{d:x}),p[11]=x,p[12]=c):c=p[12],p[13]!==w||p[14]!==d||p[15]!==s||p[16]!==c||p[17]!==l?(u=(0,i.jsxs)("svg",{width:l,height:l,viewBox:w,children:[d,s,c]}),p[13]=w,p[14]=d,p[15]=s,p[16]=c,p[17]=l,p[18]=u):u=p[18],p[19]!==t||p[20]!==o||p[21]!==u||p[22]!==l?(f=(0,i.jsx)(rS,{...o,$w:l,ref:t,children:u}),p[19]=t,p[20]=o,p[21]=u,p[22]=l,p[23]=f):f=p[23],f});rT.displayName="ForwardRef(Arrow)";let rF=eT("@sanity/ui/context/boundaryElement",null);function rM(e){let t,r,o;let n=(0,a.c)(5),{children:l,element:d}=e;return n[0]!==d?(r={version:0,element:d},n[0]=d,n[1]=r):r=n[1],t=r,n[2]!==l||n[3]!==t?(o=(0,i.jsx)(rF.Provider,{value:t,children:l}),n[2]=l,n[3]=t,n[4]=o):o=n[4],o}function rO(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}rM.displayName="BoundaryElementProvider";let rN={version:0,element:null};function rA(){let e=(0,l.useContext)(rF);if(e&&(!rO(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||rN}let rL=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m;let b=(0,a.c)(18),g=eL();b[0]!==e?({children:o,media:r,...n}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=n):(r=b[1],o=b[2],n=b[3]);let v=r??g.media,[x,w]=(0,l.useState)(null),y=eR(x);if(d=y?.border.width??window.innerWidth,b[4]!==v||b[5]!==d){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r}(v,d);c=e.length?e.join(" "):void 0,b[4]=v,b[5]=d,b[6]=c}else c=b[6];if(s=c,b[7]!==v||b[8]!==d){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r}(v,d);f=e.length?e.join(" "):void 0,b[7]=v,b[8]=d,b[9]=f}else f=b[9];return u=f,b[10]!==x?(p=()=>x,h=[x],b[10]=x,b[11]=p,b[12]=h):(p=b[11],h=b[12]),(0,l.useImperativeHandle)(t,p,h),b[13]!==o||b[14]!==s||b[15]!==u||b[16]!==n?(m=(0,i.jsx)("div",{"data-ui":"ElementQuery",...n,"data-eq-max":s,"data-eq-min":u,ref:w,children:o}),b[13]=o,b[14]=s,b[15]=u,b[16]=n,b[17]=m):m=b[17],m});rL.displayName="ForwardRef(ElementQuery)";class rI extends l.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(rc,{children:t})}return this.props.children}}function rB(e){if(!rO(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let rD=eT("@sanity/ui/context/layer",null);function rQ(){let e=(0,a.c)(2),t=(0,l.useContext)(rD);if(!t)throw Error("useLayer(): missing context value");try{let r;return e[0]!==t?(r=rB(t),e[0]=t,e[1]=r):r=e[1],r}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function rP(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function rH(e){let t=null,r=rP(()=>{t=rP(e)});return()=>{t&&t(),r()}}function rV(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function rW(e){return rV(e)&&"A"===e.nodeName}function rq(e){return rV(e)&&"BUTTON"===e.nodeName}function rX(e,t){return e.contains(t)||e===t}function rG(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(rW(e)?!!e.href&&"ignore"!==e.rel:rV(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(rq(e)||rV(e)&&"SELECT"===e.nodeName||rV(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function rY(e){for(let t=0;t<e.childNodes.length;t++){let r=e.childNodes[t];if(rV(r)&&(rG(r)||rY(r)))return!0}return!1}function rK(e){for(let t=e.childNodes.length-1;t>=0;t--){let r=e.childNodes[t];if(rV(r)&&(rG(r)||rK(r)))return!0}return!1}function rU(e){let t,r,o,n,d,s,c,u;let f=(0,a.c)(19),{children:p,zOffset:h}=e,m=(0,l.useContext)(rD);f[0]!==m?(t=m&&rB(m),f[0]=m,f[1]=t):t=f[1];let b=t,g=b?.registerChild,v=(b?.level??0)+1,x=C(void 0===h?0:h),w=x.length-1,y=Math.min(eB(),w),$=b?b.zIndex+x[y]:x[y];f[2]===Symbol.for("react.memo_cache_sentinel")?(r={},f[2]=r):r=f[2];let[,k]=(0,l.useState)(r),[z,j]=(0,l.useState)(0),R=0===z;f[3]!==g||f[4]!==k?(o=e=>{let t=g?.(e);return void 0!==e?k(t=>{let r=t[e]??0,o={...t,[e]:r+1};return j(Object.keys(o).length),o}):j(rZ),()=>{void 0!==e?k(t=>{let r={...t};return 1===r[e]?(delete r[e],j(Object.keys(r).length)):r[e]=r[e]-1,r}):j(rJ),t?.()}},f[3]=g,f[4]=k,f[5]=o):o=f[5];let E=o;return f[6]!==v||f[7]!==g?(n=()=>g?.(v),d=[v,g],f[6]=v,f[7]=g,f[8]=n,f[9]=d):(n=f[8],d=f[9]),(0,l.useEffect)(n,d),f[10]!==R||f[11]!==v||f[12]!==E||f[13]!==z||f[14]!==$?(c={version:0,isTopLayer:R,level:v,registerChild:E,size:z,zIndex:$},f[10]=R,f[11]=v,f[12]=E,f[13]=z,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,i.jsx)(rD.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function rJ(e){return e-1}function rZ(e){return e+1}rU.displayName="LayerProvider";let r0=s.zo.div({position:"relative"}),r1=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m;let b=(0,a.c)(22);b[0]!==e?({children:r,onActivate:o,onFocus:n,style:s,...d}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=n,b[4]=d,b[5]=s):(r=b[1],o=b[2],n=b[3],d=b[4],s=b[5]);let g=void 0===s?y:s,{zIndex:v,isTopLayer:x}=rQ(),w=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(x);b[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,b[6]=c):c=b[6],(0,l.useImperativeHandle)(t,c),b[7]!==x||b[8]!==o?(u=()=>{k.current!==x&&x&&o?.({activeElement:w.current}),k.current=x},f=[x,o],b[7]=x,b[8]=o,b[9]=u,b[10]=f):(u=b[9],f=b[10]),(0,l.useEffect)(u,f),b[11]!==x||b[12]!==n?(p=e=>{n?.(e);let t=$.current,r=document.activeElement;!x||!t||!r||rV(r)&&rX(t,r)&&(w.current=r)},b[11]=x,b[12]=n,b[13]=p):p=b[13];let z=p;return b[14]!==g||b[15]!==v?(h={...g,zIndex:v},b[14]=g,b[15]=v,b[16]=h):h=b[16],b[17]!==r||b[18]!==z||b[19]!==d||b[20]!==h?(m=(0,i.jsx)(r0,{...d,"data-ui":"Layer",onFocus:z,ref:$,style:h,children:r}),b[17]=r,b[18]=z,b[19]=d,b[20]=h,b[21]=m):m=b[21],m}),r2=(0,l.forwardRef)(function(e,t){let r,o,n,l,d;let s=(0,a.c)(11);s[0]!==e?({children:r,zOffset:n,...o}=e,s[0]=e,s[1]=r,s[2]=o,s[3]=n):(r=s[1],o=s[2],n=s[3]);let c=void 0===n?1:n;return s[4]!==r||s[5]!==t||s[6]!==o?(l=(0,i.jsx)(r1,{...o,ref:t,children:r}),s[4]=r,s[5]=t,s[6]=o,s[7]=l):l=s[7],s[8]!==l||s[9]!==c?(d=(0,i.jsx)(rU,{zOffset:c,children:l}),s[8]=l,s[9]=c,s[10]=d):d=s[10],d});r2.displayName="ForwardRef(Layer)";let r3="@sanity/ui/context/portal",r4=Symbol.for(`${r3}/element`);eC[r4]=null;let r5=eT(r3,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(eC[r4]||(eC[r4]=document.createElement("div"),eC[r4].setAttribute("data-portal",""),document.body.appendChild(eC[r4])),eC[r4])}});function r6(){let e=(0,l.useContext)(r5);if(!e)throw Error("usePortal(): missing context value");if(!rO(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function r7(e){let t;let r=(0,a.c)(3),{children:o,__unstable_name:n}=e,i=r6(),l=(n?i.elements&&i.elements[n]:i.element)||i.elements?.default;return l?(r[0]!==o||r[1]!==l?(t=(0,b.createPortal)(o,l),r[0]=o,r[1]=l,r[2]=t):t=r[2],t):null}function r8(e){let t,r,o;let n=(0,a.c)(7),{boundaryElement:d,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,l.useRef)(e);return function(e,t){if(!e||!t)return e===t;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}(t.current,e)||(t.current=e),t.current}(u),p=(0,l.useSyncExternalStore)(ot,oe,r9),h=d||null,m=c||p;return n[0]!==f||n[1]!==h||n[2]!==m?(r={version:0,boundaryElement:h,element:m,elements:f},n[0]=f,n[1]=h,n[2]=m,n[3]=r):r=n[3],t=r,n[4]!==s||n[5]!==t?(o=(0,i.jsx)(r5.Provider,{value:t,children:s}),n[4]=s,n[5]=t,n[6]=o):o=n[6],o}function r9(){return null}function oe(){return document.body}r7.displayName="Portal",r8.displayName="PortalProvider";let ot=()=>()=>{},or=s.zo.div`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`;(0,l.forwardRef)(function(e,t){let r;let o=(0,a.c)(4),{as:n,children:l}=e;return o[0]!==n||o[1]!==l||o[2]!==t?(r=(0,i.jsx)(or,{"aria-hidden":!0,as:n,"data-ui":"SrOnly",ref:t,children:l}),o[0]=n,o[1]=l,o[2]=t,o[3]=r):r=o[3],r}).displayName="ForwardRef(SrOnly)";let oo=s.zo.div`
  position: relative;
`,on=s.zo.div`
  position: absolute;
  left: 0;
  right: 0;
`,oi=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z;let j=(0,a.c)(56);j[0]!==e?({as:s,gap:c,getItemKey:r,items:u,onChange:o,renderItem:n,...d}=e,j[0]=e,j[1]=r,j[2]=o,j[3]=n,j[4]=d,j[5]=s,j[6]=c,j[7]=u):(r=j[1],o=j[2],n=j[3],d=j[4],s=j[5],c=j[6],u=j[7]);let R=void 0===s?"div":s,E=void 0===c?0:c;j[8]!==u?(f=void 0===u?[]:u,j[8]=u,j[9]=f):f=j[9];let S=f,{space:_}=eL(),C=(0,l.useRef)(null),T=(0,l.useRef)(null),[F,M]=(0,l.useState)(0),[O,N]=(0,l.useState)(0),[A,L]=(0,l.useState)(-1);j[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>C.current,j[10]=p):p=j[10],(0,l.useImperativeHandle)(t,p),j[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!T.current)return;let e=T.current.firstChild;e instanceof HTMLElement&&L(e.offsetHeight)},j[11]=h):h=j[11],j[12]!==n?(m=[n],j[12]=n,j[13]=m):m=j[13],(0,l.useEffect)(h,m),j[14]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{if(!C.current)return;let e=C.current.parentNode;for(;e&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(e);)e=e.parentNode;if(e){let t=e;if(!(t instanceof HTMLElement))return;let r=()=>{M(t.scrollTop)};t.addEventListener("scroll",r,{passive:!0});let o=new ez(e=>{N(e[0].contentRect.height)});return o.observe(t),r(),()=>{t.removeEventListener("scroll",r),o.unobserve(t),o.disconnect()}}let t=()=>{M(window.scrollY)},r=()=>{N(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),N(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},g=[],j[14]=b,j[15]=g):(b=j[14],g=j[15]),(0,l.useEffect)(b,g);let I=S.length,B=A?I*(A+_[E])-_[E]:0,D=B?Math.max(Math.floor(F/B*I)-2,0):0,Q=B?Math.ceil((F+O)/B*I)+1:0;j[16]!==D||j[17]!==E||j[18]!==A||j[19]!==o||j[20]!==O||j[21]!==F||j[22]!==_||j[23]!==Q?(x=()=>{o&&o({fromIndex:D,gap:_[E],itemHeight:A,scrollHeight:O,scrollTop:F,toIndex:Q})},v=[D,E,A,o,O,F,_,Q],j[16]=D,j[17]=E,j[18]=A,j[19]=o,j[20]=O,j[21]=F,j[22]=_,j[23]=Q,j[24]=v,j[25]=x):(v=j[24],x=j[25]),(0,l.useEffect)(x,v);e:{let e;if(!n||0===S.length){w=null;break e}if(-1===A){let e,t;let r=S[0];j[26]!==n||j[27]!==r?(e=n(r),j[26]=n,j[27]=r,j[28]=e):e=j[28],j[29]!==e?(t=[(0,i.jsx)(on,{children:e},0)],j[29]=e,j[30]=t):t=j[30],w=t;break e}if(j[31]!==D||j[32]!==E||j[33]!==r||j[34]!==A||j[35]!==S||j[36]!==n||j[37]!==_||j[38]!==Q){let t;j[40]!==D||j[41]!==E||j[42]!==r||j[43]!==A||j[44]!==n||j[45]!==_?(t=(e,t)=>{let o=D+t,a=n(e),l=r?r(e,o):o;return(0,i.jsx)(on,{style:{top:o*(A+_[E])},children:a},l)},j[40]=D,j[41]=E,j[42]=r,j[43]=A,j[44]=n,j[45]=_,j[46]=t):t=j[46],e=S.slice(D,Q).map(t),j[31]=D,j[32]=E,j[33]=r,j[34]=A,j[35]=S,j[36]=n,j[37]=_,j[38]=Q,j[39]=e}else e=j[39];w=e}let P=w;return j[47]!==B?($={height:B},j[47]=B,j[48]=$):$=j[48],y=$,j[49]!==P||j[50]!==y?(k=(0,i.jsx)("div",{ref:T,style:y,children:P}),j[49]=P,j[50]=y,j[51]=k):k=j[51],j[52]!==R||j[53]!==d||j[54]!==k?(z=(0,i.jsx)(oo,{as:R,"data-ui":"VirtualList",...d,ref:C,children:k}),j[52]=R,j[53]=d,j[54]=k,j[55]=z):z=j[55],z});oi.displayName="ForwardRef(VirtualList)";let oa=[0,0,0,0],ol={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},od=(0,s.zo)((0,h.E)(rn))`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,os=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,z,j,R,E,S,_,C,T,F,M,O,N,A;let L=(0,a.c)(60);L[0]!==e?({__unstable_margins:c,animate:r,arrow:o,arrowRef:n,arrowX:l,arrowY:d,children:s,padding:h,placement:m,originX:u,originY:f,overflow:p,radius:b,scheme:v,shadow:x,strategy:w,style:y,tone:$,width:z,x:j,y:R,...g}=e,L[0]=e,L[1]=r,L[2]=o,L[3]=n,L[4]=l,L[5]=d,L[6]=s,L[7]=c,L[8]=u,L[9]=f,L[10]=p,L[11]=h,L[12]=m,L[13]=b,L[14]=g,L[15]=v,L[16]=x,L[17]=w,L[18]=y,L[19]=$,L[20]=z,L[21]=j,L[22]=R):(r=L[1],o=L[2],n=L[3],l=L[4],d=L[5],s=L[6],c=L[7],u=L[8],f=L[9],p=L[10],h=L[11],m=L[12],b=L[13],g=L[14],v=L[15],x=L[16],w=L[17],y=L[18],$=L[19],z=L[20],j=L[21],R=L[22]);let{zIndex:I}=rQ(),B=(j??0)+(E=c||oa)[3],D=(R??0)+E[0],Q=r?"transform":void 0;L[23]!==u||L[24]!==f||L[25]!==w||L[26]!==y||L[27]!==Q||L[28]!==z||L[29]!==B||L[30]!==D||L[31]!==I?(_={left:B,originX:u,originY:f,position:w,top:D,width:z,zIndex:I,willChange:Q,...y},L[23]=u,L[24]=f,L[25]=w,L[26]=y,L[27]=Q,L[28]=z,L[29]=B,L[30]=D,L[31]=I,L[32]=_):_=L[32],S=_;let P=null!==l?l:void 0,H=null!==d?d:void 0;L[33]!==P||L[34]!==H?(T={left:P,top:H,right:void 0,bottom:void 0},L[33]=P,L[34]=H,L[35]=T):T=L[35],C=T;let V=g;return L[36]!==r?(F=r?k:{},L[36]=r,L[37]=F):F=L[37],L[38]!==s||L[39]!==h?(M=(0,i.jsx)(t4,{direction:"column",flex:1,padding:h,children:s}),L[38]=s,L[39]=h,L[40]=M):M=L[40],L[41]!==p||L[42]!==M?(O=(0,i.jsx)(t4,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,children:M}),L[41]=p,L[42]=M,L[43]=O):O=L[43],L[44]!==o||L[45]!==n||L[46]!==C?(N=o&&(0,i.jsx)(rT,{ref:n,style:C,width:19,height:8,radius:2}),L[44]=o,L[45]=n,L[46]=C,L[47]=N):N=L[47],L[48]!==m||L[49]!==b||L[50]!==t||L[51]!==S||L[52]!==v||L[53]!==x||L[54]!==O||L[55]!==N||L[56]!==V||L[57]!==F||L[58]!==$?(A=(0,i.jsxs)(od,{"data-ui":"Popover",...V,"data-placement":m,radius:b,ref:t,scheme:v,shadow:x,sizing:"border",style:S,tone:$,...F,children:[O,N]}),L[48]=m,L[49]=b,L[50]=t,L[51]=S,L[52]=v,L[53]=x,L[54]=O,L[55]=N,L[56]=V,L[57]=F,L[58]=$,L[59]=A):A=L[59],A}));os.displayName="Memo(ForwardRef(PopoverCard))";let oc=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:r,layer:o}=eL(),n=rA(),{__unstable_margins:a=oa,animate:d=!1,arrow:s=!1,boundaryElement:c=n.element,children:u,constrainSize:h=!1,content:b,disabled:g,fallbackPlacements:v=e.fallbackPlacements??ol[e.placement??"bottom"],matchReferenceWidth:x,floatingBoundary:w=e.boundaryElement??n.element,onActivate:y,open:$,overflow:k="hidden",padding:z,placement:j="bottom",portal:R,preventOverflow:E=!0,radius:S=3,referenceBoundary:_=e.boundaryElement??n.element,referenceElement:T,scheme:F,shadow:M=3,tone:O="inherit",width:N="auto",zOffset:A=o.popover.zOffset,updateRef:L,...I}=e,B=!eP()&&d,D=eR(c)?.border,Q=C(z),P=C(S),H=C(M),V=C(N),W=C(A),q=(0,l.useRef)(null),X=(0,l.useRef)(null),G="viewport";(0,l.useImperativeHandle)(t,()=>q.current);let Y=eB(),K=h||E?D?.width:void 0,U=function(e){let{container:t,mediaIndex:r,width:o}=e,n=o[r],i=void 0===n?o[o.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:r,mediaIndex:Y,width:V}),J=(0,l.useRef)(U);(0,l.useEffect)(()=>{J.current=U},[U]);let Z=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(!(void 0===r&&void 0===t))return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:K,currentWidth:U}),ee=(0,l.useRef)(Z);(0,l.useEffect)(()=>{ee.current=Z},[Z]);let et=(0,l.useRef)();(0,l.useEffect)(()=>{let e=q.current;if(!$||!e)return;let t=et.current;x?void 0!==t&&(e.style.width=`${t}px`):void 0!==U&&(e.style.width=`${U}px`),"number"==typeof Z&&(e.style.maxWidth=`${Z}px`)},[U,x,Z,$]);let er=(0,l.useMemo)(()=>{let e=[];return(h||E)&&e.push((0,p.RR)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:G})),e.push((0,p.cv)({mainAxis:4})),(h||x)&&e.push(function(e){let{apply:t,margins:r,padding:o=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:l,rects:d}=n,{floating:s,reference:c}=d,u=await (0,f.US)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:o,rootBoundary:"viewport"}),p=1/0,h=1/0,m=s.width,b=s.height;a.includes("top")&&(p=m-(u.left+u.right),h=b-u.top),a.includes("right")&&(p=m-u.right,h=b-(u.top+u.bottom)),a.includes("bottom")&&(p=m-(u.left+u.right),h=b-u.bottom),a.includes("left")&&(p=m-u.left,h=b-(u.top+u.bottom)),t({availableWidth:p-r[1]-r[3],availableHeight:h-r[0]-r[2],elements:i,referenceWidth:c.width-r[1]-r[3]});let g=await l.getDimensions(i.floating),v=g.height;return m!==g.width||b!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:r,referenceWidth:o}){et.current=o;let n=J.current,i=ee.current;x?r.floating.style.width=`${o}px`:void 0!==n&&(r.floating.style.width=`${n}px`),h&&(r.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,r.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:h,margins:a,matchReferenceWidth:x,padding:4})),E&&e.push((0,p.uY)({boundary:w||void 0,rootBoundary:G,padding:4})),s&&e.push((0,p.x7)({element:X,padding:4})),B&&e.push(rz),e.push((0,p.Cp)({boundary:_||void 0,padding:4,strategy:"referenceHidden"})),e},[B,s,h,v,w,a,x,E,_]),{x:eo,y:en,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,p.YF)({middleware:er,placement:j,whileElementsMounted:f.Me}),ec=ei.hide?.referenceHidden,eu=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,em=(0,l.useCallback)(e=>{X.current=e},[]),eb=(0,l.useCallback)(e=>{q.current=e,el.setFloating(e)},[el]),eg=(0,l.useCallback)(e=>{let t,r;el.setReference(e);let o=(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref;"function"==typeof o?o(e):o&&(o.current=e)},[u,el]),ev=(0,l.useMemo)(()=>!u||T?null:(0,l.cloneElement)(u,{ref:eg}),[u,T,eg]);if((0,l.useEffect)(()=>{L&&("function"==typeof L?L(es):L&&(L.current=es))},[es,L]),(0,l.useEffect)(()=>{ev||el.setReference(T||null)},[T,el,ev]),g)return u||(0,i.jsx)(i.Fragment,{});let ex=(0,i.jsx)(rU,{zOffset:W,children:(0,i.jsx)(os,{...I,__unstable_margins:a,animate:B,arrow:s,arrowRef:em,arrowX:eu,arrowY:ef,hidden:ec,overflow:k,padding:Q,placement:ea,radius:P,ref:eb,scheme:F,shadow:H,originX:ep,originY:eh,strategy:ed,tone:O,width:x?et.current:U,x:eo,y:en,children:b})}),ew=$&&(R?(0,i.jsx)(r7,{__unstable_name:"string"==typeof R?R:void 0,children:ex}):ex);return(0,i.jsxs)(i.Fragment,{children:[B?(0,i.jsx)(m.M,{children:ew}):ew,ev]})}));oc.displayName="Memo(ForwardRef(Popover))";let ou=s.zo.div(function(){return(0,s.iv)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),of=s.zo.input(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme),o=(r.radio.size-r.radio.markSize)/2;return(0,s.iv)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${z(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${z(r.radio.size)};
      width: ${z(r.radio.size)};
      border-radius: ${z(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${tt({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${z(o)};
        left: ${z(o)};
        height: ${z(r.radio.markSize)};
        width: ${z(r.radio.markSize)};
        border-radius: ${z(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tr({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${tt({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tt({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),op=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h;let m=(0,a.c)(19);m[0]!==e?({className:r,disabled:n,style:c,customValidity:o,readOnly:d,...s}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n,m[4]=d,m[5]=s,m[6]=c):(r=m[1],o=m[2],n=m[3],d=m[4],s=m[5],c=m[6]);let b=(0,l.useRef)(null);m[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>b.current,m[7]=u):u=m[7],(0,l.useImperativeHandle)(t,u),M(b,o);let g=!n&&d?"":void 0,v=o?"":void 0,x=n||d;return m[8]!==d||m[9]!==s||m[10]!==g||m[11]!==v||m[12]!==x?(f=(0,i.jsx)(of,{"data-read-only":g,"data-error":v,...s,disabled:x,readOnly:d,ref:b,type:"radio"}),m[8]=d,m[9]=s,m[10]=g,m[11]=v,m[12]=x,m[13]=f):f=m[13],m[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,i.jsx)("span",{}),m[14]=p):p=m[14],m[15]!==r||m[16]!==c||m[17]!==f?(h=(0,i.jsxs)(ou,{className:r,"data-ui":"Radio",style:c,children:[f,p]}),m[15]=r,m[16]=c,m[17]=f,m[18]=h):h=m[18],h});function oh(e){let{font:t}=(0,n.aQ)(e.theme);return(0,s.iv)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function om(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return(0,s.iv)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${tt({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${tt({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tr({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${tt({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${tt({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function ob(e){let{$fontSize:t}=e,{font:r,media:o}=(0,n.aQ)(e.theme);return j(o,t,e=>{var t;return{fontSize:z((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:z(t.lineHeight)}})}op.displayName="ForwardRef(Radio)";let og=s.zo.div(function(){return(0,s.iv)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),ov=s.zo.select(function(){return[tC,oh,om,ob,tk]}),ox=(0,s.zo)(tU)(function(e){let{color:t}=(0,n.aQ)(e.theme);return(0,s.iv)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),ow=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,m,b,g,v,x,w;let y=(0,a.c)(29);y[0]!==e?({children:r,customValidity:o,disabled:n,fontSize:u,padding:f,radius:p,readOnly:d,space:h,...s}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=u,y[7]=f,y[8]=p,y[9]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],u=y[6],f=y[7],p=y[8],h=y[9]);let $=void 0===u?2:u,k=void 0===f?3:f,z=void 0===p?2:p,j=void 0===h?3:h,R=(0,l.useRef)(null);y[10]===Symbol.for("react.memo_cache_sentinel")?(m=()=>R.current,y[10]=m):m=y[10],(0,l.useImperativeHandle)(t,m),M(R,o);let E=!n&&d?"":void 0,S=C($),_=C(k),T=C(z),F=C(j),O=n||d;return y[11]!==r||y[12]!==s||y[13]!==O||y[14]!==E||y[15]!==S||y[16]!==_||y[17]!==T||y[18]!==F?(b=(0,i.jsx)(ov,{"data-read-only":E,"data-ui":"Select",...s,$fontSize:S,$padding:_,$radius:T,$space:F,disabled:O,ref:R,children:r}),y[11]=r,y[12]=s,y[13]=O,y[14]=E,y[15]=S,y[16]=_,y[17]=T,y[18]=F,y[19]=b):b=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(g=(0,i.jsx)(c.v4q,{}),y[20]=g):g=y[20],y[21]!==$?(v=(0,i.jsx)(t0,{size:$,children:g}),y[21]=$,y[22]=v):v=y[22],y[23]!==k||y[24]!==v?(x=(0,i.jsx)(ox,{padding:k,children:v}),y[23]=k,y[24]=v,y[25]=x):x=y[25],y[26]!==b||y[27]!==x?(w=(0,i.jsxs)(og,{"data-ui":"Select",children:[b,x]}),y[26]=b,y[27]=x,y[28]=w):w=y[28],w});ow.displayName="ForwardRef(Select)";let oy={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},o$=(0,s.zo)(tU)(function(){return oy},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return j(t,e.$space,e=>({gridGap:z(r[e])}))}),ok=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(10);d[0]!==e?({as:r,space:n,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s="string"==typeof r?r:void 0,c=C(n);return d[4]!==r||d[5]!==t||d[6]!==o||d[7]!==s||d[8]!==c?(l=(0,i.jsx)(o$,{"data-as":s,"data-ui":"Stack",...o,$space:c,forwardedAs:r,ref:t}),d[4]=r,d[5]=t,d[6]=o,d[7]=s,d[8]=c,d[9]=l):l=d[9],l});ok.displayName="ForwardRef(Stack)";let oz=s.zo.span(function(){return(0,s.iv)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),oj=s.zo.input(function(){return(0,s.iv)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oR=s.zo.span(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return(0,s.iv)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${z(r.switch.width)};
    height: ${z(r.switch.height)};
    border-radius: ${z(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tr({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oE=s.zo.span(function(e){let{input:t}=(0,n.aQ)(e.theme);return(0,s.iv)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${z(t.switch.width)};
    height: ${z(t.switch.height)};
    border-radius: ${z(t.switch.height/2)};
  `}),oS=s.zo.span(function(e){let{$indeterminate:t}=e,{input:r}=(0,n.aQ)(e.theme),o=r.switch.width,i=r.switch.height,a=r.switch.padding,l=i-2*r.switch.padding,d=o-2*a-l,c=o/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,s.iv)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${z(a)};
    top: ${z(a)};
    height: ${z(l)};
    width: ${z(l)};
    border-radius: ${z(l/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,s.iv)`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&(0,s.iv)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `}),o_=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v;let x=(0,a.c)(26);x[0]!==e?({checked:r,className:o,disabled:n,indeterminate:d,readOnly:s,style:u,...c}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=n,x[4]=d,x[5]=s,x[6]=c,x[7]=u):(r=x[1],o=x[2],n=x[3],d=x[4],s=x[5],c=x[6],u=x[7]);let w=(0,l.useRef)(null);x[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>w.current,x[8]=f):f=x[8],(0,l.useImperativeHandle)(t,f),x[9]!==d?(p=()=>{w.current&&(w.current.indeterminate=d||!1)},h=[d],x[9]=d,x[10]=p,x[11]=h):(p=x[10],h=x[11]),(0,l.useEffect)(p,h);let y=!n&&s?"":void 0,$=!0!==d&&r,k=n||s;return x[12]!==c||x[13]!==y||x[14]!==$||x[15]!==k?(m=(0,i.jsx)(oj,{"data-read-only":y,...c,checked:$,disabled:k,type:"checkbox",ref:w}),x[12]=c,x[13]=y,x[14]=$,x[15]=k,x[16]=m):m=x[16],x[17]===Symbol.for("react.memo_cache_sentinel")?(b=(0,i.jsx)(oE,{}),x[17]=b):b=x[17],x[18]!==r||x[19]!==d?(g=(0,i.jsxs)(oR,{"aria-hidden":!0,"data-name":"representation",children:[b,(0,i.jsx)(oS,{$checked:r,$indeterminate:d})]}),x[18]=r,x[19]=d,x[20]=g):g=x[20],x[21]!==o||x[22]!==u||x[23]!==m||x[24]!==g?(v=(0,i.jsxs)(oz,{className:o,"data-ui":"Switch",style:u,children:[m,g]}),x[21]=o,x[22]=u,x[23]=m,x[24]=g,x[25]=v):v=x[25],v});o_.displayName="ForwardRef(Switch)";let oC=s.zo.span(tj),oT=s.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oF=s.zo.textarea(t$,tR,tE),oM=s.zo.div(tC,tS),oO=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g;let v=(0,a.c)(29);v[0]!==e?({border:d,customValidity:o,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:r,...n}=e,v[0]=e,v[1]=r,v[2]=o,v[3]=n,v[4]=d,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(r=v[1],o=v[2],n=v[3],d=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let x=void 0===d||d,w=void 0!==s&&s,y=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,z=(0,l.useRef)(null),j=eO();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>z.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),M(z,o);let R=j.scheme,E=j.tone,S=C(y),_=C($),T=j.scheme,F=C(0);v[11]!==w||v[12]!==n||v[13]!==j.scheme||v[14]!==j.tone||v[15]!==F||v[16]!==S||v[17]!==_||v[18]!==p?(m=(0,i.jsx)(oF,{"data-as":"textarea","data-scheme":R,"data-tone":E,...n,$fontSize:S,$padding:_,$scheme:T,$space:F,$tone:j.tone,$weight:p,disabled:w,ref:z}),v[11]=w,v[12]=n,v[13]=j.scheme,v[14]=j.tone,v[15]=F,v[16]=S,v[17]=_,v[18]=p,v[19]=m):m=v[19];let O=C(k),N=x?"":void 0;return v[20]!==r||v[21]!==j.scheme||v[22]!==j.tone||v[23]!==O||v[24]!==N?(b=(0,i.jsx)(oM,{$radius:O,$unstableDisableFocusRing:r,$scheme:j.scheme,$tone:j.tone,"data-border":N,"data-scheme":j.scheme,"data-tone":j.tone}),v[20]=r,v[21]=j.scheme,v[22]=j.tone,v[23]=O,v[24]=N,v[25]=b):b=v[25],v[26]!==m||v[27]!==b?(g=(0,i.jsx)(oC,{"data-ui":"TextArea",children:(0,i.jsxs)(oT,{children:[m,b]})}),v[26]=m,v[27]=b,v[28]=g):g=v[28],g});oO.displayName="ForwardRef(TextArea)";let oN={zIndex:2},oA=(0,s.zo)(rn).attrs({forwardedAs:"span"})(tj),oL=s.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oI=(0,s.zo)(rn).attrs({forwardedAs:"span"})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oB=(0,s.zo)(rn).attrs({forwardedAs:"span"})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oD=s.zo.input(t$,tR,tE),oQ=s.zo.span(tC,tS),oP=(0,s.zo)(tU)`
  position: absolute;
  top: 0;
  left: 0;
`,oH=(0,s.zo)(tU)`
  position: absolute;
  top: 0;
  right: 0;
`,oV=(0,s.zo)(rn)`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`,oW=(0,s.zo)(rr)({"&:not([hidden])":{display:"block"}}),oq=(0,l.forwardRef)(function(e,t){let r,o,n,s,u,f,p,h,m,b,g,v,x,w,$,k,z,j,R,E,S,_,T,F,O,N,A,L,I,B,D,Q,P,H,V,W,q,X;let G=(0,a.c)(84);G[0]!==e?({__unstable_disableFocusRing:n,border:g,clearButton:s,disabled:v,fontSize:x,icon:r,iconRight:o,onClear:f,padding:w,prefix:p,radius:$,readOnly:h,space:k,suffix:b,customValidity:u,type:z,weight:j,...m}=e,G[0]=e,G[1]=r,G[2]=o,G[3]=n,G[4]=s,G[5]=u,G[6]=f,G[7]=p,G[8]=h,G[9]=m,G[10]=b,G[11]=g,G[12]=v,G[13]=x,G[14]=w,G[15]=$,G[16]=k,G[17]=z,G[18]=j):(r=G[1],o=G[2],n=G[3],s=G[4],u=G[5],f=G[6],p=G[7],h=G[8],m=G[9],b=G[10],g=G[11],v=G[12],x=G[13],w=G[14],$=G[15],k=G[16],z=G[17],j=G[18]);let Y=void 0===g||g,K=void 0!==v&&v,U=void 0===x?2:x,J=void 0===w?3:w,Z=void 0===$?2:$,ee=void 0===k?3:k,et=void 0===z?"text":z,er=(0,l.useRef)(null),eo=eO(),en=C(U),ei=C(J),ea=C(Z),el=C(ee),ed=!!s,es=!!r,ec=!!o,eu=!!b,ef=!!p;G[19]===Symbol.for("react.memo_cache_sentinel")?(R=()=>er.current,G[19]=R):R=G[19],(0,l.useImperativeHandle)(t,R),M(er,u),G[20]!==f?(E=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),er.current?.focus()},G[20]=f,G[21]=E):E=G[21];let ep=E;G[22]!==p||G[23]!==ea?(_=p&&(0,i.jsx)(oI,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:p})}),G[22]=p,G[23]=ea,G[24]=_):_=G[24],S=_;let eh=Y?"":void 0;G[25]!==r||G[26]!==en||G[27]!==ei?(F=r&&(0,i.jsx)(oP,{padding:ei,children:(0,i.jsxs)(t0,{size:en,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]})}),G[25]=r,G[26]=en,G[27]=ei,G[28]=F):F=G[28],G[29]!==ed||G[30]!==o||G[31]!==en||G[32]!==ei?(O=!ed&&o&&(0,i.jsx)(oH,{padding:ei,children:(0,i.jsxs)(t0,{size:en,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})}),G[29]=ed,G[30]=o,G[31]=en,G[32]=ei,G[33]=O):O=G[33],G[34]!==ef||G[35]!==eu||G[36]!==n||G[37]!==ea||G[38]!==eo.scheme||G[39]!==eo.tone||G[40]!==eh||G[41]!==F||G[42]!==O?(N=(0,i.jsxs)(oQ,{$hasPrefix:ef,$unstableDisableFocusRing:n,$hasSuffix:eu,$radius:ea,$scheme:eo.scheme,$tone:eo.tone,"data-border":eh,"data-scheme":eo.scheme,"data-tone":eo.tone,children:[F,O]}),G[34]=ef,G[35]=eu,G[36]=n,G[37]=ea,G[38]=eo.scheme,G[39]=eo.tone,G[40]=eh,G[41]=F,G[42]=O,G[43]=N):N=G[43],T=N,G[44]!==ei?(L=ei.map(oG),G[44]=ei,G[45]=L):L=G[45],A=L,G[46]!==ei?(B=ei.map(oY),G[46]=ei,G[47]=B):B=G[47],I=B,D="object"==typeof s?s:y,G[48]!==s||G[49]!==A||G[50]!==I||G[51]!==D||G[52]!==u||G[53]!==K||G[54]!==en||G[55]!==ep||G[56]!==ea||G[57]!==h?(P=!K&&!h&&s&&(0,i.jsx)(oV,{forwardedAs:"span",padding:A,style:oN,tone:u?"critical":"inherit",children:(0,i.jsx)(oW,{"aria-label":"Clear","data-qa":"clear-button",fontSize:en,icon:c.Two,mode:"bleed",padding:I,radius:ea,...D,onClick:ep,onMouseDown:oX})}),G[48]=s,G[49]=A,G[50]=I,G[51]=D,G[52]=u,G[53]=K,G[54]=en,G[55]=ep,G[56]=ea,G[57]=h,G[58]=P):P=G[58],Q=P,G[59]!==ea||G[60]!==b?(V=b&&(0,i.jsx)(oB,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:b})}),G[59]=ea,G[60]=b,G[61]=V):V=G[61],H=V;let em=ec||ed;return G[62]!==es||G[63]!==K||G[64]!==en||G[65]!==ei||G[66]!==h||G[67]!==m||G[68]!==eo.scheme||G[69]!==eo.tone||G[70]!==el||G[71]!==em||G[72]!==et||G[73]!==j?(W=(0,i.jsx)(oD,{"data-as":"input","data-scheme":eo.scheme,"data-tone":eo.tone,...m,$fontSize:en,$iconLeft:es,$iconRight:em,$padding:ei,$scheme:eo.scheme,$space:el,$tone:eo.tone,$weight:j,disabled:K,readOnly:h,ref:er,type:et}),G[62]=es,G[63]=K,G[64]=en,G[65]=ei,G[66]=h,G[67]=m,G[68]=eo.scheme,G[69]=eo.tone,G[70]=el,G[71]=em,G[72]=et,G[73]=j,G[74]=W):W=G[74],G[75]!==Q||G[76]!==T||G[77]!==W?(q=(0,i.jsxs)(oL,{children:[W,T,Q]}),G[75]=Q,G[76]=T,G[77]=W,G[78]=q):q=G[78],G[79]!==S||G[80]!==eo.tone||G[81]!==H||G[82]!==q?(X=(0,i.jsxs)(oA,{"data-ui":"TextInput",tone:eo.tone,children:[S,q,H]}),G[79]=S,G[80]=eo.tone,G[81]=H,G[82]=q,G[83]=X):X=G[83],X});function oX(e){e.preventDefault(),e.stopPropagation()}function oG(e){return 0===e?0:1===e||2===e?1:e-2}function oY(e){return 0===e||1===e?0:2===e?1:e-1}function oK(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(e),d=(0,l.useRef)();o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let r=()=>{i(e)};if(d.current&&(clearTimeout(d.current),d.current=void 0),!t)return r();d.current=setTimeout(r,t)},o[0]=t):t=o[0];let s=t;return o[1]!==n?(r=[n,s],o[1]=n,o[2]=r):r=o[2],r}oq.displayName="ForwardRef(TextInput)";let oU={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},oJ=(0,s.zo)((0,h.E)(rn))`
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,oZ=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,z,j,R;let E=(0,a.c)(42);E[0]!==e?({animate:r,arrow:o,arrowRef:n,arrowX:l,arrowY:d,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:b,shadow:g,style:v,...m}=e,E[0]=e,E[1]=r,E[2]=o,E[3]=n,E[4]=l,E[5]=d,E[6]=s,E[7]=c,E[8]=u,E[9]=f,E[10]=p,E[11]=h,E[12]=m,E[13]=b,E[14]=g,E[15]=v):(r=E[1],o=E[2],n=E[3],l=E[4],d=E[5],s=E[6],c=E[7],u=E[8],f=E[9],p=E[10],h=E[11],m=E[12],b=E[13],g=E[14],v=E[15]);let S=r?"transform":void 0;E[16]!==c||E[17]!==u||E[18]!==v||E[19]!==S?(w={originX:c,originY:u,willChange:S,...v},E[16]=c,E[17]=u,E[18]=v,E[19]=S,E[20]=w):w=E[20],x=w;let _=null!==l?l:void 0,C=null!==d?d:void 0;E[21]!==_||E[22]!==C?($={left:_,top:C,right:void 0,bottom:void 0},E[21]=_,E[22]=C,E[23]=$):$=E[23],y=$;let T=m;return E[24]!==r?(z=r?k:{},E[24]=r,E[25]=z):z=E[25],E[26]!==o||E[27]!==n||E[28]!==y?(j=o&&(0,i.jsx)(rT,{ref:n,style:y,width:15,height:6,radius:2}),E[26]=o,E[27]=n,E[28]=y,E[29]=j):j=E[29],E[30]!==s||E[31]!==f||E[32]!==p||E[33]!==h||E[34]!==t||E[35]!==x||E[36]!==b||E[37]!==g||E[38]!==T||E[39]!==z||E[40]!==j?(R=(0,i.jsxs)(oJ,{"data-ui":"Tooltip__card",...T,"data-placement":p,padding:f,radius:h,ref:t,scheme:b,shadow:g,style:x,...z,children:[s,j]}),E[30]=s,E[31]=f,E[32]=p,E[33]=h,E[34]=t,E[35]=x,E[36]=b,E[37]=g,E[38]=T,E[39]=z,E[40]=j,E[41]=R):R=E[41],R}));oZ.displayName="Memo(ForwardRef(TooltipCard))";let o0=eT("@sanity/ui/context/tooltipDelayGroup",null);function o1(e){let t,r,o;let n=(0,a.c)(10),{children:l,delay:d}=e,[s,c]=oK(!1),[u,f]=oK(null),p="number"==typeof d?d:d?.open||0,h="number"==typeof d?d:d?.close||0,m=s?1:p;return n[0]!==h||n[1]!==s||n[2]!==u||n[3]!==c||n[4]!==f||n[5]!==m?(r={isGroupActive:s,setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:m,closeDelay:h},n[0]=h,n[1]=s,n[2]=u,n[3]=c,n[4]=f,n[5]=m,n[6]=r):r=n[6],t=r,n[7]!==l||n[8]!==t?(o=(0,i.jsx)(o0.Provider,{value:t,children:l}),n[7]=l,n[8]=t,n[9]=o):o=n[9],o}o1.displayName="TooltipDelayGroupProvider";let o2=(0,s.zo)(r2)`
  pointer-events: none;
`,o3=(0,l.forwardRef)(function(e,t){let r=rA(),{layer:o}=eL(),{animate:n=!1,arrow:d=!1,boundaryElement:s=r?.element,children:c,content:u,disabled:h,fallbackPlacements:b=e.fallbackPlacements??oU[e.placement??"bottom"],padding:v=2,placement:x="bottom",portal:w,radius:y=2,scheme:$,shadow:k=2,zOffset:z=o.tooltip.zOffset,delay:j,...R}=e,E=!eP()&&n,S=C(b),_=(0,l.useRef)(null),[T,F]=(0,l.useState)(null),M=(0,l.useRef)(null),O="viewport",[N,A]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>_.current);let L=r6(),I="string"==typeof w?L.elements?.[w]||null:L.element,B=(0,l.useMemo)(()=>{let e=[];return e.push((0,p.RR)({boundary:s||void 0,fallbackPlacements:S,padding:4,rootBoundary:O})),e.push((0,p.cv)({mainAxis:4})),e.push((0,p.uY)({boundary:s||void 0,rootBoundary:O,padding:4})),d&&e.push((0,p.x7)({element:M,padding:4})),E&&e.push(rz),e},[E,d,s,S]),{floatingStyles:D,placement:Q,middlewareData:P,refs:H,update:V}=(0,p.YF)({middleware:B,placement:x,whileElementsMounted:f.Me}),W=P.arrow?.x,q=P.arrow?.y,X=P["@sanity/ui/origin"]?.originX,G=P["@sanity/ui/origin"]?.originY,Y=(0,l.useId)(),[K,U]=oK(!1),J=(0,l.useContext)(o0),Z=K||J?.openTooltipId===Y,ee=null!==J,et="number"==typeof j?j:j?.open||0,er="number"==typeof j?j:j?.close||0,eo=ee?J.openDelay:et,en=ee?J.closeDelay:er,ei=(0,l.useCallback)((e,t)=>{if(ee){if(e){let r=t?0:eo;J.setIsGroupActive(e,r),J.setOpenTooltipId(Y,r)}else{let r=en>200?en:200;J.setIsGroupActive(e,r),J.setOpenTooltipId(null,t?0:en)}}else U(e,t?0:e?eo:en)},[ee,J,eo,Y,en,U]),ea=(0,l.useCallback)(e=>{ei(!1),c?.props?.onBlur?.(e)},[c?.props,ei]),el=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onClick?.(e)},[c?.props,ei]),ed=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ei]),es=(0,l.useCallback)(e=>{ei(!0),c?.props?.onFocus?.(e)},[c?.props,ei]),ec=(0,l.useCallback)(e=>{ei(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ei]),eu=(0,l.useCallback)(e=>{ei(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ei]);(function(e){let t,r,o;let n=(0,a.c)(7),{handleIsOpenChange:i,referenceElement:d,showTooltip:s}=e;n[0]!==i||n[1]!==d?(t=(e,t)=>{d&&(d===e||e instanceof Node&&d.contains(e)||(i(!1),t()))},n[0]=i,n[1]=d,n[2]=t):t=n[2];let c=(0,g.i)(t);n[3]!==c||n[4]!==s?(r=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},o=[c,s],n[3]=c,n[4]=s,n[5]=r,n[6]=o):(r=n[5],o=n[6]),(0,l.useEffect)(r,o)})({handleIsOpenChange:ei,referenceElement:T,showTooltip:Z}),(0,l.useEffect)(()=>{h&&Z&&ei(!1)},[h,ei,Z]),(0,l.useEffect)(()=>{!u&&Z&&ei(!1)},[u,ei,Z]),(0,l.useEffect)(()=>H.setReference(T),[T,H]),(0,l.useEffect)(()=>{if(Z)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ei(!1,!0)}},[ei,Z]),(0,l.useLayoutEffect)(()=>{A(Math.min(...s?[s.offsetWidth]:[],I?.offsetWidth||document.body.offsetWidth)-8)},[s,I]);let ef=(0,l.useCallback)(e=>{M.current=e,V()},[V]),ep=(0,l.useCallback)(e=>{_.current=e,H.setFloating(e)},[H]),eh=(0,l.useRef)(null);(0,l.useImperativeHandle)(c?.ref,()=>eh.current);let em=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ea,onFocus:es,onMouseEnter:ec,onMouseLeave:eu,onClick:el,onContextMenu:ed,ref:eh}):null,[c,ea,el,ed,es,ec,eu]);if((0,l.useEffect)(()=>{if(em)return F(eh.current),()=>F(null)},[em]),!em)return(0,i.jsx)(i.Fragment,{});if(h)return em;let eb=(0,i.jsx)(o2,{"data-ui":"Tooltip",...R,ref:ep,style:{...D,maxWidth:N>0?`${N}px`:void 0},zOffset:z,children:(0,i.jsx)(oZ,{...R,animate:E,arrow:d,arrowRef:ef,arrowX:W,arrowY:q,originX:X,originY:G,padding:v,placement:Q,radius:y,ref:ep,scheme:$,shadow:k,children:u})}),eg=Z&&(w?(0,i.jsx)(r7,{__unstable_name:"string"==typeof w?w:void 0,children:eb}):eb);return(0,i.jsxs)(i.Fragment,{children:[E?(0,i.jsx)(m.M,{children:eg}):eg,em]})});o3.displayName="ForwardRef(Tooltip)";let o4=s.zo.div`
  line-height: 0;
`,o5=(0,s.zo)(tU)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`,o6=(0,s.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,o7=(0,s.zo)(c.L4p)`
  animation: ${o6} 500ms linear infinite;
`;function o8(e){let t,r,o;let n=(0,a.c)(11),{children:l,id:d,onSelect:s,selected:c,value:u}=e;n[0]!==s||n[1]!==u?(t=()=>{setTimeout(()=>{s(u)},0)},n[0]=s,n[1]=u,n[2]=t):t=n[2];let f=t;n[3]!==f?(r=e=>{var t;"Enter"!==e.key||rW(t=e.currentTarget)||rq(t)||f()},n[3]=f,n[4]=r):r=n[4];let p=r;return n[5]!==l||n[6]!==f||n[7]!==p||n[8]!==d||n[9]!==c?(o=(0,i.jsx)("li",{"aria-selected":c,"data-ui":"AutocompleteOption",id:d,role:"option",onClick:f,onKeyDown:p,children:l}),n[5]=l,n[6]=f,n[7]=p,n[8]=d,n[9]=c,n[10]=o):o=n[10],o}function o9(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let ne=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],nt=["bottom-start","top-start"],nr=(e,t)=>t?t.value:e,no=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,nn=(0,l.forwardRef)(function(e,t){let{border:r=!0,customValidity:o,disabled:n,filterOption:a,fontSize:d=2,icon:s,id:u,listBox:f=y,loading:p,onBlur:h,onChange:m,onFocus:b,onQueryChange:g,onSelect:v,openButton:x,openOnFocus:$,options:k,padding:z=3,popover:j=y,prefix:R,radius:E=2,readOnly:S,relatedElements:_,renderOption:T,renderPopover:F,renderValue:M=nr,suffix:O,value:N,...A}=e,[L,I]=(0,l.useReducer)(o9,{activeValue:N||null,focused:!1,listFocused:!1,query:null,value:N||null}),{activeValue:B,focused:D,listFocused:Q,query:P,value:H}=L,V=(0,l.useCallback)(({value:e})=>(0,i.jsx)(rn,{"data-as":"button",padding:z,radius:2,tone:"inherit",children:(0,i.jsx)(t0,{size:d,textOverflow:"ellipsis",children:e})}),[d,z]),W="function"==typeof T?T:V,q="function"==typeof a?a:no,X=(0,l.useRef)(null),G=(0,l.useRef)(null),Y=(0,l.useRef)(null),K=(0,l.useRef)(null),U=(0,l.useRef)(!1),J=(0,l.useRef)(H),Z=(0,l.useRef)(N),ee=(0,l.useRef)(!1);(0,l.useImperativeHandle)(t,()=>Y.current);let et=`${u}-listbox`,er=Array.isArray(k)?k:w,eo=C(z),en=(0,l.useMemo)(()=>null!==H?er.find(e=>e.value===H):void 0,[er,H]),ei=(0,l.useMemo)(()=>er.filter(e=>!P||q(P,e)),[q,er,P]),ea=ei.length,el=B?`${u}-option-${B}`:void 0,ed=null!==P&&p||D&&null!==P,es=(0,l.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(_||[]).concat(X.current?[X.current]:[],G.current?[G.current]:[]),r=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){r=!0;break}}!1===r&&(I({type:"root/blur"}),ee.current=!1,g&&g(null),h&&h(e))},0)},[h,g,_]),ec=(0,l.useCallback)(e=>{let t=K.current,r=e.target instanceof HTMLElement?e.target:null,o=t?.contains(r)||!1;o!==U.current&&(U.current=o,I({type:"root/setListFocused",listFocused:o}))},[]),eu=(0,l.useCallback)(e=>{I({type:"value/change",value:e}),ee.current=!1,v&&v(e),J.current=e,m&&m(e),g&&g(null),Y.current?.focus()},[m,v,g]),ef=(0,l.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===B),r=t?ei.indexOf(t):-1,o=ei[(r+1)%ea];o&&I({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===B),r=t?ei.indexOf(t):-1,o=ei[-1===r?ea-1:(ea+r-1)%ea];o&&I({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("Escape"===e.key){I({type:"root/escape"}),ee.current=!1,g&&g(null),Y.current?.focus();return}let t=e.target,r=K.current;if((r===t||r?.contains(t))&&!ne.includes(e.key)){Y.current?.focus();return}},[B,ei,ea,g]),ep=(0,l.useCallback)(e=>{let t=e.currentTarget.value;I({type:"input/change",query:t}),g&&g(t)},[g]),eh=(0,l.useCallback)(()=>{I({type:"root/open",query:H?M(H,en):""})},[en,M,H]),em=(0,l.useCallback)(e=>{D||(I({type:"input/focus"}),b&&b(e),$&&eh())},[D,b,$,eh]),eb=(0,l.useCallback)(()=>{ee.current=!0},[]),eg=(0,l.useCallback)(()=>{ee.current=!1},[]),ev=(0,l.useCallback)(()=>{I({type:"root/clear"}),J.current="",m&&m(""),g&&g(null),Y.current?.focus()},[m,g]),ex=(0,l.useCallback)(()=>{I({type:"input/focus"})},[]);(0,l.useEffect)(()=>{if(N!==Z.current){Z.current=N,void 0!==N&&(I({type:"value/change",value:N}),J.current=N);return}N!==J.current&&(J.current=N||null,I({type:"value/change",value:N||null}))},[N]),(0,l.useEffect)(()=>{!D&&J.current&&I({type:"root/setActiveValue",value:J.current})},[D]),(0,l.useEffect)(()=>{let e=K.current;if(!e)return;let t=ei.find(e=>e.value===B);if(t){let r=ei.indexOf(t),o=e.childNodes[r];if(o){if(document.activeElement&&o.contains(document.activeElement))return;rY(o)}}},[B,ei]);let ew=(0,l.useMemo)(()=>{if(!p&&!n&&H)return{"aria-label":"Clear",onFocus:ex}},[n,ex,p,H]),ey=(0,l.useMemo)(()=>eo.map(e=>0===e?0:1===e||2===e?1:e-2),[eo]),e$=(0,l.useMemo)(()=>eo.map(e=>Math.max(e-1,0)),[eo]),ek=(0,l.useMemo)(()=>"object"==typeof x?x:y,[x]),ez=(0,l.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),rP(()=>Y.current?.focus())},[ek,eh]),ej=(0,l.useMemo)(()=>n||S||!x?void 0:(0,i.jsx)(tU,{"aria-hidden":ed,padding:ey,children:(0,i.jsx)(rr,{"aria-label":"Open",disabled:ed,fontSize:d,icon:c.v4q,mode:"bleed",padding:e$,...ek,onClick:ez})}),[n,ed,d,ez,x,ey,e$,ek,S]),eR=(0,l.useMemo)(()=>null===P?null!==H?M(H,en):"":P,[en,P,M,H]),eE=(0,i.jsx)(oq,{...A,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:r,clearButton:ew,customValidity:o,disabled:n,fontSize:d,icon:s,iconRight:p&&o7,id:u,inputMode:"search",onChange:ep,onClear:ev,onFocus:em,padding:eo,prefix:R,radius:E,readOnly:S,ref:Y,role:"combobox",spellCheck:!1,suffix:O||ej,value:eR}),eS=(0,l.useCallback)(e=>{"Tab"===e.key&&Q&&Y.current?.focus()},[Q]),e_=(0,l.useMemo)(()=>0===ei.length?null:(0,i.jsx)(o5,{"data-ui":"AutoComplete__results",onKeyDown:eS,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(ok,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:K,role:"listbox",space:1,children:ei.map(e=>{let t=null!==B?e.value===B:en===e;return(0,i.jsx)(o8,{id:`${u}-option-${e.value}`,onSelect:eu,selected:t,value:e.value,children:(0,l.cloneElement)(W(e),{disabled:p,selected:t,tabIndex:Q&&t?0:-1})},e.value)})})}),[B,en,ei,eu,eS,u,f,et,Q,p,W]),eC=(0,l.useMemo)(()=>F?F({content:e_,hidden:!ed,inputElement:Y.current,onMouseEnter:eb,onMouseLeave:eg},G):0===ea?null:(0,i.jsx)(oc,{arrow:!1,constrainSize:!0,content:e_,fallbackPlacements:nt,matchReferenceWidth:!0,onMouseEnter:eb,onMouseLeave:eg,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:E,ref:G,referenceElement:Y.current,...j}),[e_,ed,ea,eb,eg,j,E,F]);return(0,i.jsxs)(o4,{"data-ui":"Autocomplete",onBlur:es,onFocus:ec,onKeyDown:ef,ref:X,children:[eE,eC]})});nn.displayName="ForwardRef(Autocomplete)";let ni=nn,na=s.zo.ol`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`,nl=(0,s.zo)(rr)`
  appearance: none;
  margin: -4px;
`,nd=(0,l.forwardRef)(function(e,t){let{children:r,maxLength:o,separator:n,space:a=2,...d}=e,s=C(a),[c,u]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),h=(0,l.useCallback)(()=>u(!1),[]),m=(0,l.useCallback)(()=>u(!0),[]);T(h,()=>[f.current,p.current]);let b=(0,l.useMemo)(()=>l.Children.toArray(r).filter(l.isValidElement),[r]),g=(0,l.useMemo)(()=>{let e=b.length;if(o&&e>o){let t=Math.ceil(o/2),r=Math.floor(o/2);return[...b.slice(0,t-1),(0,i.jsx)(oc,{constrainSize:!0,content:(0,i.jsx)(ok,{as:"ol",overflow:"auto",padding:s,space:s,children:b.slice(t-1,e-r)}),open:c,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(nl,{fontSize:1,mode:"bleed",onClick:c?h:m,padding:1,ref:f,selected:c,text:"…"})},"button"),...b.slice(e-r)]}return b},[h,m,o,c,b,s]);return(0,i.jsx)(na,{"data-ui":"Breadcrumbs",...d,ref:t,children:g.map((e,t)=>(0,i.jsxs)(l.Fragment,{children:[t>0&&(0,i.jsx)(tU,{"aria-hidden":!0,as:"li",paddingX:s,children:n||(0,i.jsx)(t0,{muted:!0,children:"/"})}),(0,i.jsx)(tU,{as:"li",children:e})]},t))})});nd.displayName="ForwardRef(Breadcrumbs)";let ns=eT("@sanity/ui/context/dialog",{version:0});function nc(e,t,r){return!e||!t||rX(e,r)||rX(t,r)}let nu=(0,s.zo)(r2)(t_,function({theme:e}){let{color:t}=(0,n.aQ)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,n.aQ)(e.theme);return j(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?(0,s.iv)`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:(0,s.iv)``}),nf=(0,s.zo)(rp)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,np=(0,s.zo)(rn)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`,nh=(0,s.zo)(t4)`
  flex: 1;
  min-height: 0;
  width: 100%;
`,nm=(0,s.zo)(tU)`
  position: relative;
  z-index: 2;
`,nb=(0,s.zo)(tU)`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`,ng=(0,s.zo)(tU)`
  position: relative;
  z-index: 3;
`,nv=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,m,b,g,v;let x=(0,a.c)(38),{__unstable_autoFocus:w,__unstable_hideCloseButton:y,children:$,contentRef:k,footer:z,header:j,id:R,onClickOutside:E,onClose:S,portal:_,radius:F,scheme:M,shadow:O,width:N}=e,A=r6(),L=_?A.elements?.[_]||null:A.element,I=rA().element,B=C(F),D=C(O),Q=C(N),P=(0,l.useRef)(null),H=(0,l.useRef)(null),{isTopLayer:V}=rQ(),W=`${R}_label`,q=!!S&&!1===y,X=!!j||q;return x[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>P.current,x[0]=r):r=x[0],(0,l.useImperativeHandle)(t,r),x[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>H.current,x[1]=o):o=x[1],(0,l.useImperativeHandle)(k,o),x[2]!==w?(n=()=>{w&&P.current&&rY(P.current)},d=[w,P],x[2]=w,x[3]=n,x[4]=d):(n=x[3],d=x[4]),(0,l.useEffect)(n,d),x[5]!==I||x[6]!==V||x[7]!==S||x[8]!==L?(s=e=>{if(!V||!S)return;let t=document.activeElement;t&&!nc(I,L,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),S())},x[5]=I,x[6]=V,x[7]=S,x[8]=L,x[9]=s):s=x[9],eS(s),x[10]!==I||x[11]!==V||x[12]!==E||x[13]!==L?(u=V&&E&&(e=>{let t=e.target;t&&!nc(I,L,t)||E()}),x[10]=I,x[11]=V,x[12]=E,x[13]=L,x[14]=u):u=x[14],x[15]===Symbol.for("react.memo_cache_sentinel")?(f=()=>[P.current],x[15]=f):f=x[15],T(u,f),x[16]!==j||x[17]!==W||x[18]!==S||x[19]!==q||x[20]!==X?(p=X&&(0,i.jsx)(nm,{children:(0,i.jsxs)(t4,{align:"flex-start",padding:3,children:[(0,i.jsx)(tU,{flex:1,padding:2,children:j&&(0,i.jsx)(t0,{id:W,size:1,weight:"semibold",children:j})}),q&&(0,i.jsx)(tU,{flex:"none",children:(0,i.jsx)(rr,{"aria-label":"Close dialog",disabled:!S,icon:c.Two,mode:"bleed",onClick:S,padding:2})})]})}),x[16]=j,x[17]=W,x[18]=S,x[19]=q,x[20]=X,x[21]=p):p=x[21],x[22]!==$?(h=(0,i.jsx)(nb,{flex:1,ref:H,tabIndex:-1,children:$}),x[22]=$,x[23]=h):h=x[23],x[24]!==z?(m=z&&(0,i.jsx)(ng,{children:z}),x[24]=z,x[25]=m):m=x[25],x[26]!==p||x[27]!==h||x[28]!==m?(b=(0,i.jsxs)(nh,{direction:"column",children:[p,h,m]}),x[26]=p,x[27]=h,x[28]=m,x[29]=b):b=x[29],x[30]!==B||x[31]!==M||x[32]!==D||x[33]!==b?(g=(0,i.jsx)(np,{radius:B,ref:P,scheme:M,shadow:D,children:b}),x[30]=B,x[31]=M,x[32]=D,x[33]=b,x[34]=g):g=x[34],x[35]!==g||x[36]!==Q?(v=(0,i.jsx)(nf,{"data-ui":"DialogCard",width:Q,children:g}),x[35]=g,x[36]=Q,x[37]=v):v=x[37],v});nv.displayName="ForwardRef(DialogCard)";let nx=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_,T,F,M;let O=(0,a.c)(60),N=(0,l.useContext)(ns),{layer:A}=eL();O[0]!==e?({__unstable_autoFocus:x,__unstable_hideCloseButton:w,cardRadius:y,cardShadow:$,children:n,contentRef:d,footer:s,header:c,id:u,onActivate:f,onClickOutside:p,onClose:h,onFocus:m,padding:k,portal:b,position:r,scheme:v,width:z,zOffset:o,animate:j,...g}=e,O[0]=e,O[1]=r,O[2]=o,O[3]=n,O[4]=d,O[5]=s,O[6]=c,O[7]=u,O[8]=f,O[9]=p,O[10]=h,O[11]=m,O[12]=b,O[13]=g,O[14]=v,O[15]=x,O[16]=w,O[17]=y,O[18]=$,O[19]=k,O[20]=z,O[21]=j):(r=O[1],o=O[2],n=O[3],d=O[4],s=O[5],c=O[6],u=O[7],f=O[8],p=O[9],h=O[10],m=O[11],b=O[12],g=O[13],v=O[14],x=O[15],w=O[16],y=O[17],$=O[18],k=O[19],z=O[20],j=O[21]);let L=void 0===x||x,I=void 0!==w&&w,B=void 0===y?4:y,D=void 0===$?3:$,Q=void 0===k?3:k,P=void 0===z?0:z,H=void 0!==j&&j,V=r??(N.position||"fixed"),W=o??(N.zOffset||A.dialog.zOffset),q=!eP()&&H,X=r6(),G=b?X.elements?.[b]||null:X.element,Y=rA().element,K=C(B),U=C(Q),J=C(V),Z=C(P),ee=C(W),et=(0,l.useRef)(null),er=(0,l.useRef)(null),eo=(0,l.useRef)(null),en=(0,l.useRef)(null);O[22]!==m?(R=e=>{m?.(e);let t=e.target,r=eo.current;if(r&&t===et.current){rK(r);return}if(r&&t===er.current){rY(r);return}rV(e.target)&&(en.current=e.target)},O[22]=m,O[23]=R):R=O[23];let ei=R,ea=`${u}_label`,el=(0,l.useRef)();O[24]!==Y||O[25]!==G?(E=()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{let e=document.activeElement;if(e&&!nc(Y,G,e)){let e=en.current;if(!e||!document.body.contains(e)){let e=eo.current;e&&rY(e);return}e.focus()}},0)},O[24]=Y,O[25]=G,O[26]=E):E=O[26];let ed=E;return O[27]===Symbol.for("react.memo_cache_sentinel")?(S=(0,i.jsx)("div",{ref:et,tabIndex:0}),O[27]=S):S=O[27],O[28]!==L||O[29]!==K||O[30]!==D||O[31]!==n||O[32]!==d||O[33]!==s||O[34]!==c||O[35]!==I||O[36]!==u||O[37]!==p||O[38]!==h||O[39]!==b||O[40]!==v||O[41]!==Z?(_=(0,i.jsx)(nv,{__unstable_autoFocus:L,__unstable_hideCloseButton:I,contentRef:d,footer:s,header:c,id:u,onClickOutside:p,onClose:h,portal:b,radius:K,ref:eo,scheme:v,shadow:D,width:Z,children:n}),O[28]=L,O[29]=K,O[30]=D,O[31]=n,O[32]=d,O[33]=s,O[34]=c,O[35]=I,O[36]=u,O[37]=p,O[38]=h,O[39]=b,O[40]=v,O[41]=Z,O[42]=_):_=O[42],O[43]===Symbol.for("react.memo_cache_sentinel")?(T=(0,i.jsx)("div",{ref:er,tabIndex:0}),O[43]=T):T=O[43],O[44]!==q||O[45]!==ei||O[46]!==ed||O[47]!==u||O[48]!==ea||O[49]!==f||O[50]!==U||O[51]!==J||O[52]!==t||O[53]!==g||O[54]!==_||O[55]!==ee?(F=(0,i.jsxs)(nu,{...g,$animate:q,$padding:U,$position:J,"aria-labelledby":ea,"aria-modal":!0,"data-ui":"Dialog",id:u,onActivate:f,onClick:ed,onFocus:ei,ref:t,role:"dialog",zOffset:ee,children:[S,_,T]}),O[44]=q,O[45]=ei,O[46]=ed,O[47]=u,O[48]=ea,O[49]=f,O[50]=U,O[51]=J,O[52]=t,O[53]=g,O[54]=_,O[55]=ee,O[56]=F):F=O[56],O[57]!==b||O[58]!==F?(M=(0,i.jsx)(r7,{__unstable_name:b,children:F}),O[57]=b,O[58]=F,O[59]=M):M=O[59],M});function nw(e){let t,r,o;let n=(0,a.c)(6),{children:l,position:d,zOffset:s}=e;return n[0]!==d||n[1]!==s?(r={version:0,position:d,zOffset:s},n[0]=d,n[1]=s,n[2]=r):r=n[2],t=r,n[3]!==l||n[4]!==t?(o=(0,i.jsx)(ns.Provider,{value:t,children:l}),n[3]=l,n[4]=t,n[5]=o):o=n[5],o}nx.displayName="ForwardRef(Dialog)",nw.displayName="DialogProvider";let ny=s.zo.kbd`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`,n$=(0,s.zo)(rk)`
  &:not([hidden]) {
    display: block;
  }
`,nk=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({fontSize:r,keys:o,padding:n,radius:l,space:s,...d}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6]);let h=C(void 0===s?.5:s);if(!o||0===o.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)(i.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==r||p[9]!==o||p[10]!==n||p[11]!==l){let e;p[13]!==r||p[14]!==n||p[15]!==l?(e=(e,t)=>(0,i.jsx)(n$,{fontSize:r,padding:n,radius:l,children:e},t),p[13]=r,p[14]=n,p[15]=l,p[16]=e):e=p[16],c=o.map(e),p[8]=r,p[9]=o,p[10]=n,p[11]=l,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,i.jsx)(rw,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==d||p[22]!==u?(f=(0,i.jsx)(ny,{"data-ui":"Hotkeys",...d,ref:t,children:u}),p[20]=t,p[21]=d,p[22]=u,p[23]=f):f=p[23],f});nk.displayName="ForwardRef(Hotkeys)";let nz=eT("@sanity/ui/context/menu",null);function nj(e){return rW(e)&&"true"!==e.getAttribute("data-disabled")||rq(e)&&!e.disabled}function nR(e){return e.filter(nj)}let nE=[],nS=(0,s.zo)(tU)`
  outline: none;
  overflow: auto;
`,n_=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S;let _=(0,a.c)(50);if(_[0]!==e){let{children:t,focusFirst:i,focusLast:a,onClickOutside:l,onEscape:g,onItemClick:v,onItemSelect:x,onKeyDown:w,originElement:y,padding:$,registerElement:k,shouldFocus:z,space:j,...R}=e;o=t,n=l,d=g,s=v,c=x,u=w,f=y,m=$,p=k,r=z,b=j,h=R,_[0]=e,_[1]=r,_[2]=o,_[3]=n,_[4]=d,_[5]=s,_[6]=c,_[7]=u,_[8]=f,_[9]=p,_[10]=h,_[11]=m,_[12]=b}else r=_[1],o=_[2],n=_[3],d=_[4],s=_[5],c=_[6],u=_[7],f=_[8],p=_[9],h=_[10],m=_[11],b=_[12];let C=void 0===m?1:m,F=void 0===b?1:b,M=r??(e.focusFirst&&"first"||e.focusLast&&"last"||null),O=(0,l.useRef)(null);_[13]===Symbol.for("react.memo_cache_sentinel")?(g=()=>O.current,_[13]=g):g=_[13],(0,l.useImperativeHandle)(t,g);let{isTopLayer:N}=rQ();_[14]!==u||_[15]!==f||_[16]!==M?(v={onKeyDown:u,originElement:f,shouldFocus:M,rootElementRef:O},_[14]=u,_[15]=f,_[16]=M,_[17]=v):v=_[17];let{activeElement:A,activeIndex:L,handleItemMouseEnter:I,handleItemMouseLeave:B,handleKeyDown:D,mount:Q}=function(e){let{onKeyDown:t,originElement:r,shouldFocus:o,rootElementRef:n}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!n.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(o);if(r.unshift(n),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||nE,n=r.get(t)||nE,i=Math.max(o.length,n.length);for(let e=0;e<i;e+=1){let t=o[e]||-1,r=n[e]||-1;if(t!==r)return t-r}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){r&&r.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=nR(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=nR(i.current),r=t[t.length-1];if(!r)return;f(i.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=nR(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n-1+r)%r];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=nR(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n+1)%r];f(i.current.indexOf(a));return}t&&t(e)},[t,r,f]),m=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),b=(0,l.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===o){let e=nR(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===o){let e=nR(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,o]),{activeElement:c,activeIndex:a,handleItemMouseEnter:m,handleItemMouseLeave:b,handleKeyDown:h,mount:p}}(v),P=(0,l.useRef)(null);_[18]!==p?(x=e=>{P.current&&(P.current(),P.current=null),O.current=e,O.current&&p&&(P.current=p(O.current))},_[18]=p,_[19]=x):x=_[19];let H=x;return _[20]!==L||_[21]!==c?(w=()=>{c&&c(L)},y=[L,c],_[20]=L,_[21]=c,_[22]=w,_[23]=y):(w=_[22],y=_[23]),(0,l.useEffect)(w,y),_[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[O.current],_[24]=$):$=_[24],T(N&&n,$),_[25]!==N||_[26]!==d?(k=e=>{N&&"Escape"===e.key&&(e.stopPropagation(),d&&d())},_[25]=N,_[26]=d,_[27]=k):k=_[27],eS(k),_[28]!==A||_[29]!==L||_[30]!==I||_[31]!==B||_[32]!==Q||_[33]!==n||_[34]!==d||_[35]!==s||_[36]!==p?(j={version:0,activeElement:A,activeIndex:L,mount:Q,onClickOutside:n,onEscape:d,onItemClick:s,onItemMouseEnter:I,onItemMouseLeave:B,registerElement:p,onMouseEnter:I,onMouseLeave:B},_[28]=A,_[29]=L,_[30]=I,_[31]=B,_[32]=Q,_[33]=n,_[34]=d,_[35]=s,_[36]=p,_[37]=j):j=_[37],z=j,_[38]!==o||_[39]!==F?(R=(0,i.jsx)(ok,{space:F,children:o}),_[38]=o,_[39]=F,_[40]=R):R=_[40],_[41]!==D||_[42]!==H||_[43]!==C||_[44]!==h||_[45]!==R?(E=(0,i.jsx)(nS,{"data-ui":"Menu",...h,onKeyDown:D,padding:C,ref:H,role:"menu",tabIndex:-1,children:R}),_[41]=D,_[42]=H,_[43]=C,_[44]=h,_[45]=R,_[46]=E):E=_[46],_[47]!==E||_[48]!==z?(S=(0,i.jsx)(nz.Provider,{value:z,children:E}),_[47]=E,_[48]=z,_[49]=S):S=_[49],S});n_.displayName="ForwardRef(Menu)";let nC=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_;let C=(0,a.c)(62),{__unstable_disableRestoreFocusOnClose:T,boundaryElement:F,button:M,id:O,menu:N,onClose:A,onOpen:L,placement:I,popoverScheme:B,portal:D,popover:Q,popoverRadius:P,preventOverflow:H}=e,V=void 0!==T&&T,W=void 0===D||D,[q,X]=(0,l.useState)(!1),[G,Y]=(0,l.useState)(null),[K,U]=(0,l.useState)(null);C[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],C[0]=r):r=C[0];let[J,Z]=(0,l.useState)(r),ee=(0,l.useRef)(q);C[1]!==L||C[2]!==q?(o=()=>{L&&q&&!ee.current&&L()},n=[L,q],C[1]=L,C[2]=q,C[3]=o,C[4]=n):(o=C[3],n=C[4]),(0,l.useEffect)(o,n),C[5]!==A||C[6]!==q?(d=()=>{A&&!q&&ee.current&&A()},s=[A,q],C[5]=A,C[6]=q,C[7]=d,C[8]=s):(d=C[7],s=C[8]),(0,l.useEffect)(d,s),C[9]!==q?(c=()=>{ee.current=q},u=[q],C[9]=q,C[10]=c,C[11]=u):(c=C[10],u=C[11]),(0,l.useEffect)(c,u),C[12]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{X(nT),Y(null)},C[12]=f):f=C[12];let et=f;C[13]!==q?(p=e=>{q&&e.preventDefault()},C[13]=q,C[14]=p):p=C[14];let er=p;C[15]===Symbol.for("react.memo_cache_sentinel")?(h=e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),X(!0),Y("first");return}if("ArrowUp"===e.key){e.preventDefault(),X(!0),Y("last");return}},C[15]=h):h=C[15];let eo=h;C[16]!==K||C[17]!==J?(m=e=>{let t=e.target;if(t instanceof Node&&!(K&&(t===K||K.contains(t)))){for(let e of J)if(t===e||e.contains(t))return;X(!1)}},C[16]=K,C[17]=J,C[18]=m):m=C[18];let en=m;C[19]!==K||C[20]!==V?(b=()=>{X(!1),!V&&K&&K.focus()},C[19]=K,C[20]=V,C[21]=b):b=C[21];let ei=b;C[22]!==J?(g=e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of J)if(e===t||e.contains(t))return;X(!1)}},C[22]=J,C[23]=g):g=C[23];let ea=g;C[24]!==K||C[25]!==V?(v=()=>{X(!1),!V&&K&&K.focus()},C[24]=K,C[25]=V,C[26]=v):v=C[26];let el=v;C[27]===Symbol.for("react.memo_cache_sentinel")?(x=e=>(Z(t=>t.concat([e])),()=>Z(t=>t.filter(t=>t!==e))),C[27]=x):x=C[27];let ed=x;C[28]!==K||C[29]!==ea||C[30]!==el||C[31]!==en||C[32]!==ei||C[33]!==O||C[34]!==N||C[35]!==G?(w=N&&(0,l.cloneElement)(N,{"aria-labelledby":O,onBlurCapture:ea,onClickOutside:en,onEscape:ei,onItemClick:el,originElement:K,registerElement:ed,shouldFocus:G}),C[28]=K,C[29]=ea,C[30]=el,C[31]=en,C[32]=ei,C[33]=O,C[34]=N,C[35]=G,C[36]=w):w=C[36];let es=w;return C[37]!==M||C[38]!==er||C[39]!==O||C[40]!==q?($=M&&(0,l.cloneElement)(M,{"data-ui":"MenuButton",id:O,onClick:et,onKeyDown:eo,onMouseDown:er,"aria-haspopup":!0,"aria-expanded":q,ref:U,selected:M.props.selected??q}),C[37]=M,C[38]=er,C[39]=O,C[40]=q,C[41]=$):$=C[41],y=$,C[42]!==K?(k=()=>K,z=[K],C[42]=K,C[43]=k,C[44]=z):(k=C[43],z=C[44]),(0,l.useImperativeHandle)(t,k,z),C[45]!==Q?(R=Q||{},C[45]=Q,C[46]=R):R=C[46],C[47]!==F||C[48]!==I||C[49]!==P||C[50]!==B||C[51]!==W||C[52]!==H||C[53]!==R?(E={boundaryElement:F,overflow:"auto",placement:I,portal:W,preventOverflow:H,radius:P,scheme:B,...R},C[47]=F,C[48]=I,C[49]=P,C[50]=B,C[51]=W,C[52]=H,C[53]=R,C[54]=E):E=C[54],j=E,C[55]!==y?(S=y||(0,i.jsx)(i.Fragment,{}),C[55]=y,C[56]=S):S=C[56],C[57]!==es||C[58]!==q||C[59]!==j||C[60]!==S?(_=(0,i.jsx)(oc,{"data-ui":"MenuButton__popover",...j,content:es,open:q,children:S}),C[57]=es,C[58]=q,C[59]=j,C[60]=S,C[61]=_):_=C[61],_});function nT(e){return!e}nC.displayName="ForwardRef(MenuButton)";let nF=s.zo.hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`;nF.displayName="MenuDivider";let nM=(0,s.zo)(tU)(tC,function(){return(0,s.iv)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=(0,n.aQ)(e.theme),i=r.selectable[t];return(0,s.iv)`
    ${t8(r,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t8(r,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t8(r,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t8(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(r,i.hovered)}
            }

            &:active {
              ${t8(r,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t8(r,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(r,i.pressed)}
        }

        &[data-selected] {
          ${t8(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(r,i.hovered)}
            }
            &:active {
              ${t8(r,i.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function nO(){let e=(0,l.useContext)(nz);if(!e)throw Error("useMenu(): missing context value");if(!rO(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function nN(e){let t,r,o,n,s,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_,T,F,M,O,N,A,L,I,B,D;let Q=(0,a.c)(77);Q[0]!==e?({as:u,children:r,fontSize:f,icon:t,onClick:o,padding:p,popover:n,radius:h,space:m,text:g,tone:b,...s}=e,Q[0]=e,Q[1]=t,Q[2]=r,Q[3]=o,Q[4]=n,Q[5]=s,Q[6]=u,Q[7]=f,Q[8]=p,Q[9]=h,Q[10]=m,Q[11]=b,Q[12]=g):(t=Q[1],r=Q[2],o=Q[3],n=Q[4],s=Q[5],u=Q[6],f=Q[7],p=Q[8],h=Q[9],m=Q[10],b=Q[11],g=Q[12]);let P=void 0===u?"button":u,H=void 0===f?1:f,V=void 0===p?3:p,W=void 0===h?2:h,q=void 0===m?3:m,X=void 0===b?"default":b,G=nO(),{scheme:Y}=eO(),{activeElement:K,mount:U,onClickOutside:J,onEscape:Z,onItemClick:ee,onItemMouseEnter:et,registerElement:er}=G,eo=et??G.onMouseEnter,[en,ei]=(0,l.useState)(null),[ea,el]=(0,l.useState)(!1),[ed,es]=(0,l.useState)(null),ec=!!K&&K===en,[eu,ef]=(0,l.useState)(!1);Q[13]!==eo?(v=e=>{ef(!1),eo(e),el(!0)},Q[13]=eo,Q[14]=v):v=Q[14];let ep=v;Q[15]!==en?(x=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),el(!1),requestAnimationFrame(()=>{en?.focus()}))},Q[15]=en,Q[16]=x):x=Q[16];let eh=x;Q[17]!==o?(w=e=>{o?.(e),es("first"),el(!0)},Q[17]=o,Q[18]=w):w=Q[18];let em=w;Q[19]!==ee?(y=()=>{el(!1),ee?.()},Q[19]=ee,Q[20]=y):y=Q[20];let eb=y;Q[21]===Symbol.for("react.memo_cache_sentinel")?($=()=>ef(!0),Q[21]=$):$=Q[21];let eg=$;Q[22]!==U||Q[23]!==en?(k=()=>U(en),z=[U,en],Q[22]=U,Q[23]=en,Q[24]=k,Q[25]=z):(k=Q[24],z=Q[25]),(0,l.useEffect)(k,z),Q[26]!==ec?(j=()=>{ec||el(!1)},R=[ec],Q[26]=ec,Q[27]=j,Q[28]=R):(j=Q[27],R=Q[28]),(0,l.useEffect)(j,R),Q[29]!==ea?(E=()=>{ea||ef(!1)},S=[ea],Q[29]=ea,Q[30]=E,Q[31]=S):(E=Q[30],S=Q[31]),(0,l.useEffect)(E,S),Q[32]!==ed?(_=()=>{if(!ed)return;let e=requestAnimationFrame(()=>es(null));return()=>cancelAnimationFrame(e)},T=[ed],Q[32]=ed,Q[33]=_,Q[34]=T):(_=Q[33],T=Q[34]),(0,l.useEffect)(_,T),Q[35]!==r||Q[36]!==eb||Q[37]!==eh||Q[38]!==J||Q[39]!==Z||Q[40]!==er||Q[41]!==ed?(F=(0,i.jsx)(n_,{onClickOutside:J,onEscape:Z,onItemClick:eb,onKeyDown:eh,onMouseEnter:eg,registerElement:er,shouldFocus:ed,children:r}),Q[35]=r,Q[36]=eb,Q[37]=eh,Q[38]=J,Q[39]=Z,Q[40]=er,Q[41]=ed,Q[42]=F):F=Q[42];let ev=F;Q[43]===Symbol.for("react.memo_cache_sentinel")?(M=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){es("first"),el(!0),ef(!0);return}},Q[43]=M):M=Q[43];let ex=M,ew="button"===P?eu:void 0,ey="button"!==P?eu:void 0,e$=!eu&&ec?"":void 0,ek=C(W),ez="button"===P?"button":void 0;return Q[44]!==t||Q[45]!==H?(O=t&&(0,i.jsxs)(t0,{size:H,children:[(0,l.isValidElement)(t)&&t,(0,d.isValidElementType)(t)&&(0,i.jsx)(t,{})]}),Q[44]=t,Q[45]=H,Q[46]=O):O=Q[46],Q[47]!==H||Q[48]!==g?(N=(0,i.jsx)(tU,{flex:1,children:(0,i.jsx)(t0,{size:H,textOverflow:"ellipsis",weight:"medium",children:g})}),Q[47]=H,Q[48]=g,Q[49]=N):N=Q[49],Q[50]===Symbol.for("react.memo_cache_sentinel")?(A=(0,i.jsx)(c.XCv,{}),Q[50]=A):A=Q[50],Q[51]!==H?(L=(0,i.jsx)(t0,{size:H,children:A}),Q[51]=H,Q[52]=L):L=Q[52],Q[53]!==V||Q[54]!==q||Q[55]!==O||Q[56]!==N||Q[57]!==L?(I=(0,i.jsxs)(t4,{gap:q,padding:V,children:[O,N,L]}),Q[53]=V,Q[54]=q,Q[55]=O,Q[56]=N,Q[57]=L,Q[58]=I):I=Q[58],Q[59]!==P||Q[60]!==em||Q[61]!==ep||Q[62]!==s||Q[63]!==Y||Q[64]!==ew||Q[65]!==ey||Q[66]!==e$||Q[67]!==ek||Q[68]!==ez||Q[69]!==I||Q[70]!==X?(B=(0,i.jsx)(nM,{"data-as":P,"data-ui":"MenuGroup",forwardedAs:P,...s,"aria-pressed":ew,"data-pressed":ey,"data-selected":e$,$radius:ek,$tone:X,$scheme:Y,onClick:em,onKeyDown:ex,onMouseEnter:ep,ref:ei,tabIndex:-1,type:ez,children:I}),Q[59]=P,Q[60]=em,Q[61]=ep,Q[62]=s,Q[63]=Y,Q[64]=ew,Q[65]=ey,Q[66]=e$,Q[67]=ek,Q[68]=ez,Q[69]=I,Q[70]=X,Q[71]=B):B=Q[71],Q[72]!==ev||Q[73]!==ea||Q[74]!==n||Q[75]!==B?(D=(0,i.jsx)(oc,{...n,content:ev,"data-ui":"MenuGroup__popover",open:ea,children:B}),Q[72]=ev,Q[73]=ea,Q[74]=n,Q[75]=B,Q[76]=D):D=Q[76],D}nM.displayName="Selectable",nN.displayName="MenuGroup";let nA=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E,S,_,T,F,M,O,N,A,L,I,B;let D=(0,a.c)(74);D[0]!==e?({as:y,children:n,disabled:s,fontSize:$,hotkeys:c,icon:r,iconRight:o,onClick:u,padding:k,paddingX:b,paddingY:g,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:z,selected:w,space:j,text:E,tone:R,...x}=e,D[0]=e,D[1]=r,D[2]=o,D[3]=n,D[4]=s,D[5]=c,D[6]=u,D[7]=f,D[8]=p,D[9]=h,D[10]=m,D[11]=b,D[12]=g,D[13]=v,D[14]=x,D[15]=w,D[16]=y,D[17]=$,D[18]=k,D[19]=z,D[20]=j,D[21]=R,D[22]=E):(r=D[1],o=D[2],n=D[3],s=D[4],c=D[5],u=D[6],f=D[7],p=D[8],h=D[9],m=D[10],b=D[11],g=D[12],v=D[13],x=D[14],w=D[15],y=D[16],$=D[17],k=D[18],z=D[19],j=D[20],R=D[21],E=D[22]);let Q=void 0===y?"button":y,P=void 0===$?1:$,H=void 0===k?3:k,V=void 0===z?2:z,W=void 0===j?3:j,q=void 0===R?"default":R,{scheme:X}=eO(),G=nO(),{activeElement:Y,mount:K,onItemClick:U,onItemMouseEnter:J,onItemMouseLeave:Z}=G,ee=J??G.onMouseEnter,et=Z??G.onMouseLeave,[er,eo]=(0,l.useState)(null),en=!!Y&&Y===er,ei=(0,l.useRef)(null);D[23]===Symbol.for("react.memo_cache_sentinel")?(S=()=>ei.current,D[23]=S):S=D[23],(0,l.useImperativeHandle)(t,S),D[24]!==K||D[25]!==er||D[26]!==w?(_=()=>K(er,w),T=[K,er,w],D[24]=K,D[25]=er,D[26]=w,D[27]=_,D[28]=T):(_=D[27],T=D[28]),(0,l.useEffect)(_,T),D[29]!==s||D[30]!==u||D[31]!==U?(F=e=>{s||(u&&u(e),U&&U())},D[29]=s,D[30]=u,D[31]=U,D[32]=F):F=D[32];let ea=F;D[33]!==H||D[34]!==f||D[35]!==p||D[36]!==h||D[37]!==m||D[38]!==b||D[39]!==g?(O={padding:H,paddingX:b,paddingY:g,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p},D[33]=H,D[34]=f,D[35]=p,D[36]=h,D[37]=m,D[38]=b,D[39]=g,D[40]=O):O=D[40],M=O;let el=C(P);D[41]!==el?(N=el.map(nL),D[41]=el,D[42]=N):N=D[42];let ed=N;D[43]===Symbol.for("react.memo_cache_sentinel")?(A=e=>{ei.current=e,eo(e)},D[43]=A):A=D[43];let es=A,ec="button"===Q&&v,eu="button"!==Q&&v?"":void 0,ef=en?"":void 0,ep=s?"":void 0,eh=C(V),em=C(0),eb=s?"default":q,eg="button"===Q?"button":void 0;return D[44]!==r||D[45]!==o||D[46]!==P||D[47]!==c||D[48]!==ed||D[49]!==M||D[50]!==W||D[51]!==E?(L=(r||E||o)&&(0,i.jsxs)(t4,{as:"span",gap:W,align:"center",...M,children:[r&&(0,i.jsxs)(t0,{size:P,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]}),E&&(0,i.jsx)(tU,{flex:1,children:(0,i.jsx)(t0,{size:P,textOverflow:"ellipsis",weight:"medium",children:E})}),c&&(0,i.jsx)(nk,{fontSize:ed,keys:c,style:{marginTop:-4,marginBottom:-4}}),o&&(0,i.jsxs)(t0,{size:P,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})]}),D[44]=r,D[45]=o,D[46]=P,D[47]=c,D[48]=ed,D[49]=M,D[50]=W,D[51]=E,D[52]=L):L=D[52],D[53]!==n||D[54]!==M?(I=n&&(0,i.jsx)(tU,{as:"span",...M,children:n}),D[53]=n,D[54]=M,D[55]=I):I=D[55],D[56]!==Q||D[57]!==s||D[58]!==ea||D[59]!==ee||D[60]!==et||D[61]!==x||D[62]!==X||D[63]!==ec||D[64]!==eu||D[65]!==ef||D[66]!==ep||D[67]!==eh||D[68]!==em||D[69]!==eb||D[70]!==eg||D[71]!==L||D[72]!==I?(B=(0,i.jsxs)(nM,{"data-ui":"MenuItem",...x,"aria-pressed":ec,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:Q,$radius:eh,$padding:em,$tone:eb,$scheme:X,disabled:s,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,role:"menuitem",tabIndex:-1,type:eg,children:[L,I]}),D[56]=Q,D[57]=s,D[58]=ea,D[59]=ee,D[60]=et,D[61]=x,D[62]=X,D[63]=ec,D[64]=eu,D[65]=ef,D[66]=ep,D[67]=eh,D[68]=em,D[69]=eb,D[70]=eg,D[71]=L,D[72]=I,D[73]=B):B=D[73],B});function nL(e){return e-1}nA.displayName="ForwardRef(MenuItem)";let nI=(0,s.F4)`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,nB=(0,s.iv)`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${nI};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,nD=(0,s.iv)`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?nB:(0,s.iv)`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,nQ=(0,s.zo)(tU)(tC,nD),nP=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(14);f[0]!==e?({animated:d,delay:r,radius:o,...n}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]);let p=void 0!==d&&d,[h,m]=(0,l.useState)(!r);f[5]!==r?(s=()=>{if(!r)return m(!0);let e=setTimeout(()=>{m(!0)},r);return()=>{clearTimeout(e)}},c=[r],f[5]=r,f[6]=s,f[7]=c):(s=f[6],c=f[7]),(0,l.useEffect)(s,c);let b=C(o);return f[8]!==p||f[9]!==t||f[10]!==n||f[11]!==b||f[12]!==h?(u=(0,i.jsx)(nQ,{...n,$animated:p,$radius:b,$visible:h,ref:t}),f[8]=p,f[9]=t,f[10]=n,f[11]=b,f[12]=h,f[13]=u):u=f[13],u});nP.displayName="ForwardRef(Skeleton)";let nH=(0,s.zo)(nP)(e=>{let{$size:t,$style:r}=e,{font:o,media:i}=(0,n.aQ)(e.theme),a=o[r];return j(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),nV=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nH,{...r,$size:d,ref:t,$style:"text"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n});nV.displayName="ForwardRef(TextSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nH,{...r,$size:d,ref:t,$style:"label"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(LabelSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nH,{...r,$size:d,ref:t,$style:"heading"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(HeadingSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nH,{...r,$size:d,ref:t,$style:"code"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(CodeSkeleton)";let nW=(0,s.zo)(rr)`
  max-width: 100%;
`,nq=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w;let y=(0,a.c)(30);y[0]!==e?({icon:o,id:n,focused:r,fontSize:p,label:d,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=c,y[7]=u,y[8]=f,y[9]=p,y[10]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],c=y[6],u=y[7],f=y[8],p=y[9],h=y[10]);let $=void 0===p?1:p,k=void 0===h?2:h,z=(0,l.useRef)(null),j=(0,l.useRef)(!1);y[11]===Symbol.for("react.memo_cache_sentinel")?(m=()=>z.current,y[11]=m):m=y[11],(0,l.useImperativeHandle)(t,m),y[12]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{j.current=!1},y[12]=b):b=y[12];let R=b;y[13]!==c?(g=e=>{j.current=!0,c&&c(e)},y[13]=c,y[14]=g):g=y[14];let E=g;y[15]!==r?(v=()=>{r&&!j.current&&(z.current&&z.current.focus(),j.current=!0)},x=[r],y[15]=r,y[16]=v,y[17]=x):(v=y[16],x=y[17]),(0,l.useEffect)(v,x);let S=f?"true":"false",_=f?0:-1;return y[18]!==$||y[19]!==E||y[20]!==o||y[21]!==n||y[22]!==d||y[23]!==s||y[24]!==k||y[25]!==u||y[26]!==f||y[27]!==S||y[28]!==_?(w=(0,i.jsx)(nW,{"data-ui":"Tab",...u,"aria-selected":S,fontSize:$,icon:o,id:n,mode:"bleed",onClick:s,onBlur:R,onFocus:E,padding:k,ref:z,role:"tab",selected:f,tabIndex:_,text:d,type:"button"}),y[18]=$,y[19]=E,y[20]=o,y[21]=n,y[22]=d,y[23]=s,y[24]=k,y[25]=u,y[26]=f,y[27]=S,y[28]=_,y[29]=w):w=y[29],w});nq.displayName="ForwardRef(Tab)";let nX=(0,s.zo)(rw)`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`,nG=(0,l.forwardRef)(function(e,t){let r,o,n,d,s;let c=(0,a.c)(15);c[0]!==e?({children:r,...o}=e,c[0]=e,c[1]=r,c[2]=o):(r=c[1],o=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==r||c[4]!==u){let e;let t=l.Children.toArray(r).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],n=t.map(e),c[3]=r,c[4]=u,c[5]=n}else n=c[5];let p=n,h=p.length;c[8]!==h?(d=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=d):d=c[9];let m=d;return c[10]!==m||c[11]!==t||c[12]!==o||c[13]!==p?(s=(0,i.jsx)(nX,{"data-ui":"TabList",...o,onKeyDown:m,ref:t,role:"tablist",children:p}),c[10]=m,c[11]=t,c[12]=o,c[13]=p,c[14]=s):s=c[14],s});nG.displayName="ForwardRef(TabList)";let nY=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(9);l[0]!==e?({flex:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=void 0===e.tabIndex?0:e.tabIndex;return l[3]!==r||l[4]!==e.children||l[5]!==t||l[6]!==o||l[7]!==d?(n=(0,i.jsx)(tU,{"data-ui":"TabPanel",...o,flex:r,ref:t,role:"tabpanel",tabIndex:d,children:e.children}),l[3]=r,l[4]=e.children,l[5]=t,l[6]=o,l[7]=d,l[8]=n):n=l[8],n});nY.displayName="ForwardRef(TabPanel)";let nK=(0,s.zo)(t4)`
  overflow-x: auto;
`,nU=(0,s.F4)`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,nJ={error:"critical",warning:"caution",success:"positive",info:"primary"},nZ={error:"critical",warning:"caution",success:"positive",info:"primary"},n0={error:"alert",warning:"alert",success:"alert",info:"alert"},n1=(0,s.zo)(rn)(function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.button.default[e.tone].enabled.bg;return e.$duration?(0,s.iv)`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${r};
      animation-name: ${nU};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${$}, 1);
      will-change: opacity;
    }
  `:(0,s.iv)`
      pointer-events: all;
      & > * {
        opacity: var(${$}, 1);
        will-change: opacity;
      }
    `});function n2(e){let t,r,o,n,l,d,s,u,f,p,h,m,b,g;let v=(0,a.c)(30);v[0]!==e?({closable:t,description:r,duration:o,onClose:n,radius:s,title:u,status:d,...l}=e,v[0]=e,v[1]=t,v[2]=r,v[3]=o,v[4]=n,v[5]=l,v[6]=d,v[7]=s,v[8]=u):(t=v[1],r=v[2],o=v[3],n=v[4],l=v[5],d=v[6],s=v[7],u=v[8]);let x=void 0===s?3:s,w=d?nJ[d]:"default",y=d?nZ[d]:"default",$=d?n0[d]:"status";return v[9]!==u?(f=u&&(0,i.jsx)(t0,{size:1,weight:"medium",children:u}),v[9]=u,v[10]=f):f=v[10],v[11]!==r?(p=r&&(0,i.jsx)(t0,{muted:!0,size:1,children:r}),v[11]=r,v[12]=p):p=v[12],v[13]!==f||v[14]!==p?(h=(0,i.jsx)(nK,{flex:1,padding:3,children:(0,i.jsxs)(ok,{space:3,children:[f,p]})}),v[13]=f,v[14]=p,v[15]=h):h=v[15],v[16]!==y||v[17]!==t||v[18]!==n?(m=t&&(0,i.jsx)(tU,{padding:1,children:(0,i.jsx)(rr,{as:"button",icon:c.Two,mode:"bleed",padding:2,tone:y,onClick:n,style:{verticalAlign:"top"}})}),v[16]=y,v[17]=t,v[18]=n,v[19]=m):m=v[19],v[20]!==h||v[21]!==m?(b=(0,i.jsxs)(t4,{align:"flex-start",children:[h,m]}),v[20]=h,v[21]=m,v[22]=b):b=v[22],v[23]!==w||v[24]!==o||v[25]!==x||v[26]!==l||v[27]!==$||v[28]!==b?(g=(0,i.jsx)(n1,{"data-ui":"Toast",role:$,...l,marginTop:3,radius:x,shadow:2,tone:w,$duration:o,children:b}),v[23]=w,v[24]=o,v[25]=x,v[26]=l,v[27]=$,v[28]=b,v[29]=g):g=v[29],g}function n3(){return!1}function n4(){return!0}n2.displayName="Toast";let n5=()=>()=>{},n6=eT("@sanity/ui/context/toast",null),n7=0,n8=(0,s.zo)(r2)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,n9=s.zo.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`;function ie(e){let t,r,o,n,d,s,c,u,f,p,b,g,v,x,w;let y=(0,a.c)(24),{children:k,padding:z,paddingX:j,paddingY:R,zOffset:E}=e,S=void 0===z?4:z;y[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],y[0]=t):t=y[0];let[_,C]=(0,l.useState)(t);y[1]===Symbol.for("react.memo_cache_sentinel")?(r={},y[1]=r):r=y[1];let T=(0,l.useRef)(r),F=(0,l.useSyncExternalStore)(n5,n4,n3),M=eP();return y[2]===Symbol.for("react.memo_cache_sentinel")?(n={opacity:0,[$]:0,y:32,scale:.25,willChange:"transform"},d=[0,1,1],y[2]=n,y[3]=d):(n=y[2],d=y[3]),y[4]===Symbol.for("react.memo_cache_sentinel")?(s={opacity:d,[$]:[0,0,1],y:0,scale:1},c=[1,1,0],y[4]=s,y[5]=c):(s=y[4],c=y[5]),y[6]===Symbol.for("react.memo_cache_sentinel")?(u=[1,0,0],y[6]=u):u=y[6],y[7]!==M?(f={initial:n,animate:s,exit:{opacity:c,[$]:u,scale:.5,transition:M?{duration:0}:{duration:.2}}},y[7]=M,y[8]=f):f=y[8],o=f,y[9]===Symbol.for("react.memo_cache_sentinel")?(b={version:0,push:e=>{let t=e=>(0,l.startTransition)(()=>C(e)),r=e.id||String(n7++),o=e.duration||5e3,n=()=>{let e=T.current[r]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===r);if(t>-1){let r=e.slice(0);return r.splice(t,1),r}return e}),void 0!==e&&(clearTimeout(e),delete T.current[r])};return t(t=>t.filter(e=>e.id!==r).concat([{dismiss:n,id:r,params:{...e,duration:o}}])),T.current[r]&&(clearTimeout(T.current[r].timeoutId),delete T.current[r]),T.current[r]={timeoutId:setTimeout(n,o)},r}},y[9]=b):b=y[9],p=b,y[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>()=>{for(let{timeoutId:e}of Object.values(T.current))clearTimeout(e);T.current={}},v=[],y[10]=g,y[11]=v):(g=y[10],v=y[11]),(0,l.useEffect)(g,v),y[12]!==F||y[13]!==S||y[14]!==j||y[15]!==R||y[16]!==M||y[17]!==_||y[18]!==o||y[19]!==E?(x=F&&(0,i.jsx)(n8,{"data-ui":"ToastProvider",zOffset:E,children:(0,i.jsx)(n9,{children:(0,i.jsx)(tU,{padding:S,paddingX:j,paddingY:R,children:(0,i.jsx)(m.M,{initial:!1,children:_.map(e=>{let{dismiss:t,id:r,params:n}=e;return(0,i.jsx)(h.E.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:o,transition:M?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(n2,{closable:n.closable,description:n.description,onClose:t,status:n.status,title:n.title,duration:n.duration})},r)})})})})}),y[12]=F,y[13]=S,y[14]=j,y[15]=R,y[16]=M,y[17]=_,y[18]=o,y[19]=E,y[20]=x):x=y[20],y[21]!==k||y[22]!==x?(w=(0,i.jsxs)(n6.Provider,{value:p,children:[k,x]}),y[21]=k,y[22]=x,y[23]=w):w=y[23],w}function it(){let e=(0,l.useContext)(n6);if(!e)throw Error("useToast(): missing context value");if(!rO(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function ir(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}ie.displayName="ToastProvider";let io=eT("@sanity/ui/context/tree",null);function ii(){let e=(0,l.useContext)(io);if(!e)throw Error("Tree: missing context value");return e}(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,m,b,g,v,x,w,y,$,k,z,j,R,E;let S=(0,a.c)(37);S[0]!==e?({children:r,space:d,onFocus:o,...n}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=n,S[4]=d):(r=S[1],o=S[2],n=S[3],d=S[4]);let _=void 0===d?1:d,C=(0,l.useRef)(null),[T,F]=(0,l.useState)(null),M=(0,l.useRef)(T);S[5]===Symbol.for("react.memo_cache_sentinel")?(c=[],S[5]=c):c=S[5],s=c,S[6]===Symbol.for("react.memo_cache_sentinel")?(u=[],S[6]=u):u=S[6];let[O,N]=(0,l.useState)(u);S[7]===Symbol.for("react.memo_cache_sentinel")?(f={},S[7]=f):f=S[7];let[A,L]=(0,l.useState)(f),I=(0,l.useRef)(A);S[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>C.current,S[8]=p):p=S[8],(0,l.useImperativeHandle)(t,p),S[9]!==T?(h=()=>{M.current=T},m=[T],S[9]=T,S[10]=h,S[11]=m):(h=S[10],m=S[11]),(0,l.useEffect)(h,m),S[12]!==A?(b=()=>{I.current=A},g=[A],S[12]=A,S[13]=b,S[14]=g):(b=S[13],g=S[14]),(0,l.useEffect)(b,g),S[15]===Symbol.for("react.memo_cache_sentinel")?(v=(e,t,r,o)=>(L(o=>({...o,[t]:{element:e,expanded:r}})),o&&F(e),()=>{L(e=>{let r={...e};return delete r[t],r})}),S[15]=v):v=S[15];let B=v;S[16]===Symbol.for("react.memo_cache_sentinel")?(x=(e,t)=>{L(r=>{let o=r[e];return o?{...r,[e]:{...o,expanded:t}}:r})},S[16]=x):x=S[16];let D=x,Q=T||O[0]||null;S[17]!==_||S[18]!==A||S[19]!==Q?(y={version:0,focusedElement:Q,level:0,path:s,registerItem:B,setExpanded:D,setFocusedElement:F,space:_,state:A},S[17]=_,S[18]=A,S[19]=Q,S[20]=y):y=S[20],w=y,S[21]!==O?($=e=>{if(M.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(o),i=t.length;for(let t=1;t<i;t+=1){if(!n[t])continue;let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(I.current,O,M.current);t&&(ir(t),F(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(0,o),i=n.length;for(let t=i-1;t>=0;t-=1){let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(I.current,O,M.current);t&&(ir(t),F(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=M.current.getAttribute("data-tree-key");if(!t)return;let r=I.current[t];if(!r)return;if(r.expanded)L(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!1}}:e});else{let e=t.split("/");e.pop();let r=e.join("/"),o=r&&I.current[r];o&&(o.element.focus(),F(o.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=M.current.getAttribute("data-tree-key");if(!t)return;I.current[t]?.expanded||L(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!0}}:e});return}}},S[21]=O,S[22]=$):$=S[22];let P=$;S[23]!==o?(k=e=>{F(e.target),o?.(e)},S[23]=o,S[24]=k):k=S[24];let H=k;return S[25]===Symbol.for("react.memo_cache_sentinel")?(z=()=>{C.current&&N(Array.from(C.current.querySelectorAll('[data-ui="TreeItem"]')))},S[25]=z):z=S[25],S[26]!==r?(j=[r],S[26]=r,S[27]=j):j=S[27],(0,l.useEffect)(z,j),S[28]!==r||S[29]!==H||S[30]!==P||S[31]!==n||S[32]!==_?(R=(0,i.jsx)(ok,{as:"ul","data-ui":"Tree",...n,onFocus:H,onKeyDown:P,ref:C,role:"tree",space:_,children:r}),S[28]=r,S[29]=H,S[30]=P,S[31]=n,S[32]=_,S[33]=R):R=S[33],S[34]!==w||S[35]!==R?(E=(0,i.jsx)(io.Provider,{value:w,children:R}),S[34]=w,S[35]=R,S[36]=E):E=S[36],E})).displayName="Memo(ForwardRef(Tree))";let ia=(0,l.memo)(function(e){let t,r,o,n;let l=(0,a.c)(9);l[0]!==e?({children:t,expanded:o,...r}=e,l[0]=e,l[1]=t,l[2]=r,l[3]=o):(t=l[1],r=l[2],o=l[3]);let d=void 0!==o&&o,s=ii(),c=!d;return l[4]!==t||l[5]!==r||l[6]!==c||l[7]!==s.space?(n=(0,i.jsx)(ok,{as:"ul","data-ui":"TreeGroup",...r,hidden:c,marginTop:s.space,role:"group",space:s.space,children:t}),l[4]=t,l[5]=r,l[6]=c,l[7]=s.space,l[8]=n):n=l[8],n}),il=(0,l.memo)(s.zo.li(function(){return(0,s.iv)`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.selectable.default;return(0,s.iv)`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t8(t,r.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t8(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t8(t,r.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t8(t,r.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t8(t,r.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t8(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t8(t,r.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t8(t,r.selected)}
        }
      }
    }
  `})),id=(0,s.zo)(tU).attrs({forwardedAs:"a"})(function(e){let{$level:t}=e,{space:r}=(0,n.aQ)(e.theme);return(0,s.iv)`
    padding-left: ${z(r[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),is=(0,s.zo)(t0)`
  & > svg {
    transition: transform 100ms;
  }
`;(0,l.memo)(function(e){let{children:t,expanded:r=!1,fontSize:o=1,href:n,icon:a,id:d,linkAs:s,muted:u,onClick:f,padding:p=2,selected:h=!1,space:m=2,text:b,weight:g,...v}=e,x=(0,l.useRef)(null),w=(0,l.useRef)(null),y=ii(),{path:$,registerItem:k,setExpanded:z,setFocusedElement:j}=y,R=(0,l.useId)(),E=d||R,S=(0,l.useMemo)(()=>$.concat([E||""]),[E,$]),_=S.join("/"),C=y.state[_],T=y.focusedElement===x.current,F=C?.expanded===void 0?r:C?.expanded||!1,M=y.focusedElement&&y.focusedElement===x.current?0:-1,O=(0,l.useMemo)(()=>({...y,level:y.level+1,path:S}),[S,y]),N=(0,l.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),z(_,!F),j(x.current))},[F,_,f,z,j]),A=(0,l.useCallback)(e=>{T&&"Enter"===e.key&&(w.current||x.current)?.click()},[T]);(0,l.useEffect)(()=>{if(x.current)return k(x.current,S.join("/"),F,h)},[F,S,k,h]);let L=(0,i.jsxs)(t4,{padding:p,children:[(0,i.jsxs)(tU,{marginRight:m,style:{visibility:a||t?"visible":"hidden",pointerEvents:"none"},children:[a&&(0,i.jsx)(t0,{muted:u,size:o,weight:g,children:(0,i.jsx)(a,{})}),!a&&(0,i.jsx)(is,{muted:u,size:o,weight:g,children:(0,i.jsx)(c.tgp,{style:{transform:F?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tU,{flex:1,children:(0,i.jsx)(t0,{muted:u,size:o,textOverflow:"ellipsis",weight:g,children:b})})]});return n?(0,i.jsxs)(il,{"data-selected":h?"":void 0,"data-tree-id":E,"data-tree-key":_,"data-ui":"TreeItem",...v,onClick:N,ref:x,role:"none",children:[(0,i.jsx)(id,{$level:y.level,"aria-expanded":F,as:s,"data-ui":"TreeItem__box",href:n,ref:w,role:"treeitem",tabIndex:M,children:L}),(0,i.jsx)(io.Provider,{value:O,children:t&&(0,i.jsx)(ia,{hidden:!F,children:t})})]}):(0,i.jsxs)(il,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":E,"data-tree-key":_,...v,"aria-expanded":F,onClick:N,onKeyDown:A,ref:x,role:"treeitem",tabIndex:M,children:[(0,i.jsx)(id,{$level:y.level,as:"div","data-ui":"TreeItem__box",children:L}),(0,i.jsx)(io.Provider,{value:O,children:t&&(0,i.jsx)(ia,{expanded:F,children:t})})]})}).displayName="Memo(TreeItem)"}}]);