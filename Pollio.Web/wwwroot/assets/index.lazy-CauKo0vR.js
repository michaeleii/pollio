import{h as l,e as u,j as s}from"./index-YZ1IrW_h.js";import{u as c,a as p,L as d,P as m}from"./useInvalidatePolls-CJ_bKH7-.js";import{M as x}from"./card-Cnfbudv5.js";function f(){const{user:e}=l(),{data:t,error:r,isPending:i}=c({queryKey:["polls",e==null?void 0:e.id],queryFn:async()=>{const o=await(await fetch("/api/poll")).json();return!o||!o.length?[]:o.map(a=>(a.options=a.options.map(n=>!e||!e.id?n:n.allVotes.includes(e.id)?{...n,selected:!0}:n),a))}});return{polls:t,error:r,isPending:i}}const L=u("/")({component:h});function h(){const{polls:e,isPending:t,error:r}=f();return p(),s.jsx(x,{children:t?s.jsx(d,{}):r?s.jsxs("p",{children:["Error: ",r.message]}):e&&e.length>0?s.jsx(m,{polls:e}):s.jsx("p",{className:"text-center text-xl",children:"No polls were found."})})}export{L as Route};
