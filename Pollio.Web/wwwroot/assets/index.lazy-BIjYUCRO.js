import{h as l,e as u,j as s}from"./index-xsNj2YMF.js";import{u as c,a as p,L as d,P as m}from"./useInvalidatePolls-9SmwlQfA.js";import{M as x}from"./card-zAWY2PEd.js";function f(){const{user:e}=l(),{data:t,error:n,isPending:i}=c({queryKey:["polls",e==null?void 0:e.id],queryFn:async()=>{const o=await(await fetch("/api/poll")).json();return!o||!o.length?[]:o.map(a=>(a.options=a.options.map(r=>!e||!e.id?r:r.allVotes.includes(e.id)?{...r,selected:!0}:r),a))}});return{polls:t,error:n,isPending:i}}const F=u("/")({component:h});function h(){const{polls:e,isPending:t,error:n}=f();return p(),s.jsx(x,{children:t?s.jsx(d,{}):n?s.jsxs("p",{children:["Error: ",n.message]}):e&&e.length>0?s.jsx(m,{polls:e}):s.jsx("p",{className:"text-center text-xl",children:"No Polls Found."})})}export{F as Route};