var l={},y=(p,_,d)=>(l.__chunk_24585=(h,r,s)=>{"use strict";s.d(r,{Z:()=>o});var t=s(47275),e=s(19901);let a=(0,t.Z)`
*[_type == "post"] {
  slug {
    current
  },
}
`,g=(0,t.Z)`
*[ _type == "post"] | order(publishedAt desc) [0..2] {
  _createdAt,
  _id,
    image {
      ...,
    },
  title,
  intro,  
  publishedAt,
  image {
    alt,
    asset {
      _ref
    },
  },
  tags[] -> {
    title,
    slug {
      ...,
      
    }
  },
  slug {
    current
  },
}
`,c=(0,t.Z)`
  *[ _type == "post"] | order(publishedAt desc) {
    ...,
    image {
      alt,
      asset {
      _ref
     },
    },
    tags[]-> {
      title,
      slug
   },
    slug {
      current
    },
  }
`,u=(0,t.Z)`
*[ _type == "post" && slug.current == $slug][0] {
  title,
  intro,  
  publishedAt,
  content,
  image {
    alt,
    asset {
    ...,
   },
 },
  tags[]-> {
   title,
   slug
  },
}
`,o={getSlugs:async()=>(0,e.R)().fetch(a),getPost:async(i,n=!1)=>(0,e.R)(n).fetch(u,{slug:i}),getAllPosts:async()=>(0,e.R)().fetch(c),getRecentPosts:async()=>(0,e.R)().fetch(g)}},l);export{y as __getNamedExports};
