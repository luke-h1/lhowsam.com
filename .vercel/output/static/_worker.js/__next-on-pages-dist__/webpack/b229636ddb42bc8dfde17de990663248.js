var E={},L=(z,A,D)=>(E.__chunk_30368=(C,P,f)=>{"use strict";f.d(P,{Z:()=>g});var a=f(19901),s=f(47275);let m=(0,s.Z)`
*[_type == "project"] {
  slug {
    current
  }
}
`,k=(0,s.Z)`
  *[ _type == "project" && title in ["Now playing lambda", "My website", "Storify", "Infra", "Uber cost calculator"]] {
    ...,
    slug {
      current
    },
    tags[] -> {
    title,
    slug
  },  
}
`,p=(0,s.Z)`
*[ _type == "project" && title in ["Now playing lambda", "My website", "Storify"]]  {
  ...,
  tags[] -> {
    title,
    slug
  },  
}
`,d=(0,s.Z)`
*[ _type == "project" && slug.current == $slug][0] {
  ...,
  tags[] -> {
    title,
    slug
  },
}
`,g={getAllProjects:async()=>(0,a.R)().fetch(k),getProject:async(v,_=!1)=>(0,a.R)(_).fetch(d,{slug:v}),getRecentProjects:async()=>(0,a.R)().fetch(p),getSlugs:async()=>(0,a.R)().fetch(m)}},E.__chunk_30542=(C,P,f)=>{f.d(P,{uOf:()=>M,XKb:()=>R});var a=f(20326),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=a.createContext&&a.createContext(s),k=["attr","size","title"];function p(){return(p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?d(Object(e),!0).forEach(function(r){var o,u;o=r,u=e[r],(o=function(h){var y=function(l,c){if(typeof l!="object"||!l)return l;var b=l[Symbol.toPrimitive];if(b!==void 0){var i=b.call(l,c||"default");if(typeof i!="object")return i;throw TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(l)}(h,"string");return typeof y=="symbol"?y:y+""}(o))in t?Object.defineProperty(t,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[o]=u}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function v(t){return n=>a.createElement(_,p({attr:g({},t.attr)},n),function e(r){return r&&r.map((o,u)=>a.createElement(o.tag,g({key:u},o.attr),e(o.child)))}(t.child))}function _(t){var n=e=>{var r,{attr:o,size:u,title:h}=t,y=function(c,b){if(c==null)return{};var i,O,x=function(j,Z){if(j==null)return{};var S={};for(var w in j)if(Object.prototype.hasOwnProperty.call(j,w)){if(Z.indexOf(w)>=0)continue;S[w]=j[w]}return S}(c,b);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(c);for(O=0;O<N.length;O++)i=N[O],!(b.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(c,i)&&(x[i]=c[i])}return x}(t,k),l=u||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,y,{className:r,style:g(g({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),h&&a.createElement("title",null,h),t.children)};return m!==void 0?a.createElement(m.Consumer,null,e=>n(e)):n(s)}function M(t){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(t)}function R(t){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(t)}},E);export{L as __getNamedExports};
