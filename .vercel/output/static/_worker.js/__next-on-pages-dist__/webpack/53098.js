var s={},h=(a,k,p)=>(s.__chunk_53098=(y,c,e)=>{"use strict";e.d(c,{Z:()=>u});var t=e(19901),r=e(47275);let l=(0,r.Z)`
*[_type == "work"] {
  slug {
    current
  }
}
`,o=(0,r.Z)`
*[_type == "work"] {
  ...,
}
`,g=(0,r.Z)`
*[ _type == "work" && slug.current == $slug][0] {
  ...,
  slug {
    current
  }
}
`,u={getWorks:async()=>(0,t.R)().fetch(o),getWork:async(n,_=!1)=>(0,t.R)(_).fetch(g,{slug:n}),getSlugs:async()=>(0,t.R)().fetch(l)}},s);export{h as __getNamedExports};
