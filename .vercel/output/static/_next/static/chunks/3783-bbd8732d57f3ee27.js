(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3783],{4196:function(e,t,n){"use strict";n.r(t),n.d(t,{container:function(){return a},copy:function(){return s},links:function(){return i},note:function(){return r},root:function(){return l}}),n(92975),n(4364);var a="_197gpcb1",s="_197gpcb4",i="_197gpcb2",r="_197gpcb3",l="_197gpcb0"},21515:function(e,t,n){"use strict";n.r(t),n.d(t,{gradient:function(){return a}}),n(92975),n(11740);var a="fa4v680"},54467:function(e,t,n){"use strict";n.r(t),n.d(t,{root:function(){return a}}),n(5590);var a="rd7gei0"},81074:function(e,t,n){"use strict";n.d(t,{default:function(){return q}});var a=n(30719),s=n(53376),i=n(27774),r=n(85450),l=n(46227),o=n(38605),c=n(92276),d=n(31223),h=n(4493),u=n(17828),m=n(85643),x=n(65963),p=n(89),j=n(43630),f=n(70264),g=n(51842),v=n(9620),w=n(68126),y=n(66210),_=n(52549),k=n(30337),N=n(49619),b=n(5455),Z=n(9419),C=n(52977),P=n(64014),S=n(24133),T=n(32788);n(92975),n(73734);var z=n(99903),E=n(71562);let L={system:"System",dark:"Dark",light:"Light"},I=e=>{let{children:t,value:n,onSelect:s}=e,i=(0,h.U8)(e=>e.value);return(0,a.jsxs)(h.mY.Item,{onSelect:s,value:n,children:[(0,a.jsx)("span",{className:"content",children:t}),i===n&&(0,a.jsx)(u.X,{features:m.H,children:(0,a.jsx)(x.E.span,{layoutId:"highlight",className:"highlight",transition:{duration:.2}})})]})},U=[{id:1,href:"/",text:"Home",icon:(0,a.jsx)(j.Z,{size:20})},{id:2,href:"/about",text:"About",icon:(0,a.jsx)(f.Z,{size:20})},{id:3,href:"/blog",text:"Blog",icon:(0,a.jsx)(g.Z,{size:20})},{id:4,href:"/work",text:"Work",icon:(0,a.jsx)(v.Z,{size:20})},{id:5,href:"/projects",text:"Projects",icon:(0,a.jsx)(S.SgI,{size:20})},{id:6,href:"/talks",text:"Talks",icon:(0,a.jsx)(w.Z,{size:20})}],Y=[{id:1,text:"Twitter",icon:(0,a.jsx)(y.Z,{size:20}),href:"https://twitter.com/LukeH_1999"},{id:2,text:"GitHub",icon:(0,a.jsx)(_.Z,{size:20}),href:"https://github.com/luke-h1"},{id:3,text:"LinkedIn",icon:(0,a.jsx)(k.Z,{size:20}),href:"https://www.linkedin.com/in/lukehowsam"}],F=[{id:1,text:"System",value:"system",icon:(0,a.jsx)(N.Z,{size:20})},{id:2,text:"Light",value:"light",icon:(0,a.jsx)(b.Z,{size:20})},{id:3,text:"Dark",value:"dark",icon:(0,a.jsx)(Z.Z,{size:20})}],A=e=>(0,a.jsxs)(I,{onSelect:e.onSelect,value:e.value,children:[e.icon,e.text]},e.id);var H=()=>{let e=(0,r.useRouter)(),[t,n]=(0,l.useState)(!1),s="CommandMenu",{setTheme:i}=(0,p.F)(),{setToast:o}=(0,d.pm)();(0,l.useEffect)(()=>{let e=(0,T.Fj)(window,{"$mod+KeyK":()=>{n(e=>!e)}});return()=>{e()}},[]);let c=e=>{i(e),n(!1),o({id:"toast-theme",content:"Theme set to ".concat(L[e])})};return(0,a.jsxs)("header",{className:"_7y6jpf0",children:[(0,a.jsxs)("button",{className:"_7y6jpf3",onClick:()=>n(!0),"data-testid":"cmdk-icon",type:"button",children:[(0,a.jsx)(E.Z,{children:"Open command menu"}),(0,a.jsx)("span",{className:"_7y6jpf4"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})})]}),(0,a.jsxs)(h.mY.Dialog,{open:t,onOpenChange:n,label:"Global Command Menu","aria-label":"Global Command Menu",children:[(0,a.jsxs)("div",{"cmdk-header":"",children:[(0,a.jsx)(h.mY.Input,{placeholder:"Type a command or search..."}),(0,a.jsx)("button",{"aria-label":"Close command menu","cmdk-header-esc":"",onClick:()=>n(!1),tabIndex:-1,type:"button",children:"ESC"})]}),(0,a.jsxs)(h.mY.List,{role:"listbox",children:[(0,a.jsx)(h.mY.Empty,{children:"No results found."}),(0,a.jsx)(h.mY.Group,{heading:"Navigation","aria-label":"Navigation","data-testid":"".concat(s,"-navigation"),children:U&&U.map(t=>(0,a.jsxs)(I,{onSelect:()=>{e.push(t.href),n(!1)},value:t.text.toLowerCase(),children:[t.icon,(0,a.jsx)("span",{children:t.text})]},t.id))}),(0,a.jsx)(h.mY.Group,{heading:"Social","aria-label":"Social","data-testid":"".concat(s,"-social"),children:Y&&Y.map(e=>(0,a.jsxs)(I,{value:e.text.toLowerCase(),children:[e.icon,(0,a.jsx)(z.Z,{href:e.href,children:(0,a.jsx)("span",{children:e.text})})]},e.id))}),(0,a.jsx)(h.mY.Group,{heading:"Appearance","aria-label":"Apperance","data-testid":"".concat(s,"-apperance"),children:F&&F.map(e=>A({...e,onSelect:c}))}),(0,a.jsxs)(h.mY.Group,{heading:"Commands","aria-label":"Commands","data-testid":"".concat(s,"-commands"),children:[(0,a.jsxs)(I,{onSelect:()=>{navigator.clipboard.writeText(window.location.href),n(!1),o({id:"toast-copy-url",content:"URL copied to clipboard"})},value:"copy",children:[(0,a.jsx)(C.Z,{}),(0,a.jsx)("span",{children:"Copy current URL"})]}),(0,a.jsxs)(I,{value:"status",children:[(0,a.jsx)(P.Z,{}),(0,a.jsx)(z.Z,{href:"https://status.lhowsam.com",children:(0,a.jsx)("span",{children:"View status page"})})]})]})]})]})]})},O=n(73587),D=n(31824),M=n.n(D),R=n(75097),B=n(44189),G=n(21515);function W(e){let{as:t,fontFamily:n,fontSize:a="md",fontWeight:s="normal",color:i="foreground",gradient:r=!1,maxWidth:o="prose",testId:c,...d}=e;return(0,l.createElement)(t||"p",{className:(0,B.Z)((0,R.sprinkles)({maxWidth:o,fontFamily:n,fontSize:a,fontWeight:s,color:i}),{[G.gradient]:r,[M().className]:"serif"===n}),"data-testid":c,...d})}n(76007);var K="_1wa8ck68";let V=[{id:1,text:"Home",href:"/"},{id:2,text:"About",href:"/about"},{id:3,text:"Blog",href:"/blog"},{id:4,text:"Work",href:"/work"},{id:5,text:"Projects",href:"/projects"}];function q(){let[e,t]=(0,l.useState)(!1),n=(0,r.usePathname)();return(0,a.jsxs)("header",{className:"_1wa8ck60",children:[(0,a.jsx)(z.Z,{href:"/",children:(0,a.jsxs)("div",{className:"_1wa8ck61",children:[(0,a.jsx)(W,{fontWeight:"bold",children:"Luke Howsam"}),(0,a.jsx)(W,{color:"foregroundNeutral",children:"Software Engineer"})]})}),(0,a.jsx)("nav",{className:"_1wa8ck62",children:V.map(e=>(0,a.jsx)(W,{color:"foregroundNeutral",className:n===e.href?K:"",children:(0,a.jsx)(z.Z,{href:e.href,"aria-current":n===e.href?"page":void 0,children:e.text})},e.href))}),(0,a.jsx)("div",{className:"_1wa8ck63",children:(0,a.jsx)(H,{})}),(0,a.jsxs)(s.fC,{open:e,onOpenChange:t,children:[(0,a.jsx)(s.xz,{asChild:!0,children:(0,a.jsxs)("button",{className:"_1wa8ck64",type:"button",children:[(0,a.jsx)(i.f,{children:"Open menu"}),(0,a.jsx)(o.Z,{})]})}),(0,a.jsxs)(s.h_,{children:[(0,a.jsx)(s.aV,{className:"_1wa8ck65"}),(0,a.jsxs)(s.VY,{className:"_1wa8ck66","aria-describedby":void 0,children:[(0,a.jsx)(i.f,{children:(0,a.jsx)(s.Dx,{children:"Navigation"})}),(0,a.jsx)(W,{fontWeight:"bold",children:"Navigation"}),(0,a.jsxs)("nav",{children:[V.map(e=>(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(O.Z,{height:"xs"}),(0,a.jsx)(W,{color:"foregroundNeutral",className:n===e.href?K:"",children:(0,a.jsx)(z.Z,{href:e.href,"aria-current":n===e.href?"page":void 0,children:e.text})})]},e.href)),(0,a.jsx)(H,{})]}),(0,a.jsx)(O.Z,{height:"xl"}),(0,a.jsx)(s.x8,{asChild:!0,children:(0,a.jsxs)("button",{className:"_1wa8ck67",type:"button",children:[(0,a.jsx)(i.f,{children:"Close menu"}),(0,a.jsx)(c.Z,{})]})})]})]})]})]})}},99903:function(e,t,n){"use strict";var a=n(30719),s=n(44189),i=n(81230),r=n(68735);t.Z=e=>{let{children:t,variant:n="neutral",underlined:l=!1,className:o,id:c,href:d,css:h,testId:u,...m}=e,x="string"==typeof d&&d.startsWith("http"),p="string"==typeof d&&d.startsWith("#");return x||p?(0,a.jsx)("a",{"data-testid":u,id:c,rel:x?"noopener noreferrer":void 0,target:x?"_blank":void 0,className:(0,s.Z)(r.variants[n],o,{[r.underlined]:l}),style:{...h},...m,href:d,children:t}):(0,a.jsx)(i.default,{"data-testid":u,id:c,href:d,className:(0,s.Z)(r.variants[n],o),style:{...h},...m,children:t})}},92291:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var a=n(30719),s=n(28070);let i=s.env.SPOTIFY_CLIENT_ID,r=s.env.SPOTIFY_CLIENT_SECRET,l=s.env.SPOTIFY_REFRESH_TOKEN,o=btoa("".concat(i,":").concat(r)),c=()=>"",d={getAccessToken:async()=>(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic ".concat(o),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:l})})).json(),async getNowPlaying(){let{access_token:e}=await d.getAccessToken();return fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer ".concat(e)}})},async getTopTracks(){let{access_token:e}=await d.getAccessToken();return fetch("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(e)}})},nextNowPlaying:async()=>(await fetch("".concat(window.location.origin,"/api/now-playing"))).json(),async lambdaNowPlaying(){let e=c();return(await fetch("".concat("https://nowplaying-staging.lhowsam.com","/api/now-playing"),{headers:{"Content-Type":"application/json","x-consumer":e}})).json()}},h=(0,n(47895).no)("spotifyService",{nowPlaying:{queryFn:()=>d.lambdaNowPlaying(),queryKey:["nowPlaying"]}});var u=n(23975),m=n(2342);n(92975),n(89382);var x="_1f7kia3a",p="_1f7kia38 _ 1 f 7 k i a 3",j=n(90477),f=n.n(j);let g=()=>(0,a.jsxs)("div",{className:f().icon,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]});function v(){let{data:e,isLoading:t,error:n}=(0,u.a)({...h.nowPlaying,refetchInterval:5e3});return n||t?null:(0,a.jsxs)("div",{className:"_1f7kia36",children:[(null==e?void 0:e.isPlaying)&&e.albumImageUrl&&(0,a.jsx)("a",{href:e.songUrl,target:"_blank",rel:"noopener noreferrer",className:p,children:(0,a.jsx)("p",{className:"_1f7kia3e",children:(0,a.jsx)(m.default,{src:e.albumImageUrl,blurDataURL:e.albumImageUrl,placeholder:"blur",alt:"Album cover",layout:"intrinsic",width:65,height:65,style:{borderRadius:"7px"}})})}),(null==e?void 0:e.isPlaying)&&(null==e?void 0:e.songUrl)?(0,a.jsx)("a",{href:e.songUrl,target:"_blank",rel:"noopener noreferrer",className:p,children:e.title}):(0,a.jsx)("p",{className:"_1f7kia39 _ 1 f 7 k i a 3",children:"Not Playing"}),(0,a.jsx)("span",{className:x,children:" – "}),(0,a.jsx)("p",{className:"_1f7kia3b",children:(null==e?void 0:e.isPlaying)?null==e?void 0:e.artist:"Spotify"}),(null==e?void 0:e.isPlaying)?(0,a.jsx)(g,{}):(0,a.jsx)("svg",{className:"_1f7kia34",viewBox:"0 0 168 168","data-testid":"spotify-logo",children:(0,a.jsx)("path",{fill:"#1ED760",d:"M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"})})," ",(0,a.jsx)("span",{className:x})]})}},73587:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(75097),s=n(44189),i=n(46227);function r(e){let{height:t,width:n}=e;return(0,i.createElement)("span",{"aria-hidden":!0,className:(0,s.Z)((0,a.sprinkles)({display:n?"inline-block":"block",width:n,height:t}))})}},88014:function(e,t,n){"use strict";n.d(t,{default:function(){return m}});var a=n(30719),s=n(71562),i=n(46227);let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],[n,a]=(0,i.useState)(t);return(0,i.useEffect)(()=>{if(a(!0),e)return e()},[]),{isMounted:n,onMounted:(e,t)=>n?e:t}};var l=n(89),o=n(49619),c=n(5455),d=n(9419),h=n(9620);n(92975),n(53171);let u={system:(0,a.jsx)(o.Z,{width:"0.9em"}),light:(0,a.jsx)(c.Z,{width:"0.9em"}),dark:(0,a.jsx)(d.Z,{width:"0.9em"})};var m=()=>{let{isMounted:e}=r(),{theme:t,setTheme:n}=(0,l.F)();return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)("label",{htmlFor:"theme-select",children:"Select theme"})}),(0,a.jsxs)("div",{className:"wmdp110",children:[(0,a.jsx)("span",{className:"wmdp111",children:u[t]}),(0,a.jsx)(s.Z,{children:(0,a.jsx)("label",{htmlFor:"theme-select",children:"Theme"})}),(0,a.jsxs)("select",{value:t,onChange:e=>n(e.target.value),className:"wmdp112",id:"theme-select",children:[(0,a.jsx)("option",{value:"system",id:"theme-system",children:"System"}),(0,a.jsx)("option",{value:"light",id:"theme-light",children:"Light"}),(0,a.jsx)("option",{value:"dark",id:"theme-dark",children:"Dark"})]}),(0,a.jsx)("span",{className:"wmdp113","data-testid":"ThemeSelect-".concat(t),children:(0,a.jsx)(h.Z,{width:"0.9em",style:{transform:"rotate(90deg)"}})})]})]}):null}},79829:function(e,t,n){"use strict";n.d(t,{Toaster:function(){return u}});var a=n(30719),s=n(31223),i=n(69331),r=n(98601),l=n(17828),o=n(85643),c=n(36312),d=n(65963),h=n(92276);n(92975),n(14376);let u=()=>{let{toasts:e,removeToast:t}=(0,s.pm)(),n=(0,r.J)();return(0,a.jsxs)(i.zt,{children:[(0,a.jsx)(l.X,{features:o.H,children:(0,a.jsx)(c.M,{children:e&&e.map(e=>(0,a.jsx)(i.fC,{className:"_1j7mmtu1",asChild:!0,forceMount:!0,open:!0,onOpenChange:n=>{!1===n&&t(e.id)},duration:6e3,children:(0,a.jsxs)(d.E.div,{layout:!n&&"position",initial:{opacity:0,y:n?0:50},animate:{opacity:1,y:0},exit:{opacity:0,scale:n?1:.75,transition:{duration:.2}},transition:{ease:"easeInOut",duration:.2},drag:"x",dragConstraints:{left:0,right:300},children:[e.title&&(0,a.jsx)(i.Dx,{className:"_1j7mmtu2",children:e.title}),(0,a.jsx)(i.dk,{className:"_1j7mmtu3",children:e.content}),(0,a.jsxs)(i.x8,{"aria-label":"Close",className:"_1j7mmtu4",children:[(0,a.jsx)("span",{className:"_1j7mmtu5"}),(0,a.jsx)("span",{"aria-hidden":!0,className:"_1j7mmtu6",children:(0,a.jsx)(h.Z,{width:16})})]})]})},e.id))})}),(0,a.jsx)(i.l_,{className:"_1j7mmtu0"})]})}},71562:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(46227),s=n(54467);function i(e){let{as:t,...n}=e;return(0,a.createElement)(t||"span",{className:s.root,id:"visually-hidden",...n})}},31223:function(e,t,n){"use strict";n.d(t,{ZP:function(){return o},pm:function(){return c}});var a=n(30719),s=n(52925),i=n.n(s),r=n(46227);let l=(0,r.createContext)({removeToast:i(),setToast:i(),toasts:[]});function o(e){let{children:t}=e,[n,s]=(0,r.useState)([]),i=(0,r.useCallback)(e=>{s(t=>[...t,e])},[s]),o=(0,r.useCallback)(e=>{s(t=>t.filter(t=>t.id!==e))},[]),c=(0,r.useMemo)(()=>({toasts:n,setToast:i,removeToast:o}),[n,o]);return(0,a.jsx)(l.Provider,{value:c,children:t})}function c(){let e=(0,r.useContext)(l);if(!e)throw Error("useToast must be used within a ToastContextProvider");return e}},90477:function(e){e.exports={wrapper:"NowPlaying_wrapper__79g48",widget:"NowPlaying_widget__m2Zoz",cover:"NowPlaying_cover__unUlc",widgetHidden:"NowPlaying_widgetHidden__0Lhie NowPlaying_widget__m2Zoz",icon:"NowPlaying_icon__zgUEm",bounce:"NowPlaying_bounce__gJ2wj"}}}]);